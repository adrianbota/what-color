chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, { type: 'content_start', payload: tab.id });
});


chrome.runtime.onMessage.addListener(function (action) {
  if (action.type === 'background_capture') {
    chrome.tabs.captureVisibleTab({
      format: 'png'
    }, function (b64) {
      chrome.tabs.sendMessage(action.payload.tabId, {
        type: 'content_get_color',
        payload: {
          b64: b64,
          px: action.payload.px,
          py: action.payload.py
        }
      });
    });
  }
});
