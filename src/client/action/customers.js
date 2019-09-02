import { ActionType } from '../reducer/customers';

export function onChange(customerName) {
  return {
    type: ActionType.ON_CHANGE,
    payload: {
      customerName: customerName
    }
  }
}

export function onAddCustomer(customerName) {
  return {
    type: ActionType.ON_ADD_CUSTOMER,
    payload: {
      customerName: customerName
    }
  }
}

export function receiveCustomers(customers) {
  return {
    type: ActionType.RECEIVE_CUSTOMERS,
    payload: {
      customers: customers
    }
  }
}

const URL = 'http://localhost:8080/api/customers';
export function fetchCustomers() {

  //dispatch(Loading...)

  return function(dispatch) {
    return fetch(URL, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(json => {
        if (json.error) dispatch(receiveError(json.error));
        else dispatch(receiveCustomers(json.result));
      })
  }
}
