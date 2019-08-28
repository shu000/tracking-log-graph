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

export function receiveTemplate(json) {
  return {
    type: actionType.RECEIVE_TEMPLATE,
    payLoad: {
      template: json
    }
  }
}

const URL = 'http://localhost:8080/api/templates/get';
export function fetchTemplate() {

  //dispatch(Loading...)

  return function(dispatch) {
    return fetch(URL, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: '初期設定'
        })
      })
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(json =>
        dispatch(receiveTemplate(json))
      )
  }
}
