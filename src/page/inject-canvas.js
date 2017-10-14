import {
  CANVAS_WRAPPER_ID,
  CANVAS_ID
} from './page-config';

export default (canvas) => {
  canvas.id = CANVAS_ID;
  document.getElementById(CANVAS_WRAPPER_ID)
    .appendChild(canvas);
};
