import fs from "node:fs";
import path from "node:path";
const root=process.cwd();
const manifest=JSON.parse(fs.readFileSync(path.join(root,"3d/master-manifest.json"),"utf8"));
if(manifest.version<2) throw new Error("3D master manifest must use version 2+");
if(manifest.sourceOfTruth!=="svg/flat") throw new Error("3D source of truth must be svg/flat");
if(manifest.pipeline!=="canonical-flat-svg -> registered-paint-layers -> extruded-volume -> shared-camera-render") throw new Error("Unexpected 2D -> 3D pipeline");
if(manifest.canvas?.join("x")!=="80x80") throw new Error("Canonical canvas must be 80x80");
if(manifest.safeArea?.join(",")!=="4,4,72,72") throw new Error("Unexpected canonical safe area");
if(manifest.camera?.projection!=="perspective" || manifest.camera?.fov!==30) throw new Error("Unexpected shared 3D camera profile");
if(manifest.lighting?.shared!==true) throw new Error("3D lighting must be shared");
if(manifest.material?.volume!=="restrained" || manifest.material?.frontStop!=="canonical-color" || manifest.material?.sideStop!=="deeper-underside") throw new Error("Unexpected shared 3D material grammar");
if(!(manifest.material?.metalness>=0 && manifest.material?.metalness<=0.1)) throw new Error("3D metalness must remain restrained");
if(!(manifest.material?.roughness>=0.2 && manifest.material?.roughness<=0.6)) throw new Error("3D roughness outside shared material range");

const seen=new Set();
const categories=new Set();
for(const master of manifest.masters ?? []){
  if(seen.has(master.id)) throw new Error("Duplicate 3D master: "+master.id);
  seen.add(master.id);
  if(!master.category || !master.semanticMeaning || !master.anchor || !master.canonicalDirection) throw new Error("Missing master contract metadata for "+master.id);
  if(typeof master.canonicalRotation!=="number") throw new Error("Missing canonical rotation for "+master.id);
  if(!Array.isArray(master.opticalBounds) || master.opticalBounds.length!==4) throw new Error("Invalid optical bounds for "+master.id);
  const [x,y,w,h]=master.opticalBounds;
  if(x<0 || y<0 || w<=0 || h<=0 || x+w>80 || y+h>80) throw new Error("Optical bounds outside 80x80 canvas for "+master.id);
  const maxAxis=Math.max(w,h)/80;
  if(maxAxis<0.68 || maxAxis>0.88) throw new Error("Optical occupancy outside 68-88% for "+master.id);
  if(!Array.isArray(master.palette) || master.palette.length<2) throw new Error("Palette metadata missing for "+master.id);
  categories.add(master.category);

  const file=path.join(root,master.flatAsset||"");
  if(!master.flatAsset || !fs.existsSync(file)) throw new Error("Missing flat source for "+master.id);
  if(!(master.depth>0 && master.depth<=1)) throw new Error("Invalid depth for "+master.id);
  if(typeof master.tilt!=="number" || typeof master.lift!=="number") throw new Error("Missing optical calibration for "+master.id);
  const svg=fs.readFileSync(file,"utf8");
  if(svg.match(/viewBox="([^"]+)"/)?.[1]!=="0 0 80 80") throw new Error(master.id+" must use canonical 80x80 viewBox");
  const colors=[...svg.matchAll(/(?:fill|stroke)="(#[0-9A-Fa-f]{6})"/g)].map(match=>match[1].toUpperCase());
  const declared=new Set(master.palette.map(color=>color.toUpperCase()));
  for(const color of colors){
    if(!declared.has(color)) throw new Error(master.id+" uses undeclared palette color "+color);
  }
  const pathCount=(svg.match(/<path\b/g)||[]).length+(svg.match(/<circle\b/g)||[]).length+(svg.match(/<ellipse\b/g)||[]).length;
  if(master.sourcePathCount!==pathCount) throw new Error(master.id+" source path count mismatch: manifest="+master.sourcePathCount+" actual="+pathCount);
}
if(seen.size!==5) throw new Error("Expected exactly 5 canonical 3D masters");
if(categories.size!==1 || !categories.has("reaction")) throw new Error("Current calibration family must remain reaction-only");
console.log("ItundaFace 2D -> 3D master manifest OK");
