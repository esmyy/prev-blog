import fs from "fs";
import piexifjs from "piexifjs";

export function insertImageDescription(img: string, description: string) {
  const reg = /(.jpe?g)$/;
  console.log(img);
  const extension = reg.exec(img);
  if (!extension) {
    throw new Error("图片必须提供拓展名");
  }

  // 写入图片描述
  const base64Data = fs.readFileSync(img, { encoding: "base64" });
  const prefix = "data:image/jpeg;base64,";
  const base64DataWithPrefix = prefix + base64Data;
  const exifObj = piexifjs.load(base64DataWithPrefix);
  console.log(exifObj);
  const imgCaptureTime =
    exifObj["Exif"][piexifjs.piexif.ExifIFD.DateTimeOriginal] || "";
  exifObj["0th"][piexifjs.piexif.ImageIFD.ImageDescription] = description;
  const exifStr = piexifjs.dump(exifObj);
  const newImg = piexifjs.insert(exifStr, base64DataWithPrefix);

  // 大小优化

  // 文件重命名
  const newImgName =
    imgCaptureTime.replace(/[\s\:\-\/]/g, "") +
    " " +
    img.replace(reg, ".parsed$1");

  // 重写，特定位置
  // fs.writeFileSync(newImgName, newImg.replace(prefix, ""), {
  //   encoding: "base64",
  // });
}

// 避免文件太大
