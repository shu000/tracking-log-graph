import actionType from './actionType';

const initialState = {
  json: {},
  template: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case actionType.ON_DROP:
      return Object.assign({}, state, {
        json: action.payLoad.json
      });
    default:
      return state;
  }
}
