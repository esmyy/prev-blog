"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",T={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=i(n),k=a,d=u["".concat(c,".").concat(k)]||u[k]||T[k]||l;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var i=2;i<l;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>T,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={},p="HTTP",o={unversionedId:"network/http",id:"network/http",title:"HTTP",description:"\u4e86\u89e3 HTTP \u534f\u8bae\u7684\u53d1\u5c55\uff0c\u5404\u5173\u952e\u7248\u672c\u7684\u4e00\u4e9b\u57fa\u672c\u77e5\u8bc6\u3002",source:"@site/docs/51-network/10-http.md",sourceDirName:"51-network",slug:"/network/http",permalink:"/docs/network/http",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/51-network/10-http.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ICMP",permalink:"/docs/network/icmp"},next:{title:"TCP",permalink:"/docs/network/tcp"}},c={},i=[{value:"0.9 - \u5355\u884c\u534f\u8bae",id:"09---\u5355\u884c\u534f\u8bae",level:2},{value:"1.0 - \u652f\u6301\u591a\u79cd\u6587\u4ef6",id:"10---\u652f\u6301\u591a\u79cd\u6587\u4ef6",level:2},{value:"HTTP/1.0 \u4e2d\uff0c\u6709\u8fd9\u4e48\u51e0\u4e2a\u9700\u8981\u6ce8\u610f\u7684\u95ee\u9898",id:"http10-\u4e2d\u6709\u8fd9\u4e48\u51e0\u4e2a\u9700\u8981\u6ce8\u610f\u7684\u95ee\u9898",level:4},{value:"1.1 - \u957f\u8fde\u63a5",id:"11---\u957f\u8fde\u63a5",level:2},{value:"\u590d\u7528 TCP \u8fde\u63a5",id:"\u590d\u7528-tcp-\u8fde\u63a5",level:3},{value:"\u5f15\u5165\u4e86\u5206\u5757\u4f20\u8f93",id:"\u5f15\u5165\u4e86\u5206\u5757\u4f20\u8f93",level:3},{value:"\u652f\u6301\u865a\u62df\u4e3b\u673a",id:"\u652f\u6301\u865a\u62df\u4e3b\u673a",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"2.0 - \u591a\u8def\u590d\u7528",id:"20---\u591a\u8def\u590d\u7528",level:2},{value:"HTTP2 \u7684\u5176\u4ed6\u7279\u6027",id:"http2-\u7684\u5176\u4ed6\u7279\u6027",level:3}],s={toc:i},u="wrapper";function T(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http"},"HTTP"),(0,a.kt)("p",null,"\u4e86\u89e3 HTTP \u534f\u8bae\u7684\u53d1\u5c55\uff0c\u5404\u5173\u952e\u7248\u672c\u7684\u4e00\u4e9b\u57fa\u672c\u77e5\u8bc6\u3002"),(0,a.kt)("h2",{id:"09---\u5355\u884c\u534f\u8bae"},"0.9 - \u5355\u884c\u534f\u8bae"),(0,a.kt)("p",null,"HTTP \u7684\u540d\u79f0 Hyper Text Transfer Protocol \u63cf\u8ff0\u4e86\u5176\u6700\u521d\u6ee1\u8db3\u7684\u9700\u6c42 \u2014\u2014 \u5728\u7f51\u7edc\u4e2d\u4f20\u8f93 HTML \u6587\u672c\u3002 \u6700\u65e9\u7684\u65f6\u5019\uff0cHTTP \u662f\u5f88\u7b80\u5355\u7684\uff0c\u53ea\u652f\u6301 GET \u8bf7\u6c42\uff0c\u53ea\u6709\u4e00\u884c\u8bf7\u6c42"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GET /mypage.html\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u7684 HTTP\uff0c\u662f\u4e2a\u201c\u5355\u884c\u534f\u8bae\u201d\uff0c\u4e00\u884c\u6587\u672c\uff0c\u5f88\u7eaf\u7cb9\u5730\u63cf\u8ff0\u4e86\u9700\u6c42\uff0c\u6211\u8981\u4e00\u4e2a HTML\uff0c\u4f60\u7ed9\u6211\u4e00\u4e2a HTML\uff0c\u4e0d\u903c\u903c\u3002\u4e0d\u8fc7\u867d\u7136 HTTP 0.9 \u7ed3\u6784\u7b80\u5355\uff0c\u4f46\u662f\u5df2\u7ecf\u7ea6\u5b9a\u4e86\u4f7f\u7528 C/S \u6a21\u5f0f\uff0c80 \u7aef\u53e3\uff0c\u57fa\u4e8e TCP \u7b49\uff0c\u8fd9\u4e9b\u662f\u4f20\u627f\u81f3\u4eca\u7684\u3002"),(0,a.kt)("h2",{id:"10---\u652f\u6301\u591a\u79cd\u6587\u4ef6"},"1.0 - \u652f\u6301\u591a\u79cd\u6587\u4ef6"),(0,a.kt)("p",null,"HTTP 1.0 \u6700\u6838\u5fc3\u7684\u9700\u6c42\u662f\u652f\u6301\u4e0d\u540c\u7c7b\u578b\u6587\u4ef6\u7684\u4e0b\u8f7d\uff0c\u901a\u8fc7\u5f15\u5165 Header\uff0c\u5b9e\u73b0\u4e86\u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u534f\u5546\uff0c\u901a\u8fc7\u5f15\u5165 Status Code\uff0c\u6982\u62ec\u4e86\u670d\u52a1\u5668\u7684\u5e94\u7b54\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u8bc6\u522b CSS \u548c JavaScript \u7b49\u4e0d\u540c\u7684\u6587\u4ef6\uff0c\u6dfb\u52a0\u4e86\u8bf7\u6c42\u5934\u90e8\u5206\u3002\u5728\u8bf7\u6c42\u5934\u4e2d\u5f15\u5165\u4e86 accept \u5b57\u6bb5\u4ee5\u63cf\u8ff0\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u662f\u4ec0\u4e48\u7c7b\u578b\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"accept: text/html\naccept-encoding: gzip, deflate, br\naccept-charset: utf-8\naccept-language: zh-CN,zh\n")),(0,a.kt)("p",null,"\u5728 accept \u7684\u57fa\u7840\u4e0a\uff0c\u53c8\u6dfb\u52a0\u4e86 accept-","*"," \u76f8\u5173\u7684\u5b57\u6bb5\uff0c\u5bf9\u6587\u4ef6\u63d0\u51fa\u4e86\u8fdb\u4e00\u6b65\u7684\u5185\u5bb9\u534f\u5546\u3002\u800c\u670d\u52a1\u5668\u5219\u901a\u8fc7 Content-Type \u7b49\u5b57\u6bb5\u8fdb\u884c\u8d44\u6e90\u63cf\u8ff0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"content-length: 3495\ncontent-encoding: br\ncontent-type: text/html; charset=utf-8\ncontent-language: en-US\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e9b\u8bf7\u6c42\u548c\u54cd\u5e94\u5934\u90e8\u7684\u5b57\u6bb5\uff0c\u5df2\u7ecf\u80fd\u591f\u5728 C\uff0cS \u4e4b\u95f4\u8fdb\u884c\u6587\u4ef6\u7684\u534f\u5546\u3002\u5728\u5ba2\u6237\u7aef\u63d0\u51fa\u5185\u5bb9\u534f\u5546\u540e\uff0c\u670d\u52a1\u5668\u4e0d\u4e00\u5b9a\u80fd\u591f\u6ee1\u8db3\u5ba2\u6237\u7aef\u7684\u8981\u6c42\uff0c\u4e8e\u662f\u63d0\u51fa Status Code \u6765\u5411\u5ba2\u6237\u7aef\u8868\u660e\u53d1\u751f\u4e86\u4ec0\u4e48\uff0c\u6bd4\u5982\u8bf4 accept-language \u7684\u8981\u6c42\u6211\u670d\u52a1\u5668\u5b9e\u5728\u505a\u4e0d\u5230\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7 406 \u6765\u8868\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Status Code: 406\n")),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u5176\u4ed6\u7684\u5f88\u591a\u91cd\u8981\u7684\u5b57\u6bb5\u5728 HTTP/1.0 \u4e5f\u5df2\u7ecf\u5b9a\u4e49\uff0c\u5982 User-Agent \u548c Server \u76f8\u4e92\u6c9f\u901a\u5404\u81ea\u7684\u4e00\u4e9b\u57fa\u672c\u4fe1\u606f\uff0cLocation \u544a\u8bc9\u5ba2\u6237\u7aef\u5728\u67d0\u79cd\u60c5\u51b5\u4e0b\u7684\u4e0b\u4e00\u6b65\u64cd\u4f5c\uff0cPragma\uff0cCache(If-Modified-Since\uff0cExpires) \u7b49\u5229\u7528\u7f13\u5b58\u8282\u7ea6\u6d41\u91cf\u3002"),(0,a.kt)("h4",{id:"http10-\u4e2d\u6709\u8fd9\u4e48\u51e0\u4e2a\u9700\u8981\u6ce8\u610f\u7684\u95ee\u9898"},"HTTP/1.0 \u4e2d\uff0c\u6709\u8fd9\u4e48\u51e0\u4e2a\u9700\u8981\u6ce8\u610f\u7684\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6bcf\u4e2a HTTP \u8bf7\u6c42\u5efa\u7acb\u72ec\u7acb TCP \u8fde\u63a5"),"\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHTTP/1.0 \u5bf9\u6bcf\u4e2a\u8d44\u6e90\u8bf7\u6c42\uff0c\u9700\u8981\u5efa\u7acb\u5355\u72ec\u7684 TCP \u8fde\u63a5\uff0c\u5f53\u9875\u9762\u4e2d\u7684\u8d44\u6e90\u6570\u81a8\u80c0\u65f6\uff0c\u5728 TCP \u8fde\u63a5\u548c\u65ad\u5f00\u8017\u8d39\u7684\u65f6\u95f4\u548c\u786c\u4ef6\u8d44\u6e90\u9700\u8981\u8003\u8651\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HTTP 1.0",src:n(4582).Z,width:"806",height:"245"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u53ea\u652f\u6301\u5b9a\u957f\u5305\u4f53"),"\uff1a\u670d\u52a1\u7aef\u9700\u8981\u6307\u5b9a Content-Length \u54cd\u5e94\u5934\uff0c\u6d4f\u89c8\u5668\u5c06\u6839\u636e\u8fd9\u4e2a\u5b57\u6bb5\u5224\u65ad\u6587\u4ef6\u4f55\u65f6\u4f20\u8f93\u5b8c\u6210\u3002\u5b9a\u957f\u5305\u4f53\u7684\u8981\u6c42\u610f\u5473\u7740\u5982\u679c\u8bf7\u6c42\u8981\u6c42\u538b\u7f29\uff0c\u670d\u52a1\u7aef\u9700\u8981\u5168\u90e8\u538b\u7f29\u5b8c\u6210\u4e4b\u540e\u624d\u80fd\u8fd4\u56de\u6570\u636e\uff0c\u8fd9\u5e26\u6765\u4e86\u65f6\u95f4\u548c\u6027\u80fd\u4e0a\u7684\u6d88\u8017\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u57df\u540d\u548c IP \u7ed1\u5b9a"),"\uff1a\u6bcf\u4e2a\u57df\u540d\u7ed1\u5b9a\u4e86\u552f\u4e00\u7684 IP\uff0c\u8bf7\u6c42\u65f6\u6ca1\u6709 Host \u7684\u6982\u5ff5\u3002"))),(0,a.kt)("h2",{id:"11---\u957f\u8fde\u63a5"},"1.1 - \u957f\u8fde\u63a5"),(0,a.kt)("p",null,"HTTP/1.1 \u662f\u5982\u4eca\u4ecd\u5728\u5e7f\u6cdb\u5f15\u7528\u7684\u7248\u672c\uff0c\u5176\u5bf9 HTTP/1.0 \u7684\u4e3b\u8981\u6539\u8fdb\u5982\u4e0b"),(0,a.kt)("h3",{id:"\u590d\u7528-tcp-\u8fde\u63a5"},"\u590d\u7528 TCP \u8fde\u63a5"),(0,a.kt)("p",null,"\u4e5f\u53eb\u6301\u4e45\u8fde\u63a5\u6216\u8005\u957f\u8fde\u63a5\u3002\u901a\u8fc7\u590d\u7528\u8fde\u63a5\uff0c\u51cf\u5c11\u4e86 TCP \u7684\u5efa\u7acb\u548c\u65ad\u5f00\u5e26\u6765\u7684\u6d88\u8017"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HTTP 1.1",src:n(9277).Z,width:"819",height:"262"})),(0,a.kt)("p",null,"\u4f46\u662f\u5728\u540c\u4e00\u4e2a TCP \u8fde\u63a5\u4e2d\uff0cHTTP \u8bf7\u6c42\u4ecd\u65e7\u662f\u4e32\u884c\u7684\uff0c\u8fd9\u5e26\u6765\u4e86 \u961f\u5934\u963b\u585e \u7684\u95ee\u9898\uff0c\u5982\u679c\u524d\u9762\u67d0\u4e2a\u8bf7\u6c42\u6ca1\u6709\u53ca\u65f6\u8fd4\u56de\uff0c\u6211\u540e\u9762\u7684\u4e5f\u6ca1\u6cd5\u73a9\u3002"),(0,a.kt)("p",null,"Chrome \u4e2d\u5bf9\u540c\u4e00\u4e2a\u57df\u540d\u4f7f\u7528 6 \u4e2a TCP \u5e76\u884c\u8fde\u63a5\uff0c\u6b63\u662f\u56e0\u4e3a \u961f\u5934\u963b\u585e \u95ee\u9898\u3002\u672c\u6765\u91c7\u7528\u6301\u4e45\u8fde\u63a5\u5c31\u662f\u4e3a\u4e86\u51cf\u5c11 TCP \u8fde\u63a5\uff0c\u800c\u6700\u540e\u5374\u4ecd\u9700\u8981\u91c7\u7528\u591a TCP \u8fde\u63a5\u6765\u89e3\u51b3\u6548\u7387\u95ee\u9898\uff0c\u8fd9\u5e76\u4e0d\u5b8c\u7f8e\u3002"),(0,a.kt)("h3",{id:"\u5f15\u5165\u4e86\u5206\u5757\u4f20\u8f93"},"\u5f15\u5165\u4e86\u5206\u5757\u4f20\u8f93"),(0,a.kt)("p",null,"HTTP/1.1 \u5f15\u5165\u4e86 \u5206\u5757\u4f20\u8f93(Chunk Transfer)\u673a\u5236\u6765\u89e3\u51b3\u52a8\u6001\u751f\u6210\u5185\u5bb9\uff0c\u5927\u6587\u4ef6\u4f20\u8f93\u7b49\u65b9\u9762\u7684\u95ee\u9898\u3002Chunk Transer \u673a\u5236\uff0c\u5141\u8bb8\u670d\u52a1\u5668\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u5757\uff0c\u8fd9\u4e2a\u65f6\u5019\u4f20\u8f93\u7684 HTTP \u5305\uff0c\u79f0\u4e3a \u4e0d\u5b9a\u957f\u5305\u4f53\uff0c\u6253\u4e2a\u6bd4\u65b9\u6765\u8bf4"),(0,a.kt)("p",null,"\u5b9a\u957f\u5305\u4f53\u4f20\u8f93\u662f\u76f4\u63a5\u544a\u8bc9\u4f60\u957f\u5ea6\u662f\u591a\u5c11\uff0c\u4f60\u5c31\u7167\u7740\u63a5\u6536\u5c31\u597d\n\u4e0d\u5b9a\u957f\u5305\u4f53\uff0c\u5206\u5757\u4f20\u8f93\u662f\u8ba9\u4f60\u5148\u63a5\u6536\u7740\uff0c\u5230\u7ed3\u675f\u7684\u65f6\u5019\u6211\u4f1a\u544a\u8bc9\u4f60\u7684\n\u5206\u5757\u4f20\u8f93\uff0c\u901a\u8fc7\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding"},"Transer-Encoding")," \u6307\u660e\u4f7f\u7528\u5206\u5757\u4f20\u8f93\u65b9\u5f0f\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u4e0d\u5fc5\u5728\u54cd\u5e94\u65f6\u6307\u5b9a Content-Length \u4e86\uff0c\u53ef\u4ee5\u8fb9\u538b\u7f29\u8fb9\u4f20\u8f93\uff0c\u5927\u6587\u4ef6\u4e5f\u53ef\u4ee5\u62c6\u5f00\u4e86\u3002\u4ee5\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u770b\u4e00\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const express = require("express");\nconst app = express();\nconst port = 3000;\n\napp.get("/", (req, res) => {\n  res.setHeader("Transfer-Encoding", "chunked");\n  let text = "Hello Wolrd";\n  for (let i = 0, len = text.length; i < len; i++) {\n    res.write(text.charAt(i) + "\\n");\n  }\n  res.end();\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening at http://localhost:${port}`);\n});\n')),(0,a.kt)("p",null,"\u4ece WireShark \u53ef\u4ee5\u770b\u5230\u5728\u8fd4\u56de\u4e2d\u5206\u6210\u4e86\u4e00\u5757\u5757\u7684\u6570\u636e\uff0c\u6700\u540e\u518d\u5408\u5e76\u8d77\u6765\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(2351).Z},"Chunk \u4f20\u8f93")),(0,a.kt)("h3",{id:"\u652f\u6301\u865a\u62df\u4e3b\u673a"},"\u652f\u6301\u865a\u62df\u4e3b\u673a"),(0,a.kt)("p",null,"\u4e0d\u518d\u8981\u6c42\u57df\u540d\u548c IP \u7684\u4e00\u4e00\u5bf9\u5e94\u5173\u7cfb\uff0c\u4e00\u4e2a\u670d\u52a1\u5668\u53ef\u4ee5\u652f\u6301\u591a\u4e2a\u57df\u540d\uff0c\u5982\u4eca\u6211\u4eec\u5df2\u7ecf\u5f53\u505a\u81ea\u7136\u800c\u7136\u7684 Web \u670d\u52a1\u5668\u865a\u62df\u4e3b\u673a\u7684\u914d\u7f6e\uff0c\u662f\u5728 1.1 \u624d\u6dfb\u52a0\u7684\u3002"),(0,a.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("p",null,"\u5f15\u5165\u4e86 Cookie\n\u62d3\u5c55\u4e86\u7f13\u5b58\u76f8\u5173\u5b57\u6bb5"),(0,a.kt)("h2",{id:"20---\u591a\u8def\u590d\u7528"},"2.0 - \u591a\u8def\u590d\u7528"),(0,a.kt)("p",null,"HTTP/1.1 \u957f\u8fde\u63a5\u7684\u961f\u5934\u963b\u585e\u95ee\u9898\uff0c\u662f\u56e0\u4e3a\u5728\u4e00\u4e2a TCP \u8fde\u63a5\u4e2d HTTP \u8bf7\u6c42\u53ea\u80fd\u4e32\u884c\u6267\u884c\uff0c\u7531\u4e8e\u8fd9\u4e2a\u95ee\u9898\uff0cChrome \u7b49\u91c7\u7528\u4e86\u591a TCP \u8fde\u63a5\u7684\u65b9\u5f0f\u3002\u90a3\u4e48\uff0c\u6211\u4eec\u81ea\u7136\u5c31\u80fd\u60f3\u5230\uff0c\u5982\u679c\u5141\u8bb8\u5728\u4e00\u4e2a TCP \u4e2d\u5e76\u53d1\u6267\u884c HTTP \u8bf7\u6c42\uff0c\u662f\u5426\u5c31\u80fd\u89e3\u51b3\u963b\u585e\u95ee\u9898\uff0c\u662f\u5426\u5c31\u53ef\u4ee5\u4e0d\u518d\u9700\u8981\u591a TCP \u8fde\u63a5\uff1f\u8fd9\u5c31\u662f HTTP/2.0 \u7684\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e00\u4e2a\u57df\u540d\u53ea\u4f7f\u7528\u4e00\u4e2a TCP \u957f\u8fde\u63a5\uff0c\u5e76\u4e14\u901a\u8fc7\u591a\u8def\u590d\u7528\u6d88\u9664\u963b\u585e\u95ee\u9898")),(0,a.kt)("p",null,"\u5982\u4e0b\u6240\u793a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4e8c\u8fdb\u5236\u5206\u5e27\u5c42",src:n(9681).Z,width:"341",height:"175"})),(0,a.kt)("p",null,"\u56fe\u6e90\u8c37\u6b4c\u5f00\u53d1\u8005\u7f51\u7ad9"),(0,a.kt)("p",null,"\u901a\u8fc7\u5f15\u5165",(0,a.kt)("strong",{parentName:"p"},"\u4e8c\u8fdb\u5236\u5206\u5e27\u5c42"),"\uff0c\u5c06\u4f20\u8f93\u7684 HTTP \u5305\u5206\u6210\u4e86\u66f4\u5c0f\u7684\u5e27\uff0c\u91c7\u7528\u4e8c\u8fdb\u5236\u8fdb\u884c\u7f16\u7801\u3002\u6bcf\u4e2a\u5e27\u90fd\u6807\u8bb0\u4e86\u6240\u5c5e HTTP \u8bf7\u6c42\u7684 ID\uff0c\u7136\u540e\u901a\u8fc7\u5efa\u7acb\u7684\u901a\u9053\u8fdb\u884c",(0,a.kt)("strong",{parentName:"p"},"\u4ea4\u9519\u53d1\u9001"),"\u3002"),(0,a.kt)("p",null,"\u670d\u52a1\u7aef\u63a5\u6536\u5230\u591a\u4e2a\u8bf7\u6c42\u540e\uff0c\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u7684\u4f18\u5148\u7ea7\u8bbe\u7f6e\uff0c\u6709\u9009\u62e9\u5730\u51b3\u5b9a\u5148\u8fd4\u56de\u54ea\u4e9b\u5185\u5bb9\u3002\u800c\u6d4f\u89c8\u5668\u63a5\u6536\u5230\u4fe1\u606f\u77e5\u4e4e\uff0c\u6839\u636e ID \u7b5b\u9009\uff0c\u5c06\u5185\u5bb9\u62fc\u63a5\u4e3a\u5b8c\u6574\u7684 HTTP \u54cd\u5e94\u6570\u636e\u3002"),(0,a.kt)("h3",{id:"http2-\u7684\u5176\u4ed6\u7279\u6027"},"HTTP2 \u7684\u5176\u4ed6\u7279\u6027"),(0,a.kt)("p",null,"\u8bf7\u6c42\u4f18\u5148\u7ea7\u8bbe\u7f6e\uff1a\u652f\u6301\u8bbe\u7f6e\u8bf7\u6c42\u4f18\u5148\u7ea7\uff0c\u8ba9\u670d\u52a1\u5668\u4f18\u5148\u5904\u7406\u9ad8\u4f18\u8bf7\u6c42\u3002\n\u670d\u52a1\u7aef\u63a8\u9001\uff1a\u652f\u6301\u5c06\u6570\u636e\u4e3b\u52a8\u63a8\u9001\u5230\u6d4f\u89c8\u5668\u3002\n\u5934\u90e8\u538b\u7f29\uff1aHTTP/2.0 \u5bf9\u8bf7\u6c42\u5934\u548c\u54cd\u5e94\u5934\u8fdb\u884c\u4e86\u538b\u7f29\u3002"))}T.isMDXComponent=!0},2351:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/chunk-3d1be1f9e81c99b862ea3bae6b457627.jpg"},9681:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/binary-framing-layer-a0117cf17280381d6cfddf62ed6850bc.svg"},9277:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/http-1-1-d03f062f76eb0225315540ae3e437809.jpg"},4582:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/http-1-1b0502e1bebfef98888257f2b1434852.jpg"}}]);