import onExtensionMessage from '../common/on-message';
import convertDataToCanvas from './convert-data-to-canvas';
import createElementId from './create-element-id';
import getElement from './get-element';
import containerTempl from 'mustache-loader!./html/container.html';
import widgetTempl from 'mustache-loader!./html/color-widget.html';
import rgbToHex from '../utils/rgb-to-hex';

let uid = null;

let renderColorWidget = (color) => {
  document.getElementById(createElementId('widget', uid)).innerHTML =
    widgetTempl({
      color: color,
      colorInputId: createElementId('color', uid)
    });
};

let onContainerMouseMove = (e) => {
  e.preventDefault();
  e.stopPropagation();

  let canvas = getElement('canvas', uid);
  let pixelData = canvas.getContext('2d').getImageData(e.clientX, e.clientY, 1, 1).data;
  renderColorWidget(rgbToHex(pixelData[0], pixelData[1], pixelData[2]));
};

let onContainerMouseUp = (e) => {
  e.preventDefault();
  e.stopPropagation();

  var colorInput = getElement('color', uid);
  colorInput.focus();
  colorInput.setSelectionRange(0, colorInput.value.length)
  document.execCommand('copy');

  stop();
};

let stop = () => {
  let containerEl = getElement('container', uid);
  if (containerEl) {
    containerEl.removeEventListener('mouseup', onContainerMouseUp);
    containerEl.removeEventListener('mousemove', onContainerMouseMove);
    document.body.removeChild(containerEl);
  }
};

let init = (canvas) => {
  stop();

  uid = (new Date).getTime();

  document.body.insertAdjacentHTML('beforeend', containerTempl({
    containerId: createElementId('container', uid),
    canvasWrapperId: createElementId('canvasWrapper', uid),
    colorWidgetId: createElementId('widget', uid)
  }));

  let containerEl = getElement('container', uid);
  containerEl.addEventListener('mouseup', onContainerMouseUp);
  containerEl.addEventListener('mousemove', onContainerMouseMove);

  canvas.id = createElementId('canvas', uid);
  document.getElementById(createElementId('canvasWrapper', uid))
    .appendChild(canvas);

  renderColorWidget('FFFFFF');
};

let start = (data) =>
  convertDataToCanvas(data)
    .then((canvas) => init(canvas));

onExtensionMessage({
  'START': (payload) => start(payload)
});
