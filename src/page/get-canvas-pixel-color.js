import rgbToHex from '../utils/rgb-to-hex';
import { CANVAS_ID } from './page-config';

export default (px, py) => {
  let canvas = document.getElementById(CANVAS_ID);
  let data = canvas.getContext('2d').getImageData(px, py, 1, 1).data;
  return rgbToHex(data[0], data[1], data[2]);
};
