import actionType from '../actionType';

const initialState = {
  name: 'default',
  styles: []
};

export default function templatesReducer(state = initialState, action) {
  switch(action.type) {
    case actionType.ON_CHANGE_FORM:
      const template = changedTemplateByText(
        state,
        action.payLoad.index,
        action.payLoad.key,
        action.payLoad.value
      );

      if (template.styles.length - 1 === action.payLoad.index) {
        return Object.assign({}, state, addAnEmptyStyle(template));
      } else {
        return Object.assign({}, state, template);
      }
    case actionType.ON_TURNON_RADIO:
      return Object.assign({}, state, changedTemplateByRadio(
        state,
        action.payLoad.index,
        action.payLoad.key)
      );
    case actionType.RECEIVE_TEMPLATE:
      // add emptyStyle to show an empty form
      return Object.assign({}, state, addAnEmptyStyle(action.payLoad.template));
    case actionType.ON_ADD_NEW_STYLE:
      return Object.assign({}, state, addAnEmptyStyle(state));
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

function changedTemplateByText(prevTemplate, index, key, value) {
  // Should use Object.assign(),
  // because I think it's illegal for Redux to just insert into prevTemplate.
  const changed = Object.assign({}, prevTemplate, {});
  changed.styles[index][key] = value;
  return changed;
}

function changedTemplateByRadio(prevTemplate, index, key) {
  const changed = Object.assign({}, prevTemplate, {});
  changed.styles[index].matching = key; // e.g. matching = 'match';
  return changed;
}
