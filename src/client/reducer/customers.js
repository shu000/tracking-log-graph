const initialState = {
  selecting: '',
  customers: [],
};

export const ActionType = {
  ON_CHANGE: 'ON_CHANGE',
  ON_CHANGE_ADDING_NAME: 'ON_CHANGE_ADDING_NAME',
  ON_ADD_CUSTOMER: 'ON_ADD_CUSTOMER',
  RECEIVE_CUSTOMERS: 'RECEIVE_CUSTOMERS'
};

export default function customersReducer(state = initialState, action) {
  switch(action.type) {
    case ActionType.ON_CHANGE:
      return Object.assign({}, state, {
        selecting: action.payload.customerName
      });
    case ActionType.ON_CHANGE_ADDING_NAME:
      return Object.assign({}, state, {
        addingCustomerName: action.payload.addingCustomerName
      });
    case ActionType.ON_ADD_CUSTOMER:
      return Object.assign({}, state, {
        customers: [...state.customers, action.payload.customerName],
        addingCustomerName: "ON_ADD_CUSTOMER" // 追加する際に追加フォームの文字列をクリア
      });
    case ActionType.RECEIVE_CUSTOMERS:
      return Object.assign({}, state, {
        selecting: action.payload.customers[0],
        customers: action.payload.customers
      });
    default:
      return state;
  }
}

/*
function isDuplicateCustomer(customerName) {
  const duplicated = state.filter(name => name === customerName);
  return duplicated > 0;
}
*/
