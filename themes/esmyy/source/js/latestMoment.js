const latestMoment = {
  selector: {
    latestMomentsBox: "#latestMomentsBox",
  },

  artitalkHelper: null,

  // 需要先加载 hexo 插件、artitalk、artitalkHelper
  init() {
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
    item.classList.add("latestMomentsItem");
    // <img class="momentAuthor" src="${config.avatar}" />
    item.innerHTML = `
      <span class="time">${time}</span>
      <p class="content">${content}</p>
    `;
    return item;
  },

  getElement(selector) {
    return document.querySelector(selector);
  },

  fetchMoments() {
    this.artitalkHelper
      .getMoments({
        pageSize: 1,
        pageNum: 1,
      })
      .then((list) => {
        this.renderLatestItem(list[0]);
      });
  },

  renderLatestItem(item) {
    const box = this.getElement(this.selector.latestMomentsBox);
    if (box && item) {
      const content = this.createNode(item);
      box.appendChild(content);
    }
  },
};

latestMoment.init();
