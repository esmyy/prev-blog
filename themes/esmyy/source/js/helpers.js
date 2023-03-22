let hexo = null;
const helper = {
  init(options) {
    hexo = options.hexo;
  },
  source_url(path, useCDN) {
    if (!hexo) {
      return;
    }

    const jsdelivrCDN = hexo.config.jsdelivr;
    return jsdelivrCDN.enable && useCDN
      ? `//${jsdelivrCDN.baseUrl}/gh/${jsdelivrCDN.gh_user}/${jsdelivrCDN.gh_repo}@main${path}`
      : `${path}`;
  },
  source_url(path, useCDN) {
    if (!hexo) {
      return;
    }

    const jsdelivrCDN = hexo.config.jsdelivr;
    return jsdelivrCDN.enable && useCDN
      ? `//${jsdelivrCDN.baseUrl}/gh/${jsdelivrCDN.gh_user}/${jsdelivrCDN.gh_repo}@main${path}`
      : `${path}`;
  },
  get_poster(post) {
    let poster = post.poster;
    if (!post.poster) {
      const match = post.more.match(/<img src="([^\s]*)/);
      poster = match ? match[1] : "";
    }

    return poster.replace(/["?\/]$/, "").replace(/^\/blog/, "");
  },
  get_excerpt(post) {
    return (
      post.excerpt ||
      post.more
        .replace(/<[^>]*>/gi, " ")
        .slice(0, 160)
        .trim()
        .replace(
          /[\s=,.?!@#$%^&*()_+:"<>/\[\]\\`~——，。、《》？；’：“【】、{}|·！￥…（）-]*$/,
          ""
        )
    );
  },
  tag_exists(site, name) {
    site.tags.data.filter((tag) => {
      return tag.name === name;
    });
  },
  get_last_of(site, category) {
    const match = site.categories.data.find((c) => c.name === category);

    let last = null;
    if (match) {
      last = match.posts.last();
    }

    return last;
  },
  get_leancloud(site) {
    if (site) {
      return site.leancloudApp;
    }

    const appElement = document.querySelector("#leancloudApp");
    const appId = appElement.getAttribute("data-app-id");
    const appKey = appElement.getAttribute("data-app-key");
    const serverUrls = appElement.getAttribute("data-server-urls");
    return {
      appId,
      appKey,
      serverUrls,
    };
  },
};

if (typeof window !== "undefined") {
  Object.keys(helper).forEach((key) => {
    if (typeof helper[key] === "function") {
      window.hexoHelper = helper;
    }
  });
}

export default helper;
