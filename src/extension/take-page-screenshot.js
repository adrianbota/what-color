let capture = chrome.tabs.captureVisibleTab;
const format = 'png';

export default (windowId) =>
  new Promise((resolve) => capture(windowId, { format }, resolve));
