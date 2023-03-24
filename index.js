#!/usr/bin/env node
// 通过脚本发布一张图片
System.register("beauty", ["fs-extra", "inquirer", "path", "shelljs"], function (exports_1, context_1) {
    "use strict";
    var fs_extra_1, inquirer_1, path_1, shelljs_1, date, BLOG_ROOT, destDir, _a, sourceImg, summary;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (fs_extra_1_1) {
                fs_extra_1 = fs_extra_1_1;
            },
            function (inquirer_1_1) {
                inquirer_1 = inquirer_1_1;
            },
            function (path_1_1) {
                path_1 = path_1_1;
            },
            function (shelljs_1_1) {
                shelljs_1 = shelljs_1_1;
            }
        ],
        execute: function () {
            // 通过脚本发布一张图片
            date = new Date();
            if (!process.env["BLOG_ROOT"]) {
                shelljs_1.default.exec(`npm run install-root`);
            }
            BLOG_ROOT = process.env["BLOG_ROOT"] || "";
            destDir = path_1.default.resolve(BLOG_ROOT, `beauty/${date.getFullYear()}`);
            if (!fs_extra_1.default.existsSync(destDir)) {
                fs_extra_1.default.mkdirpSync(destDir);
            }
            _a = process.argv.slice(2), sourceImg = _a[0], summary = _a[1];
            inquirer_1.default
                .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "输入图片: ",
                    default: sourceImg || "",
                    when() {
                        return !sourceImg;
                    },
                    validate(input, answer) {
                        const imgPath = /^[~\/]/.test(input)
                            ? input
                            : path_1.default.resolve(BLOG_ROOT, input);
                        return fs_extra_1.default.existsSync(imgPath)
                            ? Promise.resolve(1)
                            : Promise.reject("图片不存在");
                    },
                },
            ])
                .then((answer) => {
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
        }
    };
});
