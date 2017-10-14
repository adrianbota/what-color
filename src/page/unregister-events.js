import { CONTAINER_ID } from './page-config';

export default (events) => {
  let containerEl = document.getElementById(CONTAINER_ID);
  events.forEach((data) =>
    containerEl.removeEventListener(data.event, data.handler));
};
