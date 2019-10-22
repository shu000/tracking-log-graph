import { ActionType } from '../reducer/customers';
import { GET_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER } from './endpoints';

export function onChange(customerName) {
  return {
    type: ActionType.ON_CHANGE,
    payload: {
      customerName: customerName
    }
  }
}

export function onChangeAddingName(addingCustomerName) {
  return {
    type: ActionType.ON_CHANGE_ADDING_NAME,
    payload: {
      addingCustomerName: addingCustomerName
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

export function fetchCustomers() {

  //dispatch(Loading...)

  return function(dispatch) {
    return fetch(GET_CUSTOMERS, {
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

export function addCustomer(customerName) {

  //dispatch(Loading...)

  return function(dispatch) {
    return fetch(ADD_CUSTOMER, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customerName: customerName
      })
    })
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(json => {
      if (json.error) dispatch(receiveError(json.error));
      else dispatch(fetchCustomers());// TODO
    })
  }
}

export function deleteCustomer(customerName) {

  //dispatch(Loading...)

  return function(dispatch) {
    return fetch(DELETE_CUSTOMER, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customerName: customerName
      })
    })
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(json => {
      if (json.error) dispatch(receiveError(json.error));
      else dispatch(fetchCustomers());// TODO
    })
  }
}
