#!/usr/bin/env node

// 通过脚本发布一张图片
import inquirer from "inquirer";
import shelljs from "shelljs";
import { imgHelper } from "./utils/imgHelper.ts";

if (!process.env["BLOG_ROOT"]) {
  shelljs.exec(`npm run init`);
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
    const { captureTime, destImg } = imgHelper.insertDescription(
      miniImg,
      description
    );
    const { destImgPath } = imgHelper.write({
      imgName: img,
      destImg,
      captureTime,
    });
    imgHelper.updateConfig(destImgPath);
  });
