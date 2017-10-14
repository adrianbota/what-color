let message = chrome.runtime.onMessage;

export default (handlersMap) => {
  let handler = (message, sender, respond) => {
    handlersMap[message.type](message.payload, sender, respond);
    return true; // async handler
  };

  message.addListener(handler);
  return () => message.removeListener(handler);
};

