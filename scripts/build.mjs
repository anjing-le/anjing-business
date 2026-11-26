import { mkdir, readFile, writeFile, rm, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/assets', { recursive: true });
async function listFiles(dir) {
  const entries=await readdir(dir,{withFileTypes:true});
  return (await Promise.all(entries.map(entry=>entry.isDirectory()?listFiles(path.posix.join(dir,entry.name)):[path.posix.join(dir,entry.name)]))).flat();
}
const files=new Set(await listFiles('assets'));
const emitted=new Map();
const textAssets=new Set(['.css','.js','.svg']);
async function rewriteReferences(text,sourceDir,outputDir) {
  const matches=[...text.matchAll(/(["'])([^"'\r\n]+)\1/g)];
  const replacements=await Promise.all(matches.map(async match=>{
    const raw=match[2];
    if(/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(raw))return null;
    const pathname=raw.split(/[?#]/)[0];
    const source=path.posix.normalize(pathname.startsWith('/')?pathname.slice(1):path.posix.join(sourceDir,pathname));
    if(!files.has(source))return null;
    const output=await emitAsset(source);
    let target=raw.startsWith('/')?'/'+output:path.posix.relative(outputDir,output);
    if(raw.startsWith('./')&&!target.startsWith('.'))target='./'+target;
    return {start:match.index,end:match.index+match[0].length,value:match[1]+target+match[1]};
  }));
  for(const replacement of replacements.filter(Boolean).reverse())text=text.slice(0,replacement.start)+replacement.value+text.slice(replacement.end);
  return text;
}
function emitAsset(source) {
  if(!emitted.has(source))emitted.set(source,(async()=>{
    let bytes=await readFile(source);
    const extension=path.posix.extname(source);
    if(textAssets.has(extension))bytes=Buffer.from(await rewriteReferences(bytes.toString(),path.posix.dirname(source),path.posix.dirname(source)));
    const hash=createHash('sha256').update(bytes).digest('hex').slice(0,12);
    const output=source.slice(0,-extension.length)+'.'+hash+extension;
    await mkdir(path.posix.dirname('dist/'+output),{recursive:true});
    await writeFile('dist/'+output,bytes);
    return output;
  })());
  return emitted.get(source);
}
let html=await readFile('index.html','utf8');
// These small stylesheets are critical to the first frame; inline them in cascade order.
const styles=[...html.matchAll(/<link rel="stylesheet" href="(assets\/[^"?]+)(?:\?[^\"]*)?">/g)];
for(const style of styles) {
  const css=await rewriteReferences(await readFile(style[1],'utf8'),path.posix.dirname(style[1]),'.');
  html=html.replace(style[0],'<style>\n'+css+'\n</style>');
}
html=await rewriteReferences(html,'.','.');
await writeFile('dist/index.html',html);
// All served assets have content-based filenames, so new releases cannot reuse stale bytes.
await writeFile('dist/_headers',`/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n/\n  Cache-Control: public, max-age=0, must-revalidate\n/index.html\n  Cache-Control: public, max-age=0, must-revalidate\n/build-info.json\n  Cache-Control: no-store\n`);
const commit=process.env.CF_PAGES_COMMIT_SHA||execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
await writeFile('dist/build-info.json',JSON.stringify({commit},null,2)+'\n');
console.log(`Built ${emitted.size} versioned assets; critical CSS inlined.`);
