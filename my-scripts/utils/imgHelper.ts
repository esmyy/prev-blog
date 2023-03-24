import chalk from "chalk";
import fs from "fs";
import path from "path";
import piexifjs from "piexifjs";
import shelljs from "shelljs";

export const imgHelper = {
  extensionMatchReg: /(.jpe?g)$/,
  maxImgSize: 1 * 1000 * 1000,
  base64Prefix: "data:image/jpeg;base64,",
  timeMatchReg: /^[\d-]*/,
  /**
   * 获取照片存储地址，默认在博客工程的 beauty/年/月 目录下
   */
  getDestDir() {
    const BLOG_ROOT = process.env["BLOG_ROOT"] || "";
    if (!BLOG_ROOT) {
      console.log(
        chalk.yellowBright("没有设置BLOG_ROOT环境变量，默认使用 ~/esmyy.com")
      );
    }
    const date = new Date();
    const destDir = path.resolve(
      BLOG_ROOT,
      `beauty/${date.getFullYear()}/${date.getMonth() + 1}`
    );

    return fs.existsSync(destDir) ? destDir : path.resolve("./");
  },
  /**
   * 从exif信息中提取拍摄时间
   */
  getCaptureTime(exifObj: any) {
    return exifObj["Exif"][piexifjs.piexif.ExifIFD.DateTimeOriginal] || "";
  },
  /**
   * 将图片描述信息保存到图片中
   */
  assignDescription(exifObj: any, description: string) {
    exifObj["0th"][piexifjs.piexif.ImageIFD.ImageDescription] = description;
  },
  getParsedInfo(imgName: string): {
    time: string;
    name: string;
  } {
    const time = (this.timeMatchReg.exec(imgName) || "").replace(/-$/, "");
    const name = imgName
      .replace(this.timeMatchReg, "")
      .replace(/(\.mini)?\.jpe?g/, "");
    return {
      time,
      name,
    };
  },
  /**
   * 读取文件中保存的描述信息
   */
  getImgInfo(img: string) {
    if (!fs.existsSync(img)) {
      throw new Error("图片未找到");
    }

    const base64Data = fs.readFileSync(img, { encoding: "base64" });
    const base64DataWithPrefix = this.base64Prefix + base64Data;
    const exifObj = piexifjs.load(base64DataWithPrefix);
    const imgName = img.split("/").pop();
    const parsedInfo = this.getParsedInfo(imgName);
    return {
      description:
        exifObj["0th"][piexifjs.piexif.ImageIFD.ImageDescription] || "",
      time: parsedInfo.time,
      name: parsedInfo.name,
    };
  },
  formatCaptureTime(captureTime: string) {
    return captureTime.replace(/[\s:]/g, "-");
  },
  appendExtension(img: string) {
    return {
      jpg: img + ".jpg",
      jpeg: img + ".jpeg",
    };
  },
  appendNameStatus(img: string, status?: string) {
    return img.replace(
      this.extensionMatchReg,
      `${status ? "." + status : ""}$1`
    );
  },
  isValidImage(img: string) {
    const matches: string[] = [img];
    if (!/^[~\/]/.test(img)) {
      matches.push(path.resolve(img));
      matches.push(path.resolve(img, ".jpg"));
      matches.push(path.resolve(img, ".jpeg"));
    }

    return {
      valid: matches.some((p) => fs.existsSync(p)),
      message: "图片不存在",
    };
  },
  fixImagePath(img: string) {
    const matches: string[] = [];
    if (!/^[~\/]/.test(img)) {
      matches.push(path.resolve(img));
      matches.push(path.resolve(img, ".jpg"));
      matches.push(path.resolve(img, ".jpeg"));
    } else {
      matches.push(img);
    }

    return matches.find((p) => fs.existsSync(p)) || "";
  },
  minifyJpeg(img: string) {
    const stat = fs.statSync(img);
    let size = stat.size;
    while (size > this.maxImgSize) {
      size = size * 0.8;
    }

    const percentage: number = Number((size / stat.size).toFixed(2)) * 100;
    const newImg = this.appendNameStatus(img, "mini");
    shelljs.exec(`convert ${img} -resize ${percentage}% ${newImg}`);
    console.log("percentage", size, stat.size, percentage);
    return newImg;
  },
  insertDescription(img: string, description: string) {
    // 写入图片描述
    const base64Data = fs.readFileSync(img, { encoding: "base64" });
    const base64DataWithPrefix = this.base64Prefix + base64Data;
    const exifObj = piexifjs.load(base64DataWithPrefix);
    this.assignDescription(exifObj, description);
    const exifStr = piexifjs.dump(exifObj);
    const newImg = piexifjs
      .insert(exifStr, base64DataWithPrefix)
      .replace(this.base64Prefix, "");
    return {
      destImg: newImg,
      captureTime: this.getCaptureTime(exifObj),
    };
  },
  write(options: { imgName: string; destImg: string; captureTime: string }) {
    const { imgName, destImg, captureTime } = options;
    // 文件重命名
    const imgPathArr = imgName.split("/");
    const destDir = this.getDestDir();
    const destImgPath =
      destDir +
      "/" +
      this.formatCaptureTime(captureTime) +
      "-" +
      imgPathArr.slice(-1);

    // 写入到目的文件夹
    fs.writeFileSync(destImgPath, destImg.replace(this.base64Prefix, ""), {
      encoding: "base64",
    });
    console.log(chalk.greenBright(`照片添加成功: ${destImgPath}`));
    return {
      destImgPath,
    };
  },
  updateConfig(destImgPath: string) {
    const targetConfigFile = path.resolve(destImgPath, "../../../photos.json");
    const data = fs.readFileSync(targetConfigFile, "utf-8");
    const arr = JSON.parse(data);
    const imgName = destImgPath.split("/").pop();
    fs.writeFileSync(
      targetConfigFile,
      JSON.stringify([imgName].concat(arr)),
      "utf-8"
    );
    console.log(chalk.greenBright(`照片列表已更新: ${targetConfigFile}`));
  },
};

// 避免文件太大
