#!/usr/bin/env node

import { imgHelper } from "./utils/imgHelper.ts";
// 通过脚本发布一张图片

import fs from "fs-extra";
import inquirer from "inquirer";
import shelljs from "shelljs";

const date = new Date();

if (!process.env["BLOG_ROOT"]) {
  shelljs.exec(`npm run install-root`);
}

const destDir = imgHelper.getDestDir();
if (!fs.existsSync(destDir)) {
  fs.mkdirpSync(destDir);
}

const [sourceImg = "", sourceDescription = ""] = process.argv.slice(2);
inquirer
  .prompt([
    {
      type: "input",
      name: "img",
      message: "输入图片地址(jpg/jpeg): ",
      default: sourceImg || "",
      when() {
        return !sourceImg;
      },
      validate(input) {
        const validInfo = imgHelper.isValidImage(input);
        return validInfo.valid
          ? Promise.resolve(true)
          : Promise.reject(validInfo.message);
      },
    },
    {
      type: "input",
      name: "description",
      message: "输入图片描述: ",
      default: sourceDescription || "",
      validate(input) {
        return input ? Promise.resolve(true) : Promise.reject("描述不能为空");
      },
    },
  ])
  .then((answer) => {
    const { img = sourceImg, description = sourceDescription } = answer;
    const imgPath = imgHelper.fixImagePath(img);
    const miniImg = imgHelper.minifyJpeg(imgPath);
    imgHelper.insertDescription(miniImg, description);
  });
