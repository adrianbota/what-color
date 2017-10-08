// when extension icon is clicked
chrome.browserAction.onClicked.addListener(function (tab) {
  // tell current tab content script to start
  chrome.tabs.sendMessage(tab.id, 'START');
});

// when content script sends message
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // take screenshot of the current tab, in PNG format
  if (message === 'TAKE_SCREENSHOT') {
    chrome.tabs.captureVisibleTab(sender.windowId, { format: 'png' }, sendResponse);
    return true; // sendResponse async
  }
});
