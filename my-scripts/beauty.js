#!/usr/bin/env node
"use strict";
// 通过脚本发布一张图片
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
var inquirer_1 = __importDefault(require("inquirer"));
var path_1 = __importDefault(require("path"));
var shelljs_1 = __importDefault(require("shelljs"));
var date = new Date();
if (!process.env["BLOG_ROOT"]) {
  shelljs_1.default.exec("npm run install-root");
}
var BLOG_ROOT = process.env["BLOG_ROOT"] || "";
var destDir = path_1.default.resolve(
  BLOG_ROOT,
  "beauty/".concat(date.getFullYear())
);
if (!fs_extra_1.default.existsSync(destDir)) {
  fs_extra_1.default.mkdirpSync(destDir);
}
var _a = process.argv.slice(2),
  sourceImg = _a[0],
  summary = _a[1];
inquirer_1.default
  .prompt([
    {
      type: "input",
      name: "name",
      message: "输入图片: ",
      default: sourceImg || "",
      when: function () {
        return !sourceImg;
      },
      validate: function (input, answer) {
        var imgPath = /^[~\/]/.test(input)
          ? input
          : path_1.default.resolve(BLOG_ROOT, input);
        return fs_extra_1.default.existsSync(imgPath)
          ? Promise.resolve(1)
          : Promise.reject("图片不存在");
      },
    },
  ])
  .then(function (answer) {
    console.log("hhh", answer);
  });
// .then((answer) => {
//   console.log("wan", answer);
// });
// move imgs
// const sourceImgs = fs.readdirSync(sourceDir);
// const dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
// sourceImgs.forEach((sourceImg) => {
//   if (/\.(jpe?g|png|webp|gif)$/i.test(sourceImg)) {
//     fs.moveSync(
//       `${sourceDir}/${sourceImg}`,
//       `${destDir}/${dateStr}-${sourceImg}`
//     );
//   }
// });
// write to config json
// const latestFile = `${sourceDir}/latest.json`;
// const configFile = `${destDir}/${date.getFullYear()}.json`;
// function publishOneBeauty() {}
// if (!fs.existsSync(configFile)) {
//   fs.createFileSync(configFile);
// }
// const latestImg = require(latestFile);
// latestImg.name =
// latestImg.date = dateStr;
// if (!latestImg.summary) {
//   console.log(chalk.greenBright(`可能需要补充图片描述: ${latestFile}`));
// }
// console.log(latestImg);
