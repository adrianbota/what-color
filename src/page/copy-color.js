import { COLOR_INPUT_ID } from './page-config';

export default () => {
  let colorInputEl = document.getElementById(COLOR_INPUT_ID);
  colorInputEl.focus();
  colorInputEl.setSelectionRange(0, colorInputEl.value.length);
  document.execCommand('copy');
};
