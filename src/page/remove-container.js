import { CONTAINER_ID } from './page-config';

export default () => {
  let containerEl = document.getElementById(CONTAINER_ID);
  document.body.removeChild(containerEl);
};
