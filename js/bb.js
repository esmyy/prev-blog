const bbHelper={storage:{info:"MOMENTS_PUBLISHER_INFO",cache:"EDITING_MOMENT_CACHE_KEY"},artitalkHelper:null,selector:{bbWrapper:".bbWrapper",loginWrapper:".loginWrapper",loginBtn:".loginBtn",username:".bbUsername",password:".bbPassword",postBtn:".postBtn",content:".content"},init(){const{appId:e,appKey:t,serverUrls:r}=window.hexoHelper.get_leancloud();new Artitalk({appId:e,appKey:t,serverUrls:r}),this.checkStatus(),this.artitalkHelper=window.artitalkHelper},getElement:e=>document.querySelector(e),login(e){this.artitalkHelper.login(e).then((e=>{toastr.success("登录成功"),localStorage.setItem(this.storage.info,JSON.stringify(e)),this.checkStatus()}))},post(e){this.artitalkHelper.postMoment(e).then((()=>{toastr.success("发布成功")}))},getElement:e=>document.querySelector(e),checkStorage:e=>!!localStorage.getItem(e),checkStatus(){const e=document.querySelector(this.selector.bbWrapper);this.checkStorage(this.storage.info)?(e.classList.add("ready"),this.registerPostHandler(e)):(e.classList.remove("ready"),this.registerLoginHandler(e))},registerPostHandler(e){const t=e.querySelector(this.selector.content),r=e.querySelector(this.selector.postBtn),s=this;r.addEventListener("click",(function(){const e=t.value;e&&s.post({atContentHtml:`<p>${e}</p>`,atContentMd:e,avatar:"https://avatars.githubusercontent.com/u/20430185?v=4"})}));const o=localStorage.getItem(this.storage.cache);o&&(t.value=o),t.addEventListener("input",(e=>{localStorage.setItem(this.storage.cache,e.target.value)}))},registerLoginHandler(e){const t=e.querySelector(this.selector.loginBtn),r=e.querySelector(this.selector.username),s=e.querySelector(this.selector.password),o=this;t.addEventListener("click",(function(){r.value&&s.value&&o.login({username:r.value,password:s.value})}))}};bbHelper.init();