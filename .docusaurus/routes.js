import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a03'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '0d3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '3cd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '11e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4ef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8fc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '772'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '525'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '965'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorightm/hello',
        component: ComponentCreator('/docs/algorightm/hello', 'f53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/app/android',
        component: ComponentCreator('/docs/app/android', 'e6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/app/flutter',
        component: ComponentCreator('/docs/app/flutter', '350'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/app/hybrid',
        component: ComponentCreator('/docs/app/hybrid', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/app/ios',
        component: ComponentCreator('/docs/app/ios', '336'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/app/rn',
        component: ComponentCreator('/docs/app/rn', '4fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/app/uniapp',
        component: ComponentCreator('/docs/app/uniapp', '84f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/app/wechat',
        component: ComponentCreator('/docs/app/wechat', '2c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/app/weex',
        component: ComponentCreator('/docs/app/weex', '995'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/be/java',
        component: ComponentCreator('/docs/be/java', 'ca3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/be/node',
        component: ComponentCreator('/docs/be/node', '088'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/be/node/egg',
        component: ComponentCreator('/docs/be/node/egg', '03d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/be/node/express',
        component: ComponentCreator('/docs/be/node/express', 'c31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/be/node/koa',
        component: ComponentCreator('/docs/be/node/koa', '4c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/browser/chrome',
        component: ComponentCreator('/docs/browser/chrome', 'd62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/browser/process',
        component: ComponentCreator('/docs/browser/process', '4fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/browser/render',
        component: ComponentCreator('/docs/browser/render', '28e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/CSS/basic',
        component: ComponentCreator('/docs/CSS/basic', 'a49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/CSS/extension',
        component: ComponentCreator('/docs/CSS/extension', '1d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/CSS/qa',
        component: ComponentCreator('/docs/CSS/qa', 'b77'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/data-structure/binary-tree',
        component: ComponentCreator('/docs/data-structure/binary-tree', 'e70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/frameworks/',
        component: ComponentCreator('/docs/frameworks/', '251'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/egg',
        component: ComponentCreator('/docs/frameworks/egg', 'd54'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/express',
        component: ComponentCreator('/docs/frameworks/express', 'de3'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/koa',
        component: ComponentCreator('/docs/frameworks/koa', 'c0b'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/react/core',
        component: ComponentCreator('/docs/frameworks/react/core', 'ca7'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/react/fiber',
        component: ComponentCreator('/docs/frameworks/react/fiber', 'd1c'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/react/reconciler',
        component: ComponentCreator('/docs/frameworks/react/reconciler', 'f78'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/react/renderer',
        component: ComponentCreator('/docs/frameworks/react/renderer', 'cce'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/compiler/ast',
        component: ComponentCreator('/docs/frameworks/vue2/compiler/ast', '5d8'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/compiler/codegen',
        component: ComponentCreator('/docs/frameworks/vue2/compiler/codegen', 'b79'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/compiler/compile-to-functions',
        component: ComponentCreator('/docs/frameworks/vue2/compiler/compile-to-functions', '1a1'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/compiler/compiler',
        component: ComponentCreator('/docs/frameworks/vue2/compiler/compiler', '07a'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/compiler/optimize',
        component: ComponentCreator('/docs/frameworks/vue2/compiler/optimize', 'ca9'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/compiler/parse',
        component: ComponentCreator('/docs/frameworks/vue2/compiler/parse', '202'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/compiler/qa',
        component: ComponentCreator('/docs/frameworks/vue2/compiler/qa', '371'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/overview/',
        component: ComponentCreator('/docs/frameworks/vue2/overview/', '919'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/overview/constructor',
        component: ComponentCreator('/docs/frameworks/vue2/overview/constructor', '6f7'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/overview/dir',
        component: ComponentCreator('/docs/frameworks/vue2/overview/dir', '39a'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/overview/entry',
        component: ComponentCreator('/docs/frameworks/vue2/overview/entry', '49e'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/overview/mount',
        component: ComponentCreator('/docs/frameworks/vue2/overview/mount', '0ed'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/overview/new-vue',
        component: ComponentCreator('/docs/frameworks/vue2/overview/new-vue', '199'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/reactivity/collect-deps',
        component: ComponentCreator('/docs/frameworks/vue2/reactivity/collect-deps', 'c60'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/reactivity/computed',
        component: ComponentCreator('/docs/frameworks/vue2/reactivity/computed', '2d7'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/reactivity/data',
        component: ComponentCreator('/docs/frameworks/vue2/reactivity/data', 'ddc'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/reactivity/dispatch-update',
        component: ComponentCreator('/docs/frameworks/vue2/reactivity/dispatch-update', '3b0'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/reactivity/intro',
        component: ComponentCreator('/docs/frameworks/vue2/reactivity/intro', 'e26'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/reactivity/next-tick',
        component: ComponentCreator('/docs/frameworks/vue2/reactivity/next-tick', 'a08'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/reactivity/view-update',
        component: ComponentCreator('/docs/frameworks/vue2/reactivity/view-update', '610'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/render/create-element',
        component: ComponentCreator('/docs/frameworks/vue2/render/create-element', '18c'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/render/create-elm',
        component: ComponentCreator('/docs/frameworks/vue2/render/create-elm', '575'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/render/create-vnode',
        component: ComponentCreator('/docs/frameworks/vue2/render/create-vnode', 'd3e'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/render/overview',
        component: ComponentCreator('/docs/frameworks/vue2/render/overview', '348'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/render/patch',
        component: ComponentCreator('/docs/frameworks/vue2/render/patch', '244'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/render/render',
        component: ComponentCreator('/docs/frameworks/vue2/render/render', 'ba2'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/render/update',
        component: ComponentCreator('/docs/frameworks/vue2/render/update', '845'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/render/vdom',
        component: ComponentCreator('/docs/frameworks/vue2/render/vdom', '96f'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/render/watcher',
        component: ComponentCreator('/docs/frameworks/vue2/render/watcher', 'a8e'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/vue-router/install',
        component: ComponentCreator('/docs/frameworks/vue2/vue-router/install', 'a8e'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/vue-router/intro',
        component: ComponentCreator('/docs/frameworks/vue2/vue-router/intro', '3f1'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/vue-router/main',
        component: ComponentCreator('/docs/frameworks/vue2/vue-router/main', '609'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/vue-router/match',
        component: ComponentCreator('/docs/frameworks/vue2/vue-router/match', '860'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/vue-router/route-map',
        component: ComponentCreator('/docs/frameworks/vue2/vue-router/route-map', '862'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/vue-router/transition',
        component: ComponentCreator('/docs/frameworks/vue2/vue-router/transition', '14c'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/vuex/api',
        component: ComponentCreator('/docs/frameworks/vue2/vuex/api', '2de'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/vuex/install',
        component: ComponentCreator('/docs/frameworks/vue2/vuex/install', '8bd'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/vuex/module',
        component: ComponentCreator('/docs/frameworks/vue2/vuex/module', '657'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue2/vuex/plugins',
        component: ComponentCreator('/docs/frameworks/vue2/vuex/plugins', '71c'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/frameworks/vue3/overview',
        component: ComponentCreator('/docs/frameworks/vue3/overview', 'b72'),
        exact: true,
        sidebar: "frameworks"
      },
      {
        path: '/docs/HTML/basic',
        component: ComponentCreator('/docs/HTML/basic', 'f33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/HTML/iframe',
        component: ComponentCreator('/docs/HTML/iframe', 'c43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/HTML/semantic',
        component: ComponentCreator('/docs/HTML/semantic', '040'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/HTML/SEO',
        component: ComponentCreator('/docs/HTML/SEO', '7dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/animate',
        component: ComponentCreator('/docs/JS/animate', '93c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/api',
        component: ComponentCreator('/docs/JS/api', '598'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/async/',
        component: ComponentCreator('/docs/JS/async/', '83a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/async/async',
        component: ComponentCreator('/docs/JS/async/async', '402'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/async/axios',
        component: ComponentCreator('/docs/JS/async/axios', 'c16'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/async/promise-deep',
        component: ComponentCreator('/docs/JS/async/promise-deep', '7bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/async/promise-use',
        component: ComponentCreator('/docs/JS/async/promise-use', '945'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/babel',
        component: ComponentCreator('/docs/JS/babel', 'a5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/base',
        component: ComponentCreator('/docs/JS/base', '410'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/closure',
        component: ComponentCreator('/docs/JS/closure', '9e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/context',
        component: ComponentCreator('/docs/JS/context', 'f7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/function',
        component: ComponentCreator('/docs/JS/function', '4b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/module/',
        component: ComponentCreator('/docs/JS/module/', '7e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/module/amd',
        component: ComponentCreator('/docs/JS/module/amd', 'b0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/module/commonjs',
        component: ComponentCreator('/docs/JS/module/commonjs', 'c9b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/module/esm',
        component: ComponentCreator('/docs/JS/module/esm', '03d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/object',
        component: ComponentCreator('/docs/JS/object', '89a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/other',
        component: ComponentCreator('/docs/JS/other', 'adb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/proxy',
        component: ComponentCreator('/docs/JS/proxy', '56d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/request',
        component: ComponentCreator('/docs/JS/request', 'fde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/scope',
        component: ComponentCreator('/docs/JS/scope', '369'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/storage',
        component: ComponentCreator('/docs/JS/storage', '68f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/this',
        component: ComponentCreator('/docs/JS/this', '2f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/types/',
        component: ComponentCreator('/docs/JS/types/', 'a35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/JS/types/reference',
        component: ComponentCreator('/docs/JS/types/reference', 'ca9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/monitor/hello',
        component: ComponentCreator('/docs/monitor/hello', 'ab5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/network/cdn',
        component: ComponentCreator('/docs/network/cdn', '7bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/network/protocol/dhcp',
        component: ComponentCreator('/docs/network/protocol/dhcp', 'e6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/network/protocol/dns',
        component: ComponentCreator('/docs/network/protocol/dns', 'fb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/network/protocol/http',
        component: ComponentCreator('/docs/network/protocol/http', '77d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/network/protocol/icmp',
        component: ComponentCreator('/docs/network/protocol/icmp', '8b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/network/protocol/tcp',
        component: ComponentCreator('/docs/network/protocol/tcp', 'af6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ops-linux/alias',
        component: ComponentCreator('/docs/ops-linux/alias', 'ec3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ops-linux/char',
        component: ComponentCreator('/docs/ops-linux/char', '330'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ops-linux/cmd',
        component: ComponentCreator('/docs/ops-linux/cmd', '978'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ops-linux/hello',
        component: ComponentCreator('/docs/ops-linux/hello', 'f15'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ops-linux/nginx',
        component: ComponentCreator('/docs/ops-linux/nginx', '457'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ops-linux/test',
        component: ComponentCreator('/docs/ops-linux/test', 'f4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/performance/analysis',
        component: ComponentCreator('/docs/performance/analysis', '521'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/performance/cache',
        component: ComponentCreator('/docs/performance/cache', '6ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/performance/file',
        component: ComponentCreator('/docs/performance/file', '779'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/performance/render',
        component: ComponentCreator('/docs/performance/render', '2e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/',
        component: ComponentCreator('/docs/project/', 'b0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/',
        component: ComponentCreator('/docs/project/bundler/', '524'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/rollup',
        component: ComponentCreator('/docs/project/bundler/rollup', '41a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/vite',
        component: ComponentCreator('/docs/project/bundler/vite', 'b35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/',
        component: ComponentCreator('/docs/project/bundler/webpack/', '28b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/compilation/',
        component: ComponentCreator('/docs/project/bundler/webpack/compilation/', '42d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/compilation/build-module',
        component: ComponentCreator('/docs/project/bundler/webpack/compilation/build-module', '32a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/compiler',
        component: ComponentCreator('/docs/project/bundler/webpack/compiler', 'b88'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/hash',
        component: ComponentCreator('/docs/project/bundler/webpack/hash', '023'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/hmr',
        component: ComponentCreator('/docs/project/bundler/webpack/hmr', '809'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/loader',
        component: ComponentCreator('/docs/project/bundler/webpack/loader', 'c48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/output',
        component: ComponentCreator('/docs/project/bundler/webpack/output', '5d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/parse',
        component: ComponentCreator('/docs/project/bundler/webpack/parse', '4d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/plugin',
        component: ComponentCreator('/docs/project/bundler/webpack/plugin', '290'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/prepare',
        component: ComponentCreator('/docs/project/bundler/webpack/prepare', '69c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/sourcemap',
        component: ComponentCreator('/docs/project/bundler/webpack/sourcemap', '103'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/use',
        component: ComponentCreator('/docs/project/bundler/webpack/use', '7bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/bundler/webpack/webpack-cli',
        component: ComponentCreator('/docs/project/bundler/webpack/webpack-cli', '8e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/components',
        component: ComponentCreator('/docs/project/components', '792'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/docs',
        component: ComponentCreator('/docs/project/docs', '075'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/dot-config',
        component: ComponentCreator('/docs/project/dot-config', '228'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/env/',
        component: ComponentCreator('/docs/project/env/', '50c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/env/git',
        component: ComponentCreator('/docs/project/env/git', '4bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/env/node',
        component: ComponentCreator('/docs/project/env/node', 'a72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/env/terminal',
        component: ComponentCreator('/docs/project/env/terminal', '4f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/env/vscode',
        component: ComponentCreator('/docs/project/env/vscode', '149'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/mock',
        component: ComponentCreator('/docs/project/mock', '638'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/pkg/',
        component: ComponentCreator('/docs/project/pkg/', 'cf4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/pkg/deps',
        component: ComponentCreator('/docs/project/pkg/deps', '633'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/pkg/npm',
        component: ComponentCreator('/docs/project/pkg/npm', '6a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/pkg/yarn',
        component: ComponentCreator('/docs/project/pkg/yarn', 'd42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/prettier',
        component: ComponentCreator('/docs/project/prettier', '34d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/scheme/mitt',
        component: ComponentCreator('/docs/project/scheme/mitt', 'fc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/scripts',
        component: ComponentCreator('/docs/project/scripts', 'dce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/structure',
        component: ComponentCreator('/docs/project/structure', '2ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/testing',
        component: ComponentCreator('/docs/project/testing', 'b70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/types',
        component: ComponentCreator('/docs/project/types', 'd9b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/project/version',
        component: ComponentCreator('/docs/project/version', '72a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/security/cors',
        component: ComponentCreator('/docs/security/cors', '3c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/security/csrf',
        component: ComponentCreator('/docs/security/csrf', '64a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/security/hello',
        component: ComponentCreator('/docs/security/hello', '293'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/security/xss',
        component: ComponentCreator('/docs/security/xss', 'd8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/testing/',
        component: ComponentCreator('/docs/testing/', 'd81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/chrome',
        component: ComponentCreator('/docs/tools/chrome', '68c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/cmd',
        component: ComponentCreator('/docs/tools/cmd', '2ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/efficient',
        component: ComponentCreator('/docs/tools/efficient', '8f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/git',
        component: ComponentCreator('/docs/tools/git', 'f3a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/github',
        component: ComponentCreator('/docs/tools/github', 'd90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/index',
        component: ComponentCreator('/docs/tools/index', '680'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/npm',
        component: ComponentCreator('/docs/tools/npm', '9dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/nvm',
        component: ComponentCreator('/docs/tools/nvm', '92d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/postman',
        component: ComponentCreator('/docs/tools/postman', '3a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/proxy',
        component: ComponentCreator('/docs/tools/proxy', '449'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/terminal',
        component: ComponentCreator('/docs/tools/terminal', '6bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/TS/convention',
        component: ComponentCreator('/docs/TS/convention', 'b60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/TS/skill',
        component: ComponentCreator('/docs/TS/skill', '7fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/TS/type',
        component: ComponentCreator('/docs/TS/type', 'a06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/TS/utils',
        component: ComponentCreator('/docs/TS/utils', 'c01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/working/new',
        component: ComponentCreator('/docs/working/new', '0de'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '668'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
