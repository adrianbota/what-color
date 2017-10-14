let send = chrome.tabs.sendMessage;

export default (tabId, message) =>
  new Promise((resolve) => send(tabId, message, null, resolve));
