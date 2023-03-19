function img_url(path, useCDN) {
  const jsdelivrCDN = hexo.config.jsdelivr;
  return jsdelivrCDN.enable && useCDN
    ? `//${jsdelivrCDN.baseUrl}/gh/${jsdelivrCDN.gh_user}/${jsdelivrCDN.gh_repo}@main${path}`
    : `/blog${path}`;
}

function css_url(path, useCDN) {
  const jsdelivrCDN = hexo.config.jsdelivr;
  return jsdelivrCDN.enable && useCDN
    ? `//${jsdelivrCDN.baseUrl}/gh/${jsdelivrCDN.gh_user}/${jsdelivrCDN.gh_repo}@main${path}`
    : `/blog${path}`;
}

function get_poster(post) {
  let poster = post.poster;
  if (!post.poster) {
    const match = post.more.match(/<img src="([^\s]*)/);
    poster = match ? match[1] : "";
  }

  return poster.replace(/["?\/]$/, "").replace(/^\/blog/, "");
}

function get_excerpt(post) => {
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
}

function get_last_of(site, category) {
  const match = site.categories.data.find((c) => c.name === category);

  let last = null;
  if (match) {
    last = match.posts.last();
  }

  return last;
}

hexo.extend.helper.register("img_url", img_url);
hexo.extend.helper.register("css_url", css_url);
hexo.extend.helper.register("get_poster", get_poster);
hexo.extend.helper.register("get_excerpt", get_excerpt);
hexo.extend.helper.register("get_last_of", get_last_of);

;(() => {
  if (typeof window !== 'undefined') {
    window.hexoHelper.img_url = img_url
    window.hexoHelper.css_url = css_url
    window.hexoHelper.get_poster = get_poster
    window.hexoHelper.get_excerpt = get_excerpt
    window.hexoHelper.get_last_of = get_last_of
  }
})();