import React from 'react';
import { connect } from 'react-redux';

import TemplatesForm from '../component/templates-form';
import { onChangeForm, onTurnOnRadio } from '../action/templates';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeForm: (index, key, value) => { dispatch(onChangeForm(index, key, value)) },
    onTurnOnRadio: (index, key) => { dispatch(onTurnOnRadio(index, key)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesForm);
