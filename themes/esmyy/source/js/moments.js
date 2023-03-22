const momentsListUtils = {
  pagination: {
    pageSize: 10,
    pageNum: 1,
  },

  selector: {
    loadmore: "#momentLoadMore",
    list: "#momentsBox",
  },

  artitalkHelper: null,
  loadmore: null,
  list: null,

  // 需要先加载 hexo 插件、artitalk、artitalkHelper
  init() {
    this.addLoadmoreListener();
    this.artitalkHelper = window.artitalkHelper;
    this.artitalkHelper.register({
      onReady: this.fetchMoments.bind(this),
    });
  },

  createNode(config) {
    const time = this.artitalkHelper.getTime(config.createdAt);
    const content = config.atContentMd.replace(/(#[^\s]*)/g, function (m) {
      return `<span class="tag">${m.replace("#", "")}</span>`;
    });

    const item = document.createElement("div");
    item.classList.add("momentsItem");
    item.innerHTML = `
      <p class="time">${time}</p>
      <p class="content">${content}</p>
    `;
    return item;
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
        that.fetchMoments();
      });
    }

    if (!this.loadmore) {
      this.loadmore = lm;
    }
  },

  fetchMoments() {
    this.artitalkHelper.getMoments(this.pagination).then((list) => {
      this.updateStatus(list);
      this.appendMoments(list);
      if (!list.length) {
        toastr.info(
          this.pagination.pageNum === 1
            ? "暂时还没有数据哦..."
            : "没有更多数据了..."
        );
      } else {
        this.pagination.pageNum++;
      }
    });
  },

  updateStatus(data) {
    const lm = this.loadmore || this.getElement(this.selector.loadmore);
    if (data.length >= this.pagination.pageSize) {
      lm.classList.remove("nomore", "loading");
      lm.classList.add("more");
    } else {
      lm.classList.remove("more", "loading");
      lm.classList.add("nomore");
    }
  },
  appendMoments(data) {
    const list = document.querySelector(this.selector.list);
    const fragment = new DocumentFragment();
    data
      .filter((s) => !!s.atContentMd)
      .forEach((item) => {
        fragment.appendChild(this.createNode(item));
      });
    list.appendChild(fragment);

    if (!this.list) {
      this.list = list;
    }
  },
};

momentsListUtils.init();
