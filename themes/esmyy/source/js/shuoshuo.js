const artitalkHelper = {
  pagination: {
    pageSize: 10,
    pageNum: 1,
  },
  leancloudRequestData: {},
  api: {
    shuoshuo: "https://ssapi.esmyy.com/1.1/classes/shuoshuo",
  },

  selector: {
    loadmore: "#shoushuoLoadMore",
    more: ".more",
    nomore: ".nomore",
    loading: ".loading",
    list: "#shuoshuoList",
  },
  loadmore: null,
  list: null,

  createShuoshuoNode(config) {
    const time = this.getTime(config.createdAt);
    const content = config.atContentMd.replace(/(#[^\s]*)/g, function (m) {
      return `<span class="tag">${m.replace("#", "")}</span>`;
    });

    const item = document.createElement("div");
    item.classList.add("shuoshuoItem");
    item.innerHTML = `
      <p class="time">${time}</p>
      <p class="content">${content}</p>
    `;
    return item;
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
    this.addLoadmoreListener();
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
    this.fetchShuoshuo();
  },

  getElement(selector) {
    return document.querySelector(selector);
  },

  addLoadmoreListener() {
    const lm = this.loadmore || this.getElement(this.selector.loadmore);
    const loadmoreBtn = lm.querySelector(this.selector.more);
    const that = this;
    if (loadmoreBtn) {
      loadmoreBtn.addEventListener("click", () => {
        that.fetchShuoshuo();
      });
    }

    if (!this.loadmore) {
      this.loadmore = lm;
    }
  },

  pureSelector(selector) {
    return selector.replace(/[\.#]/g, "");
  },

  fetchShuoshuo() {
    const limit = this.pagination.pageSize;
    const skip = (this.pagination.pageNum - 1) * this.pagination.pageSize;
    const url = `${this.api.shuoshuo}?where=%7B%7D&limit=${limit}&skip=${skip}&order=-createdAt`;

    return fetch(url, {
      headers: this.headers,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.pagination.pageNum++;
        const list = data.results || [];
        if (!list.length) {
          toastr.info("没有更多数据了...");
        } else {
          this.renderList(list);
        }
      });
  },

  renderList(data) {
    const lm = this.loadmore || this.getElement(this.selector.loadmore);
    if (data.length >= this.pagination.pageSize) {
      lm.classList.remove(
        ...[
          this.pureSelector(this.selector.nomore),
          this.pureSelector(this.selector.loading),
        ]
      );
      lm.classList.add(this.pureSelector(this.selector.more));
    } else {
      lm.classList.remove(
        ...[
          this.pureSelector(this.selector.more),
          this.pureSelector(this.selector.loading),
        ]
      );

      lm.classList.add(this.pureSelector(this.selector.nomore));
    }

    const list = this.list || document.querySelector(this.selector.list);
    const fragment = new DocumentFragment();
    data
      .filter((s) => !!s.atContentMd)
      .forEach((item) => {
        fragment.appendChild(this.createShuoshuoNode(item));
      });
    list.appendChild(fragment);

    if (!this.list) {
      this.list = list;
    }
  },
};

artitalkHelper.init();
