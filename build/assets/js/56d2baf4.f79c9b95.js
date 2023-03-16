"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),i=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[p]="string"==typeof e?e:a,l[1]=r;for(var i=2;i<s;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>i});var o=n(7462),a=(n(7294),n(3905));const s={},l="\u6a21\u5757",r={unversionedId:"frameworks/vue2/vuex/module",id:"frameworks/vue2/vuex/module",title:"\u6a21\u5757",description:"\u672c\u6587\u8bf4\u660e Store \u5b9e\u4f8b\u5316\u8fc7\u7a0b\u4e2d\u7684 modules\uff0c\u56f4\u7ed5\u7740 modules \u7684\u5904\u7406\u8fc7\u7a0b\uff0c\u7406\u89e3 state, mutations, actions \u5404\u90e8\u5206\u7ec4\u6210\u5728\u5185\u90e8\u662f\u5982\u4f55\u6574\u5408\u7684\u3002",source:"@site/docs/05-frameworks/02-vue2/06-vuex/02-module.md",sourceDirName:"05-frameworks/02-vue2/06-vuex",slug:"/frameworks/vue2/vuex/module",permalink:"/docs/frameworks/vue2/vuex/module",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/06-vuex/02-module.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"vue2",previous:{title:"install",permalink:"/docs/frameworks/vue2/vuex/install"},next:{title:"API",permalink:"/docs/frameworks/vue2/vuex/api"}},u={},i=[{value:"\u672c\u6587\u4f8b\u5b50",id:"\u672c\u6587\u4f8b\u5b50",level:2},{value:"Store",id:"store",level:2},{value:"\u6a21\u5757\u6536\u96c6",id:"\u6a21\u5757\u6536\u96c6",level:2},{value:"\u6a21\u5757\u5b89\u88c5",id:"\u6a21\u5757\u5b89\u88c5",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,a.kt)("p",null,"\u672c\u6587\u8bf4\u660e Store \u5b9e\u4f8b\u5316\u8fc7\u7a0b\u4e2d\u7684 modules\uff0c\u56f4\u7ed5\u7740 modules \u7684\u5904\u7406\u8fc7\u7a0b\uff0c\u7406\u89e3 state, mutations, actions \u5404\u90e8\u5206\u7ec4\u6210\u5728\u5185\u90e8\u662f\u5982\u4f55\u6574\u5408\u7684\u3002"),(0,a.kt)("h2",{id:"\u672c\u6587\u4f8b\u5b50"},"\u672c\u6587\u4f8b\u5b50"),(0,a.kt)("p",null,"\u6839\u636e\u8fd9\u4e2a\u793a\u4f8b\u8fdb\u884c\u8bf4\u660e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const moduleA = {\n  state: () => ({\n    count: 0,\n  }),\n  mutations: {\n    increment(state) {\n      state.count++;\n    },\n  },\n\n  modules: {\n    aSub: {\n      state: () => ({\n        age: 0,\n      }),\n    },\n  },\n\n  actions: {\n    incrementAction(context) {\n      context.commit("increment");\n    },\n  },\n\n  getters: {\n    doubleCount(state) {\n      return state.count * 2;\n    },\n  },\n};\n\nconst moduleB = {\n  namespaced: true,\n  state: () => ({\n    nums: [],\n  }),\n\n  mutations: {\n    add(state, val) {\n      state.nums.push(val);\n    },\n  },\n\n  actions: {\n    addAction(context, val) {\n      context.commit("add", val);\n    },\n  },\n\n  getters: {\n    reversedNums(state) {\n      return state.nums.reverse();\n    },\n  },\n};\n\nconst store = new Vuex.Store({\n  state: () => ({\n    status: "open",\n  }),\n  mutations: {\n    toggleStatus(state, status) {\n      state.status = state.status === "open" ? "close" : "open";\n    },\n  },\n  modules: {\n    a: moduleA,\n    b: moduleB,\n  },\n});\n')),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u4e86 moduleB \u7684 namespaced \u4e3a true\uff0c\u8fd9\u4e2a\u5728\u540e\u9762\u6a21\u5757\u5b89\u88c5\u65f6\u4f1a\u6709\u91cd\u8981\u4f5c\u7528\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u4ece new Vuex.Store \u5b9e\u4f8b\u5316\u8fc7\u7a0b\u53bb\u770b modules \u7684\u5904\u7406\u3002"),(0,a.kt)("h2",{id:"store"},"Store"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'export class Store {\n  constructor(options = {}) {\n    // Auto install if it is not done yet and `window` has `Vue`.\n    // To allow users to avoid auto-installation in some cases,\n    // this code should be placed here. See #731\n    if (!Vue && typeof window !== "undefined" && window.Vue) {\n      install(window.Vue);\n    }\n\n    const { plugins = [], strict = false } = options;\n\n    // store internal state\n    this._committing = false;\n    this._actions = Object.create(null);\n    this._actionSubscribers = [];\n    this._mutations = Object.create(null);\n    this._wrappedGetters = Object.create(null);\n\n    this._modules = new ModuleCollection(options);\n    this._modulesNamespaceMap = Object.create(null);\n    this._subscribers = [];\n\n    this._watcherVM = new Vue();\n    this._makeLocalGettersCache = Object.create(null);\n\n    // bind commit and dispatch to self\n    const store = this;\n    const { dispatch, commit } = this;\n    this.dispatch = function boundDispatch(type, payload) {\n      return dispatch.call(store, type, payload);\n    };\n    this.commit = function boundCommit(type, payload, options) {\n      return commit.call(store, type, payload, options);\n    };\n\n    // strict mode\n    this.strict = strict;\n\n    const state = this._modules.root.state;\n\n    // init root module.\n    // this also recursively registers all sub-modules\n    // and collects all module getters inside this._wrappedGetters\n    installModule(this, state, [], this._modules.root);\n\n    // initialize the store vm, which is responsible for the reactivity\n    // (also registers _wrappedGetters as computed properties)\n    resetStoreVM(this, state);\n\n    // apply plugins\n    plugins.forEach((plugin) => plugin(this));\n\n    const useDevtools =\n      options.devtools !== undefined ? options.devtools : Vue.config.devtools;\n    if (useDevtools) {\n      devtoolPlugin(this);\n    }\n  }\n\n  // ...\u6682\u65f6\u7701\u7565\u5176\u4ed6\u65b9\u6cd5\n}\n')),(0,a.kt)("p",null,"\u6682\u4e0d\u5173\u6ce8\u90a3\u4e9b\u7a7a\u5bf9\u8c61\u5c5e\u6027\u7684\u521d\u59cb\u5316\uff0c\u4e3b\u8981\u53ef\u4ee5\u5206\u6210\u51e0\u4e2a\u5185\u5bb9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6a21\u5757\u6536\u96c6"),(0,a.kt)("li",{parentName:"ul"},"\u6a21\u5757\u5b89\u88c5"),(0,a.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u5f0f\u8bbe\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"commit \u548c dispatch \u7b49 API \u5b9a\u4e49")),(0,a.kt)("p",null,"\u672c\u6587\u5173\u6ce8\u6a21\u5757\u76f8\u5173\u7684\uff0c\u53ea\u8bb2\u524d\u4e24\u4e2a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u6a21\u5757\u6536\u96c6\nthis._modules = new ModuleCollection(options);\n\n// \u6a21\u5757\u5b89\u88c5\ninstallModule(this, state, [], this._modules.root);\n")),(0,a.kt)("h2",{id:"\u6a21\u5757\u6536\u96c6"},"\u6a21\u5757\u6536\u96c6"),(0,a.kt)("p",null,"\u6a21\u5757\u6536\u96c6\u5373\u4e0b\u9762\u8fd9\u884c\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"this._modules = new ModuleCollection(options);\n")),(0,a.kt)("p",null,"ModuleCollection \u5728 src/module/module-collection.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default class ModuleCollection {\n  constructor(rawRootModule) {\n    // register root module (Vuex.Store options)\n    this.register([], rawRootModule, false);\n  }\n\n  // ...\u8fd9\u91cc\u5148\u4e0d\u5c55\u793a\u65b9\u6cd5\uff0c\u4f7f\u7528\u65f6\u8bf4\u660e\n}\n")),(0,a.kt)("p",null,"rawRootModule \u5c31\u662f Store \u521d\u59cb\u5316\u65f6\u4f20\u5165\u7684 options\uff0cconstructor \u91cc\u9762\u8c03\u7528\u4e86 register \u51fd\u6570\u8fdb\u884c root module \u7684\u6ce8\u518c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default class ModuleCollection {\n  // ...\n\n  register(path, rawModule, runtime = true) {\n    if (__DEV__) {\n      assertRawModule(path, rawModule);\n    }\n\n    const newModule = new Module(rawModule, runtime);\n    if (path.length === 0) {\n      this.root = newModule;\n    } else {\n      const parent = this.get(path.slice(0, -1));\n      parent.addChild(path[path.length - 1], newModule);\n    }\n\n    // register nested modules\n    if (rawModule.modules) {\n      forEachValue(rawModule.modules, (rawChildModule, key) => {\n        this.register(path.concat(key), rawChildModule, runtime);\n      });\n    }\n  }\n\n  // ...\n}\n")),(0,a.kt)("p",null,"\u9996\u5148\u662f\u8c03\u7528 new Module \u8fdb\u884c\u5b9e\u4f8b\u5316\uff0c\u751f\u6210 root\uff0c\u5224\u65ad\u5982\u679c path.length \u4e3a 0 \u8bf4\u660e\u662f\u6839\u6a21\u5757\u521d\u59cb\u5316\uff0c\u8bbe\u7f6e root\uff0c\u800c\u5bf9\u4e8e\u5b50\u6a21\u5757\uff0c\u5219\u8bbe\u7f6e\u7236\u5b50\u6a21\u5757\u5173\u7cfb\u3002\u4e0b\u9762 if (rawModule.modules)\u5224\u65ad\u5982\u679c\u6709\u5d4c\u5957\u7684\u6a21\u5757\uff0c\u5bf9\u6bcf\u4e2a\u6a21\u5757\u518d\u6b21\u8c03\u7528 register \u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u5173\u6ce8 path \u7684\u503c\uff0c\u5728\u6839\u7ec4\u4ef6\u521d\u59cb\u5316\u65f6\u662f[]\uff0c\u5728\u5b50\u6a21\u5757\u7684\u521d\u59cb\u5316\u65f6\uff0c\u4f1a\u62fc\u63a5\u4e0a\u5b50\u6a21\u5757\u7684 key\uff0c\u6211\u4eec\u5728\u4e0b\u9762\u8bb2\u8ff0 Module \u7684\u65f6\u5019\u518d\u8bf4\u660e\uff0cpath \u4e0e \u7236\u5b50\u6a21\u5757\u8fde\u63a5\u7684\u5173\u7cfb\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u5173\u6ce8\u6838\u5fc3\u7684 new Module \u7684\u8fc7\u7a0b\uff0c\u5728 src/module/module.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { forEachValue } from "../util";\n\n// Base data struct for store\'s module, package with some attribute and method\nexport default class Module {\n  constructor(rawModule, runtime) {\n    this.runtime = runtime;\n    // Store some children item\n    this._children = Object.create(null);\n    // Store the origin module object which passed by programmer\n    this._rawModule = rawModule;\n    const rawState = rawModule.state;\n\n    // Store the origin module\'s state\n    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};\n  }\n\n  get namespaced() {\n    return !!this._rawModule.namespaced;\n  }\n\n  addChild(key, module) {\n    this._children[key] = module;\n  }\n\n  removeChild(key) {\n    delete this._children[key];\n  }\n\n  getChild(key) {\n    return this._children[key];\n  }\n\n  hasChild(key) {\n    return key in this._children;\n  }\n\n  update(rawModule) {\n    this._rawModule.namespaced = rawModule.namespaced;\n    if (rawModule.actions) {\n      this._rawModule.actions = rawModule.actions;\n    }\n    if (rawModule.mutations) {\n      this._rawModule.mutations = rawModule.mutations;\n    }\n    if (rawModule.getters) {\n      this._rawModule.getters = rawModule.getters;\n    }\n  }\n\n  forEachChild(fn) {\n    forEachValue(this._children, fn);\n  }\n\n  forEachGetter(fn) {\n    if (this._rawModule.getters) {\n      forEachValue(this._rawModule.getters, fn);\n    }\n  }\n\n  forEachAction(fn) {\n    if (this._rawModule.actions) {\n      forEachValue(this._rawModule.actions, fn);\n    }\n  }\n\n  forEachMutation(fn) {\n    if (this._rawModule.mutations) {\n      forEachValue(this._rawModule.mutations, fn);\n    }\n  }\n}\n')),(0,a.kt)("p",null,"\u5728 constructor \u91cc\u9762\u7684\u5904\u7406\u662f\u6bd4\u8f83\u7b80\u5355\u7684\uff0c\u53ea\u662f\u8bbe\u7f6e\u4e86 children\uff0c","_","rawModule \u548c state \u5b9e\u4f8b\u5c5e\u6027\uff0c\u5e76\u6ca1\u6709\u505a\u8fc7\u591a\u7684\u5904\u7406\uff0c\u7136\u540e\u63d0\u4f9b\u4e86\u975e\u5e38\u591a\u7684\u6a21\u5757\u64cd\u4f5c\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u5173\u952e\u7684\u5730\u65b9\u5728\u4e8e register \u91cc\u9762\u5bf9\u4e8e\u5b50\u6a21\u5757\u6ce8\u518c\u7684\u90a3\u90e8\u5206\u5904\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default class ModuleCollection {\n\nconst newModule = new Module(rawModule, runtime)\nif (path.length === 0) {\n  this.root = newModule\n} else {\n  const parent = this.get(path.slice(0, -1))\n  parent.addChild(path[path.length - 1], newModule)\n}\n")),(0,a.kt)("p",null,"\u5f53 aSub \u6a21\u5757\u521d\u59cb\u5316\u7684\u65f6\u5019 path \u662f",'["a", "aSub"]',"\uff0c\u8fd9\u4e2a\u65f6\u5019\u8fdb\u5165 else \u903b\u8f91 \u4f1a\u8c03\u7528 get \u65b9\u6cd5\u3002\u4ece root \u5f00\u59cb\uff0c\u6839\u636e path \u6765\u67e5\u627e\u5230 aSub \u6a21\u5757\u7684\u7236\u7ea7\u6a21\u5757\uff0c\u5373 moduleA\uff0c\u7136\u540e\u8c03\u7528 addChild \u5c06 aSub \u5bf9\u5e94\u7684 module \u5b9e\u4f8b\u6dfb\u52a0\u5230 moduleA.","_","children \u4e0a\u3002"),(0,a.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0cModuleCollection \u5904\u7406\u4e4b\u540e\uff0c\u6700\u7ec8 collect \u5f97\u5230\u7684\u7ed3\u679c\u793a\u610f\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  root: {\n    runtime: false\n    state: {\n      status: "open"\n    }\n    namespaced: false\n    _rawModule: // \u5c31\u662f options\n    _children: {\n      a: {\n        runtime: false\n        state: {\n          count: 0\n        }\n        namespaced: false\n        _rawModule: // \u5c31\u662f new Vuex.Store(options) \u7684 options.modules.a\n        _children: {\n          aSub: {\n            runtime: false\n            state: {\n              age: 0\n            }\n            namespaced: false\n            _rawModule: // options.modules.a.aSub\n            _children: {}\n          }\n        }\n      },\n      b: {\n        runtime: false\n        state: {\n          nums: []\n        }\n        namespaced: true\n        _rawModule: // options.modules.b\n        _children: {}\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u5c31\u662f\u6240\u8c13\u7684\u6536\u96c6\u7684\u7ed3\u679c\u4e86\uff0c\u53ef\u4ee5\u770b\u5230\u6838\u5fc3\u5c31\u662f\u901a\u8fc7","_","children \u53bb\u7ef4\u62a4\u4e86\u7236\u5b50\u5173\u7cfb\u3002"),(0,a.kt)("h2",{id:"\u6a21\u5757\u5b89\u88c5"},"\u6a21\u5757\u5b89\u88c5"),(0,a.kt)("p",null,"\u6a21\u5757\u6536\u96c6\u8bbe\u7f6e\u4e86\u4e00\u4e9b\u6807\u8bb0\uff0c\u901a\u8fc7","_","children \u5c5e\u6027\u53bb\u7ef4\u62a4\u4e86\u6a21\u5757\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u800c\u6a21\u5757\u5b89\u88c5\uff0c\u662f\u5728\u8fd9\u4e2a\u57fa\u7840\u4e0a\uff0c\u5bf9 state\uff0cactions\uff0cmutations \u7b49\u5404\u90e8\u5206\u8fdb\u884c\u6574\u5408\uff0c\u4ee5\u4fbf\u66f4\u65b9\u4fbf\u7684\u8fdb\u884c\u6a21\u5757\u64cd\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const state = this._modules.root.state;\n// init root module.\n// this also recursively registers all sub-modules\n// and collects all module getters inside this._wrappedGetters\ninstallModule(this, state, [], this._modules.root);\n")),(0,a.kt)("p",null,"\u6ce8\u91ca\u4e2d\u8bf4\u660e\uff0cinstallModule \u6a21\u5757\u4f1a\u9012\u5f52\u6ce8\u518c\u6240\u6709\u7684\u6a21\u5757\uff0c\u5e76\u4e14\u4f1a\u6536\u96c6\u5728 this.","_","wrapperdGetters \u4e2d\u7684\u6240\u6709 getter\uff0c\u4e0b\u9762\u6211\u4eec\u6df1\u5165\u6765\u9a8c\u8bc1\u8fd9\u4e2a\u8bf4\u660e\u3002"),(0,a.kt)("p",null,"installModule \u5b9a\u4e49\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function installModule(store, rootState, path, module, hot) {\n  const isRoot = !path.length;\n  const namespace = store._modules.getNamespace(path);\n\n  // register in namespace map\n  if (module.namespaced) {\n    if (store._modulesNamespaceMap[namespace] && __DEV__) {\n      console.error(\n        `[vuex] duplicate namespace ${namespace} for the namespaced module ${path.join(\n          "/"\n        )}`\n      );\n    }\n    store._modulesNamespaceMap[namespace] = module;\n  }\n\n  // set state\n  if (!isRoot && !hot) {\n    const parentState = getNestedState(rootState, path.slice(0, -1));\n    const moduleName = path[path.length - 1];\n    store._withCommit(() => {\n      if (__DEV__) {\n        if (moduleName in parentState) {\n          console.warn(\n            `[vuex] state field "${moduleName}" was overridden by a module with the same name at "${path.join(\n              "."\n            )}"`\n          );\n        }\n      }\n      Vue.set(parentState, moduleName, module.state);\n    });\n  }\n\n  const local = (module.context = makeLocalContext(store, namespace, path));\n\n  module.forEachMutation((mutation, key) => {\n    const namespacedType = namespace + key;\n    registerMutation(store, namespacedType, mutation, local);\n  });\n\n  module.forEachAction((action, key) => {\n    const type = action.root ? key : namespace + key;\n    const handler = action.handler || action;\n    registerAction(store, type, handler, local);\n  });\n\n  module.forEachGetter((getter, key) => {\n    const namespacedType = namespace + key;\n    registerGetter(store, namespacedType, getter, local);\n  });\n\n  module.forEachChild((child, key) => {\n    installModule(store, rootState, path.concat(key), child, hot);\n  });\n}\n')),(0,a.kt)("p",null,'\u9996\u5148\u8bf7\u6ce8\u610f\u8fd9\u4e2a getNamespace\uff0c\u5b83\u5728 src/module/module-collection.js \u4e2d\uff0c\u5b83\u4f1a\u6839\u636e path \u751f\u6210\u5b50\u6a21\u5757\u7684 namespace\uff0c\u6bd4\u5982\u8fd9\u91cc moduleA \u6ca1\u6709\u8bbe\u7f6e\u547d\u540d\u7a7a\u95f4\uff0c\u7ed3\u679c\u5c31\u662f ""\uff0c\u800c moduleB \u662f "b/"\uff0c\u6ce8\u610f\u8fd9\u91cc\u5e26\u4e0a\u4e86\u4e00\u4e2a/\u3002'),(0,a.kt)("p",null,"\u8003\u8651 root \u6a21\u5757\u5b89\u88c5\u7684\u60c5\u51b5\uff0croot \u6a21\u5757\u5b89\u88c5\u4f1a\u8df3\u8fc7\u524d\u9762\u4e24\u4e2a if \u5224\u65ad\uff0c\u76f4\u63a5\u8fdb\u5165\u5230\u4e0b\u9762 module.context \u7684\u521d\u59cb\u5316\uff0c \u8fd9\u4e2a local \u5c31\u662f\u6211\u4eec actions \u65b9\u6cd5\u53c2\u6570\u4e2d\u7684\u90a3\u4e2a context"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"incrementAction (context) {\n  context.commit('increment')\n}\n")),(0,a.kt)("p",null,"\u662f\u7684\uff0c\u6ca1\u9519\u5c31\u662f\u8fd9\u4e2a context\uff0c\u6211\u4eec\u770b\u4e00\u4e0b\u5b83\u5728 makeLocalContext \u4e2d\u662f\u5982\u4f55\u751f\u6210\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * make localized dispatch, commit, getters and state\n * if there is no namespace, just use root ones\n */\nfunction makeLocalContext(store, namespace, path) {\n  const noNamespace = namespace === "";\n\n  const local = {\n    dispatch: noNamespace\n      ? store.dispatch\n      : (_type, _payload, _options) => {\n          const args = unifyObjectStyle(_type, _payload, _options);\n          const { payload, options } = args;\n          let { type } = args;\n\n          if (!options || !options.root) {\n            type = namespace + type;\n            if (__DEV__ && !store._actions[type]) {\n              console.error(\n                `[vuex] unknown local action type: ${args.type}, global type: ${type}`\n              );\n              return;\n            }\n          }\n\n          return store.dispatch(type, payload);\n        },\n\n    commit: noNamespace\n      ? store.commit\n      : (_type, _payload, _options) => {\n          const args = unifyObjectStyle(_type, _payload, _options);\n          const { payload, options } = args;\n          let { type } = args;\n\n          if (!options || !options.root) {\n            type = namespace + type;\n            if (__DEV__ && !store._mutations[type]) {\n              console.error(\n                `[vuex] unknown local mutation type: ${args.type}, global type: ${type}`\n              );\n              return;\n            }\n          }\n\n          store.commit(type, payload, options);\n        },\n  };\n\n  // getters and state object must be gotten lazily\n  // because they will be changed by vm update\n  Object.defineProperties(local, {\n    getters: {\n      get: noNamespace\n        ? () => store.getters\n        : () => makeLocalGetters(store, namespace),\n    },\n    state: {\n      get: () => getNestedState(store.state, path),\n    },\n  });\n\n  return local;\n}\n')),(0,a.kt)("p",null,"\u5206\u6210\u4e24\u7c7b\uff0cstate \u6ca1\u6709\u5224\u65ad\u547d\u540d\u7a7a\u95f4\uff0c\u5176\u4ed6\u4e09\u4e2a\u5c5e\u6027\u90fd\u5224\u65ad\u4e86\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function getNestedState(state, path) {\n  return path.reduce((state, key) => state[key], state);\n}\n")),(0,a.kt)("p",null,"\u4ece\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230\u4ec0\u4e48\u5462\uff1f\u2014\u2014 state \u4e0d\u5206\u662f\u5426\u8bbe\u7f6e\u4e86 namespaced\uff0c\u5168\u90fd\u662f\u8bbe\u7f6e\u5728 store.state \u4e0a\u7684\u3002\u6700\u7ec8\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0cstore.state \u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'state: {\n  a: {\n    count:0,\n    aSub: {\n      age:0\n    }\n  },\n  b: {\n    nums: [],\n  },\n  status:"open"\n}\n')),(0,a.kt)("p",null,"dispatch, commit, getters\n\u8fd9\u4e09\u4e2a\u90fd\u5224\u65ad\u662f\u5426\u8bbe\u7f6e\u4e86\u547d\u540d\u7a7a\u95f4\uff0c\u5982\u679c\u6a21\u5757\u6ca1\u6709\u547d\u540d\u7a7a\u95f4\uff0c\u90a3\u4e48\u90fd\u4f1a\u6ce8\u518c\u5230\u5168\u5c40\u547d\u540d\u7a7a\u95f4\u3002\u5982\u679c\u6709\u547d\u540d\u7a7a\u95f4\uff0c\u4f1a\u5bf9\u53c2\u6570\u505a\u4e00\u5c42\u4e0e\u547d\u540d\u7a7a\u95f4\u6709\u5173\u8f6c\u6362\u3002\u4e3e\u4f8b\u6765\u8bf4\uff0c\u5bf9\u4e8e moduleB \u91cc\u9762\u7684 addAction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"actions: {\n  addAction (context, val) {\n    context.commit('add', val)\n  }\n},\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u6700\u7ec8\u4f1a\u53d8\u6210\u4e0b\u9762\u8fd9\u4e2a\u8c03\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'store.commit("b/add", val);\n')),(0,a.kt)("p",null,"// \u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\uff0ccontext.commit b/ \u524d\u7f00\uff0cthis.$store.commit('b/add', 23) \u76f4\u63a5\u8c03\u7528\u5374\u9700\u8981\u5e26\u524d\u7f00\n\u8fd9\u8fd9\u91cc\u4f53\u73b0\u4e86\u4e00\u4e2a\u91cd\u8981\u7684\u5904\u7406 \u2014\u2014 \u5bf9\u4e8e\u5177\u6709 namespaced \u7684\u6a21\u5757\uff0c\u5176 mutations \u662f\u505a\u4e86\u4e00\u4e2a\u540d\u79f0\u7684\u8f6c\u6362\u7684\u3002\u8fd9\u4e2a\u5176\u5b9e\u5c31\u662f \u5b98\u65b9\u6587\u6863\u8fd9\u91cc (opens new window)\u6240\u8bf4\u7684\uff1a\u542f\u7528\u4e86\u547d\u540d\u7a7a\u95f4\u7684 getter \u548c action \u4f1a\u6536\u5230\u5c40\u90e8\u5316\u7684 getter\uff0cdispatch \u548c commit\u3002\u6362\u8a00\u4e4b\uff0c\u4f60\u5728\u4f7f\u7528\u6a21\u5757\u5185\u5bb9\uff08module assets\uff09\u65f6\u4e0d\u9700\u8981\u5728\u540c\u4e00\u6a21\u5757\u5185\u989d\u5916\u6dfb\u52a0\u7a7a\u95f4\u540d\u524d\u7f00\u3002\u66f4\u6539 namespaced \u5c5e\u6027\u540e\u4e0d\u9700\u8981\u4fee\u6539\u6a21\u5757\u5185\u7684\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u67e5\u770b\u5b98\u7f51\u8fd9\u4e2a\u5173\u4e8e actions \u53c2\u6570 context \u7684\u8bf4\u660e (opens new window)\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  state, // \u7b49\u540c\u4e8e `store.state`\uff0c\u82e5\u5728\u6a21\u5757\u4e2d\u5219\u4e3a\u5c40\u90e8\u72b6\u6001\n    rootState, // \u7b49\u540c\u4e8e `store.state`\uff0c\u53ea\u5b58\u5728\u4e8e\u6a21\u5757\u4e2d\n    commit, // \u7b49\u540c\u4e8e `store.commit`\n    dispatch, // \u7b49\u540c\u4e8e `store.dispatch`\n    getters, // \u7b49\u540c\u4e8e `store.getters`\n    rootGetters; // \u7b49\u540c\u4e8e `store.getters`\uff0c\u53ea\u5b58\u5728\u4e8e\u6a21\u5757\u4e2d\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u5e94\u8be5\u80fd\u591f\u66f4\u597d\u7684\u7406\u89e3\u4e86\uff0c\u4e5f\u5e94\u8be5\u77e5\u9053\uff0c\u8fd9\u91cc\u8bf4\u7684\u201c\u7b49\u540c\u4e8e\u201d\uff0c\u5bf9\u4e8e\u5177\u6709\u547d\u540d\u7a7a\u95f4\u7684\u6a21\u5757\uff0c\u5176\u5b9e\u662f\u6709\u4e9b\u533a\u522b\u7684\u3002"),(0,a.kt)("p",null,"\u5728 context \u521d\u59cb\u5316\u5b8c\u6210\u540e\uff0c\u5c31\u662f\u5bf9 mutation\uff0caction \u548c getter \u505a\u6ce8\u518c\u3002 \u4ee5 mutation \u4e3a\u4f8b\u8fdb\u884c\u8bf4\u660e\uff0c\u76f8\u5173\u7684\u51fd\u6570\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.forEachMutation((mutation, key) => {\n  const namespacedType = namespace + key\n  registerMutation(store, namespacedType, mutation, local)\n})\n\nforEachMutation (fn) {\n  if (this._rawModule.mutations) {\n    forEachValue(this._rawModule.mutations, fn)\n  }\n}\n\nfunction forEachValue (obj, fn) {\n  Object.keys(obj).forEach(key => fn(obj[key], key))\n}\n\nfunction registerMutation (store, type, handler, local) {\n  const entry = store._mutations[type] || (store._mutations[type] = [])\n  entry.push(function wrappedMutationHandler (payload) {\n    handler.call(store, local.state, payload)\n  })\n}\n")),(0,a.kt)("p",null,"\u5176\u5b9e\u5c31\u662f\u4ece\u6a21\u5757\u4e2d\u53d6\u51fa mutations\uff0c\u7136\u540e\u5bf9\u5176\u4e2d\u7684\u6bcf\u4e00\u4e2a mutation\uff0c\u6dfb\u52a0\u4e86\u547d\u540d\u7a7a\u95f4\u524d\u7f00\uff0c\u8bbe\u7f6e\u5230 store.","_","mutations \u91cc\u9762\uff0c\u7136\u540e\u53bb\u7ed1\u5b9a\u4e0a\u4e0b\u6587\u4e3a store\uff0c\u8bbe\u7f6e\u4f20\u9012\u7ed9 mutation \u7684\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u4e00\u4e0b\uff0c\u8fd9\u91cc ","_","mutations","[type]","\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5728\u591a\u4e2a\u6a21\u5757\u5177\u6709\u540c\u540d\u7684 mutation \u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u5b58\u50a8\u5230\u4e00\u8d77\uff0c\u4e0d\u8fc7\u5404\u81ea\u5728\u6bd4\u4fdd\u91cd\u5df2\u7ecf\u7ed1\u5b9a\u4e86 local.state \u4f5c\u4e3a\u7b2c\u4e8c\u53c2\u6570\uff0c\u540e\u9762\u76f4\u63a5\u8c03\u7528\u662f OK \u7684\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e moduleB"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  mutations: {\n    add (state, val) {\n      state.nums.push(val);\n    }\n  },\n\n  actions: {\n    addAction (context, val) {\n      context.commit('add', val);\n      console.log(context.commit === this.commit, context.commit); // => false \u0192 (_type, _payload, _options)\n    }\n  },\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684 state\uff0c\u662f store.b\uff0c\u8fd9\u91cc\u7684 context.commit \u4e0d\u662f store.commit\u3002\u6700\u7ec8\uff0c\u5f53\u6211\u4eec\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u5982\u4e0b\uff0c\u4ece\u4e2d\u6211\u4eec\u53ef\u4ee5\u6e05\u6670\u5730\u770b\u5230\u5bf9\u5404\u6a21\u5757\uff0c\u5bf9\u6a21\u5757\u5185 state, vuex\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"namespaced \u4e3a true \u4f1a\u6539\u53d8\u4f20\u9012\u7ed9 actions \u65b9\u6cd5\u7684 context \u4e0a\u4e0b\u6587\uff0c\u8fd9\u5c31\u662f\u5b98\u65b9\u6587\u6863\u6240\u8bf4\u7684 \u6a21\u5757\u7684\u5c40\u90e8\u72b6\u6001\u5bf9\u8c61\u3002namespaced \u4e3a true \u7684\u6a21\u5757\u4f1a\u62e5\u6709\u81ea\u5df1\u7684 dispatch \u548c commit\uff0c\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u505a\u4e86\u6a21\u5757\u524d\u7f00\u7684\u5904\u7406\uff0c\u5c31\u662f\u4e3a\u4ec0\u4e48\u5728\u5b50\u6a21\u5757\u5185\u90e8\u4e0d\u9700\u8981\u5e26\u4e0a\u524d\u7f00\u53bb\u8c03\u7528 dispatch \u548c commit\u3002"),(0,a.kt)("p",null,"\u4e0d\u7ba1 namespaced \u662f\u5426\u4e3a true\uff0c\u6700\u7ec8\u6240\u6709\u7684\u540c\u7c7b\u5185\u5bb9\u90fd\u4f1a\u7ef4\u62a4\u5230\u4e00\u8d77\u7684\uff0cstate, mutations, actions\uff0cgetters \u90fd\u662f\u5404\u81ea\u7ef4\u62a4\u5230\u4e00\u4e2a\u5730\u65b9\u3002"),(0,a.kt)("p",null,"\u6700\u7ec8\u7ecf\u8fc7\u672c\u6587\u7684\u5b66\u4e60\uff0c\u5e94\u8be5\u80fd\u591f\u5bf9 \u5b98\u65b9\u6587\u6863\u7684\u8bf4\u660e (opens new window)\u6709\u66f4\u6df1\u7684\u7406\u89e3\uff0c\u80fd\u591f\u77e5\u9053\u90a3\u4e00\u4e9b\u5e73\u5e73\u65e0\u5947\u7684\u63cf\u8ff0\uff0c\u5e76\u4e0d\u7b80\u5355\u3002"))}d.isMDXComponent=!0}}]);