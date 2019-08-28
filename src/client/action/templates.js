import actionType from '../actionType';
import fetch from 'cross-fetch';

export function onSelectCustomer(customerName) {
  return {
    type: actionType.ON_SELECT_CUSTOMER,
    payLoad: {
      customerName: customerName
    }
  }
}

export function receiveTemplate(template) {
  return {
    type: actionType.RECEIVE_TEMPLATE,
    payLoad: {
      template: template
    }
  }
}

export function receiveError(msg) {
  return {
    type: actionType.RECEIVE_ERROR,
    payLoad: {
      error: msg
    }
  }
}

const URL = 'http://localhost:8080/api/templates/get';
export function fetchTemplate(name) {

  //dispatch(Loading...)

  return function(dispatch) {
    return fetch(URL, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name // is going to sanitize on server side.
        })
      })
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(json => {
        if (json.error) dispatch(receiveError(json.error));
        else dispatch(receiveTemplate(json.result));
      })
  }
}
