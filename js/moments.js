const momentsListUtils={pageSize:10,pageNum:0,selector:{loadmore:"#momentLoadMore",list:"#momentsBox"},loadmore:null,list:null,dataUrl:"",momentList:[],init(){this.addLoadmoreListener(),this.dataUrl=window.hexoHelpers.source_url("/json/moments.json",!0),this.updateStatus.bind(this),this.appendMoments.bind(this),fetch(this.dataUrl).then((e=>e.json())).then((e=>{this.momentList=e,this.appendMoments(),this.updateStatus()}))},createNode(e){const t=e.content.replace(/(#[^\s]*)/g,(function(e){return`<span class="tag">${e.replace("#","")}</span>`})),s=document.createElement("div");return s.classList.add("momentsItem"),s.innerHTML=`\n      <p class="time">${e.createAt}</p>\n      <p class="content">${t}</p>\n    `,s},getElement:e=>document.querySelector(e),hasMore(){return this.momentList.length>this.pageNum*this.pageSize},addLoadmoreListener(){const e=this.loadmore||this.getElement(this.selector.loadmore),t=e.querySelector(this.selector.more),s=()=>{this.hasMore()?(this.pageNum++,this.appendMoments(),this.updateStatus()):toastr.info(1===this.pageNum?"暂时还没有数据哦...":"没有更多数据了...")};t&&t.addEventListener("click",s),this.loadmore||(this.loadmore=e)},appendMoments(){const e=this.pageNum*this.pageSize,t=this.momentList.slice(e,e+this.pageSize),s=document.querySelector(this.selector.list),o=new DocumentFragment;t.filter((e=>!!e.content)).forEach((e=>{o.appendChild(this.createNode(e))})),s.appendChild(o)},updateStatus(){this.pageNum++;const e=this.loadmore||this.getElement(this.selector.loadmore);this.hasMore()?(e.classList.remove("nomore","loading"),e.classList.add("more")):(e.classList.remove("more","loading"),e.classList.add("nomore"))}};momentsListUtils.init();