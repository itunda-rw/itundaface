import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";
import { SVGLoader } from "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/loaders/SVGLoader.js";
import { RoomEnvironment } from "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/environments/RoomEnvironment.js";

const masters=[
{id:"thumbs-up",label:"Thumbs Up",url:"svg/flat/thumbs-up.svg"},
{id:"heart",label:"Heart",url:"svg/flat/heart.svg"},
{id:"laughing",label:"Laughing",url:"svg/flat/laughing.svg"},
{id:"wow",label:"Wow",url:"svg/flat/wow.svg"},
{id:"sad",label:"Sad",url:"svg/flat/sad.svg"}];
let manifest;
const svgLoader=new SVGLoader(), cache=new Map();

async function loadManifest(){
 if(manifest)return manifest;
 manifest=await fetch("3d/master-manifest.json",{cache:"no-store"}).then(r=>r.json());
 return manifest;
}
const meta=id=>manifest.masters.find(x=>x.id===id)||{};
const C=v=>{try{return new THREE.Color(v).getHex()}catch{return null}};
function mat(hex,o={}){
 return new THREE.MeshPhysicalMaterial({color:hex??0x7472f4,roughness:o.roughness??.30,metalness:.002,clearcoat:o.clearcoat??.28,clearcoatRoughness:.24,specularIntensity:o.specularIntensity??.62,sheen:o.sheen??.10,sheenColor:o.sheenColor??0xffe6c7,sheenRoughness:o.sheenRoughness??.72});
}
function tube(points,r,m){
 const g=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points,false,"centripetal",.12),Math.max(20,points.length*4),r,18,false);
 const x=new THREE.Mesh(g,m);x.castShadow=x.receiveShadow=true;return x;
}
const p=(x,y,z=.15)=>new THREE.Vector3((x-40)/16,(40-y)/16,z);

function base(){
 const root=new THREE.Group();
 const body=new THREE.Mesh(new THREE.SphereGeometry(2.02,128,96),mat(0xFFCC4D,{roughness:.24,clearcoat:.5}));
 body.scale.z=.96;body.castShadow=body.receiveShadow=true;root.add(body);
 const hi=new THREE.Mesh(new THREE.SphereGeometry(1.82,72,48),new THREE.MeshPhysicalMaterial({color:0xffffff,transparent:true,opacity:.055,roughness:.20,clearcoat:.32,clearcoatRoughness:.22,depthWrite:false}));
 hi.scale.set(.72,.5,.08);hi.position.set(-.55,.7,1.88);root.add(hi);
 return root;
}
function laughing(){
 const r=base(),dark=mat(0x664500,{roughness:.34,clearcoat:.18,specularIntensity:.55}),mouth=mat(0x66471B,{roughness:.38,clearcoat:.14,specularIntensity:.5}),cream=mat(0xFFF4C9,{roughness:.30,clearcoat:.18,specularIntensity:.55});
 r.add(tube([p(18.5,31.7),p(24.5,27.8,.19),p(30.5,31.7)],.095,dark));
 r.add(tube([p(49.5,31.7),p(55.5,27.8,.19),p(61.5,31.7)],.095,dark));
 const s=new THREE.Shape();s.moveTo(-1.4,-.15);s.bezierCurveTo(-.8,.18,.05,.3,0,.3);s.bezierCurveTo(.8,.3,1.4,.18,1.4,-.15);s.bezierCurveTo(1.18,-.9,.5,-1.18,0,-1.18);s.bezierCurveTo(-.5,-1.18,-1.18,-.9,-1.4,-.15);
 const g=new THREE.ExtrudeGeometry(s,{depth:.24,bevelEnabled:true,bevelSegments:6,bevelSize:.08,bevelThickness:.07,curveSegments:32});
 const m=new THREE.Mesh(g,mouth);m.scale.set(.8,.62,1);m.position.set(0,-.55,1.87);m.castShadow=m.receiveShadow=true;r.add(m);
 const tooth=new THREE.Mesh(new THREE.SphereGeometry(.7,48,32),cream);tooth.scale.set(1,.12,.45);tooth.position.set(0,-.38,2.03);tooth.castShadow=true;r.add(tooth);
 r.userData.volumeType="soft-toy-physical-face";return r;
}
function wow(){
 const r=base(),dark=mat(0x664500,{roughness:.3,clearcoat:.25}),mouth=mat(0x66471B,{roughness:.34,clearcoat:.2});
 for(const x of [-.88,.88]){
  const e=new THREE.Mesh(new THREE.SphereGeometry(.35,48,32),dark);e.scale.set(.72,1.05,.42);e.position.set(x,.4,1.86);e.castShadow=true;r.add(e);
 }
 const m=new THREE.Mesh(new THREE.SphereGeometry(.58,56,40),mouth);m.scale.set(.72,1.05,.45);m.position.set(0,-.92,1.82);m.castShadow=true;r.add(m);
 r.userData.volumeType="soft-toy-physical-face";return r;
}
function sad(){
 const r=base(),dark=mat(0x664500,{roughness:.3,clearcoat:.25}),mouth=mat(0x66471B,{roughness:.34,clearcoat:.2}),tear=mat(0x7472F4,{roughness:.24,clearcoat:.32,specularIntensity:.58});
 r.add(tube([p(18.5,32),p(24.2,36,.18),p(30,32)],.095,dark));
 r.add(tube([p(50,32),p(55.8,36,.18),p(61.5,32)],.095,dark));
 r.add(tube([p(27,61.2),p(33.5,55.5,.19),p(40,52.2,.2),p(46.5,55.5,.19),p(53,61.2)],.105,mouth));
 for(const [x,y,sx,sy] of [[.7,-.1,.62,1.25],[.82,-.72,.55,1.35]]){
  const t=new THREE.Mesh(new THREE.SphereGeometry(.3,48,32),tear);t.scale.set(sx,sy,.46);t.position.set(x,y,1.88);t.castShadow=true;r.add(t);
 }
 r.userData.volumeType="soft-toy-physical-face";return r;
}
async function svgVolume(master){
 if(cache.has(master.id))return cache.get(master.id).clone(true);
 const data=await svgLoader.loadAsync(master.url),root=new THREE.Group();
 for(const path of data.paths)for(const shape of SVGLoader.createShapes(path)){
  const g=new THREE.ExtrudeGeometry(shape,{depth:meta(master.id).depth||.48,bevelEnabled:true,bevelSegments:8,bevelSize:.12,bevelThickness:.1,curveSegments:32});
  const m=new THREE.Mesh(g,mat(C(path.color?.getStyle?.())||0x7472f4));m.castShadow=m.receiveShadow=true;root.add(m);
 }
 const box=new THREE.Box3().setFromObject(root),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
 root.position.sub(center);root.scale.setScalar(4/Math.max(size.x,size.y,size.z));root.rotation.x=Math.PI;root.rotation.y=.12;root.userData.volumeType="bevelled-solid-volume";cache.set(master.id,root);return root.clone(true);
}
async function build(master){
 let r=master.id==="laughing"?laughing():master.id==="wow"?wow():master.id==="sad"?sad():await svgVolume(master);
 r.userData.masterId=master.id;r.userData.flatSource=master.url;r.userData.label=master.label;r.rotation.z=meta(master.id).tilt||0;r.position.y+=meta(master.id).lift||0;return r;
}
function sceneFor(canvas){
 if(!canvas)return null;
 const scene=new THREE.Scene(),cp=manifest.camera,camera=new THREE.PerspectiveCamera(cp.fov,2,.1,100);
 camera.position.fromArray(cp.position);camera.lookAt(...cp.lookAt);
 const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.AgXToneMapping;renderer.toneMappingExposure=1.14;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 const env=new RoomEnvironment(renderer),pmrem=new THREE.PMREMGenerator(renderer);scene.environment=pmrem.fromScene(env,.05).texture;scene.environmentIntensity=1.12;
 scene.add(new THREE.HemisphereLight(0xffffff,0xc9ccd5,2.75));
 const key=new THREE.DirectionalLight(0xffffff,5.35);key.position.set(-6.5,9.5,10.5);key.castShadow=true;key.shadow.mapSize.set(2048,2048);key.shadow.camera.near=.5;key.shadow.camera.far=40;key.shadow.bias=-.0002;key.shadow.normalBias=.018;scene.add(key);
 const fill=new THREE.DirectionalLight(0xffffff,1.55);fill.position.set(6,3,7);scene.add(fill);
 const rim=new THREE.DirectionalLight(0x7472f4,.95);rim.position.set(7,6,-8);scene.add(rim);
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(24,16),new THREE.ShadowMaterial({opacity:.075}));floor.rotation.x=-Math.PI/2;floor.position.y=-3.95;floor.receiveShadow=true;scene.add(floor);
 const resize=()=>{const w=canvas.clientWidth||1100,h=canvas.clientHeight||650;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()};resize();addEventListener("resize",resize);
 return {scene,camera,renderer};
}
async function populate(canvas,layout){
 await loadManifest();const env=sceneFor(canvas);if(!env)return;const {scene,camera,renderer}=env,root=new THREE.Group();scene.add(root);
 const loaded=await Promise.all(masters.map(build));
 if(layout==="hero"){
  const picker=document.querySelector(".master-picker"),overlay=document.querySelector("#flat-overlay-toggle"),split=document.querySelector("#flat-split-toggle");let selected="heart",mode="normal";
  const show=async id=>{selected=id;while(root.children.length)root.remove(root.children[0]);const master=loaded.find(x=>x.userData.masterId===id)||loaded[1],item=master.clone(true);item.scale.setScalar(1.08);root.add(item);
   const tex=new THREE.TextureLoader().load(master.userData.flatSource);tex.colorSpace=THREE.SRGBColorSpace;const ref=new THREE.Mesh(new THREE.PlaneGeometry(5.2,5.2),new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false}));ref.rotation.x=Math.PI;ref.position.set(4.5,2.45,0);ref.userData.flatReference=true;root.add(ref);
   const apply=()=>{if(mode==="split"){ref.position.set(-2,0,.72);ref.material.opacity=1;item.position.x=2}else if(mode==="overlay"){ref.position.set(0,0,.72);ref.material.opacity=.3;item.position.x=0}else{ref.position.set(4.5,2.45,0);ref.material.opacity=1;item.position.x=0}};
   apply();overlay?.setAttribute("aria-pressed",String(mode==="overlay"));split?.setAttribute("aria-pressed",String(mode==="split"));if(overlay)overlay.textContent=mode==="overlay"?"2D OVERLAY ON":"2D OVERLAY";if(split)split.textContent=mode==="split"?"SPLIT VIEW ON":"SPLIT VIEW";
   const rm=manifest.masters.find(x=>x.id===id);if(rm){document.querySelector("#flat-reference-name").textContent=rm.label;document.querySelector("#flat-reference-image").src=rm.flatAsset;document.querySelector("#flat-reference-source").textContent=rm.flatAsset;document.querySelector("#flat-reference-meaning").textContent=rm.semanticMeaning;document.querySelector("#flat-reference-bounds").textContent=rm.opticalBounds.join(" · ");document.querySelector("#flat-reference-layers").textContent=rm.sourcePathCount+" layers";document.querySelector("#flat-reference-depth").textContent="depth "+Number(rm.depth||0).toFixed(2);document.querySelector("#flat-reference-angle").textContent=Number(rm.canonicalRotation||0)+"°";}
   picker?.querySelectorAll("button").forEach(btn=>{const active=btn.dataset.master===id;btn.classList.toggle("active",active);btn.setAttribute("aria-pressed",String(active))});
  };
  picker?.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>show(b.dataset.master)));overlay?.addEventListener("click",()=>{mode=mode==="overlay"?"normal":"overlay";show(selected)});split?.addEventListener("click",()=>{mode=mode==="split"?"normal":"split";show(selected)});await show(selected);
 }else if(layout==="grid"){
  loaded.forEach((m,i)=>{const x=m.clone(true);x.position.x=(i-2)*2.55;root.add(x)});
 }else{
  for(let i=0;i<30;i++){const x=loaded[i%loaded.length].clone(true);x.position.set((i%6-2.5)*2.55,(Math.floor(i/6)-2)*2.18,(i%3)*-.16);root.add(x)}
 }
 let target=0,drag=false,lastX=0,t=0;canvas.addEventListener("pointerdown",e=>{drag=true;lastX=e.clientX;canvas.setPointerCapture(e.pointerId)});canvas.addEventListener("pointermove",e=>{if(drag){target+=(e.clientX-lastX)*.006;lastX=e.clientX}});const release=()=>drag=false;canvas.addEventListener("pointerup",release);canvas.addEventListener("pointercancel",release);
 const animate=()=>{t+=.006;if(!drag)target=Math.sin(t*.42)*.13;root.rotation.y+=(target-root.rotation.y)*.045;root.rotation.x=Math.sin(t*.31)*.012;root.children.forEach((x,i)=>{if(x.userData.flatReference)return;if(x.userData.baseY===undefined)x.userData.baseY=x.position.y;x.position.y+=(x.userData.baseY+Math.sin(t*.72+i*.45)*.018-x.position.y)*.035});renderer.render(scene,camera);requestAnimationFrame(animate)};animate();
}
Promise.all([populate(document.querySelector("#itunda-3d"),"hero"),populate(document.querySelector("#itunda-3d-grid"),"grid"),populate(document.querySelector("#itunda-3d-wall"),"wall")]);