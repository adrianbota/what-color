import onExtensionMessage from '../common/on-message';
import convertDataToCanvas from './convert-data-to-canvas';
import renderColorWidget from './render-color-widget';
import getCanvasPixelColor from './get-canvas-pixel-color';
import copyColor from './copy-color';
import injectContainer from './inject-container';
import injectCanvas from './inject-canvas';
import registerEvents from './register-events';
import unregisterEvents from './unregister-events';
import removeContainer from './remove-container';
import isContainerInjected from './is-container-injected';

let killEvent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

let mouseMoveHandler = (e) => {
  killEvent(e);
  renderColorWidget(getCanvasPixelColor(e.clientX, e.clientY));
};

let mouseUpHandler = (e) => {
  killEvent(e);
  copyColor();
  destroy();
};

const EVENTS = [
  {
    event: 'mouseup',
    handler: mouseUpHandler
  },
  {
    event: 'mousemove',
    handler: mouseMoveHandler
  }
];

let destroy = () => {
  unregisterEvents(EVENTS);
  removeContainer();
};

let init = (canvas) => {
  injectContainer();
  registerEvents(EVENTS);
  injectCanvas(canvas);
  renderColorWidget();
};

onExtensionMessage({
  'START': (data) => {
    if (!isContainerInjected()) {
      convertDataToCanvas(data).then(init);
    }
  }
});
