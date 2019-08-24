import actionType from '../actionType';

export function onSelectCustomer(customerName) {
  return {
    type: actionType.ON_SELECT_CUSTOMER,
    payLoad: {
      customerName: customerName
    }
  }
}
