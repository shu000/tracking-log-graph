import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

/**
 *
 */
import { fetchTemplate } from './action/templates';

import App from './container/app';
import rootReducer from './reducer/reducer';

import './css/index.scss';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchTemplate('初期設定')).then(() => { console.log(store.getState()) });
