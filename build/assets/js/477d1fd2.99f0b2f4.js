"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8691],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,k=p["".concat(d,".").concat(m)]||p[m]||i[m]||l;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>i,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const l={},o="loader",s={unversionedId:"tools/webpack/loader",id:"tools/webpack/loader",title:"loader",description:"loader \u672c\u8eab\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e3b\u8981\u7528\u4e8e\u5bf9\u6a21\u5757\u7684\u6e90\u4ee3\u7801\u8fdb\u884c\u8f6c\u6362\uff0c\u8f93\u51fa\u8f6c\u6362\u7684\u7ed3\u679c\u3002 Loader \u7684\u53e6\u4e00\u4e2a\u4f5c\u7528\u662f\u5c06 JS\uff0cJSON \u5916\u7684\u6587\u4ef6\u7c7b\u578b\u8f6c\u6362\u4e3a\u6709\u6548\u7684 JS \u6a21\u5757\uff0c\u6b63\u56e0\u5982\u6b64\u624d\u53ef\u4ee5\u6dfb\u52a0\u5230\u4f9d\u8d56\u56fe\u4e2d\u3002 loader \u7684\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b",source:"@site/docs/43-tools/88-webpack/03-loader.md",sourceDirName:"43-tools/88-webpack",slug:"/tools/webpack/loader",permalink:"/docs/tools/webpack/loader",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/43-tools/88-webpack/03-loader.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5de5\u4f5c\u6d41\u7a0b",permalink:"/docs/tools/webpack/flow"},next:{title:"plugin",permalink:"/docs/tools/webpack/plugin"}},d={},u=[{value:"loader-runner",id:"loader-runner",level:2},{value:"loader.raw",id:"loaderraw",level:2},{value:"loader.pitch",id:"loaderpitch",level:2},{value:"loader.normal",id:"loadernormal",level:2},{value:"loader \u5206\u7c7b",id:"loader-\u5206\u7c7b",level:3},{value:"styleLoader.pitch",id:"styleloaderpitch",level:2},{value:"pitch \u7684\u5341\u4e07\u4e2a\u4e3a\u4ec0\u4e48",id:"pitch-\u7684\u5341\u4e07\u4e2a\u4e3a\u4ec0\u4e48",level:2}],c={toc:u},p="wrapper";function i(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loader"},"loader"),(0,a.kt)("p",null,"loader \u672c\u8eab\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e3b\u8981\u7528\u4e8e\u5bf9\u6a21\u5757\u7684\u6e90\u4ee3\u7801\u8fdb\u884c\u8f6c\u6362\uff0c\u8f93\u51fa\u8f6c\u6362\u7684\u7ed3\u679c\u3002 Loader \u7684\u53e6\u4e00\u4e2a\u4f5c\u7528\u662f\u5c06 JS\uff0cJSON \u5916\u7684\u6587\u4ef6\u7c7b\u578b\u8f6c\u6362\u4e3a\u6709\u6548\u7684 JS \u6a21\u5757\uff0c\u6b63\u56e0\u5982\u6b64\u624d\u53ef\u4ee5\u6dfb\u52a0\u5230\u4f9d\u8d56\u56fe\u4e2d\u3002 loader \u7684\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\n\nmodule.exports = {\n  mode: "development",\n  entry: "./app.js",\n  output: {\n    filename: "[name].bundle.js",\n    path: path.resolve(__dirname, "dist"),\n    publicPath: "",\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.css$/i,\n        use: ["style-loader", "css-loader"],\n      },\n    ],\n  },\n};\n')),(0,a.kt)("p",null,"\u6309\u7167\u5b98\u65b9 ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/loaders/"},"loaders \u4ecb\u7ecd")," \u6240\u8bf4"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Loaders are evaluated/executed from right to left (or from bottom to top)\u3002")),(0,a.kt)("p",null,"loaders \u6267\u884c\u987a\u5e8f\u662f\u53f3\u5230\u5de6\uff0c\u8fd9\u5176\u4e2d\u5fc5\u6709\u8e4a\u8df7\uff0c\u8fd9\u6d89\u53ca\u5230 loader \u662f\u5982\u4f55\u6267\u884c(loader-runner)\uff0c\u4ee5\u53ca loader module \u81ea\u8eab\u7ed3\u6784\u7684\u95ee\u9898\u4e86\u3002"),(0,a.kt)("h2",{id:"loader-runner"},"loader-runner"),(0,a.kt)("p",null,"webpack \u4e2d\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack/loader-runner#readme"},"loader-runner")," \u6765\u6267\u884c loader\u3002 loader-runner \u53ef\u4ee5\u5728 webpack \u4e2d\u4f7f\u7528\uff0c\u4e5f\u63d0\u4f9b\u4e86\u72ec\u7acb\u7684\u8fd0\u884c\u73af\u5883\uff0c\u53ef\u4ee5\u5728\u4e0d\u5b89\u88c5 webpack \u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\uff0c\u4ee5\u4fbf\u4e8e\u8fdb\u884c loader \u7684\u5f00\u53d1\u548c\u8c03\u8bd5\u3002 \u5176\u6838\u5fc3\u51fd\u6570 runLoaders \u7684\u683c\u5f0f\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { runLoaders } from "loader-runner";\n\nrunLoaders({\n  resource: "/abs/path/to/file.txt?query",\n  // String: Absolute path to the resource (optionally including query string)\n\n  loaders: ["/abs/path/to/loader.js?query", "/abs/path/to/loader2.js?query"],\n  // String[]: Absolute paths to the loaders (optionally including query string)\n  // {loader, options}[]: Absolute paths to the loaders with options object\n\n  context: { minimize: true },\n  // Additional loader context which is used as base context\n\n  processResource: (loaderContext, resourcePath, callback) => { ... },\n  // Optional: A function to process the resource\n  // Must have signature function(context, path, function(err, buffer))\n  // By default readResource is used and the resource is added a fileDependency\n\n  readResource: fs.readFile.bind(fs)\n  // Optional: A function to read the resource\n  // Only used when \'processResource\' is not provided\n  // Must have signature function(path, function(err, buffer))\n  // By default fs.readFile is used\n}, function(err, result) {\n  // ...\n})\n')),(0,a.kt)("p",null,"loader \u7684\u6267\u884c\uff0c\u81ea\u7136\u5fc5\u4e0d\u53ef\u5c11\u7684\u73af\u8282\u662f\u52a0\u8f7d loader \u6a21\u5757\uff0c\u6b64\u5904\u7701\u7565\u5177\u4f53\u4ee3\u7801\u5b9a\u4f4d\u7684\u8fc7\u7a0b\uff0c\u6700\u7ec8\u52a0\u8f7d loader \u6a21\u5757\u7684\u4ee3\u7801\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function loadLoader(loader, callback) {\n  if (typeof System === "object" && typeof System.import === "function") {\n    System.import(loader.path)\n      .catch(callback)\n      .then(function (module) {\n        loader.normal = typeof module === "function" ? module : module.default;\n        loader.pitch = module.pitch;\n        loader.raw = module.raw;\n        if (\n          typeof loader.normal !== "function" &&\n          typeof loader.pitch !== "function"\n        ) {\n          return callback(\n            new LoaderLoadingError(\n              "Module \'" +\n                loader.path +\n                "\' is not a loader (must have normal or pitch function)"\n            )\n          );\n        }\n        callback();\n      });\n  } else {\n    // ...\n  }\n}\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 loader module \u5bfc\u51fa\u4e3b\u8981\u6709 pitch \u548c raw \u4e24\u4e2a\u5c5e\u6027\uff0c\u5176\u4e2d\u9ed8\u8ba4\u5bfc\u51fa\u7684\u51fd\u6570\u79f0\u4e3a normal\u3002 \u4ece\u6761\u4ef6\u5224\u65ad\u53ef\u77e5\uff0cnormal \u548c pitch \u51fd\u6570\u81f3\u5c11\u8981\u6709\u4e00\u4e2a\u3002 \u6839\u636e\u4ee5\u4e0a\u7ed3\u679c\uff0cloader \u53ef\u4ee5\u8ba4\u4e3a\u662f\u4e0b\u9762\u8fd9\u6837\u4e00\u4e2a\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  normal?: function() {}\n  pitch?: function() {}\n  raw?: // ...\n}\n")),(0,a.kt)("h2",{id:"loaderraw"},"loader.raw"),(0,a.kt)("p",null,"raw \u662f\u4e00\u4e2a Boolean\uff0c\u6307\u5b9a loader \u671f\u671b\u7684\u8f93\u5165\u5185\u5bb9\u7684\u7c7b\u578b\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cresource \u6587\u4ef6\u88ab\u8f6c\u5316\u4e3a\u4e00\u4e2a UTF-8 \u5b57\u7b26\u4e32\u4f20\u9012\u7ed9 loader\uff0cloader \u7684\u8f93\u5165\u8f93\u51fa\u662f String \u6216\u8005 Buffer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function loader(content: String | Buffer) {\n  // ...\n}\n")),(0,a.kt)("p",null,"content \u9ed8\u8ba4\u662f\u4e00\u4e2a String\u3002 \u901a\u8fc7\u8bbe\u7f6e raw \u4e3a true\uff0cloader-runner \u53ef\u4ee5\u6839\u636e loader \u7684\u9700\u8981\uff0c\u5c06\u8d44\u6e90\u5b57\u7b26\u4e32\u6216\u8005\u4e0a\u4e00\u4e2a loader \u7684\u6267\u884c\u7ed3\u679c\uff0c\u8f6c\u6362\u4e3a\u5f53\u524d loader \u6240\u9700\u7684\u683c\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function convertArgs(args, raw) {\n  if (!raw && Buffer.isBuffer(args[0])) args[0] = utf8BufferToString(args[0]);\n  else if (raw && typeof args[0] === "string")\n    args[0] = Buffer.from(args[0], "utf-8");\n}\n')),(0,a.kt)("p",null,"\u8fd9\u4e2a\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684 loader \u6765\u9a8c\u8bc1\uff0c\u5982\u4e0b loader-a.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=loader-a.js",title:"loader-a.js"},'module.exports = function loader(content) {\n  console.log("typeof", typeof content, content instanceof Buffer);\n};\n\nmodule.exports.raw = true;\n')),(0,a.kt)("p",null,"\u800c runner.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=runner.js",title:"runner.js"},'const { runLoaders } = require("loader-runner");\nconst fs = require("fs");\nconst path = require("path");\nrunLoaders(\n  {\n    resource: "./style.css",\n    loaders: [path.resolve(__dirname, "./loader-a.js")],\n    readResource: fs.readFile.bind(fs),\n  },\n  (err, result) => {\n    // console.log(re)\n  }\n);\n')),(0,a.kt)("p",null,"\u6267\u884c node runner.js \u8f93\u51fa\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"typeof object true\n")),(0,a.kt)("p",null,"\u5e38\u89c1\u7684 raw \u4e3a true \u7684 loader \u6709 file-loader, url-loader \u7b49\uff0c\u8fd9\u4e9b loader \u90fd\u4e0d\u9700\u8981\u5173\u6ce8\u6587\u4ef6\u5185\u90e8\u7684\u8be6\u7ec6\u5185\u5bb9\uff0c\u4e0d\u9700\u8981\u8fdb\u884c\u8bed\u6cd5\u5206\u6790\u3002"),(0,a.kt)("h2",{id:"loaderpitch"},"loader.pitch"),(0,a.kt)("p",null,"loader \u53ef\u4ee5\u5bfc\u51fa\u4e24\u4e2a\u65b9\u6cd5\uff0cpitch \u548c default\uff0c\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/api/loaders/#pitching-loader"},"Pitching Loader")," \u6240\u8ff0\uff0c\u5f53\u914d\u7f6e\u4e86\u591a\u4e2a loader \u7684\u65f6\u5019"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  //...\n  module: {\n    rules: [\n      {\n        //...\n        use: ["a-loader", "b-loader", "c-loader"],\n      },\n    ],\n  },\n};\n')),(0,a.kt)("p",null,"\u5047\u8bbe\u8fd9\u4e9b loader \u90fd\u6709 pitch \u548c default \u65b9\u6cd5\uff0c\u6267\u884c\u7684\u6b65\u9aa4\u662f\u4e0b\u9762\u8fd9\u6837\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"|- a-loader `pitch`\n  |- b-loader `pitch`\n    |- c-loader `pitch`\n      |- requested module is picked up as a dependency\n    |- c-loader normal execution\n  |- b-loader normal execution\n|- a-loader normal execution\n")),(0,a.kt)("p",null,"\u800c\u5f53\u67d0\u4e2a pitch \u8fd4\u56de\u4e86\u4e00\u4e2a module \u7684\u65f6\u5019\uff0c\u6267\u884c\u6b65\u9aa4\u793a\u4f8b\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"|- a-loader `pitch`\n  |- b-loader `pitch` returns a module\n|- a-loader normal execution\n")),(0,a.kt)("p",null,"\u7406\u89e3\u8fd9\u4e2a\u6267\u884c\u7684\u903b\u8f91\u5bb9\u6613\uff0c\u4f46\u662f\u5bf9\u4e8e\u4f7f\u7528 pitch \u7684\u539f\u56e0\uff0c\u5b98\u65b9\u7684\u63cf\u8ff0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There are some instances where the loader only cares about the metadata behind a request and can ignore the results of the previous loader.")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u63cf\u8ff0\u5e76\u4e0d\u5bb9\u6613\u7406\u89e3\uff0c\u5e76\u4e0d\u80fd\u4ece\u4e2d\u9886\u4f1a\u5230\u7a76\u7adf\u662f\u4e3a\u4ec0\u4e48\uff0c\u4ee5\u53ca\u4f55\u65f6\u4f7f\u7528\uff0c\u6b63\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/issues/360"},"issues #360 \u6240\u8ff0")," \uff0cpitch \u5e76\u4e0d\u90a3\u4e48\u5bb9\u6613\u7406\u89e3\u548c\u63cf\u8ff0\u3002"),(0,a.kt)("h2",{id:"loadernormal"},"loader.normal"),(0,a.kt)("p",null,"\u901a\u8fc7\u548c pitch \u5bf9\u6bd4\uff0c\u6240\u8c13\u7684 normal \u662f\u4ec0\u4e48\u610f\u601d\u5df2\u7ecf\u5f88\u660e\u786e\u4e86\u3002 \u6211\u4eec\u8bf4\u591a\u4e2a loader \u7684\u65f6\u5019\uff0c\u6267\u884c\u987a\u5e8f\u662f\u4ece\u53f3\u5230\u5de6\uff0c\u5176\u5b9e\u662f\u5728\u8bf4 loader \u7684 normal \u65b9\u6cd5\u7684\u6267\u884c\u987a\u5e8f\u662f\u4ece\u53f3\u5230\u5de6\u3002"),(0,a.kt)("h3",{id:"loader-\u5206\u7c7b"},"loader \u5206\u7c7b"),(0,a.kt)("p",null,"Webpack \u5b98\u65b9\u6587\u6863\u91cc\u9762\uff0c\u5bf9\u4e8e loader\uff0c\u5f53 raw \u7684\u503c\u4e3a true \u65f6\uff0c\u79f0\u4e3a \u201dRaw Loader\u201c\uff0c\u5f53 pitch \u65b9\u6cd5\u5b58\u5728\u65f6\uff0c\u79f0\u4e3a\u201dPitching Loader\u201c\u3002 \u6211\u89c9\u5f97\u8fd9\u6837\u7684\u79f0\u547c\u5bf9\u4e8e\u7406\u89e3\u5e76\u65e0\u5e2e\u52a9\uff0c\u6211\u66f4\u503e\u5411\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/55789849/how-style-loader-works-with-css-loader/55792756"},"Stack Overflow \u8fd9\u4e2a\u56de\u7b54"),"\u7684\u539f\u56e0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Note, there\'s no such thing as pitch loader, cus every loader can have a "normal side" and "pitch side".')),(0,a.kt)("p",null,"loader \u5c31\u662f loader\uff0c\u6ca1\u6709\u6240\u8c13\u7684 Raw Loader \u6216\u8005 Pitching Loader\uff0craw \u53ea\u662f\u5b83\u7684\u4e00\u4e2a\u914d\u7f6e\u5c5e\u6027\uff0c\u800c pitch \u6216\u8005 normal\uff0c\u662f\u4e00\u4e2a loader \u7684\u5de6\u53f3\u624b\u800c\u5df2"),(0,a.kt)("h2",{id:"styleloaderpitch"},"styleLoader.pitch"),(0,a.kt)("p",null,"style-loader \u5b9a\u4e49\u4e86 pitch \u65b9\u6cd5\uff0c\u5927\u6982\u770b\u4e00\u4e0b\u5176\u5b9a\u4e49"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'loaderApi.pitch = function loader(request) {\n  // ...\n  switch (injectType) {\n    case "linkTag":\n    // ... return someString;\n    case "lazyStyleTag":\n    case "lazySingletonStyleTag":\n    // ... return someString;\n    case "styleTag":\n    case "singletonStyleTag":\n    default:\n      // ...\n      return `${\n        esModule\n          ? `import api from ${loaderUtils.stringifyRequest(\n              this,\n              `!${path.join(__dirname, "runtime/injectStylesIntoStyleTag.js")}`\n            )};\n            import content from ${loaderUtils.stringifyRequest(\n              this,\n              `!!${request}`\n            )};\n            var clonedContent = content;`\n          : `var api = require(${loaderUtils.stringifyRequest(\n              this,\n              `!${path.join(__dirname, "runtime/injectStylesIntoStyleTag.js")}`\n            )});\n            var content = require(${loaderUtils.stringifyRequest(\n              this,\n              `!!${request}`\n            )});\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === \'string\') {\n              content = [[module.id, content, \'\']];\n            }`\n      }\n\n      var options = ${JSON.stringify(options)};\n\n      options.insert = ${insert};\n      options.singleton = ${isSingleton};\n\n      var update = api(content, options);\n\n      var exported = content.locals ? content.locals : {};\n\n      ${hmrCode}\n\n      ${esModule ? "export default" : "module.exports ="} exported;`;\n  }\n};\n')),(0,a.kt)("p",null,"\u4e3b\u8981\u5c31\u662f\u56f4\u7ed5 injectType \u548c esModule \u4e24\u4e2a\u5c5e\u6027\u5904\u7406\uff0c\u6839\u636e injectType \u7684\u4e0d\u540c\u4f7f\u7528\u4e0d\u540c\u7684\u751f\u6210\u6a21\u5757\u6765\u751f\u6210 tag\uff0c\u6839\u636e esModule \u5c5e\u6027\u6765\u8c03\u6574\u76f8\u5e94\u7684\u5bfc\u5165\u5bfc\u51fa\u7ed3\u6784\u3002\u4f7f\u7528\u4ee5\u4e0b\u793a\u4f8b\u6765\u770b\u4e00\u4e0b\u5176\u5b9e\u5982\u4f55\u8d77\u4f5c\u7528\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 app.js\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 style.less\n\u2514\u2500\u2500 webpack.config.js\n")),(0,a.kt)("p",null,"webpakc.config.js \u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\n\nmodule.exports = {\n  mode: "development",\n  entry: {\n    app: "./app.js",\n  },\n  output: {\n    filename: "[name].bundle.js",\n    path: path.resolve(__dirname, "dist"),\n    publicPath: "",\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.less$/i,\n        loader: ["style-loader", "css-loader", "less-loader"],\n      },\n    ],\n  },\n};\n')),(0,a.kt)("p",null,"app.js \u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import "./style.less";\n')),(0,a.kt)("p",null,"style.less \u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-less"},".hello {\n  color: red;\n  .world {\n    color: blue;\n  }\n}\n")),(0,a.kt)("p",null,"\u76f4\u63a5\u8fd0\u884c\u6253\u5370 style-loader \u7684 pitch \u7684\u8f93\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3,4}","{3,4}":!0},'// \u8f93\u51fa\uff0c\u8fd4\u56de\u503c\nstyleLoaderResult = `\n  var api = require("!./node_modules/_style-loader@1.3.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n  var content = require("!!./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./style.less");\n  content = content.__esModule ? content.default : content;\n  if (typeof content === \'string\') {\n    content = [[module.id, content, \'\']];\n  }\n  var options = {};\n  options.insert = "head";\n  options.singleton = false;\n  var update = api(content, options);\n  module.exports = content.locals || {};\n`;\n')),(0,a.kt)("p",null,"\u6839\u636e\u524d\u9762\u5173\u4e8e pitch \u7684\u63cf\u8ff0\uff0c\u7531\u4e8e\u8fd9\u91cc\u8fd4\u56de\u4e86\uff0c\u90a3\u4e48\u540e\u9762\u7684 css-loader\u3001less-loader \u7684 pitch \u548c normal \u65b9\u6cd5\u90fd\u88ab\u8df3\u8fc7\u4e86\u3002 \u4f46\u662f\u663e\u7136\u6ca1\u6709\u90a3\u4e48\u7b80\u5355\uff0cless \u6587\u4ef6\u5fc5\u987b\u8981\u5904\u7406\uff0c\u4e0d\u53ef\u80fd\u771f\u7684\u8df3\u8fc7\u8f6c\u6362\u7684\u8fc7\u7a0b\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"style-loader pitch \u65b9\u6cd5\u7684\u8df3\u8fc7\uff0c\u662f\u4ee5\u53e6\u4e00\u79cd\u65b9\u5f0f\u6267\u884c\u4e86")),(0,a.kt)("p",null,"\u6ce8\u610f\u9ad8\u4eae\u7684\u884c\uff0c\u8fd9\u91cc\u7684 require \u5c31\u662f\u6240\u8c13\u7684 inline \u65b9\u5f0f\u4f7f\u7528\uff0c\u901a\u8fc7 require \u83b7\u5f97 less-loader\uff0ccss-loader \u8fd4\u56de\u7684 css\uff0c\u7136\u540e\u518d\u8c03\u7528 injectStylesIntoStyleTag.js \u4e2d\u5bfc\u51fa\u7684\u65b9\u6cd5\u8fdb\u884c\u4e86\u63d2\u5165\u3002"),(0,a.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u8fd9\u6837\u505a\u5462\uff1f\u8fd9\u4e0e css-loader \u7684\u8fd4\u56de\u503c\u6709\u5173\uff0ccss-loader \u8fd4\u56de\u793a\u4f8b\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'cssLoaderResult = `// Imports\n  var ___CSS_LOADER_API_IMPORT___ = require("./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");\n  exports = ___CSS_LOADER_API_IMPORT___(false);\n  // Module\n  exports.push([module.id, ".hello { color: red;\\\\n}\\\\n", ""]);\n  // Exports\n  module.exports = exports;\n`;\n')),(0,a.kt)("p",null,"\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u662f\u4ee5\u6a21\u5757\u7684\u65b9\u5f0f\u5bfc\u51fa\uff0c\u800c\u975e\u76f4\u63a5\u662f css \u6587\u672c\u3002 \u6211\u4eec\u8981\u83b7\u53d6\u5230\u91cc\u9762\u7684 css\uff0c\u9700\u8981 require \u518d\u83b7\u53d6\u3002 \u4f7f\u7528 require \u540e\uff0cwebpack \u5c06\u5176\u4f5c\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u6a21\u5757\uff0c\u5982\u4e0b\u5728 webpack \u7684\u5bfc\u51fa\u4e2d\uff0ccssLoaderResult \u4f5c\u4e3a\u4e00\u4e2a\u72ec\u7acb\u6a21\u5757"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'(function (modules) {\n  // webpackBootstrap\n  // ...\n})({\n  "./app.js": function (module, __webpack_exports__, __webpack_require__) {\n    eval(); // ...\u7701\u7565\u5177\u4f53\u5185\u5bb9\n  },\n\n  "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_less-loader@6.2.0@less-loader/dist/cjs.js!./style.less":\n    function (module, exports, __webpack_require__) {\n      eval(cssLoaderResult); // ...\n    },\n\n  "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js": function (\n    module,\n    exports,\n    __webpack_require__\n  ) {\n    "use strict";\n    eval(); // ...\u7701\u7565\u5177\u4f53\u5185\u5bb9\n  },\n\n  "./node_modules/_style-loader@1.3.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js":\n    function (module, exports, __webpack_require__) {\n      "use strict";\n      eval(); // ...\u7701\u7565\u5177\u4f53\u5185\u5bb9\n    },\n\n  "./style.less": function (module, exports, __webpack_require__) {\n    eval(styleLoaderResult); // ...\u7701\u7565\u5177\u4f53\u5185\u5bb9\n  },\n});\n')),(0,a.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u5c31\u53ef\u4ee5\u4f7f\u7528 eval \u6267\u884c styleLoaderResult\uff0c\u5176\u4e2d require \u4e86 css-loader \u5bfc\u51fa\u5185\u5bb9\u5bf9\u5e94\u6a21\u5757\uff0c\u4f1a\u63d0\u53d6\u51fa css \u5185\u5bb9\u4ea4\u7ed9 style-loader \u8fdb\u884c update\u3002"),(0,a.kt)("h2",{id:"pitch-\u7684\u5341\u4e07\u4e2a\u4e3a\u4ec0\u4e48"},"pitch \u7684\u5341\u4e07\u4e2a\u4e3a\u4ec0\u4e48"),(0,a.kt)("p",null,"\u8001\u5b9e\u8bf4\uff0c\u4e86\u89e3\u4e86 styleLoader.pitch\uff0c\u4ecd\u65e7\u4e0d\u80fd\u5f88\u597d\u5730\u7406\u89e3 pitch\uff0cpitch \u8fd9\u4e2a\u4e1c\u897f\u5c31\u5f88\u522b\u626d\u3002"),(0,a.kt)("p",null,"style-loader \u4f7f\u7528 pitch\uff0c\u662f\u57fa\u4e8e\u5728\u524d\u9762\u6267\u884c\u7684 less-loader \u548c css-loader \u7684\u8fd4\u56de\u503c\u7684\u3002"),(0,a.kt)("p",null,"css-loader \u8fd4\u56de\u5305\u542b\u4e86"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'require("./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");\n')),(0,a.kt)("p",null,"cssLoaderResult \u4e2d\u7684 require \u76f8\u5173\u7684\u5185\u5bb9\u4ea4\u7ed9\u9700\u8981 webpack \u8fdb\u884c\u5904\u7406\u3002 \u4e0e\u6b64\u540c\u65f6\uff0cstyle-loader \u7684\u5de5\u4f5c\uff0c\u5c31\u662f\u5c06 css \u63d2\u5165\u5230 html \u4e2d\uff0cstyle-loader \u9700\u8981\u83b7\u53d6\u5230 cssLoaderResult \u4e2d\u5305\u542b\u7684 css \u6587\u672c"),(0,a.kt)("p",null,"\u4e8e\u662f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"webpack \u548c style-loader \u4e24\u8005\u90fd\u9700\u8981 cssLoaderResult")),(0,a.kt)("p",null,"\u5728 style-loader \u4e2d\u4f7f\u7528\uff0c\u5c31\u662f\u5229\u7528 webpack \u5c06 require \u7684\u5185\u5bb9\u4f5c\u4e3a\u5355\u72ec\u6a21\u5757\uff0c\u7136\u540e style-loader \u8c03\u7528\u8fd9\u4e2a\u6a21\u5757\u83b7\u53d6\u8fd4\u56de\u7684 css \u5185\u5bb9\u3002"),(0,a.kt)("admonition",{title:"s",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6839\u636e css-loader \u7684\u8fd4\u56de\u5185\u5bb9\uff0c\u89e3\u91ca\u4e86\u4e3a\u4ec0\u4e48\u8981\u7528 require\uff0c\u4f46\u662f\u6211\u89c9\u5f97\u5176\u5b9e style-loader \u91cc\u9762\u7684 pitch \u5e76\u4e0d\u5fc5\u8981\u3002style-loader \u5e76\u4e0d\u80fd\u8df3\u8fc7 css-loader \u548c less-loader\uff0c\u90a3\u4e48\u5728 pitch \u548c normal \u5904\u7406\u53c8\u6709\u4f55\u533a\u522b\u5462\uff1f\u5b8c\u5168\u53ef\u4ee5\u5728 normal \u91cc\u9762\u53bb\u5b9e\u73b0\u3002")),(0,a.kt)("p",null,"\u4e5f\u8bb8 style-loader \u5e76\u4e0d\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u4f8b\u5b50\uff0c\u6bd5\u7adf pitch \u7684\u6267\u884c\u65f6\u673a\u610f\u5473\u7740\u8fd8\u53ef\u4ee5\u505a\u5176\u4ed6\u5f88\u591a\u4e8b\u60c5\u3002 \u6211\u89c9\u5f97 pitch \u8fd9\u4e2a\u4e1c\u897f\u5f88\u522b\u626d\uff0c\u76ee\u524d\u800c\u8a00\u96be\u4ee5\u8ba4\u53ef pitch \u7684\u4ef7\u503c\u3002"))}i.isMDXComponent=!0}}]);