hexo.extend.helper.register("img_url", (path, useCDN) => {
  const jsdelivrCDN = hexo.config.jsdelivr;
  return jsdelivrCDN.enable && useCDN
    ? `//${jsdelivrCDN.baseUrl}/gh/${jsdelivrCDN.gh_user}/${jsdelivrCDN.gh_repo}@main${path}`
    : `/blog${path}`;
});

hexo.extend.helper.register("css_url", (path, useCDN) => {
  const jsdelivrCDN = hexo.config.jsdelivr;
  return jsdelivrCDN.enable && useCDN
    ? `//${jsdelivrCDN.baseUrl}/gh/${jsdelivrCDN.gh_user}/${jsdelivrCDN.gh_repo}@main${path}`
    : `/blog${path}`;
});

hexo.extend.helper.register("get_poster", (post) => {
  let poster = post.poster;
  if (!post.poster) {
    const match = post.more.match(/<img src="([^\s]*)/);
    poster = match ? match[1] : "";
  }

  return poster.replace(/["?\/]$/, "");
});

hexo.extend.helper.register("get_excerpt", (post) => {
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
});

hexo.extend.helper.register("get_last_of", (site, category) => {
  const match = site.categories.data.find((c) => c.name === category);

  let last = null;
  if (match) {
    last = match.posts.last();
  }

  return last;
});
