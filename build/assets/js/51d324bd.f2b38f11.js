"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),h=a,g=u["".concat(o,".").concat(h)]||u[h]||d[h]||s;return n?r.createElement(g,p(p({ref:t},c),{},{components:n})):r.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,p=new Array(s);p[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,p[1]=l;for(var i=2;i<s;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const s={},p="\u4f9d\u8d56\u6536\u96c6",l={unversionedId:"frameworks/vue2/reactivity/collect-deps",id:"frameworks/vue2/reactivity/collect-deps",title:"\u4f9d\u8d56\u6536\u96c6",description:"\u4f9d\u8d56\u6536\u96c6\uff0c\u5c31\u662f\u5728\u4f7f\u7528\u67d0\u4e2a\u53d8\u91cf\u7684\u65f6\u5019\uff0c\u8fdb\u884c\u767b\u8bb0\uff0c\u5728\u8be5\u53d8\u91cf\u66f4\u65b0\u540e\uff0c\u901a\u77e5\u5230\u5bf9\u5e94\u7684\u4f7f\u7528\u8005\u3002 \u8fd9\u4e2a\u767b\u8bb0\u662f\u5728\u53d8\u91cf\u81ea\u8eab\uff0c\u800c\u975e\u4f7f\u7528\u65b9\uff0c\u5177\u4f53\u8fc7\u7a0b\u5728 defineReactive \u4e2d\u5b9a\u4e49\u7684 getter\u3002",source:"@site/docs/05-frameworks/02-vue2/04-reactivity/03-collect-deps.md",sourceDirName:"05-frameworks/02-vue2/04-reactivity",slug:"/frameworks/vue2/reactivity/collect-deps",permalink:"/docs/frameworks/vue2/reactivity/collect-deps",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/04-reactivity/03-collect-deps.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"vue2",previous:{title:"\u6570\u636e\u521d\u59cb\u5316",permalink:"/docs/frameworks/vue2/reactivity/data"},next:{title:"\u6d3e\u53d1\u66f4\u65b0",permalink:"/docs/frameworks/vue2/reactivity/dispatch-update"}},o={},i=[{value:"\u524d\u7f6e\u5185\u5bb9",id:"\u524d\u7f6e\u5185\u5bb9",level:2},{value:"Dep",id:"dep",level:2},{value:"Watcher",id:"watcher",level:2},{value:"\u6536\u96c6\u8fc7\u7a0b",id:"\u6536\u96c6\u8fc7\u7a0b",level:2},{value:"Dep.target",id:"deptarget",level:3},{value:"Observer &amp; Dep &amp; Watcher",id:"observer--dep--watcher",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:i},u="wrapper";function d(e){let{components:t,...s}=e;return(0,a.kt)(u,(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f9d\u8d56\u6536\u96c6"},"\u4f9d\u8d56\u6536\u96c6"),(0,a.kt)("p",null,"\u4f9d\u8d56\u6536\u96c6\uff0c\u5c31\u662f\u5728\u4f7f\u7528\u67d0\u4e2a\u53d8\u91cf\u7684\u65f6\u5019\uff0c\u8fdb\u884c\u767b\u8bb0\uff0c\u5728\u8be5\u53d8\u91cf\u66f4\u65b0\u540e\uff0c\u901a\u77e5\u5230\u5bf9\u5e94\u7684\u4f7f\u7528\u8005\u3002 \u8fd9\u4e2a\u767b\u8bb0\u662f\u5728\u53d8\u91cf\u81ea\u8eab\uff0c\u800c\u975e\u4f7f\u7528\u65b9\uff0c\u5177\u4f53\u8fc7\u7a0b\u5728 defineReactive \u4e2d\u5b9a\u4e49\u7684 getter\u3002"),(0,a.kt)("p",null,"\u5176\u5b9e\u5427\uff0c\u7406\u89e3\u4e3a\u6ce8\u518c\u56de\u8c03\u5c31\u884c\u3002"),(0,a.kt)("h2",{id:"\u524d\u7f6e\u5185\u5bb9"},"\u524d\u7f6e\u5185\u5bb9"),(0,a.kt)("p",null,"\u5728 data \u521d\u59cb\u5316\u65f6\uff0c\u5bf9\u4e8e Object \u7c7b\u578b\u7684\u5c5e\u6027\uff0c\u4f1a\u8c03\u7528 defineReactive \u5bf9\u6bcf\u4e2a\u5c5e\u6027\u5b9a\u4e49 getter/setter\uff0c\u4ee5\u8fdb\u884c\u4f9d\u8d56\u6536\u96c6\u548c\u66f4\u65b0\u6d3e\u53d1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"walk (obj: Object) {\n  const keys = Object.keys(obj)\n  for (let i = 0; i < keys.length; i++) {\n    defineReactive(obj, keys[i])\n  }\n}\n\nexport function defineReactive (\n  obj: Object,\n  key: string,\n  val: any,\n  customSetter?: ?Function,\n  shallow?: boolean\n) {\n  const dep = new Dep()\n\n  const property = Object.getOwnPropertyDescriptor(obj, key)\n  if (property && property.configurable === false) {\n    return\n  }\n\n  // cater for pre-defined getter/setters\n  const getter = property && property.get\n  const setter = property && property.set\n  if ((!getter || setter) && arguments.length === 2) {\n    val = obj[key]\n  }\n\n  let childOb = !shallow && observe(val)\n  Object.defineProperty(obj, key, {\n    enumerable: true,\n    configurable: true,\n    get: function reactiveGetter () {\n      const value = getter ? getter.call(obj) : val\n      if (Dep.target) {\n        dep.depend()\n        if (childOb) {\n          childOb.dep.depend()\n          if (Array.isArray(value)) {\n            dependArray(value)\n          }\n        }\n      }\n      return value\n    },\n    set: function reactiveSetter (newVal) {\n      // ...\n    }\n  })\n}\n")),(0,a.kt)("p",null,"getter \u51fd\u6570\u5b9e\u73b0\u4f9d\u8d56\u6536\u96c6\u7684\u8fc7\u7a0b\uff0c\u5728\u8bf4\u660e getter \u65f6\uff0c\u9700\u8981\u4ece Dep \u8bb2\u8d77\u3002"),(0,a.kt)("h2",{id:"dep"},"Dep"),(0,a.kt)("p",null,"Dep \u662f\u4f9d\u8d56\u7684\u610f\u601d\uff0c\u5b9a\u4e49\u5728 src/core/observer/dep.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import type Watcher from "./watcher";\nimport { remove } from "../util/index";\nimport config from "../config";\n\nlet uid = 0;\n\n/**\n * A dep is an observable that can have multiple\n * directives subscribing to it.\n */\nexport default class Dep {\n  static target: ?Watcher;\n  id: number;\n  subs: Array<Watcher>;\n\n  constructor() {\n    this.id = uid++;\n    this.subs = [];\n  }\n\n  addSub(sub: Watcher) {\n    this.subs.push(sub);\n  }\n\n  removeSub(sub: Watcher) {\n    remove(this.subs, sub);\n  }\n\n  depend() {\n    if (Dep.target) {\n      Dep.target.addDep(this);\n    }\n  }\n\n  notify() {\n    // stabilize the subscriber list first\n    const subs = this.subs.slice();\n    if (process.env.NODE_ENV !== "production" && !config.async) {\n      // subs aren\'t sorted in scheduler if not running async\n      // we need to sort them now to make sure they fire in correct\n      // order\n      subs.sort((a, b) => a.id - b.id);\n    }\n    for (let i = 0, l = subs.length; i < l; i++) {\n      subs[i].update();\n    }\n  }\n}\n\n// The current target watcher being evaluated.\n// This is globally unique because only one watcher\n// can be evaluated at a time.\nDep.target = null;\nconst targetStack = [];\n\nexport function pushTarget(target: ?Watcher) {\n  targetStack.push(target);\n  Dep.target = target;\n}\n\nexport function popTarget() {\n  targetStack.pop();\n  Dep.target = targetStack[targetStack.length - 1];\n}\n')),(0,a.kt)("p",null,"\u5728\u6784\u9020\u51fd\u6570\u4e2d\uff0c\u6709\u4e00\u4e2a id \u4f5c\u4e3a\u552f\u4e00\u6807\u8bc6\uff0c\u7136\u540e\u5c31\u662f subs \u8ba2\u9605\u8005\u6570\u7ec4\uff0csubs \u6570\u7ec4\u91cc\u9762\u7684\u6bcf\u4e2a\u5143\u7d20\u662f Watcher \u7c7b\u578b\uff0c\u5176\u5b9e\u5c31\u662f\u8ba2\u9605\u8005\u3002addSub\uff0cremoveSub \u7684\u529f\u80fd\u4e00\u76ee\u4e86\u7136\u4e86\uff0cnotify \u7684\u610f\u601d\u4e5f\u5f88\u660e\u786e\uff0c\u5c31\u662f\u901a\u77e5\u8ba2\u9605\u8005\u66f4\u65b0\uff0c\u6bd4\u8f83\u96be\u7406\u89e3\u7684\u662f depend \u65b9\u6cd5\uff0c\u5728\u7528\u5230\u65f6\u518d\u8bf4\u660e\u3002"),(0,a.kt)("p",null,"targetStack \u4e2d\u6bcf\u4e2a\u5143\u7d20\u662f\u4e00\u4e2a Watcher \u7c7b\u578b\u5b9e\u4f8b\uff0c\u901a\u8fc7 pushTarget \u548c popTarget \u6765\u7ef4\u62a4\u6808\uff0c\u800c Dep.target \u59cb\u7ec8\u6307\u5411\u8868\u793a\u6808\u9876\u7684\u5143\u7d20\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u53c8\u6d89\u53ca\u5230 Watcher \u4e86\uff0c\u524d\u9762\u5728\u4ecb\u7ecd Vue \u5b9e\u4f8b\u5316\u548c\u6e32\u67d3\u65f6\u7b80\u5355\u4ecb\u7ecd\u8fc7\uff0c\u4f46\u662f\u4ecd\u5e76\u672a\u6d89\u53ca\u5230\u5176\u6838\u5fc3\u529f\u80fd\uff0c\u73b0\u5728\u5c31\u5230\u4e86\u5fc5\u987b\u8981\u8fdb\u4e00\u6b65\u7406\u89e3 Watcher \u624d\u80fd\u7ee7\u7eed\u7684\u65f6\u5019\u4e86\u3002"),(0,a.kt)("h2",{id:"watcher"},"Watcher"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'export default class Watcher {\n  vm: Component;\n  // ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027\n\n  constructor(\n    vm: Component,\n    expOrFn: string | Function,\n    cb: Function,\n    options?: ?Object,\n    isRenderWatcher?: boolean\n  ) {\n    this.vm = vm;\n    if (isRenderWatcher) {\n      vm._watcher = this;\n    }\n    vm._watchers.push(this);\n    // options\n    if (options) {\n      this.deep = !!options.deep;\n      this.user = !!options.user;\n      this.lazy = !!options.lazy;\n      this.sync = !!options.sync;\n      this.before = options.before; // \u8fd9\u4e2a\u4e3a\u4ec0\u4e48\u4e0d\u5224\u65ad\u7c7b\u578b\u5462\n    } else {\n      this.deep = this.user = this.lazy = this.sync = false;\n    }\n    this.cb = cb;\n    this.id = ++uid; // uid for batching\n    this.active = true;\n    this.dirty = this.lazy; // for lazy watchers\n    this.deps = [];\n    this.newDeps = [];\n\n    this.depIds = new Set();\n    this.newDepIds = new Set();\n    this.expression =\n      process.env.NODE_ENV !== "production" ? expOrFn.toString() : "";\n    // parse expression for getter\n    if (typeof expOrFn === "function") {\n      this.getter = expOrFn;\n    } else {\n      this.getter = parsePath(expOrFn);\n      if (!this.getter) {\n        this.getter = noop;\n        process.env.NODE_ENV !== "production" &&\n          warn(\n            `Failed watching path: "${expOrFn}" ` +\n              "Watcher only accepts simple dot-delimited paths. " +\n              "For full control, use a function instead.",\n            vm\n          );\n      }\n    }\n    this.value = this.lazy ? undefined : this.get();\n  }\n\n  // ...\u6682\u65f6\u7701\u7565\u5176\u4ed6\u65b9\u6cd5\n}\n')),(0,a.kt)("p",null,"\u9996\u5148\u5224\u65ad isRenderWatcher \u5c06\u5f53\u524d\u5b9e\u4f8b\u4fdd\u5b58\u5230 vm.","_","watcher \u5c5e\u6027\u4e0a\uff0c\u540c\u65f6\u63a8\u5165 vm.","_","watchers \u6570\u7ec4\uff0c\u4ece\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230\uff0cvm \u4e0a\u9762\u53ef\u80fd\u4f1a\u7ed1\u5b9a\u591a\u4e2a watcher \u5b9e\u4f8b\uff0c\u800c\u53ea\u6709 vm.","_","watcher \u662f\u7279\u6b8a\u7684\u4e00\u4e2a\u3002"),(0,a.kt)("p",null,"Dep \u76f8\u5173\u7684\u5185\u5bb9\u6709\u597d\u51e0\u4e2a\uff0c\u662f\u91cd\u8981\u7684\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"this.deps = [];\nthis.newDeps = [];\n\nthis.depIds = new Set();\nthis.newDepIds = new Set();\n")),(0,a.kt)("p",null,"\u8fd9\u56db\u4e2a\u5c5e\u6027\uff0c\u5f88\u660e\u663e\u662f\u65b0\u65e7\u4e24\u7ec4\uff0c\u540e\u9762\u4f1a\u6709\u5927\u4f5c\u7528\uff0c\u63a5\u4e0b\u6765\u662f getter \u7684\u8bbe\u7f6e\uff0c\u8fd9\u4e2a\u5728\u4f7f\u7528\u5230\u65f6\u518d\u8fdb\u884c\u8bf4\u660e\uff0c\u6700\u540e\u662f\u8c03\u7528 get \u65b9\u6cd5\u521d\u59cb\u5316 value\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e Watcher \u7684\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u76f4\u63a5\u8bb2\u662f\u4e0d\u597d\u7406\u89e3\u7684\uff0c\u5728\u4f7f\u7528\u5230\u65f6\u8fdb\u884c\u8bf4\u660e\u3002"),(0,a.kt)("h2",{id:"\u6536\u96c6\u8fc7\u7a0b"},"\u6536\u96c6\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u9762\u7684\u4f8b\u5b50\u8fdb\u884c\u8bf4\u660e\uff0c\u5728\u6a21\u677f\u4e2d\u6709\u8fd9\u4e48\u4e00\u4e2a\u8282\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<div>message is: {{ message }}</div>\n")),(0,a.kt)("p",null,"\u5982\u4ee5\u4e0b\u8c03\u7528\u6808\u6240\u793a\uff0c\u521d\u6b21\u6e32\u67d3\u65f6\uff0c\u5728 new Watcher \u65f6\uff0c\u5728\u6784\u9020\u51fd\u6570\u4e2d\u4f1a\u8bbe\u7f6e vm.","_","watcher \u4e3a\u5f53\u524d\u5b9e\u4f8b\uff0c\u7136\u540e\u8c03\u7528 watcher.get \u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new Watcher",src:n(4388).Z,width:"2178",height:"1895"})),(0,a.kt)("p",null,"\u8c03\u7528 watcher.get \u65b9\u6cd5\uff0c\u5c31\u662f\u53bb\u6267\u884c update component \u7684\u8fc7\u7a0b\uff0c\u5728 render \u751f\u6210 VDOM \u7684\u8fc7\u7a0b\u4e2d\uff0c\u8fd9\u91cc\u793a\u4f8b\u4e2d\u7684\u6587\u672c\u5bf9\u5e94\u7684 vnode\uff0c\u5927\u6982\u957f\u8fd9\u6837"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  // ...\n  context: tag: undefined;\n  text: "message is: 123";\n  child: undefined;\n  // ...\u7701\u7565\n}\n')),(0,a.kt)("p",null,"\u5728\u751f\u6210 vnode \u7684\u8fc7\u7a0b\u4e2d\uff0ctext \u8282\u70b9\u7684\u8ba1\u7b97\u8981\u83b7\u53d6\u5230 message \u5c5e\u6027\u503c\uff0c\u8fd9\u4e2a\u65f6\u5019\u4f1a\u8c03\u7528\u5728 defineReactive \u91cc\u9762\u7ed9\u5c5e\u6027\u5b9a\u4e49\u7684 getter \u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65f6\u5019\u624d\u771f\u6b63\u8fdb\u5165\u5230\u4e86 \u4f9d\u8d56\u6536\u96c6 \u9636\u6bb5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function defineReactive (\n  obj: Object,\n  key: string,\n  val: any,\n  customSetter?: ?Function,\n  shallow?: boolean\n) {\n  const dep = new Dep()\n\n  const property = Object.getOwnPropertyDescriptor(obj, key)\n  if (property && property.configurable === false) {\n    return\n  }\n\n  // cater for pre-defined getter/setters\n  const getter = property && property.get\n  const setter = property && property.set\n  if ((!getter || setter) && arguments.length === 2) {\n    val = obj[key]\n  }\n\n  let childOb = !shallow && observe(val)\n  Object.defineProperty(obj, key, {\n    enumerable: true,\n    configurable: true,\n    get: function reactiveGetter () {\n      const value = getter ? getter.call(obj) : val\n      if (Dep.target) {\n        dep.depend()\n        if (childOb) {\n          childOb.dep.depend()\n          if (Array.isArray(value)) {\n            dependArray(value)\n          }\n        }\n      }\n      return value\n    },\n    set: function reactiveSetter (newVal) {\n      // ...\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\u5f53 Dep.target \u5224\u65ad\u4e3a\u771f\u7684\u65f6\u5019\u624d\u4f1a\u6267\u884c\u6536\u96c6\uff0c\u73b0\u5728\u53ea\u9700\u8981\u77e5\u9053 Dep.target \u6307\u5411\u5f53\u524d\u6b63\u5728\u6e32\u67d3\u7684\u7ec4\u4ef6\u5373\u53ef\uff0c\u540e\u9762\u518d\u8bf4\u660e\u4e3a\u4f55\u5982\u6b64\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7279\u522b\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5bf9\u4e8e\u53f6\u5b50\u5c5e\u6027\uff0c\u662f\u901a\u8fc7\u95ed\u5305\u7684\u5f62\u5f0f\u65b0\u751f\u6210\u4e86\u4e00\u4e2a dep\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u5bf9\u8c61\u672c\u8eab\u5df2\u7ecf\u8bbe\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"obj.__ob__.dep"))),(0,a.kt)("p",null,"\u5176\u5b9e\u8fd9\u4e5f\u4e0d\u96be\u7406\u89e3\uff0cobj.",(0,a.kt)("strong",{parentName:"p"},"ob"),".dep\uff0c\u7ef4\u62a4\u7684\u662f\u5bf9\u8c61\u672c\u8eab\u7684\u4f9d\u8d56\uff0c\u800c\u5177\u4f53\u5230\u5bf9\u8c61\u4e0a\u7684\u67d0\u4e00\u4e2a\u5c5e\u6027\uff0c\u6bcf\u4e2a\u5c5e\u6027\u90fd\u9700\u8981\u4e00\u4e2a dep \u53bb\u7ef4\u62a4\u5176\u4f9d\u8d56\uff0c\u5982\u679c\u90fd\u7ef4\u62a4\u5728 obj.",(0,a.kt)("strong",{parentName:"p"},"ob"),".dep \u4e0a\uff0c\u5c31\u9700\u8981\u989d\u5916\u518d\u7ef4\u62a4\u5c5e\u6027\u548c watcher \u7684\u5bf9\u5e94\u5173\u7cfb\u4e86"),(0,a.kt)("p",null,"\u7ee7\u7eed\u5f80\u4e0b\u770b\uff0cdepend \u7684\u8c03\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"depend () {\n  if (Dep.target) {\n    Dep.target.addDep(this)\n  }\n}\n")),(0,a.kt)("p",null,"addDep \u65b9\u6cd5\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"addDep (dep: Dep) {\n  const id = dep.id\n  if (!this.newDepIds.has(id)) {\n    this.newDepIds.add(id)\n    this.newDeps.push(dep)\n    if (!this.depIds.has(id)) {\n      dep.addSub(this)\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\u5728\u7406\u89e3\u4e0a\uff0c\u53ef\u4ee5\u7b80\u5316\u4e3a\u8fd9\u6837"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"watcher.newDeps.push(dep);\nwatcher.newDepIds.add(dep.id);\ndep.subs.push(watcher);\n")),(0,a.kt)("p",null,"\u90a3\u4e48 deps.subs \u5c31\u8bb0\u5f55\u4e86 message \u5c5e\u6027\u88ab\u8c01\u4f9d\u8d56\uff0c\u800c ","_","watcher.newDeps \u8bb0\u5f55\u4e86 watcher \u4f9d\u8d56\u4e86\u8c01\u3002\u5728 message \u88ab\u6539\u53d8\u65f6\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7 deps.subs \u53bb\u901a\u77e5\u8ba2\u9605\u65b9\uff0c\u800c\u5f53\u8ba2\u9605\u65b9\u81ea\u5df1\u6709\u4ec0\u4e48\u60f3\u6cd5\u7684\u65f6\u5019\uff0c\u4e5f\u53ef\u4ee5\u53d6\u6d88\u76f8\u5173\u7684\u8ba2\u9605\u3002"),(0,a.kt)("h3",{id:"deptarget"},"Dep.target"),(0,a.kt)("p",null,"\u901a\u8fc7\u5168\u5c40\u67e5\u627e pushTarget \u7684\u8c03\u7528\uff0c\u53d1\u73b0\u5728\u6e90\u7801\u4e2d ",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u6709\u5728\u6267\u884c watcher.get \u7684\u65f6\u5019\uff0cDep.target \u624d\u4e0d\u4e3a\u7a7a"),"\uff0c\u90a3\u4e48\u4ec0\u4e48\u65f6\u5019\u4f1a\u6267\u884c watcher.get \u65b9\u6cd5\u5462\uff1f\u2014\u2014 \u7ec4\u4ef6\u521d\u59cb\u5316 mountComponent \u7684\u65f6\u5019\u3002"),(0,a.kt)("p",null,"\u5728 mountComponent \u4e2d\uff0c\u6709\u8fd9\u6837\u4e00\u6bb5\u8c03\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'updateComponent = () => {\n  vm._update(vm._render(), hydrating);\n};\n\nnew Watcher(\n  vm,\n  updateComponent,\n  noop,\n  {\n    before() {\n      if (vm._isMounted && !vm._isDestroyed) {\n        callHook(vm, "beforeUpdate");\n      }\n    },\n  },\n  true /* isRenderWatcher */\n);\n')),(0,a.kt)("p",null,"\u5728 Watcher \u7684\u6784\u9020\u51fd\u6570\u4e2d\uff0c\u8c03\u7528\u4e86 get \u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'get () {\n  pushTarget(this)\n  let value\n  const vm = this.vm\n  try {\n    value = this.getter.call(vm, vm)\n  } catch (e) {\n    if (this.user) {\n      handleError(e, vm, `getter for watcher "${this.expression}"`)\n    } else {\n      throw e\n    }\n  } finally {\n    // "touch" every property so they are all tracked as\n    // dependencies for deep watching\n    if (this.deep) {\n      traverse(value)\n    }\n    popTarget()\n    this.cleanupDeps()\n  }\n  return value\n}\n')),(0,a.kt)("p",null,"watcher.get \u65b9\u6cd5\u7684\u6838\u5fc3\u529f\u80fd\u5c31\u662f\u6307\u5b9a\u4e0a\u4e0b\u6587\u8c03\u7528 getter\uff0cgetter \u5176\u5b9e\u662f","_","update \u65b9\u6cd5\uff0c\u5305\u542b\u4e86 VDOM \u751f\u6210\uff0cpatch \u7b49\u8fc7\u7a0b\uff0c\u5728\u8fd9\u4e2a\u6f2b\u957f\u7684\u8fc7\u7a0b\u4e2d\uff0cDep.target \u90fd\u662f\u5f53\u524d\u7684\u8fd9\u4e2a vm.","_","watcher\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u603b\u7ed3\u8d77\u6765\uff0c\u6e32\u67d3\u67d0\u4e2a\u7ec4\u4ef6\u65f6\uff0cDep.target \u59cb\u7ec8\u6307\u5411\u5f53\u524d\u6b63\u5728\u6e32\u67d3\u7684\u8fd9\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u5bf9\u5e94\u7684\u6e32\u67d3 watcher\uff0c\u5373 vm.","_","watcher")),(0,a.kt)("h2",{id:"observer--dep--watcher"},"Observer & Dep & Watcher"),(0,a.kt)("p",null,"\u8001\u5b9e\u8bf4\uff0cObserver, Dep \u548c Watcher \u8fd9\u51e0\u4e2a\u5185\u5bb9\uff0c\u6211\u89c9\u5f97\u505a\u533a\u5206\u662f\u6709\u4e00\u70b9\u96be\u5ea6\u7684\uff0c\u7a76\u7adf\u8be5\u5982\u4f55\u7406\u89e3\u548c\u533a\u5206\u8fd9\u51e0\u4f4d\u8001\u54e5\uff1f"),(0,a.kt)("p",null,"Observer \u4eff\u4f5b\u5728\u6697\u793a\u6211\u8fd9\u91cc\u50cf\u662f\u4e00\u4e2a \u89c2\u5bdf\u8005\u6a21\u5f0f \u5e94\u7528\uff0c\u800c Dep \u7684\u5b58\u5728\u53c8\u503e\u5411\u4e8e\u4e0d\u592a\u4e00\u6837\u7684 \u53d1\u5e03/\u8ba2\u9605 \u6a21\u5f0f\uff0c\u6211\u51b3\u5b9a\u4e0d\u7ea0\u7ed3\uff0c\u5c31\u5f53\u505a\u4e00\u4e2a\u5177\u6709\u8c03\u5ea6\u4e2d\u5fc3\u7684 \u53d1\u5e03/\u8ba2\u9605 (opens new window)\u5173\u7cfb\u5c31\u597d\u4e86\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Observer: \u53d1\u5e03\u8005"),(0,a.kt)("li",{parentName:"ul"},"Dep: \u8c03\u5ea6\u4e2d\u5fc3"),(0,a.kt)("li",{parentName:"ul"},"Watcher: \u8ba2\u9605\u8005")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e0b\u9762\u8fd9\u6837\u4e00\u4e2a data \u5bf9\u8c61\u800c\u8a00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'new Vue({\n  data() {\n    return {\n      obj: {\n        msg: "hahaha",\n      },\n    };\n  },\n  template: `<div class="header">\n    {{obj.msg}}\n  </div>`,\n}).$mount("#app");\n')),(0,a.kt)("p",null,"\u6536\u96c6\u4f9d\u8d56\u540e\u7ed3\u679c\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'obj: Object\n  msg: "hahaha"\n  __ob__: Observer\n    dep: Dep\n      id: 4\n      subs: Array(1)\n        0: Watcher {vm: Vue, deep: false, user: false, lazy: false, sync: false, \u2026}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"obj.ob is Observer"),(0,a.kt)("li",{parentName:"ul"},"obj.ob.dep is Dep"),(0,a.kt)("li",{parentName:"ul"},"obj.ob.dep.subs is Watcher array")),(0,a.kt)("p",null,"Observer \u5b9e\u4f8b\u5316\u7684\u65f6\u5019\uff0c\u8c03\u7528 defineReactive \u5b9a\u4e49\u4e86 getter/setter\uff0c\u5728\u6570\u636e\u66f4\u65b0\u4e4b\u540e\uff0c\u4ea4\u7ed9 Dep \u5904\u7406\uff0c\u7531 Dep \u8d1f\u8d23\u901a\u77e5\u5230 Watcher\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u8bf4\u5230\u4f9d\u8d56\u6536\u96c6\uff0c\u4e00\u4e2a\u6bd4\u8f83\u76f4\u63a5\u7684\u7406\u89e3\u662f\u8981\u786e\u8ba4\u201c\u7ec4\u4ef6\u4f9d\u8d56\u4e86\u54ea\u4e9b\u53d8\u91cf\u201d\uff0c\u800c\u5bf9\u4e8e\u66f4\u65b0\uff0c\u5219\u7406\u89e3\u4e3a\u201c\u7ec4\u4ef6\u4f9d\u8d56\u7684\u53d8\u91cf\u66f4\u65b0\u4e4b\u540e\uff0c\u5237\u65b0\u89c6\u56fe\u201d\uff0c\u8fd9\u4e0d\u80fd\u8bf4\u662f\u9519\u7684\uff0c\u4f46\u5728 Vue \u4e2d\uff0c\u8fd9\u6837\u7684\u7406\u89e3\u592a\u8fc7\u7b3c\u7edf\uff0c\u4e5f\u5e76\u4e0d\u80fd\u771f\u6b63\u628a\u63e1\u6570\u636e\u54cd\u5e94\u7684\u539f\u7406\u3002"),(0,a.kt)("p",null,"\u4f9d\u8d56\u6536\u96c6\uff0c\u5e94\u8be5\u662f\u4ece\u6570\u636e\u51fa\u53d1\uff0c\u4ece\u6bcf\u4e00\u4e2a\u53f6\u5b50\u5c5e\u6027\u53d8\u91cf\u51fa\u53d1\uff0c\u7814\u7a76\u201c\u5c5e\u6027\u88ab\u8c01\u4f9d\u8d56\u201d\u3002 \u6240\u8c13\u54cd\u5e94\u5f0f\uff0c\u662f\u8981\u5728\u6570\u636e\u53d8\u5316\u65f6\uff0c\u201c\u81ea\u52a8\u201d\u505a\u67d0\u4e9b\u4e8b\u60c5\uff0c\u6216\u8005\u8bf4\u901a\u77e5\u4f9d\u8d56\u65b9\uff0c\u5173\u5207\u70b9\u5728\u4e8e\u6570\u636e\uff0c\u800c\u975e\u7ec4\u4ef6\u6216\u8005\u89c6\u56fe\u3002"),(0,a.kt)("p",null,"\u4ece\u5c5e\u6027\u51fa\u53d1\uff0c\u5bf9\u6bcf\u4e2a\u5c5e\u6027\u8bbe\u7f6e getter\uff0c\u8bb0\u5f55\u88ab\u8c01\u8bbf\u95ee\u4e86\uff0c\u8fd9\u5bf9\u5e94\u4e86\u4f9d\u8d56\u6536\u96c6\uff0c\u800c setter \u5c31\u5bf9\u5e94\u4e86\u66f4\u65b0\u6d3e\u53d1\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e2a\u201c\u8c01\u201d\uff0c\u662f\u4ee5 Watcher \u7684\u5f62\u5f0f\u5b58\u5728\uff0c\u5e76\u4e0d\u662f\u8bf4\u201c\u5c5e\u6027\u88ab\u7ec4\u4ef6\u4f9d\u8d56\u201d\uff0c\u8fd9\u592a\u7b3c\u7edf\u3002"),(0,a.kt)("p",null,"Watcher\uff0c\u5bf9\u5e94\u7684\u53ef\u80fd\u662f\u89c6\u56fe\uff0c\u4e5f\u53ef\u80fd\u662f\u4e00\u4e2a Computed \u6216\u8005\u4e00\u4e2a Watch\u3002"))}d.isMDXComponent=!0},4388:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/watcher-get-d176b352ef23087f9a37947068fc00c0.jpg"}}]);