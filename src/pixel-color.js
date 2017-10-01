var rgbToHex = require('./rgb-to-hex');

module.exports = function (canvas, px, py) {
  var context = canvas.getContext('2d');
  var data = context.getImageData(px, py, 1, 1).data;
  return rgbToHex(data[0], data[1], data[2]);
};
