import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

import App from './container/app';
import rootReducer from './reducer/reducer';
import { fetchTemplate } from './action/templates';
import { fetchCustomers } from './action/customers';

// Create Redux-store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// Render HTML with Redux-store
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// fetch all customers
store.dispatch(fetchCustomers())
.then(() => {
  // fetch a customers's template data
  store.dispatch(fetchTemplate(store.getState().customers.selecting));
});
