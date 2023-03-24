#!/usr/bin/env node

// 通过脚本发布一张图片

import fs from "fs-extra";
import inquirer from "inquirer";
import path from "path";
import shelljs from "shelljs";
import { insertImageDescription } from "./exif.ts";

const date = new Date();

if (!process.env["BLOG_ROOT"]) {
  shelljs.exec(`npm run install-root`);
}

const BLOG_ROOT = process.env["BLOG_ROOT"] || "";
const destDir = path.resolve(BLOG_ROOT, `beauty/${date.getFullYear()}`);
if (!fs.existsSync(destDir)) {
  fs.mkdirpSync(destDir);
}

const [sourceImg = "", description = ""] = process.argv.slice(2);
const sourceImgName = sourceImg.split("/").pop();
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "输入图片地址(jpg/jpeg): ",
      default: sourceImg || "",
      when() {
        return !sourceImg;
      },
      validate(input, answer) {
        const imgPath = /^[~\/]/.test(input)
          ? input
          : path.resolve(BLOG_ROOT, input);
        return fs.existsSync(imgPath)
          ? Promise.resolve(true)
          : Promise.reject("图片不存在");
      },
    },
    {
      type: "input",
      name: "description",
      message: "输入图片描述: ",
      default: description || sourceImgName || "",
      when() {
        return !description;
      },
      validate(input, answer) {
        return input ? Promise.resolve(true) : Promise.reject("描述不能为空");
      },
    },
  ])
  .then((answer) => {
    const { name, description } = answer;
    insertImageDescription(name, description);
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
// if (!latestImg.description) {
//   console.log(chalk.greenBright(`可能需要补充图片描述: ${latestFile}`));
// }
// console.log(latestImg);
