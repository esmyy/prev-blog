let hexo=null;const helper={init(e){hexo=e.hexo},source_url(e,r){if(!hexo)return;const t=hexo.config.jsdelivr;return t.enable&&r?`//${t.baseUrl}/gh/${t.gh_user}/${t.gh_repo}@main${e}`:`${e}`},source_url(e,r){if(!hexo)return;const t=hexo.config.jsdelivr;return t.enable&&r?`//${t.baseUrl}/gh/${t.gh_user}/${t.gh_repo}@main${e}`:`${e}`},get_poster(e){let r=e.poster;if(!e.poster){const t=e.more.match(/<img src="([^\s]*)/);r=t?t[1]:""}return r.replace(/["?\/]$/,"").replace(/^\/blog/,"")},get_excerpt:e=>e.excerpt||e.more.replace(/<[^>]*>/gi," ").slice(0,160).trim().replace(/[\s=,.?!@#$%^&*()_+:"<>/\[\]\\`~——，。、《》？；’：“【】、{}|·！￥…（）-]*$/,""),get_last_of(e,r){const t=e.categories.data.find((e=>e.name===r));let o=null;return t&&(o=t.posts.last()),o},get_leancloud(e){if(e)return e.leancloudApp;const r=document.querySelector("#leancloudApp");return{appId:r.getAttribute("data-app-id"),appKey:r.getAttribute("data-app-key"),serverUrls:r.getAttribute("data-server-urls")}}};"undefined"!=typeof window&&Object.keys(helper).forEach((e=>{"function"==typeof helper[e]&&(window.hexoHelper=helper)}));export default helper;