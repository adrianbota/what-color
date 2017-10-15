import browserEnv from 'browser-env';
import sinon from 'sinon';

browserEnv();

global.chrome = {
  runtime: {
    onMessage: {
      addListener: sinon.spy(),
      removeListener: sinon.spy()
    }
  }
};
