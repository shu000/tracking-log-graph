import fetch from 'cross-fetch';
import { ActionType } from '../reducer/templates';
import { GET_TEMPLATE, UPDATE_TEMPLATE } from './endpoints';

/**
 * It's called when text form in tempaltes-form is chenged
 * @param  {[type]} index Index of props.templates, connecting changed form.
 * @param  {[type]} key   props.templates.styles[index][key] = value
 * @param  {[type]} value props.tempaltes.styles[index][key] = value
 */
export function onChangeForm(index, key, value) {
  return {
    type: ActionType.ON_CHANGE_FORM,
    payload: {
      index: index,
      key: key,
      value: value
    }
  }
}

/**
 * It's called when radio button in templates-form is turned to ON
 * @param  {[type]} index Index of props.templates, connecting changed form.
 * @param  {[type]} key   props.templates.styles[index].matching = key
 */
export function onTurnOnRadio(index, key) {
  return {
    type: ActionType.ON_TURNON_RADIO,
    payload: {
      index: index,
      key: key
    }
  }
}

export function receiveTemplate(template) {
  return {
    type: ActionType.RECEIVE_TEMPLATE,
    payload: {
      template: template
    }
  }
}

export function receiveError(msg) {
  return {
    type: ActionType.RECEIVE_ERROR,
    payload: {
      error: msg
    }
  }
}

export function fetchTemplate(customerName) {

  //dispatch(Loading...)

  return function(dispatch) {
    return fetch(GET_TEMPLATE, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customerName: customerName // is going to sanitize on server side.
        })
      })
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(json => {
        if (json.error) dispatch(receiveError(json.error));
        else dispatch(receiveTemplate(json.result));
      })
  }
}

export function updateTemplate(template) {

  //dispatch(Loading...)

  return function(dispatch) {
    return fetch(UPDATE_TEMPLATE, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(template)
      })
      .then(
        response => {
          return response.json();
        },
        error => console.log(error)
      )
      .then(json => {
        console.log(json);
      })
      /*
      .then(json => {
        if (json.error) dispatch(receiveError(json.error));
        else dispatch(receiveTemplate(json.result));
      })
      */
  }
}
