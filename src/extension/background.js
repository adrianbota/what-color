import onIconClick from './on-icon-click';
import takePageScreenshot from './take-page-screenshot';
import sendToPage from './send-to-page';

onIconClick((tab) =>
  takePageScreenshot(tab.windowId).then((data) =>
    sendToPage(tab.id, { type: 'START', payload: data })));
