const initialState = {
  customerName: 'default',
  styles: []
};

export const ActionType = {
  ON_CHANGE_FORM: 'ON_CHANGE_FORM',
  ON_TURNON_RADIO: 'ON_TURNON_RADIO',
  RECEIVE_TEMPLATE: 'RECEIVE_TEMPLATE',
  RECEIVE_ERROR: 'RECEIVE_ERROR'
};

export default function templatesReducer(state = initialState, action) {
  switch(action.type) {
    case ActionType.ON_CHANGE_FORM:
      const template = updateTemplateByText(
        state,
        action.payload.index,
        action.payload.key,
        action.payload.value
      );

      // add a new empty form, when last form get chenged
      if (template.styles.length - 1 === action.payload.index) {
        return Object.assign({}, state, addAnEmptyStyle(template));
      } else {
        return Object.assign({}, state, template);
      }
    case ActionType.ON_TURNON_RADIO:
      return Object.assign({}, state, updateTemplateByRadio(
        state,
        action.payload.index,
        action.payload.key)
      );
    case ActionType.RECEIVE_TEMPLATE:
      // add emptyStyle to show an empty form
      return Object.assign({}, state, addAnEmptyStyle(action.payload.template));
    default:
      return state;
  }
}

/**
 * Add an object to template for show an empty form.
 * @param {Array} template Array is added to.
 */
function addAnEmptyStyle(template) {
  const emptyStyle = {
    pattern: '',
    matching: 'match',
    title: '',
    text: '',
    backgroundColor: ''
  };

  const copy = Object.assign({}, template, {});
  copy.styles.push(emptyStyle);
  return copy;
}

/**
 * Update state when input[type='text'] get chenged
 * @param  {[type]} prevTemplate State
 * @param  {[type]} index        State[index]
 * @param  {[type]} key          State[index][key]
 * @param  {[type]} value        State[index][key] = value
 * @return {[type]}              Updated state
 */
function updateTemplateByText(prevTemplate, index, key, value) {
  // Should use Object.assign(),
  // because I think it's illegal for Redux to just insert into prevTemplate.
  const updated = Object.assign({}, prevTemplate, {});
  updated.styles[index][key] = value;
  return updated;
}

/**
 * Update state when input[type='radio'] get chenged
 * @param  {[type]} prevTemplate State
 * @param  {[type]} index        State[index]
 * @param  {[type]} key          State[index].matching = key
 * @return {[type]}              Updated state
 */
function updateTemplateByRadio(prevTemplate, index, key) {
  const updated = Object.assign({}, prevTemplate, {});
  updated.styles[index].matching = key; // e.g. matching = 'match';
  return updated;
}
