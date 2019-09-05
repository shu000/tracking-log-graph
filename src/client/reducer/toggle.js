const initialState = {
  isOpenForms: true,
};

export const ActionType = {
  ON_CLICK: 'ON_CLICK'
};

export default function toggleReducer(state = initialState, action) {
  switch(action.type) {
    case ActionType.ON_CLICK:
      return Object.assign({}, state, {
        isOpenForms: !state.isOpenForms
      })
    default:
      return state;
  }
}
