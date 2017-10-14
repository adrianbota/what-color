import containerTmpl from 'mustache-loader!./templates/container.mustache';
import {
  CONTAINER_ID,
  CANVAS_WRAPPER_ID,
  COLOR_WIDGET_ID
} from './page-config';

export default () => {
  document.body.insertAdjacentHTML('beforeend', containerTmpl({
    containerId: CONTAINER_ID,
    canvasWrapperId: CANVAS_WRAPPER_ID,
    colorWidgetId: COLOR_WIDGET_ID
  }));
};
