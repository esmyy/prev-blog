const source = (path, cache, ext) => {
  if (cache) {
    const minFile = `${path}${
      ext === ".js" || ext === "css" ? ".min" : ""
    }${ext}`;
    const jsdelivrCDN = hexo.config.jsdelivr;
    return jsdelivrCDN.enable
      ? `//${jsdelivrCDN.baseUrl}/gh/${jsdelivrCDN.gh_user}/${jsdelivrCDN.gh_repo}@latest/${minFile}`
      : `${minFile}?v=${version}`;
  } else {
    return path + ext;
  }
};

hexo.extend.helper.register("theme_js", (path, cache) =>
  source(path, cache, ".js")
);
hexo.extend.helper.register("theme_css", (path, cache) =>
  source(path, cache, ".css")
);

hexo.extend.helper.register("get_first_img", (post) => {
  let poster = post.poster;
  if (!post.poster) {
    const match = post.more.match(/<img src="([^\s]*)/);
    poster = match ? match[1] : "";
  }

  return poster.replace(/["?\/]$/, "");
});
