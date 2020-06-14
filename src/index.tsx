import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line node/no-unpublished-import
import waitFor from 'wait-for-async';

import App from './main';
import store from './store';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App store={store} />, container);

(async () => {
  await store.init();
  await waitFor({interval: 3000});
  store.ready = true;
})();
