import test from 'ava';
import sinon from 'sinon';
import onMessage from '../../src/common/on-message';

test('onMessage', t => {
  let foo = sinon.spy();
  let removeListener = onMessage({ 'FOO': foo });

  let isListenerAdded = chrome.runtime.onMessage
    .addListener.calledWith(sinon.match.func);
  t.true(isListenerAdded, 'Listener added');

  chrome.runtime.onMessage.addListener
    .lastCall.args[0]({
      type: 'FOO',
      payload: 'bar'
    }, 'baz', 'baz2');
  let isHandlerCalled = foo.calledWith('bar', 'baz', 'baz2');
  t.true(isHandlerCalled, 'Handler called correctly');

  removeListener();
  let isListenerRemoved = chrome.runtime.onMessage
    .removeListener.calledWith(sinon.match.func);
  t.true(isListenerRemoved, 'Listener removed');
});
