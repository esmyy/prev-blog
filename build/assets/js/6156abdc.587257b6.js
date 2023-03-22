"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},c="Rebuild & HMR",i={unversionedId:"tools/webpack/hmr",id:"tools/webpack/hmr",title:"Rebuild & HMR",description:"Webpack \u4e2d\u7684\u6587\u4ef6\u76d1\u542c\uff0c\u57fa\u672c\u539f\u7406\u662f\u5468\u671f\u6027\u6bd4\u8f83\u6587\u4ef6\u7684\u6700\u540e\u7f16\u8f91\u65f6\u95f4\uff0c\u76d1\u542c\u7684\u6e90\u7801\u53d8\u5316\u65f6\u91cd\u65b0\u6784\u5efa\u3002 Rebuild \u5b58\u5728\u7684\u95ee\u9898/\u4e0d\u8db3 \u662f\u9700\u8981\u624b\u52a8\u5237\u65b0\u6d4f\u89c8\u5668\uff0c\u8fd8\u6709\u5c31\u662f\u6784\u5efa\u7684\u5185\u5bb9\u5728\u786c\u76d8\u4e0a\uff0c\u6709 I/O \u6210\u672c\u3002",source:"@site/docs/43-tools/88-webpack/05-hmr.md",sourceDirName:"43-tools/88-webpack",slug:"/tools/webpack/hmr",permalink:"/docs/tools/webpack/hmr",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/43-tools/88-webpack/05-hmr.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"plugin",permalink:"/docs/tools/webpack/plugin"},next:{title:"\u6587\u4ef6\u6307\u7eb9",permalink:"/docs/tools/webpack/hash"}},l={},p=[],s={toc:p},u="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rebuild--hmr"},"Rebuild & HMR"),(0,o.kt)("p",null,"Webpack \u4e2d\u7684\u6587\u4ef6\u76d1\u542c\uff0c\u57fa\u672c\u539f\u7406\u662f\u5468\u671f\u6027\u6bd4\u8f83\u6587\u4ef6\u7684\u6700\u540e\u7f16\u8f91\u65f6\u95f4\uff0c\u76d1\u542c\u7684\u6e90\u7801\u53d8\u5316\u65f6\u91cd\u65b0\u6784\u5efa\u3002 Rebuild \u5b58\u5728\u7684\u95ee\u9898/\u4e0d\u8db3 \u662f\u9700\u8981\u624b\u52a8\u5237\u65b0\u6d4f\u89c8\u5668\uff0c\u8fd8\u6709\u5c31\u662f\u6784\u5efa\u7684\u5185\u5bb9\u5728\u786c\u76d8\u4e0a\uff0c\u6709 I/O \u6210\u672c\u3002"),(0,o.kt)("p",null,"\u624b\u52a8\u5237\u65b0\u81ea\u7136\u662f\u9700\u8981\u4f18\u5316\u7684\uff0c\u8981\u505a\u5230\u81ea\u52a8\u66f4\u65b0\uff0c\u903b\u8f91\u4e0a\u4e5f\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u5c06\u6784\u5efa\u540e\u7684\u8f93\u51fa\u63a8\u9001\u7ed9\u5ba2\u6237\u7aef(\u5982 SPA \u5e94\u7528)\uff0c\u5ba2\u6237\u7aef\u81ea\u52a8\u5237\u65b0\uff0c\u8fd9\u5c31\u662f\u6240\u8c13\u70ed\u66f4\u65b0\u3002"),(0,o.kt)("p",null,"\u70ed\u66f4\u65b0\uff0c\u6253\u4e2a\u6bd4\u65b9\u6765\u8bf4\uff0c\u5c31\u662f\u7a7a\u4e2d\u52a0\u6cb9\u3002"),(0,o.kt)("p",null,"\u8981\u5b9e\u73b0\u5c06\u6784\u5efa\u540e\u7684\u8f93\u51fa\u63a8\u9001\u7ed9\u9875\u9762\uff0c\u9700\u8981\u5efa\u7acb Webpack Compiler \u548c Application \u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u9700\u8981\u7528\u5230 WebSocket\u3002 \u7531\u4e8e\u901a\u4fe1\u548c\u66f4\u65b0\u7684\u9700\u8981\uff0cCompiler \u548c Application \u5fc5\u7136\u9700\u8981\u589e\u52a0 WS \u76f8\u5173\u7684\u4ee3\u7801\uff0cApplication \u5fc5\u7136\u9700\u8981\u589e\u52a0\u66f4\u65b0\u76f8\u5173\u7684\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Webpack\nsetInterval(() => {\n  if (hasChange()) {\n    rebuild();\n    socket.send(output);\n  }\n}, 1000); // poll prop in webpack.config.js\n\n// Application\nsocket.onmessage = function (data) {\n  update(data);\n};\n")))}b.isMDXComponent=!0}}]);