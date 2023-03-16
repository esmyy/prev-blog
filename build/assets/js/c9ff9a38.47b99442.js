"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6483],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,v=s["".concat(p,".").concat(m)]||s[m]||c[m]||o;return t?r.createElement(v,l(l({ref:n},i),{},{components:t})):r.createElement(v,l({ref:n},i))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d[s]="string"==typeof e?e:a,l[1]=d;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={},l="update",d={unversionedId:"frameworks/vue2/render/update",id:"frameworks/vue2/render/update",title:"update",description:"VDOM -> DOM",source:"@site/docs/05-frameworks/02-vue2/03-render/06-update.md",sourceDirName:"05-frameworks/02-vue2/03-render",slug:"/frameworks/vue2/render/update",permalink:"/docs/frameworks/vue2/render/update",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/03-render/06-update.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"vue2",previous:{title:"render",permalink:"/docs/frameworks/vue2/render/render"},next:{title:"createElement \u7684\u4f5c\u7528\u662f\u6839\u636e\u4e2d\u95f4\u4ee3\u7801\u751f\u6210 vnode",permalink:"/docs/frameworks/vue2/render/create-element"}},p={},u=[{value:"\u524d\u7f6e\u5185\u5bb9",id:"\u524d\u7f6e\u5185\u5bb9",level:2},{value:"vm._update",id:"vm_update",level:2},{value:"\u521d\u59cb\u5316\u548c\u66f4\u65b0",id:"\u521d\u59cb\u5316\u548c\u66f4\u65b0",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],i={toc:u},s="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update"},"update"),(0,a.kt)("p",null,"VDOM -> DOM"),(0,a.kt)("p",null,"update \u4e00\u822c\u6307\u6307\u7ec4\u4ef6\u66f4\u65b0\uff0c\u4f46\u672c\u6587\u5e76\u4e0d\u4e25\u683c\u9650\u5236\u4e8e\u7ec4\u4ef6\u66f4\u65b0\u3002 \u672c\u6587\u56f4\u7ed5 vm.","_","update \u51fd\u6570\uff0c\u5173\u6ce8\u7684\u662f\u4ece VDOM \u5230 DOM \u7684\u4e3b\u8981\u8fc7\u7a0b\uff0c\u8fd9\u5305\u542b\u4e86 initial \u548c update\u3002"),(0,a.kt)("h2",{id:"\u524d\u7f6e\u5185\u5bb9"},"\u524d\u7f6e\u5185\u5bb9"),(0,a.kt)("p",null,"\u6839\u636e ",(0,a.kt)("a",{parentName:"p",href:"/docs/frameworks/vue2/render/watcher"},"Watcher"),"\u4e2d\u7684\u8bf4\u660e\uff0cWatcher \u5b9e\u4f8b\u5316\u7684\u8fc7\u7a0b\u4f1a\u4e3b\u52a8\u8c03\u7528 updateComponent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"updateComponent = () => {\n  vm._update(vm._render(), hydrating);\n};\n")),(0,a.kt)("p",null,"updateComponent \u4f1a\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"vm._update"),"\uff0c\u8fd9\u662f VDOM \u8f6c\u6362\u6210 DOM \u6240\u5728\u3002"),(0,a.kt)("h2",{id:"vm_update"},"vm.","_","update"),(0,a.kt)("p",null,"\u5b9a\u4e49\u5728 src/core/instance/lifecycle.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {\n  const vm: Component = this;\n  const prevEl = vm.$el;\n  const prevVnode = vm._vnode;\n  const restoreActiveInstance = setActiveInstance(vm);\n  vm._vnode = vnode;\n  // Vue.prototype.__patch__ is injected in entry points\n  // based on the rendering backend used.\n  if (!prevVnode) {\n    // initial render\n    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);\n  } else {\n    vm.$el = vm.__patch__(prevVnode, vnode);\n  }\n  restoreActiveInstance();\n  // update __vue__ reference\n  if (prevEl) {\n    prevEl.__vue__ = null; // \u91ca\u653e\u5bf9\u65e7vm\u7684\u5f15\u7528\n  }\n  if (vm.$el) {\n    vm.$el.__vue__ = vm; // \u66f4\u65b0\u5bf9vm\u7684\u5f15\u7528\n  }\n  // if parent is an HOC, update its $el as well\n  if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {\n    vm.$parent.$el = vm.$el;\n  }\n  // updated hook is called by the scheduler to ensure that children are\n  // updated in a parent's updated hook.\n};\n")),(0,a.kt)("p",null,"\u9996\u5148\u7528 prevVnode \u4fdd\u5b58\u5bf9 vm.","_","vnode \u7684\u5f15\u7528\uff0c\u8fd9\u4e2a vm.","_","vnode \u662f\u7528\u6765\u6807\u8bb0\u662f\u5426\u5df2\u7ecf\u6e32\u67d3\u8fc7\uff0c\u5373\u662f update \u8fd8\u662f initial\uff0c\u5176\u8d4b\u503c\u7684\u4f4d\u7f6e prevVnode \u5b9a\u4e49\u7684\u4e0b\u65b9\uff0c\u56e0\u6b64\u521d\u6b21\u8fdb\u6765\u6267\u884c\u7684\u662f\u7b2c\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"patch"),"\uff0c\u7136\u540e\u4e0b\u9762\u66f4\u65b0\u4e86",(0,a.kt)("strong",{parentName:"p"},"vue"),"\u7684\u5f15\u7528\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u8fd8\u7528\u5230\u4e86 vm.$el\u4f5c\u4e3a patch \u7684\u53c2\u6570\uff0c\u5bf9\u4e8e\u6839\u8282\u70b9\uff0c\u5728 initial \u65f6\uff0c$el \u4f1a\u88ab\u8bbe\u7f6e\u4e3a el \u5c5e\u6027\u5bf9\u5e94\u7684 DOM \u5143\u7d20\uff0c\u800c\u5bf9\u4e8e\u5176\u4ed6\u8282\u70b9\uff0c\u5728 initial \u65f6\u4e3a undefined\u3002"),(0,a.kt)("p",null,"\u6700\u7ec8\u6267\u884c\u4e4b\u540e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'vm = {\n  $el: div.header { // DOM \u5bf9\u8c61\uff0c\u4ec5\u4f5c\u793a\u610f\n    innerHTML: "hello <span>world</span>"\n    innerText: "hello world"\n    className: "header"\n    outerHTML: "<div class=\\"header\\">hello <span>world</span></div>"\n    outerText: "hello world"\n    // ...\n  },\n  _vnode: {\n    asyncFactory: undefined\n    asyncMeta: undefined\n    children: (2) [\n      {\n        elm: text  // DOM \u5bf9\u8c61\uff0c\u4ec5\u4f5c\u793a\u610f\n        text: "hello "\n        ownerDocument: document // DOM \u5bf9\u8c61\uff0c\u4ec5\u4f5c\u793a\u610f\n        parentElement: div.header // DOM \u5bf9\u8c61\uff0c\u4ec5\u4f5c\u793a\u610f\n        parentNode: div.header // DOM \u5bf9\u8c61\uff0c\u4ec5\u4f5c\u793a\u610f\n        // ...\n      },\n      {\n        children: [{\n          elm: text  // DOM \u5bf9\u8c61\uff0c\u4ec5\u4f5c\u793a\u610f\n          text: "world"\n        }]\n        tag: "span"\n        elm: span  // DOM \u5bf9\u8c61\uff0c\u4ec5\u4f5c\u793a\u610f\n      }\n    ]\n    componentInstance: undefined\n    componentOptions: undefined\n    context: Vue {_uid: 0, _isVue: true, $options: {\u2026}, _renderProxy: Proxy, _self: Vue, \u2026}\n    data: {staticClass: "header"}\n    elm: div.header // \u6307\u5411\u6240\u5bf9\u5e94\u7684 DOM \u8282\u70b9\n    fnContext: undefined\n    fnOptions: undefined\n    fnScopeId: undefined\n    isAsyncPlaceholder: false\n    isCloned: false\n    isComment: false\n    isOnce: false\n    isRootInsert: true\n    isStatic: true\n    key: "__static__0"\n    ns: undefined\n    parent: undefined\n    raw: false\n    tag: "div"\n    text: undefined\n    child: (...)\n  }\n  // ...\n}\n')),(0,a.kt)("p",null,"\u6ce8\u610f\u6b64\u65f6\uff0c\u6240\u6709\u7684 VNode \u8282\u70b9\uff0c\u90fd\u751f\u6210\u4e86\u5bf9\u5e94\u7684 DOM \u5143\u7d20\uff0c\u800c\u4e14\u5df2\u7ecf\u5c06\u5c42\u7ea7\u7ba1\u7406\u5904\u7406\u597d\u4e86\u3002$el \u5373 ","_","vnode.elm\uff0c\u5c31\u662f\u6211\u4eec\u6574\u4e2a\u6a21\u677f\u5bf9\u5e94\u7684 DOM \u6811\u4e86\uff0c\u53ea\u9700\u8981 append \u5230\u9875\u9762\u4e0a\u5c31\u5b8c\u6210\u5c55\u793a\u4e86\u3002"),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u548c\u66f4\u65b0"},"\u521d\u59cb\u5316\u548c\u66f4\u65b0"),(0,a.kt)("p",null,"\u4e0d\u7ba1\u662f\u7ec4\u4ef6\u7b2c\u4e00\u6b21\u6e32\u67d3\uff0c\u8fd8\u662f\u7ec4\u4ef6\u66f4\u65b0\uff0c\u90fd\u662f\u8c03\u7528 vm.","_","update\uff0c\u4e5f\u90fd\u662f\u8c03\u7528 updateComponent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"updateComponent = () => {\n  vm._update(vm._render(), hydrating);\n};\n")),(0,a.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u7ec4\u4ef6\u66f4\u65b0\u65f6\uff0c\u4e5f\u662f\u5148\u521b\u5efa\u4e86\u65b0\u7684\u865a\u62df DOM \u6811\u7684\u3002 \u5e38\u8bf4\u7684 patch \u6216 diff\uff0c\u90fd\u662f\u57fa\u4e8e\u65b0\u8001\u865a\u62df DOM \u6811\uff0c\u57fa\u4e8e\u4e24\u4e2a VDOM \u7684\u6bd4\u8f83"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AST -> VDOM -> DOM\n")),(0,a.kt)("p",null,"\u6211\u4eec\u6240\u8bf4\u7684\u865a\u62df DOM \u7684\u597d\u5904\uff0c\u6539\u5584\u7684\u662f\u4ece VDOM \u5230 DOM \u7684\u8fc7\u7a0b\uff0c\u800c AST -> VDOM \u8fd9\u4e2a\u8fc7\u7a0b\u662f\u4e0d\u53ef\u5c11\u7684\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"update \u8d1f\u8d23\u6839\u636e VDOM \u751f\u6210 DOM\u3002 update \u5305\u542b\u4e86 \u521d\u59cb\u5316\u9009\u9879 \u548c \u66f4\u65b0 \u4e24\u79cd\u60c5\u51b5\uff0c\u521d\u59cb\u5316\u65f6\u4e3b\u52a8\u8c03\u7528\u4e86\u4e00\u6b21\uff0c\u6839\u636e\u4e0d\u540c\u60c5\u51b5\u91c7\u7528\u4e0d\u540c\u7684",(0,a.kt)("strong",{parentName:"p"},"patch"),"\u65b9\u5f0f\u6765\u66f4\u65b0$el\u3002"),(0,a.kt)("p",null,"update \u6df1\u5165\u8fd8\u6709 patch \u7b49\u591a\u5c42\u91cd\u8981\u7684\u5185\u5bb9\uff0c\u65e0\u6cd5\u5728\u6b64\u8bb2\u6e05\u695a\uff0c\u56e0\u6b64\u5355\u72ec\u8bb2\u89e3 patch\u3002"),(0,a.kt)("p",null,"\u81f3\u6b64\uff0c\u4ece template \u5f00\u59cb\uff0c\u7ecf\u5386\u4e86\u4ee5\u4e0b\u6d41\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"1. template(\u5b57\u7b26\u4e32)\n2. parse(\u751f\u6210AST)\n3. optimize(AST\u4f18\u5316)\n4. codegen(\u4e2d\u95f4\u4ee3\u7801\u751f\u6210)\n5. compileToFunctions(\u4e2d\u95f4\u4ee3\u7801\u8f6c\u5316\u4e3arender\u51fd\u6570)\n6. render(\u751f\u6210VDOM Tree)\n7. initial update(\u751f\u6210 DOM)\n")))}c.isMDXComponent=!0}}]);