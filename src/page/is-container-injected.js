import { CONTAINER_ID } from './page-config';

export default () => {
  return !!document.getElementById(CONTAINER_ID);
};
