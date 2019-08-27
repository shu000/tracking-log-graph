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
import reducer from './reducer';

import './css/index.css';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchTemplate()).then(() => { console.log(store.getState()) });
