const momentsListUtils={pagination:{pageSize:10,pageNum:1},selector:{loadmore:"#momentLoadMore",list:"#momentsBox"},artitalkHelper:null,loadmore:null,list:null,init(){this.addLoadmoreListener(),this.artitalkHelper=window.artitalkHelper,this.artitalkHelper.register({onReady:this.fetchMoments.bind(this)})},createNode(t){const e=this.artitalkHelper.getTime(t.createdAt),s=t.atContentMd.replace(/(#[^\s]*)/g,(function(t){return`<span class="tag">${t.replace("#","")}</span>`})),i=document.createElement("div");return i.classList.add("momentsItem"),i.innerHTML=`\n      <p class="time">${e}</p>\n      <p class="content">${s}</p>\n    `,i},getElement:t=>document.querySelector(t),addLoadmoreListener(){const t=this.loadmore||this.getElement(this.selector.loadmore),e=t.querySelector(this.selector.more),s=this;e&&e.addEventListener("click",(()=>{s.fetchMoments()})),this.loadmore||(this.loadmore=t)},fetchMoments(){this.artitalkHelper.getMoments(this.pagination).then((t=>{this.updateStatus(t),this.appendMoments(t),t.length?this.pagination.pageNum++:toastr.info(1===this.pagination.pageNum?"暂时还没有数据哦...":"没有更多数据了...")}))},updateStatus(t){const e=this.loadmore||this.getElement(this.selector.loadmore);t.length>=this.pagination.pageSize?(e.classList.remove("nomore","loading"),e.classList.add("more")):(e.classList.remove("more","loading"),e.classList.add("nomore"))},appendMoments(t){const e=document.querySelector(this.selector.list),s=new DocumentFragment;t.filter((t=>!!t.atContentMd)).forEach((t=>{s.appendChild(this.createNode(t))})),e.appendChild(s),this.list||(this.list=e)}};momentsListUtils.init();