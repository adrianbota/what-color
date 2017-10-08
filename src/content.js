var debounce = require('lodash.debounce');
var containerTmpl = require('mustache-loader!./container.html');
var widgetTmpl = require('mustache-loader!./widget.html');

var containerId = null;
var colorInputId = null;
var container = null;
var image = null;
var canvas = null;
var color = null;

var rgbToHex = function (r, g, b) {
  return ('000000' + ((r << 16) | (g << 8) | b).toString(16)).slice(-6).toUpperCase();
};

var renderWidget = function () {
  if (!container) { return; }

  container.innerHTML = widgetTmpl({
    colorInputId: colorInputId,
    color: color
  });
};

var containerMousemoveHandler = debounce(function (e) {
  var px = e.clientX;
  var py = e.clientY;

  var imageLoadHandler = function () {
    if (!canvas) { return; }

    var context = canvas.getContext('2d');
    var pixelData = null;

    canvas.width = image.width / window.devicePixelRatio;
    canvas.height = image.height / window.devicePixelRatio;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    pixelData = context.getImageData(px, py, 1, 1).data;
    color = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);

    renderWidget();
  };

  var screenshotHandler = function (data) {
    if (!image) { return; }

    image.onload = imageLoadHandler;
    image.src = data;
  };

  chrome.runtime.sendMessage(null, 'TAKE_SCREENSHOT', null, screenshotHandler);
}, 200);

var containerMouseupHandler = function (e) {
  var colorInput = document.getElementById(colorInputId);
  colorInput.focus();
  colorInput.setSelectionRange(0, colorInput.value.length)
  document.execCommand('copy');

  stop();
};

var start = function () {
  if (containerId) { return; }

  containerId = ('__what_color_extension_' + (new Date()).getTime());
  colorInputId = (containerId + '_color_input');

  document.body.insertAdjacentHTML('beforeend', containerTmpl({ id: containerId }));
  container = document.getElementById(containerId);
  container.addEventListener('mousemove', containerMousemoveHandler);
  container.addEventListener('mouseup', containerMouseupHandler);

  image = new Image();
  canvas = document.createElement('canvas');

  color = 'FFFFFF';
  renderWidget();
};

var stop = function () {
  if (!containerId) { return; }

  container.removeEventListener('mousemove', containerMousemoveHandler);
  container.removeEventListener('mouseup', containerMouseupHandler);
  document.body.removeChild(container);

  containerId = null;
  colorInputId = null;
  container = null;
  image = null;
  canvas = null;
  color = null;
};

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message === 'START') { start(); }
});
