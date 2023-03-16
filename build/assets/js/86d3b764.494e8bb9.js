"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8721],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>y});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,y=p["".concat(s,".").concat(m)]||p[m]||f[m]||c;return t?n.createElement(y,i(i({ref:r},l),{},{components:t})):n.createElement(y,i({ref:r},l))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=m;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4364:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var n=t(7462),o=(t(7294),t(3905));const c={},i="CSRF",a={unversionedId:"security/csrf",id:"security/csrf",title:"CSRF",description:"CSRF\uff0cCross Site Request Forgery\uff0c\u4e2d\u6587\u662f\u8de8\u7ad9\u70b9\u8bf7\u6c42\u4f2a\u9020\u3002CSRF \u662f\u771f\u7684\u8de8\u7ad9\u4e86\uff0c\u4e0d\u50cf XSS \u90a3\u6837\uff0c\u8bf4\u8de8\u7ad9\u53c8\u4e0d\u8de8\u7ad9\uff0c\u4e0d\u6210\u6837\u5b50\u3002CSRF \u7684\u57fa\u672c\u6d41\u7a0b\u5982\u4e0b",source:"@site/docs/52-security/03-csrf.md",sourceDirName:"52-security",slug:"/security/csrf",permalink:"/docs/security/csrf",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/52-security/03-csrf.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"XSS",permalink:"/docs/security/xss"},next:{title:"\u540c\u6e90\u4e0e\u8de8\u57df",permalink:"/docs/security/hello"}},s={},u=[],l={toc:u},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"csrf"},"CSRF"),(0,o.kt)("p",null,"CSRF\uff0cCross Site Request Forgery\uff0c\u4e2d\u6587\u662f\u8de8\u7ad9\u70b9\u8bf7\u6c42\u4f2a\u9020\u3002CSRF \u662f\u771f\u7684\u8de8\u7ad9\u4e86\uff0c\u4e0d\u50cf XSS \u90a3\u6837\uff0c\u8bf4\u8de8\u7ad9\u53c8\u4e0d\u8de8\u7ad9\uff0c\u4e0d\u6210\u6837\u5b50\u3002CSRF \u7684\u57fa\u672c\u6d41\u7a0b\u5982\u4e0b"),(0,o.kt)("p",null,"\u7528\u6237\u767b\u5f55 a.com\uff0c\u5e76\u4fdd\u7559\u4e86\u767b\u5f55\u51ed\u8bc1 Cookie\n\u653b\u51fb\u8005\u5f15\u8bf1\u53d7\u5bb3\u8005\u8bbf\u95ee\u4e86 b.com\nb.com \u5411 a.com \u53d1\u9001\u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u4f1a\u9ed8\u8ba4\u643a\u5e26 a.com \u7684 Cookie\na.com \u63a5\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u8bef\u4ee5\u4e3a\u662f\u7528\u6237\u53d1\u9001\u7684\u6b63\u5e38\u8bf7\u6c42\uff0c\u6309\u7167\u6b63\u5e38\u903b\u8f91\u5904\u7406\uff0c\u4f46\u662f\u8fd9\u5e76\u4e0d\u662f\u771f\u5b9e\u7528\u6237\u671f\u671b\u7684\nCSRF \u7684\u5173\u952e\u5728\u4e8e\u201c\u4f2a\u9020\u8bf7\u6c42\u201d\uff0c\u4f2a\u9020\u8bf7\u6c42\u5e76\u4e0d\u4e00\u5b9a\u662f\u7b2c\u4e09\u65b9\u7f51\u7ad9\u7684\uff0c\u53ea\u662f\u7b2c\u4e09\u65b9\u7f51\u7ad9\u66f4\u5bb9\u6613\u88ab\u653b\u51fb\u8005\u638c\u63e1\uff0c\u66f4\u666e\u904d\u800c\u5df2\u3002\u4f2a\u9020\u80fd\u591f\u5b9e\u73b0\u7684\u539f\u56e0\u662f b.com \u5411 a.com \u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u4f1a\u5e26\u4e0a a.com \u7684 cookie\u3002\u90a3\u4e48\u53ea\u8981\u7528\u6237\u540c\u65f6\u8bbf\u95ee\u4e86\u6b63\u5e38\u7f51\u7ad9\u548c\u7b2c\u4e09\u65b9\u653b\u51fb\u7f51\u7ad9\uff0c\u653b\u51fb\u5c31\u6709\u53ef\u80fd\u53d1\u751f\u3002"),(0,o.kt)("p",null,"CSRF \u7684\u9632\u8303\uff1a\u6293\u4f4f\u4e24\u4e2a\u5173\u952e\u70b9 \u7b2c\u4e09\u65b9\u7f51\u7ad9\uff0ccookie\u3002\u6709\u4ee5\u4e0b\u9632\u8303\u65b9\u6848"),(0,o.kt)("p",null,"\u65b9\u6848 \u539f\u7406\n\u540c\u6e90\u68c0\u6d4b \u5229\u7528 Referer \u548c Origin \u68c0\u67e5\u5224\u65ad\u8bf7\u6c42\u6765\u6e90\nCSRF Token \u7b2c\u4e09\u65b9\u7f51\u7ad9\u65e0\u6cd5\u76f4\u63a5\u8bfb\u53d6 cookie\n\u53cc\u91cd cookie \u7b2c\u4e09\u65b9\u7f51\u7ad9\u65e0\u6cd5\u76f4\u63a5\u8bfb\u53d6 cookie\nSamesite Cookie \u4ece\u6e90\u5934\u4e0a\u89e3\u51b3\uff0c\u9650\u5236\u7b2c\u4e09\u65b9\u7f51\u7ad9\u5229\u7528 cookie\ncsrf \u53ef\u53c2\u8003\u524d\u7aef\u5b89\u5168\u7cfb\u5217\uff08\u4e8c\uff09\uff1a\u5982\u4f55\u9632\u6b62 CSRF \u653b\u51fb\uff1f"))}f.isMDXComponent=!0}}]);