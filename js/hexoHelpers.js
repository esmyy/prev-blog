let hexo=null;const helper={init(){},source_url:(e,t)=>("undefined"!=typeof window&&(t="development"===!document.body.getAttribute("data-env")),t?`//cdn.jsdelivr.net/gh/esmyy/esmyy.github.io@gh-pages${e}`:`${e}`),get_poster(e){let t=e.poster;if(!e.poster){const r=e.more.match(/<img src="([^\s]*)/);t=r?r[1]:""}return t.replace(/["?\/]$/,"").replace(/^\/blog/,"")},get_excerpt:e=>e.excerpt||e.more.replace(/<[^>]*>/gi," ").slice(0,160).trim().replace(/[\s=,.?!@#$%^&*()_+:"<>/\[\]\\`~——，。、《》？；’：“【】、{}|·！￥…（）-]*$/,""),tag_exists(e,t){e.tags.data.filter((e=>e.name===t))},get_last_of(e,t){const r=e.categories.data.find((e=>e.name===t));let l=null;return r&&(l=r.posts.last()),l},get_leancloud(e){if(e)return e.leancloudApp;const t=document.querySelector("#leancloudApp");return{appId:t.getAttribute("data-app-id"),appKey:t.getAttribute("data-app-key"),serverUrls:t.getAttribute("data-server-urls")}}};"undefined"!=typeof window&&Object.keys(helper).forEach((e=>{"function"==typeof helper[e]&&(window.hexoHelper=helper)}));export default helper;