export default (data) => new Promise((resolve) => {
  let image = new Image();
  image.onload = () => resolve(image);
  image.src = data;
});
