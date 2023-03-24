import fs from "fs-extra";
import shelljs from "shelljs";

// import imagemin from "imagemin";
// import imageminJpegtran from "imagemin-jpegtran";

// async function minifyJpeg() {
//   const files = await imagemin(["./*.jpg"], {
//     destination: "images",
//     plugins: [imageminJpegtran()],
//   }).catch((e: any) => {
//     console.log("eee", e);
//   });
//   console.log(files);
// }

// minifyJpeg();
// //
const stat = fs.statSync("exif2.jpg");

if (stat.size > 2 * 1000 * 1000) {
  let size = stat.size;
  let maxSize = 1 * 1000 * 1000;
  while (size > maxSize) {
    size = maxSize * 0.8;
  }
  const percentage: number = Number((size / maxSize).toFixed(2)) * 100;
  shelljs.exec(`convert exif2.jpg -resize ${percentage} exof2.mini.jpg`);
}
console.log(stat);
