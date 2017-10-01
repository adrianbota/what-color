var Promise = require('bluebird');
var document = require('./document');
var devicePixelRatio = require('./device-pixel-ratio');

module.exports = function (base64) {
  return new Promise(function (resolve, reject) {
    var image = new Image();

    image.onload = function () {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');

      canvas.width = image.width / devicePixelRatio;
      canvas.height = image.height / devicePixelRatio;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      resolve(canvas);
    };

    image.src = base64;
  });
};
