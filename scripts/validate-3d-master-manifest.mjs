import fs from "node:fs";
import path from "node:path";
const root=process.cwd();
const manifest=JSON.parse(fs.readFileSync(path.join(root,"3d/master-manifest.json"),"utf8"));
if(manifest.sourceOfTruth!=="svg/flat") throw new Error("3D source of truth must be svg/flat");
if(manifest.pipeline!=="canonical-flat-svg -> registered-paint-layers -> extruded-volume -> shared-camera-render") throw new Error("Unexpected 2D -> 3D pipeline");
if(manifest.camera?.projection!=="perspective" || manifest.camera?.fov!==30) throw new Error("Unexpected shared 3D camera profile");
if(manifest.lighting?.shared!==true) throw new Error("3D lighting must be shared");
const seen=new Set();
for(const master of manifest.masters ?? []){
  if(seen.has(master.id)) throw new Error("Duplicate 3D master: "+master.id);
  seen.add(master.id);
  const file=path.join(root,master.flatAsset||"");
  if(!master.flatAsset || !fs.existsSync(file)) throw new Error("Missing flat source for "+master.id);
  if(!(master.depth>0 && master.depth<=1)) throw new Error("Invalid depth for "+master.id);
  if(typeof master.tilt!=="number" || typeof master.lift!=="number") throw new Error("Missing optical calibration for "+master.id);
  const svg=fs.readFileSync(file,"utf8");
  if(svg.match(/viewBox="([^"]+)"/)?.[1]!=="0 0 80 80") throw new Error(master.id+" must use canonical 80x80 viewBox");
  const pathCount=(svg.match(/<path\\b/g)||[]).length+(svg.match(/<circle\\b/g)||[]).length+(svg.match(/<ellipse\\b/g)||[]).length;
  if(master.sourcePathCount!==pathCount) throw new Error(master.id+" source path count mismatch: manifest="+master.sourcePathCount+" actual="+pathCount);
}
if(seen.size!==5) throw new Error("Expected exactly 5 canonical 3D masters");
console.log("ItundaFace 2D -> 3D master manifest OK");
