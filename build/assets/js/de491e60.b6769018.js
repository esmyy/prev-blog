"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3700],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>k});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),c=s(t),d=l,k=c["".concat(o,".").concat(d)]||c[d]||u[d]||p;return t?r.createElement(k,a(a({ref:n},i),{},{components:t})):r.createElement(k,a({ref:n},i))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var p=t.length,a=new Array(p);a[0]=d;var m={};for(var o in n)hasOwnProperty.call(n,o)&&(m[o]=n[o]);m.originalType=e,m[c]="string"==typeof e?e:l,a[1]=m;for(var s=2;s<p;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var r=t(7462),l=(t(7294),t(3905));const p={},a="npm",m={unversionedId:"tools/npm",id:"tools/npm",title:"npm",description:"JS \u5305\u7ba1\u7406\uff0c\u6709\u4e09\u4e2a\u7ec4\u6210\u90e8\u5206",source:"@site/docs/43-tools/11-npm.md",sourceDirName:"43-tools",slug:"/tools/npm",permalink:"/docs/tools/npm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/43-tools/11-npm.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ff",permalink:"/docs/tools/cmd"},next:{title:"yarn",permalink:"/docs/tools/yarn"}},o={},s=[{value:"\u5b9a\u4f4d\u6240\u5728",id:"\u5b9a\u4f4d\u6240\u5728",level:2},{value:".npmrc",id:"npmrc",level:2},{value:"nrm",id:"nrm",level:2},{value:"npx",id:"npx",level:2},{value:"pnpm",id:"pnpm",level:2},{value:"\u79c1\u6709 npm",id:"\u79c1\u6709-npm",level:2},{value:"npm \u548c node \u7248\u672c\u7684\u5173\u7cfb",id:"npm-\u548c-node-\u7248\u672c\u7684\u5173\u7cfb",level:2},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2},{value:"\u5173\u8054\u77e5\u8bc6",id:"\u5173\u8054\u77e5\u8bc6",level:2}],i={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"npm"},"npm"),(0,l.kt)("p",null,"JS \u5305\u7ba1\u7406\uff0c\u6709\u4e09\u4e2a\u7ec4\u6210\u90e8\u5206"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u7ec4\u6210"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b\u5b50"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7f51\u7ad9"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5916\u67e5\u8be2\u6709\u54ea\u4e9b\u5305\uff0c\u5305\u7684\u8bf4\u660e\u7b49"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.npmjs.com"},"https://www.npmjs.com")," ",(0,l.kt)("a",{parentName:"td",href:"https://npmmirror.com/"},"https://npmmirror.com/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"cli"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u7ba1\u7406\u547d\u4ee4\u884c\u5de5\u5177"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/npm/cli"},"npm"),", ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/cnpm/cnpm"},"cnpm"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"registry"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u7ba1\u7406\u7684\u6570\u636e\u5e93\uff0c\u4e5f\u5c31\u662f\u5e38\u8bf4\u7684\u6e90"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://registry.npmjs.org/"},"https://registry.npmjs.org/"))))),(0,l.kt)("p",null,"\u903b\u8f91\u4e0a\uff0c\u5305\u7ba1\u7406\u5176\u5b9e\u5f88\u7b80\u5355"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5171\u4eab\uff1a\u5c06 JS \u5305\u6dfb\u52a0\u5230\u5171\u4eab\u5e73\u53f0"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\uff1a\u4f7f\u7528\u65f6\u4ece\u5e73\u53f0\u4e0b\u8f7d\u6240\u9700\u7684\u5305")),(0,l.kt)("p",null,"\u672c\u6587\u5c06\u8bb2\u89e3 npm \u547d\u4ee4\uff0c\u540c\u65f6\u8d1f\u8d23\u5171\u4eab\u63a8\u9001\uff0c\u4f7f\u7528\u62c9\u53d6\u7684\u5de5\u5177\u3002"),(0,l.kt)("h2",{id:"\u5b9a\u4f4d\u6240\u5728"},"\u5b9a\u4f4d\u6240\u5728"),(0,l.kt)("p",null,"\u67e5\u770b npm \u547d\u4ee4\u6240\u5728"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  ~ which npm\n/Users/esmyy/.nvm/versions/node/v16.19.0/bin/npm\n\u279c  ~ la /Users/esmyy/.nvm/versions/node/v16.19.0/bin/npm\nlrwxr-xr-x  1 esmyy  esmyy    38B 12 13 15:19 /Users/esmyy/.nvm/versions/node/v16.19.0/bin/npm -> ../lib/node_modules/npm/bin/npm-cli.js\n")),(0,l.kt)("p",null,"\u672c\u673a node \u662f\u901a\u8fc7 nvm \u5b89\u88c5\u7684\uff0c\u8fd9\u4e2a\u5730\u5740\u662f\u4e00\u4e2a\u8f6f\u94fe\u63a5\uff0c\u53ef\u4ee5\u770b\u5230\u5b9e\u9645 npm \u547d\u4ee4\u662f\u6307\u5411\u4e86 npm-cli.js\u3002"),(0,l.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u5728 ",(0,l.kt)("strong",{parentName:"p"},"node/v16.19.0/bin/")," \u76ee\u5f55\u4e0b\u7684\u547d\u4ee4\uff0c\u9664\u4e86 node\uff0c\u5176\u4ed6\u90fd\u662f\u8f6f\u8fde\u63a5\uff0c\u6307\u5411\u4f4d\u7f6e\u90fd\u662f ",(0,l.kt)("strong",{parentName:"p"},"node_modules"),"\u91cc\u9762\u7684\u67d0\u4e2a\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  bin git:(9600617) pwd\n/Users/esmyy/.nvm/versions/node/v16.19.0/bin\n\u279c  bin git:(9600617) la\ntotal 181928\nlrwxr-xr-x  1 esmyy  esmyy    45B 12 13 15:19 corepack -> ../lib/node_modules/corepack/dist/corepack.js\nlrwxr-xr-x  1 esmyy  esmyy    32B 12 27 19:16 lerna -> ../lib/node_modules/lerna/cli.js\n-rwxr-xr-x  1 esmyy  esmyy    75M 12 13 15:19 node\nlrwxr-xr-x  1 esmyy  esmyy    38B 12 13 15:19 npm -> ../lib/node_modules/npm/bin/npm-cli.js\nlrwxr-xr-x  1 esmyy  esmyy    38B 12 13 15:19 npx -> ../lib/node_modules/npm/bin/npx-cli.js\nlrwxr-xr-x  1 esmyy  esmyy    30B  1  3 10:53 nrm -> ../lib/node_modules/nrm/cli.js\nlrwxr-xr-x  1 esmyy  esmyy    36B 12 26 12:34 yarn -> ../lib/node_modules/yarn/bin/yarn.js\nlrwxr-xr-x  1 esmyy  esmyy    36B 12 26 12:34 yarnpkg -> ../lib/node_modules/yarn/bin/yarn.js\nlrwxr-xr-x  1 esmyy  esmyy    33B  1  3 18:47 yo -> ../lib/node_modules/yo/lib/cli.js\nlrwxr-xr-x  1 esmyy  esmyy    46B  1  3 18:47 yo-complete -> ../lib/node_modules/yo/lib/completion/index.js\n\u279c  bin git:(9600617)\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5bf9\u5e94\u5173\u7cfb\uff0c\u662f\u5728\u5404\u4e2a\u5305\u7684 package.json \u91cc\u9762\u7ef4\u62a4\u7684\uff0c\u6bd4\u5982\u5bf9\u4e8e npm \u547d\u4ee4\uff0c\u6709\u4ee5\u4e0b\u5b9a\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".nvm/versions/node/v16.19.0/lib/node_modules/npm/package.json"',title:'".nvm/versions/node/v16.19.0/lib/node_modules/npm/package.json"'},'"bin": {\n  "npm": "bin/npm-cli.js",\n  "npx": "bin/npx-cli.js"\n},\n')),(0,l.kt)("p",null,"\u5176\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".nvm/versions/node/v16.19.0/lib/node_modules/npm/bin/npm-cli.js"',title:'".nvm/versions/node/v16.19.0/lib/node_modules/npm/bin/npm-cli.js"'},'#!/usr/bin/env node\nrequire("../lib/cli.js")(process);\n')),(0,l.kt)("p",null,"\u56e0\u6b64\u5b9a\u4f4d\u5230 npm \u547d\u4ee4\u5b9e\u73b0\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"lib/cli.js"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".nvm/versions/node/v16.19.0/lib/node_modules/npm/lib/cli.js"',title:'".nvm/versions/node/v16.19.0/lib/node_modules/npm/lib/cli.js"'},'module.exports = async (process) => {\n  // ...npm\u7248\u672c\u68c0\u67e5\uff0c\u9519\u8bef\u76d1\u542c\u767b\uff0c\u5206\u6790\u65f6\u7701\u7565\n  const Npm = require("./npm.js");\n  const npm = new Npm();\n\n  let cmd;\n  try {\n    await npm.load();\n\n    // npm --version\n    if (npm.config.get("version", "cli")) {\n      npm.output(npm.version);\n      return exitHandler();\n    }\n\n    // npm --versions=cli\n    if (npm.config.get("versions", "cli")) {\n      npm.argv = ["version"];\n      npm.config.set("usage", false, "cli");\n    }\n\n    // \u4e0d\u5e26\u53c2\u6570\uff0c\u6253\u5370\u4f7f\u7528\u8bf4\u660e\n    cmd = npm.argv.shift();\n    if (!cmd) {\n      npm.output(await npm.usage);\n      process.exitCode = 1;\n      return exitHandler();\n    }\n\n    // \u6267\u884c\u547d\u4ee4\n    await npm.exec(cmd, npm.argv);\n    return exitHandler();\n  } catch (err) {\n    // ...\u672a\u77e5\u53c2\u6570\u7b49\u5f02\u5e38\u5904\u7406\n  }\n};\n')),(0,l.kt)("p",null,"\u76f4\u63a5\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm-cli.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"node ../bin/npm-cli.js run dev\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019 process.argv \u662f\u4e0b\u9762\u8fd9\u6837\u7684"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'[\n  "/Users/fengpeng/.nvm/versions/node/v16.19.0/bin/node",\n  "/Users/fengpeng/.nvm/versions/node/v16.19.0/lib/node_modules/npm/bin/npm-cli.js",\n  "run",\n  "dev",\n];\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cli.js")," \u53ea\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u5bf9 npm \u5b9e\u4f8b\u7684\u8c03\u7528\u7ba1\u7406,\u5177\u4f53\u7684\u5b9e\u73b0\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm.js")," \u7684 Npm \u7c7b\uff0c\u8fd9\u4e2a\u624d\u662f\u4e86\u89e3 npm \u547d\u4ee4\u7684\u6838\u5fc3"),(0,l.kt)("admonition",{title:"s \u5c0f\u7ed3",type:"tip"}),(0,l.kt)("h2",{id:"npmrc"},".npmrc"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rc"),"\u6587\u4ef6\u4e00\u822c\u662f\u67d0\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\u7684\u914d\u7f6e\u6587\u4ef6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},".npmrc")," \u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," \u547d\u4ee4\u6267\u884c\u7684\u4f9d\u636e\u3002"),(0,l.kt)("p",null,"\u4e0e\u5f88\u591a\u5de5\u5177\u4e00\u6837\uff0c\u6d89\u53ca\u5230\u914d\u7f6e\u7684\u6587\u4ef6\uff0c\u4e00\u822c\u90fd\u662f\u5206\u7ea7\uff0c\u6709\u591a\u4e2a\u6587\u4ef6\uff0c\u7136\u540e\u5de5\u5177\u6309\u7167\u67d0\u4e2a\u987a\u5e8f\u53bb\u67e5\u627e\u3002"),(0,l.kt)("p",null,"npmrc \u5206 4 \u7ea7\uff0c\u65e5\u5e38\u5de5\u4f5c\u4f7f\u7528\uff0c\u5173\u6ce8\u7528\u6237\u7ea7\u522b\u548c\u5de5\u7a0b\u7ea7\u522b\u5c31\u53ef\u4ee5\u4e86"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u9879\u76ee\u7ea7\u914d\u7f6e\uff0c\u4e00\u822c\u90fd\u662f\u7528\u6765\u5207\u6362\u5230\u5185\u90e8\u6e90\uff0c\u52a0\u8f7d\u5185\u90e8\u7684\u7ec4\u4ef6\uff0c\u5de5\u5177\u7b49\nproject/.npmrc\n\n# \u7528\u6237\u7ea7\u914d\u7f6e\uff0c\u4e00\u822c\u7ed3\u5408 nrm \u5de5\u5177\u4f7f\u7528\uff0c\u6bd4\u8f83\u5e38\u7528\u7684\u5c31\u662f\u5207\u6362\u5230 taobao \u52a0\u901f\n~/.npmrc\n")),(0,l.kt)("p",null,"\u4e00\u4e2a\u6700\u7b80\u5355\u7684 ~/.npmrc \u6587\u4ef6\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"registry=https://registry.npmjs.org/\n")),(0,l.kt)("p",null,"\u8fd9\u5c31\u662f\u6307\u5b9a\u4e86\u4f7f\u7528 npm \u5b89\u88c5\u65f6\uff0c\u662f\u4ece\u54ea\u91cc\u83b7\u53d6\u3002\u5f53\u6211\u4eec\u8bf4\u201d\u4f7f\u7528 nrm \u5207\u6362\u5230\u963f\u91cc\u6e90\u201c\u65f6\uff0c\u5176\u5b9e\u5c31\u662f\u8981\u6539\u8fd9\u4e2a\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  ~  nrm use taobao\n\n  Registry has been set to: https://registry.npmmirror.com/\n\n\u279c  ~ cat .npmrc\nregistry=https://registry.npmmirror.com/\nhome=https://npm.taobao.org\n")),(0,l.kt)("h2",{id:"nrm"},"nrm"),(0,l.kt)("p",null,"\u903b\u8f91\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u9009\u62e9\u4e00\u4e2a\u6e90\uff0c\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},".npmrc"),"\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\u63d0\u4f9b\u7684\u4e00\u4e9b\u547d\u4ee4\u8fd8\u662f\u86ee\u6709\u8da3\u6709\u7528\u7684"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"add\uff1a\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7684\u6e90\uff0c\u6bd4\u5982\u53ef\u4ee5\u6dfb\u52a0\u79c1\u6709\u6e90")),(0,l.kt)("p",null,"\u7531\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},".npmrc")," \u6587\u4ef6\u662f ",(0,l.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/ini%E6%96%87%E4%BB%B6/9718973"},"ini \u683c\u5f0f"),"\uff0c\n\u4e3a\u4e86\u5b9e\u73b0\u7f16\u8f91\u800c\u975e\u8986\u76d6\uff0c\u9700\u8981\u501f\u52a9 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/npm/ini"},"npm/ini")," \u5de5\u5177\u8fdb\u884c\u89e3\u6790\uff0c\u8f85\u52a9\u8bfb\u5199\u3002"),(0,l.kt)("h2",{id:"npx"},"npx"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Run a command from a local or remote npm package")),(0,l.kt)("p",null,"npx \u7684\u4e3b\u8981\u4f5c\u7528\uff0c\u5c31\u662f\u6309\u7167\u67d0\u4e9b\u67e5\u627e\u8def\u5f84\uff0c\u53bb\u67e5\u627e\u547d\u4ee4\uff0c\u7ed5\u8fc7\u4e86\u539f\u6765\u547d\u4ee4\u6267\u884c\u7684\u9650\u5236\uff0c\u4fbf\u5229\u4e86\u4e00\u4e9b\u547d\u4ee4\u7684\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u5e38\u7528\u573a\u666f\u6709\u4e24\u4e2a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u914d\u7f6e package.json \u7684 scripts\uff0c\u76f4\u63a5\u6267\u884c\u9879\u76ee\u5185\u7684 ./node_modules/.bin/xxx \u547d\u4ee4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx xxx\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u5b89\u88c5\u67d0\u4e2a\u547d\u4ee4\uff0c\u76f4\u63a5\u4ece\u8fdc\u7a0b\u4e34\u65f6\u4e0b\u8f7d\u6267\u884c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ts-node hello.ts\n")),(0,l.kt)("p",null,"npx \u53ea\u662f\u4e00\u4e9b\u5076\u5c14\u9700\u8981\u65f6\u7684\u4fbf\u5229\uff0c\u5bf9\u4e8e\u5de5\u7a0b\u672c\u8eab\u5e76\u65e0\u7279\u522b\u4f5c\u7528\u3002"),(0,l.kt)("h2",{id:"pnpm"},"pnpm"),(0,l.kt)("h2",{id:"\u79c1\u6709-npm"},"\u79c1\u6709 npm"),(0,l.kt)("p",null,"\u4e00\u822c\u5177\u5907\u6761\u4ef6\u7684\u56e2\u961f\uff0c\u90fd\u4f1a\u81ea\u5efa\u5185\u90e8\u7684\u79c1\u6709 npm\uff0c\u7528\u4e8e\u7ba1\u7406\u516c\u53f8\u7ea7\u522b\u7684\u7ec4\u4ef6\u5e93\uff0c\u5de5\u5177\u5305\u7b49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"")),(0,l.kt)("h2",{id:"npm-\u548c-node-\u7248\u672c\u7684\u5173\u7cfb"},"npm \u548c node \u7248\u672c\u7684\u5173\u7cfb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"")),(0,l.kt)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v9/configuring-npm/npmrc"},"npmrc")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Pana/nrm"},"nrm")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/zkat/npx"},"npx")),(0,l.kt)("h2",{id:"\u5173\u8054\u77e5\u8bc6"},"\u5173\u8054\u77e5\u8bc6"))}u.isMDXComponent=!0}}]);