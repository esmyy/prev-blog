!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).hexoHelpers=t()}(this,(function(){"use strict";let e=null;const t={init(t){e=t.hexo},source_url(t,r){if(!e)return;const o=e.config.jsdelivr;return o.enable&&r?`//${o.baseUrl}/gh/${o.gh_user}/${o.gh_repo}@${o.gh_branch}${t}`:`${t}`},get_poster(e){let t=e.poster;if(!e.poster){const r=e.more.match(/<img src="([^\s]*)/);t=r?r[1]:""}return t.replace(/["?\/]$/,"").replace(/^\/blog/,"")},get_excerpt:e=>e.excerpt||e.more.replace(/<[^>]*>/gi," ").slice(0,160).trim().replace(/[\s=,.?!@#$%^&*()_+:"<>/\[\]\\`~——，。、《》？；’：“【】、{}|·！￥…（）-]*$/,""),tag_exists(e,t){e.tags.data.filter((e=>e.name===t))},get_last_of(e,t){const r=e.categories.data.find((e=>e.name===t));let o=null;return r&&(o=r.posts.last()),o},get_leancloud(e){if(e)return e.leancloudApp;const t=document.querySelector("#leancloudApp");return{appId:t.getAttribute("data-app-id"),appKey:t.getAttribute("data-app-key"),serverUrls:t.getAttribute("data-server-urls")}}};return"undefined"!=typeof window&&Object.keys(t).forEach((e=>{"function"==typeof t[e]&&(window.hexoHelper=t)})),t}));