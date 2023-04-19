const momentsListUtils = {
  pageSize: 10,
  pageNum: 0,

  selector: {
    loadmore: "#momentLoadMore",
    list: "#momentsBox",
  },

  loadmore: null,
  list: null,
  dataUrl: "",
  momentList: [],

  // 需要先加载 hexo 插件
  init() {
    this.addLoadmoreListener();
    this.dataUrl = window.hexoHelpers.source_url("/json/moments.json");
    this.updateStatus.bind(this);
    this.appendMoments.bind(this);
    fetch(this.dataUrl)
      .then((res) => {
        return res.json();
      })
      .then((list) => {
        this.momentList = list;
        this.appendMoments();
        this.updateStatus();
      });
  },

  createNode(config) {
    const content = config.content.replace(/(#[^\s]*)/g, function (m) {
      return `<span class="tag">${m.replace("#", "")}</span>`;
    });
    const item = document.createElement("div");
    item.classList.add("momentsItem");
    item.innerHTML = `
      <p class="time">${config.createAt}</p>
      <p class="content">${content}</p>
    `;
    return item;
  },

  getElement(selector) {
    return document.querySelector(selector);
  },

  hasMore() {
    return this.momentList.length > this.pageNum * this.pageSize;
  },

  addLoadmoreListener() {
    const lm = this.loadmore || this.getElement(this.selector.loadmore);
    const loadmoreBtn = lm.querySelector(this.selector.more);
    const handleLoadmore = () => {
      if (this.hasMore()) {
        this.pageNum++;
        this.appendMoments();
        this.updateStatus();
      } else {
        toastr.info(
          this.pageNum === 1 ? "暂时还没有数据哦..." : "没有更多数据了..."
        );
      }
    };

    if (loadmoreBtn) {
      loadmoreBtn.addEventListener("click", handleLoadmore);
    }

    if (!this.loadmore) {
      this.loadmore = lm;
    }
  },
  appendMoments() {
    const start = this.pageNum * this.pageSize;
    const data = this.momentList.slice(start, start + this.pageSize);
    const list = document.querySelector(this.selector.list);
    const fragment = new DocumentFragment();
    data
      .filter((s) => !!s.content)
      .forEach((item) => {
        fragment.appendChild(this.createNode(item));
      });
    list.appendChild(fragment);
  },
  updateStatus() {
    this.pageNum++;

    const lm = this.loadmore || this.getElement(this.selector.loadmore);
    if (this.hasMore()) {
      lm.classList.remove("nomore", "loading");
      lm.classList.add("more");
    } else {
      lm.classList.remove("more", "loading");
      lm.classList.add("nomore");
    }
  },
};

momentsListUtils.init();
