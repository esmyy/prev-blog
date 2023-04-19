const helper = require("../source/js/hexoHelpers.umd2.js");
helper.init({ hexo });
Object.keys(helper).forEach((key) => {
  if (typeof helper[key] === "function") {
    hexo.extend.helper.register(key, helper[key]);
  }
});
