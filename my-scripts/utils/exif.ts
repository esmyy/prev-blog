export function parseExif(data) {
  return {
    captureTime: data["DateTimeOriginal"]?.description,
    height: data["Image Height"],
    width: data["Image Width"],
    size: 0,
  };
}
