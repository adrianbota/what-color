export default (image) => {
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');
  let ratio = 1 / window.devicePixelRatio;

  canvas.width = image.width;
  canvas.height = image.height;

  context.scale(ratio, ratio);
  context.webkitImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  return canvas;
};
