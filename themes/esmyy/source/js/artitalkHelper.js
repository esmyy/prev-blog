const artitalkHelper = {
  headers: {},
  api: {
    get: "https://ssapi.esmyy.com/1.1/classes/moments",
    post: "https://ssapi.esmyy.com/1.1/classes/moments",
    login: "https://ssapi.esmyy.com/1.1/login",
  },

  onReady: [],

  getElement(selector) {
    return document.querySelector(selector);
  },

  pureSelector(selector) {
    return selector.replace(/[\.#]/g, "");
  },

  getTime(createdAt) {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = ["0", date.getMonth() + 1].join("").slice(-2);
    const day = ["0", date.getDay() + 1].join("").slice(-2);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  },

  // 需要先加载hexo插件和artitalk
  init() {
    const { appId, appKey, serverUrls } = window.hexoHelper.get_leancloud();
    new Artitalk({
      appId,
      appKey,
      serverUrls,
    });

    this.listen();
    this.getM;
  },

  register(options) {
    if (options.onReady) {
      this.onReady.push(options.onReady);
      if (this.headers) {
        options.onReady(this.headers);
      }
    }
  },

  listen() {
    if (window.leancloudRequestData) {
      this.onReadyToLoad(leancloudRequestData);
    } else {
      window.onLeancloudReady = this.onReadyToLoad.bind(this);
    }
  },

  onReadyToLoad(leancloudRequestData) {
    this.headers = leancloudRequestData;
    this.onReady.forEach((cb) => {
      cb(leancloudRequestData);
    });
  },

  /**
   * @param {*} options
   * {
   *    pageSize: 10
   *    pageNum: 1
   * }
   * @returns
   */
  getMoments(options) {
    const limit = options.pageSize;
    const skip = (options.pageNum - 1) * options.pageSize;
    const url = `${this.api.get}?where=%7B%7D&limit=${limit}&skip=${skip}&order=-createdAt`;

    return this.fetch(url, {
      headers: this.headers,
    });
  },

  fetch(...args) {
    return fetch
      .apply(null, args)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.error) {
          toastr.error(res.error);
          return Promise.reject(new Error(res.error));
        }

        const list = res.results || [];
        return Promise.resolve(list);
      });
  },

  /**
   *
   * @param {*} data
   * {
   *   username: '',
   *   password: ''
   * }
   */
  login(data) {
    return this.fetch(this.api.login, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    });
  },

  postMoment(data) {
    return this.fetch(this.api.post, {
      method: "POST",
      headers: {
        ...this.headers,
      },
      body: JSON.stringify(data),
    });
  },
};

window.artitalkHelper = artitalkHelper;
artitalkHelper.init();
