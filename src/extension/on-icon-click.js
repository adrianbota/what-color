let click = chrome.browserAction.onClicked;

export default (handler) => {
  click.addListener(handler);
  return () => click.removeListener(handler);
};
