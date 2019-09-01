import { ActionType } from '../reducer/customers';

export function onChange(customerName) {
  return {
    type: ActionType.ON_CHANGE,
    payLoad: {
      customerName: customerName
    }
  }
}

export function onAddCustomer(customerName) {
  return {
    type: ActionType.ON_ADD_CUSTOMER,
    payLoad: {
      customerName: customerName
    }
  }
}

export function receiveCustomers(customers) {
  return {
    type: ActionType.RECEIVE_CUSTOMERS,
    payLoad: {
      customers: customers
    }
  }
}

const URL = 'http://localhost:8080/api/templates/customers';
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
