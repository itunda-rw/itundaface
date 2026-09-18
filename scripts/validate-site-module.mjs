import fs from "node:fs";
import { execFileSync } from "node:child_process";
const html=fs.readFileSync("index.html","utf8");
const match=html.match(/<script type="module">([\\s\\S]*?)<\\/script>/);
if(!match) throw new Error("Main module script not found");
const file=".tmp-itundaface-site.mjs";
fs.writeFileSync(file,match[1]);
try{
  execFileSync(process.execPath,["--check",file],{stdio:"inherit"});
}finally{
  fs.rmSync(file,{force:true});
}
console.log("ItundaFace site module syntax OK");
