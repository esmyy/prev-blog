#!/usr/bin/env node

// 通过脚本发布一张图片

import fs from "fs-extra";
import inquirer from "inquirer";
import path from "path";
import shelljs from "shelljs";
const date = new Date();

if (!process.env["BLOG_ROOT"]) {
  shelljs.exec(`npm run install-root`);
}

const BLOG_ROOT = process.env["BLOG_ROOT"] || "";
const destDir = path.resolve(BLOG_ROOT, `beauty/${date.getFullYear()}`);
if (!fs.existsSync(destDir)) {
  fs.mkdirpSync(destDir);
}

const [sourceImg, summary] = process.argv.slice(2);
async function prompt() {
  const name = await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "图片: ",
        default: sourceImg || "",
        filter(input) {
          return /^[~\/]/.test(input) ? input : path.resolve(BLOG_ROOT, input);
        },
        validate(input, answer) {
          console.log("wa", input, answer);
          const done = this.async();
          return fs.existsSync(input)
            ? done("", true)
            : done("图片不存在，请确认", false);
        },
      },
    ])
    .then(() => {
      console.log("hhh");
    });
  console.log(name);

  // .then((answer) => {
  //   console.log("wan", answer);
  // });
}

prompt();
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
