"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4783],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>d});var r=e(7294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var u=r.createContext({}),c=function(t){var n=r.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):s(s({},n),t)),e},p=function(t){var n=c(t.components);return r.createElement(u.Provider,{value:n},t.children)},l="mdxType",h={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),l=c(e),m=o,d=l["".concat(u,".").concat(m)]||l[m]||h[m]||a;return e?r.createElement(d,s(s({ref:n},p),{},{components:e})):r.createElement(d,s({ref:n},p))}));function d(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var a=e.length,s=new Array(a);s[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=t,i[l]="string"==typeof t?t:o,s[1]=i;for(var c=2;c<a;c++)s[c]=e[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},6594:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=e(7462),o=(e(7294),e(3905));const a={},s="\u4e09\u4e2a\u6a21\u5757",i={unversionedId:"frameworks/vue2/vue-router/main",id:"frameworks/vue2/vue-router/main",title:"\u4e09\u4e2a\u6a21\u5757",description:"\u7b80\u8981\u8bf4\u660e VueRouter \u6784\u9020\u51fd\u6570\u53ca\u65b9\u6cd5\u7684\u5b9a\u4e49\uff0c\u8bf4\u660e\u6d89\u53ca\u5230\u7684 history \u548c matcher \u4e24\u4e2a\u6838\u5fc3\u6a21\u5757\u3002",source:"@site/docs/05-frameworks/02-vue2/05-vue-router/03-main.md",sourceDirName:"05-frameworks/02-vue2/05-vue-router",slug:"/frameworks/vue2/vue-router/main",permalink:"/docs/frameworks/vue2/vue-router/main",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/05-vue-router/03-main.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"vue2",previous:{title:"install",permalink:"/docs/frameworks/vue2/vue-router/install"},next:{title:"\u8def\u7531\u8868",permalink:"/docs/frameworks/vue2/vue-router/route-map"}},u={},c=[{value:"VueRouter",id:"vuerouter",level:2},{value:"matcher",id:"matcher",level:2},{value:"history",id:"history",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],p={toc:c},l="wrapper";function h(t){let{components:n,...e}=t;return(0,o.kt)(l,(0,r.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e09\u4e2a\u6a21\u5757"},"\u4e09\u4e2a\u6a21\u5757"),(0,o.kt)("p",null,"\u7b80\u8981\u8bf4\u660e VueRouter \u6784\u9020\u51fd\u6570\u53ca\u65b9\u6cd5\u7684\u5b9a\u4e49\uff0c\u8bf4\u660e\u6d89\u53ca\u5230\u7684 history \u548c matcher \u4e24\u4e2a\u6838\u5fc3\u6a21\u5757\u3002"),(0,o.kt)("h2",{id:"vuerouter"},"VueRouter"),(0,o.kt)("p",null,"\u4ee3\u7801\u5f88\u957f\uff0c\u4e0d\u8981\u7ec6\u7a76\uff0c\u5927\u6982\u6d4f\u89c8\u4e00\u904d\uff0c\u5173\u6ce8\u4ee3\u7801\u4e2d\u7684\u6ce8\u91ca\u8bf4\u660e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createMatcher } from "./create-matcher";\nimport { HashHistory } from "./history/hash";\nimport { HTML5History } from "./history/html5";\nimport { AbstractHistory } from "./history/abstract";\n// ...\n\nexport default class VueRouter {\n  static install: () => void;\n  static version: string;\n  static isNavigationFailure: Function;\n  static NavigationFailureType: any;\n  static START_LOCATION: Route;\n\n  app: any;\n  apps: Array<any>;\n  ready: boolean;\n  readyCbs: Array<Function>;\n  options: RouterOptions;\n  mode: string;\n  history: HashHistory | HTML5History | AbstractHistory;\n  matcher: Matcher;\n  fallback: boolean;\n  beforeHooks: Array<?NavigationGuard>;\n  resolveHooks: Array<?NavigationGuard>;\n  afterHooks: Array<?AfterNavigationHook>;\n\n  constructor(options: RouterOptions = {}) {\n    this.app = null;\n    this.apps = [];\n    this.options = options;\n    this.beforeHooks = [];\n    this.resolveHooks = [];\n    this.afterHooks = [];\n\n    // \u5173\u6ce8\u70b91\uff1amatcher \u7684\u521d\u59cb\u5316\n    this.matcher = createMatcher(options.routes || [], this);\n\n    // mode \u8bbe\u7f6e\u5927\u6982\u77e5\u9053\u5373\u53ef\n    let mode = options.mode || "hash";\n    this.fallback =\n      mode === "history" && !supportsPushState && options.fallback !== false;\n    if (this.fallback) {\n      mode = "hash";\n    }\n    if (!inBrowser) {\n      mode = "abstract";\n    }\n    this.mode = mode;\n\n    // \u5173\u6ce8\u70b92\uff1ahistory \u7684\u521d\u59cb\u5316\n    switch (mode) {\n      case "history":\n        this.history = new HTML5History(this, options.base);\n        break;\n      case "hash":\n        this.history = new HashHistory(this, options.base, this.fallback);\n        break;\n      case "abstract":\n        this.history = new AbstractHistory(this, options.base);\n        break;\n      default:\n        if (process.env.NODE_ENV !== "production") {\n          assert(false, `invalid mode: ${mode}`);\n        }\n    }\n  }\n\n  // \u5173\u6ce8\u70b9\uff1arouter.match \u5c31\u662f matcher.match\n  match(raw: RawLocation, current?: Route, redirectedFrom?: Location): Route {\n    return this.matcher.match(raw, current, redirectedFrom);\n  }\n\n  // \u5f53\u524d\u8def\u7531\u6307\u5411 history.current\n  get currentRoute(): ?Route {\n    return this.history && this.history.current;\n  }\n\n  init(app: any /* Vue component instance */) {\n    process.env.NODE_ENV !== "production" &&\n      assert(\n        install.installed,\n        `not installed. Make sure to call \\`Vue.use(VueRouter)\\` ` +\n          `before creating root instance.`\n      );\n\n    this.apps.push(app);\n\n    // set up app destroyed handler\n    // https://github.com/vuejs/vue-router/issues/2639\n    app.$once("hook:destroyed", () => {\n      // clean out app from this.apps array once destroyed\n      const index = this.apps.indexOf(app);\n      if (index > -1) this.apps.splice(index, 1);\n      // ensure we still have a main app or null if no apps\n      // we do not release the router so it can be reused\n      if (this.app === app) this.app = this.apps[0] || null;\n\n      if (!this.app) this.history.teardown();\n    });\n\n    // main app previously initialized\n    // return as we don\'t need to set up new history listener\n    if (this.app) {\n      return;\n    }\n\n    this.app = app;\n\n    const history = this.history;\n\n    if (history instanceof HTML5History || history instanceof HashHistory) {\n      const handleInitialScroll = (routeOrError) => {\n        const from = history.current;\n        const expectScroll = this.options.scrollBehavior;\n        const supportsScroll = supportsPushState && expectScroll;\n\n        if (supportsScroll && "fullPath" in routeOrError) {\n          handleScroll(this, routeOrError, from, false);\n        }\n      };\n      const setupListeners = (routeOrError) => {\n        history.setupListeners();\n        handleInitialScroll(routeOrError);\n      };\n\n      // \u5728init\u4e2d\uff0c\u4e3b\u52a8\u8c03\u7528\u4e86 history.transitionTo\n      history.transitionTo(\n        history.getCurrentLocation(),\n        setupListeners,\n        setupListeners\n      );\n    }\n\n    history.listen((route) => {\n      this.apps.forEach((app) => {\n        app._route = route;\n      });\n    });\n  }\n\n  // \u8fd9\u4e0b\u9762\u51e0\u4e2a\u662f\u94a9\u5b50\u6ce8\u518c\n  beforeEach(fn: Function): Function {\n    return registerHook(this.beforeHooks, fn);\n  }\n\n  beforeResolve(fn: Function): Function {\n    return registerHook(this.resolveHooks, fn);\n  }\n\n  afterEach(fn: Function): Function {\n    return registerHook(this.afterHooks, fn);\n  }\n\n  onReady(cb: Function, errorCb?: Function) {\n    this.history.onReady(cb, errorCb);\n  }\n\n  onError(errorCb: Function) {\n    this.history.onError(errorCb);\n  }\n\n  // push \u548c replace \u662f\u505a\u4e86\u4e00\u5c42\u5c01\u88c5\uff0c\u5176\u5b9e\u90fd\u662f history \u6a21\u5757\u4e0a\u7684\u5bf9\u5e94\u65b9\u6cd5\n  push(location: RawLocation, onComplete?: Function, onAbort?: Function) {\n    // $flow-disable-line\n    if (!onComplete && !onAbort && typeof Promise !== "undefined") {\n      return new Promise((resolve, reject) => {\n        this.history.push(location, resolve, reject);\n      });\n    } else {\n      this.history.push(location, onComplete, onAbort);\n    }\n  }\n\n  replace(location: RawLocation, onComplete?: Function, onAbort?: Function) {\n    // $flow-disable-line\n    if (!onComplete && !onAbort && typeof Promise !== "undefined") {\n      return new Promise((resolve, reject) => {\n        this.history.replace(location, resolve, reject);\n      });\n    } else {\n      this.history.replace(location, onComplete, onAbort);\n    }\n  }\n\n  go(n: number) {\n    this.history.go(n);\n  }\n\n  back() {\n    this.go(-1);\n  }\n\n  forward() {\n    this.go(1);\n  }\n\n  getMatchedComponents(to?: RawLocation | Route): Array<any> {\n    const route: any = to\n      ? to.matched\n        ? to\n        : this.resolve(to).route\n      : this.currentRoute;\n    if (!route) {\n      return [];\n    }\n    return [].concat.apply(\n      [],\n      route.matched.map((m) => {\n        return Object.keys(m.components).map((key) => {\n          return m.components[key];\n        });\n      })\n    );\n  }\n\n  resolve(\n    to: RawLocation,\n    current?: Route,\n    append?: boolean\n  ): {\n    location: Location,\n    route: Route,\n    href: string,\n    // for backwards compat\n    normalizedTo: Location,\n    resolved: Route,\n  } {\n    current = current || this.history.current;\n    const location = normalizeLocation(to, current, append, this);\n    const route = this.match(location, current);\n    const fullPath = route.redirectedFrom || route.fullPath;\n    const base = this.history.base;\n    const href = createHref(base, fullPath, this.mode);\n    return {\n      location,\n      route,\n      href,\n      // for backwards compat\n      normalizedTo: location,\n      resolved: route,\n    };\n  }\n\n  getRoutes() {\n    return this.matcher.getRoutes();\n  }\n\n  addRoute(parentOrRoute: string | RouteConfig, route?: RouteConfig) {\n    this.matcher.addRoute(parentOrRoute, route);\n    if (this.history.current !== START) {\n      this.history.transitionTo(this.history.getCurrentLocation());\n    }\n  }\n\n  addRoutes(routes: Array<RouteConfig>) {\n    if (process.env.NODE_ENV !== "production") {\n      warn(\n        false,\n        "router.addRoutes() is deprecated and has been removed in Vue Router 4. Use router.addRoute() instead."\n      );\n    }\n    this.matcher.addRoutes(routes);\n    if (this.history.current !== START) {\n      this.history.transitionTo(this.history.getCurrentLocation());\n    }\n  }\n}\n')),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5c5e\u6027\uff0c\u6682\u65f6\u53ea\u9700\u8981\u77e5\u9053 matcher \u548c history \u662f\u6700\u6838\u5fc3\u7684\u4e24\u4e2a\u6a21\u5757\uff0cVueRouter \u53ea\u662f\u5728\u7ba1\u7406\u4f7f\u7528 matcher \u548c history\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u65b9\u6cd5\uff0c\u5173\u6ce8\u4e00\u4e0b\u8fd9\u51e0\u7c7b\u65b9\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"init\uff1a\u5728 ","_","routerRoot \u7ec4\u4ef6\u7684 beforeCreate \u8c03\u7528\uff0c\u5176\u5185\u5bb9\u9664\u53bb app \u5173\u7cfb\u5904\u7406\uff0c\u5c31\u662f\u4e3b\u8981\u662f\u8c03\u7528\u4e86\u4e00\u4e2a transitionTo \u51fd\u6570\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8def\u7531\u8df3\u8f6c\u65b9\u6cd5\uff1apush, replace, go \u7b49\u65b9\u6cd5\uff0c\u662f\u5728 history \u7684\u57fa\u7840\u4e0a\u505a\u4e86\u4e00\u5c42\u5c01\u88c5\uff0c\u9700\u8981\u77e5\u9053\u5bf9\u4e8e push \u548c replace \u662f\u505a\u4e86\u4e00\u5c42 Promise \u5c01\u88c5\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"hook\uff1aafterEach , beforeEach , onReady \u548c onError \u7b49 hook \u6ce8\u518c\u3002"))),(0,o.kt)("h2",{id:"matcher"},"matcher"),(0,o.kt)("p",null,"matcher \u7531 createMatcher \u521b\u5efa\uff0c\u5b9a\u4e49\u5728 src/create-matcher.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createRouteMap } from "./create-route-map";\n// ...\n\nexport function createMatcher(\n  routes: Array<RouteConfig>,\n  router: VueRouter\n): Matcher {\n  const { pathList, pathMap, nameMap } = createRouteMap(routes);\n\n  function addRoutes(routes) {\n    createRouteMap(routes, pathList, pathMap, nameMap);\n  }\n\n  function addRoute(parentOrRoute, route) {\n    // ...\n  }\n\n  function getRoutes() {\n    return pathList.map((path) => pathMap[path]);\n  }\n\n  function match(\n    raw: RawLocation,\n    currentRoute?: Route,\n    redirectedFrom?: Location\n  ): Route {\n    // ...\n  }\n\n  function redirect(record: RouteRecord, location: Location): Route {\n    // ...\n  }\n\n  function alias(\n    record: RouteRecord,\n    location: Location,\n    matchAs: string\n  ): Route {\n    // ...\n  }\n\n  function _createRoute(\n    record: ?RouteRecord,\n    location: Location,\n    redirectedFrom?: Location\n  ): Route {\n    // ...\n  }\n\n  return {\n    match,\n    addRoute,\n    getRoutes,\n    addRoutes,\n  };\n}\n')),(0,o.kt)("p",null,"\u4ece\u5b9a\u4e49\u4e0a\u770b\uff0c\u63a5\u6536\u7684\u53c2\u6570\u662f \u8def\u7531\u914d\u7f6e\u6570\u7ec4 routes \u548c router \u5b9e\u4f8b\uff0c\u8fd4\u56de\u5185\u5bb9\u662f\u4e00\u4e2a Matcher \u7c7b\u578b\u7684\u5b9e\u4f8b\uff0c\u8fd4\u56de\u7684\u65b9\u6cd5\u547d\u540d\u4e0a\u50cf\u662f\u8def\u7531\u7ba1\u7406\u76f8\u5173\u3002"),(0,o.kt)("p",null,"\u5728 createMatcher \u91cc\u9762\u552f\u4e00\u8c03\u7528\u7684\u65b9\u6cd5\u662f createRouteMap\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u6839\u636e routes \u53bb\u751f\u6210 pathList\u3001pathMap \u548c nameMap\uff0c\u662f\u5206\u522b\u7ef4\u62a4\u4e86 path \u548c compoennt, name \u548c component \u4e4b\u95f4\u7684\u5bf9\u5e94\u5173\u7cfb\u3002createRouteMap \u7684\u5177\u4f53\u8fc7\u7a0b\u53c2\u8003 \u8def\u7531\u8868 \u3002"),(0,o.kt)("p",null,"matcher \u91cc\u9762\u7684\u8fd9\u4e9b\u65b9\u6cd5\uff0c\u90fd\u5177\u6709\u5f88\u91cd\u8981\u7684\u529f\u80fd\uff0c\u5728\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\u7528\u5230\u65f6\u518d\u4e86\u89e3\u5176\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"history"},"history"),(0,o.kt)("p",null,"history \u6709\u4e09\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u662f HTML5History\uff0cHashHistory \u548c AbstractHistory\uff0c\u8fd9\u4e09\u4e2a\u90fd\u57fa\u4e8e History \u57fa\u7840\u7c7b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { START, isSameRoute, handleRouteEntered } from "../util/route";\n\nexport class History {\n  // ...\u7701\u7565\u5c5e\u6027\u5b9a\u4e49\n\n  constructor(router: Router, base: ?string) {\n    this.router = router;\n    this.base = normalizeBase(base);\n    // start with a route object that stands for "nowhere"\n    this.current = START;\n    this.pending = null;\n    this.ready = false;\n    this.readyCbs = [];\n    this.readyErrorCbs = [];\n    this.errorCbs = [];\n    this.listeners = [];\n  }\n\n  listen(cb: Function) {\n    this.cb = cb;\n  }\n\n  onReady(cb: Function, errorCb: ?Function) {\n    // ...\n  }\n\n  onError(errorCb: Function) {\n    this.errorCbs.push(errorCb);\n  }\n\n  transitionTo(\n    location: RawLocation,\n    onComplete?: Function,\n    onAbort?: Function\n  ) {\n    let route = this.router.match(location, this.current);\n    // ...\n    this.confirmTransition(\n      route,\n      () => {\n        // ...\n      },\n      (err) => {\n        // ...\n      }\n    );\n  }\n\n  confirmTransition(route: Route, onComplete: Function, onAbort?: Function) {\n    // ...\n  }\n\n  updateRoute(route: Route) {\n    this.current = route;\n    this.cb && this.cb(route);\n  }\n\n  setupListeners() {\n    // Default implementation is empty\n  }\n\n  teardown() {\n    // ...\n  }\n}\n')),(0,o.kt)("p",null,"\u5728\u6784\u9020\u51fd\u6570\u4e2d\uff0cbase \u8868\u793a\u6574\u4e2a\u5e94\u7528\u7684\u57fa\u8def\u5f84\uff0c\u5728 normalizeBase \u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u5230 options \u91cc\u9762\uff0c\u5219\u5c1d\u8bd5\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"<base>")," \u6807\u7b7e\u4e2d\u83b7\u53d6\uff0c\u5904\u7406\u6210\u4ee5 / \u5f00\u5934\uff0c\u53bb\u6389\u672b\u5c3e\u7684 /\u3002"),(0,o.kt)("p",null,"current \u8868\u793a\u5f53\u524d\u7684\u8def\u7531\uff0c\u662f\u5176\u4e2d\u6700\u91cd\u8981\u7684\u4e00\u4e2a\u5c5e\u6027\uff0c\u6211\u4eec\u5e38\u7528\u7684 this.$route\uff0c\u5c31\u662f\u6307\u5411\u7684\u8fd9\u4e2a current\u3002current \u521d\u59cb\u503c\u4e3a START\uff0c\u5728 src/util/route.js\uff0c\u5b83\u662f\u4e00\u4e2a Route \u7c7b\u578b\u53d8\u91cf\uff0c\u8fd9\u91cc\u76f4\u63a5\u7ed9\u51fa\u5176\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  fullPath: "/";\n  hash: "";\n  matched: [];\n  meta: {\n  }\n  name: null;\n  params: {\n  }\n  path: "/";\n  query: {\n  }\n}\n')),(0,o.kt)("p",null,"\u5f53\u8c03\u7528\u65b9\u6cd5\u53bb\u5207\u6362\u8def\u7531\u7684\u65f6\u5019\uff0c\u5176\u4e2d\u4e00\u4ef6\u91cd\u8981\u7684\u4e8b\u60c5\uff0c\u5c31\u662f\u66f4\u65b0\u8fd9\u4e2a current\u3002"),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f transitionTo \u548c confirmTransition \u7684\u5173\u7cfb\uff0c\u524d\u8005\u4f1a\u8c03\u7528 matcher.match \u53bb\u83b7\u53d6\u65b0\u7684\u8def\u7531\u5bf9\u8c61 route\uff0c\u7136\u540e\u6267\u884c confirmTransition \u662f\u610f\u5473\u7740\u786e\u8ba4\u72b6\u6001\u4ece current \u5207\u6362\u5230 route\u3002"),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u672c\u6587\u7b80\u8981\u5730\u4e86\u89e3\u4e86 router, history \u548c matcher"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"matcher")),(0,o.kt)("p",null,"\u6839\u636e\u914d\u7f6e\u7684 routes \u751f\u6210\u4e86 pathList\uff0cnameMap \u548c pathMap \u4e09\u4e2a\u5185\u5bb9\uff0c\u8fd9\u4e24\u4e2a map \u4e2d\u5206\u522b\u4fdd\u5b58\u4e86 name-component\uff0cpath-componenent \u7684\u5bf9\u5e94\u5173\u7cfb\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"history")),(0,o.kt)("p",null,"\u63d0\u4f9b\u8def\u7531\u5207\u6362\u7684\u65b9\u6cd5\uff0c\u5b83\u8d1f\u8d23 current($route) \u4fe1\u606f\u7684\u66f4\u65b0\uff0c\u6839\u636e\u8c03\u7528 push \u7b49 API \u63d0\u4f9b\u7684\u53c2\u6570\uff0c\u901a\u8fc7 transitionTo\uff0c\u8c03\u7528 matcher.match \u83b7\u53d6\u5230\u8fd9\u4e2a to \u7684\u72b6\u6001\uff0c\u5373 route\uff0c\u7136\u540e\u901a\u8fc7 confirmTransition \u786e\u8ba4\u5207\u6362\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"router")),(0,o.kt)("p",null,"\u6574\u5408 history \u548c matcher \u7684 API\uff0c\u63d0\u4f9b\u5f00\u53d1\u8005\u4f7f\u7528\u7684\u65b9\u6cd5\uff0c\u4e5f\u65b9\u4fbf history \u5185\u90e8\u5bf9 matcher \u7684\u8c03\u7528\u3002"),(0,o.kt)("p",null,"\u603b\u7ed3\u8d77\u6765\uff0c\u4e09\u4e2a\u6a21\u5757\u4e2d\u5728\u4e2d\u95f4\u7684\u662f history\uff0crouter \u5bf9 history \u7684 API \u505a\u4e86\u4e00\u5c42\u7b80\u5355\u5c01\u88c5\uff0c\u505a\u4e86\u4e0d\u540c mode \u7684\u7edf\u4e00\uff0chistory \u8c03\u7528 matcher.match \u751f\u6210\u65b0\u7684 route\u3002"))}h.isMDXComponent=!0}}]);