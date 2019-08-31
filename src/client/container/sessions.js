import React from 'react';
import { connect } from 'react-redux';

import Sessions from '../component/sessions';
import { onDrop } from '../action/sessions';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    onDrop: (json) => { dispatch(onDrop(json)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);
