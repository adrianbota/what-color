import colorWidgetTmpl from 'mustache-loader!./templates/color-widget.mustache';
import {
  COLOR_WIDGET_ID,
  COLOR_INPUT_ID,
  DEFAULT_COLOR
} from './page-config';

export default (color) => {
  document.getElementById(COLOR_WIDGET_ID).innerHTML = colorWidgetTmpl({
    color: (color || DEFAULT_COLOR),
    colorInputId: COLOR_INPUT_ID
  });
};
