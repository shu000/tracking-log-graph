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
