export default (image) => {
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');

  canvas.width = image.width / window.devicePixelRatio;
  canvas.height = image.height / window.devicePixelRatio;
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  return canvas;
};
