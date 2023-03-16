"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3867],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||c;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const c={},i="compileToFunctions",a={unversionedId:"frameworks/vue2/compiler/compile-to-functions",id:"frameworks/vue2/compiler/compile-to-functions",title:"compileToFunctions",description:"\u5728 codegen \u4e4b\u540e\uff0c\u6700\u540e\u505a\u7684\u4e8b\u60c5\uff0c\u662f\u63d0\u4f9b\u65b9\u6cd5\u53bb\u4f7f\u7528\u7f16\u8bd1\u7684\u7ed3\u679c\uff0c\u8fd9\u5c31\u662f compileToFunctions \u505a\u7684\u4e8b\u60c5\u3002",source:"@site/docs/05-frameworks/02-vue2/02-compiler/06-compile-to-functions.md",sourceDirName:"05-frameworks/02-vue2/02-compiler",slug:"/frameworks/vue2/compiler/compile-to-functions",permalink:"/docs/frameworks/vue2/compiler/compile-to-functions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/02-compiler/06-compile-to-functions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"vue2",previous:{title:"codegen",permalink:"/docs/frameworks/vue2/compiler/codegen"},next:{title:"qa",permalink:"/docs/frameworks/vue2/compiler/qa"}},s={},l=[{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compiletofunctions"},"compileToFunctions"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," \u4e4b\u540e\uff0c\u6700\u540e\u505a\u7684\u4e8b\u60c5\uff0c\u662f\u63d0\u4f9b\u65b9\u6cd5\u53bb\u4f7f\u7528\u7f16\u8bd1\u7684\u7ed3\u679c\uff0c\u8fd9\u5c31\u662f compileToFunctions \u505a\u7684\u4e8b\u60c5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function compileToFunctions(compile) {\n  // ...\n  const compiled = compile(template, options);\n\n  // turn code into functions\n  const res = {};\n  const fnGenErrors = [];\n  res.render = createFunction(compiled.render, fnGenErrors);\n  res.staticRenderFns = compiled.staticRenderFns.map((code) => {\n    return createFunction(code, fnGenErrors);\n  });\n\n  // ...\n  return (cache[key] = res);\n}\n\nfunction createFunction(code, errors) {\n  try {\n    return new Function(code);\n  } catch (err) {\n    errors.push({ err, code });\n    return noop;\n  }\n}\n")),(0,o.kt)("p",null,"\u5728 codegen \u73af\u8282\u6211\u4eec\u77e5\u9053 ",(0,o.kt)("inlineCode",{parentName:"p"},"compiled")," \u662f\u7c7b\u4f3c\u4e0b\u9762\u8fd9\u6837\u7684\u4e00\u4e2a\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  render: "with(this){return _m(0)}",\n  staticRenderFns: [\n    "with(this){return _c(\'div\',{staticClass:\\"header\\"},[_v(\\"hello \\"),_c(\'span\',[_v(\\"world\\")])])}"\n  ]\n}\n')),(0,o.kt)("p",null,"compileToFunctions \u5c31\u662f\u8c03\u7528 new Function \u5c06\u8fd9\u4e24\u4e2a\u5185\u5bb9\u8f6c\u6362\u6210\u51fd\u6570\uff0c\u8fd9\u6837 staticRenderFns \u624d\u540d\u526f\u5176\u5b9e\uff0c\u662f fns \u800c\u4e0d\u662f\u5b57\u7b26\u4e32\u6570\u7ec4\u4e86\u3002"),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u76f4\u89c2\u770b\u4e00\u4e0b\u63d0\u4f9b\u7ed9\u540e\u9762\u7528\u7684\u662f\u4e2a\u4ec0\u4e48\u7ed3\u6784\u5427"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  render: function anonymous() {\n    with(this) {\n      return _m(0)\n    }\n  },\n  staticRenderFns: [\n    function anonymous() {\n      with(this){\n        return _c(\'div\',{staticClass:"header"},[_v("hello "),_c(\'span\',[_v("world")])])}\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"\u6700\u7ec8\uff0c\u7f16\u8bd1\u4e4b\u540e\u63d0\u4f9b\u7ed9\u5916\u90e8\u4f7f\u7528\u7684\u51fd\u6570\u662f compileToFunctions \u8fd4\u56de\u7684 render \u51fd\u6570\u548c staticRenderFns \u51fd\u6570\u6570\u7ec4\uff0c\u901a\u8fc7\u8fd9\u4e9b\u4e2d\u95f4\u4ee3\u7801\uff0c\u80fd\u591f\u63cf\u8ff0 template \u7684\u5b8c\u6574\u529f\u80fd\uff0c\u8fd9\u4e24\u4e2a\u5728\u540e\u9762\u7684\u6e32\u67d3\u8fc7\u7a0b\u4f7f\u7528\u3002"))}m.isMDXComponent=!0}}]);