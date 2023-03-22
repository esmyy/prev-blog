const bbHelper = {
  storage: {
    info: "MOMENTS_PUBLISHER_INFO",
    cache: "EDITING_MOMENT_CACHE_KEY",
  },
  artitalkHelper: null,

  selector: {
    bbWrapper: ".bbWrapper",
    loginWrapper: ".loginWrapper",
    loginBtn: ".loginBtn",
    username: ".bbUsername",
    password: ".bbPassword",
    postBtn: ".postBtn",
    content: ".content",
  },

  // 需要先加载hexo插件和artitalk
  init() {
    const { appId, appKey, serverUrls } = window.hexoHelper.get_leancloud();
    new Artitalk({
      appId,
      appKey,
      serverUrls,
    });

    this.checkStatus();
    this.artitalkHelper = window.artitalkHelper;
  },

  getElement(selector) {
    return document.querySelector(selector);
  },

  login(params) {
    this.artitalkHelper.login(params).then((data) => {
      toastr.success("登录成功");
      localStorage.setItem(this.storage.info, JSON.stringify(data));
      this.checkStatus();
    });
  },

  post(params) {
    this.artitalkHelper.postMoment(params).then(() => {
      toastr.success("发布成功");
    });
  },

  getElement(selector) {
    return document.querySelector(selector);
  },

  checkStorage(name) {
    return !!localStorage.getItem(name);
  },

  checkStatus() {
    const bbWrapper = document.querySelector(this.selector.bbWrapper);
    if (this.checkStorage(this.storage.info)) {
      bbWrapper.classList.add("ready");
      this.registerPostHandler(bbWrapper);
    } else {
      bbWrapper.classList.remove("ready");
      this.registerLoginHandler(bbWrapper);
    }
  },

  registerPostHandler(bbWrapper) {
    const content = bbWrapper.querySelector(this.selector.content);
    const postBtn = bbWrapper.querySelector(this.selector.postBtn);
    const that = this;
    postBtn.addEventListener("click", function () {
      const value = content.value;
      if (!value) {
        return;
      }

      that.post({
        atContentHtml: `<p>${value}</p>`,
        atContentMd: value,
        avatar: "https://avatars.githubusercontent.com/u/20430185?v=4",
      });
    });

    const cacheContent = localStorage.getItem(this.storage.cache);
    if (cacheContent) {
      content.value = cacheContent;
    }
    content.addEventListener("input", (e) => {
      localStorage.setItem(this.storage.cache, e.target.value);
    });
  },
  registerLoginHandler(bbWrapper) {
    const loginBtn = bbWrapper.querySelector(this.selector.loginBtn);
    const username = bbWrapper.querySelector(this.selector.username);
    const password = bbWrapper.querySelector(this.selector.password);
    const that = this;
    loginBtn.addEventListener("click", function () {
      if (!username.value || !password.value) {
        return;
      }

      that.login({
        username: username.value,
        password: password.value,
      });
    });
  },
};

bbHelper.init();
