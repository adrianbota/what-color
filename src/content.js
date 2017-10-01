var base64ToCanvas = require('./base64-to-canvas');
var pixelColor = require('./pixel-color');
var document = require('./document');

chrome.runtime.onMessage.addListener(function (action, sender, respond) {
  if (action.type === 'content_start') {
    var overlay = document.createElement('div');
    var mouseDownHandler = function (e) {
      chrome.runtime.sendMessage({
        type: 'background_capture',
        payload: {
          tabId: action.payload,
          px: e.pageX - window.pageXOffset,
          py: e.pageY - window.pageYOffset
        }
      });

      overlay.removeEventListener('mousedown', mouseDownHandler);
      document.body.removeChild(overlay);

      e.preventDefault();
      e.stopPropagation();
    };

    overlay.style = 'position:fixed;width:100%;height:100%;left:0;top:0;z-index:100000;cursor:crosshair';
    document.body.appendChild(overlay);
    overlay.addEventListener('mousedown', mouseDownHandler);
  }
  else if (action.type === 'content_get_color') {
    base64ToCanvas(action.payload.b64).then(function (canvas) {
      console.log(pixelColor(canvas, action.payload.px, action.payload.py));
    });
  }
});
