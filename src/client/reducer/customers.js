const initialState = [];

export const ActionType = {
  ON_CHANGE: 'ON_CHANGE',
  ON_ADD_CUSTOMER: 'ON_ADD_CUSTOMER'
};

export default function customersReducer(state = initialState, action) {
  switch(action.type) {
    case ActionType.ON_CHANGE:
      return [...state, 'Event!'];
    case ActionType.ON_ADD_CUSTOMER:
      return [...state, 'NEW'];
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
