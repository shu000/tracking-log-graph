import React from 'react';
import { connect } from 'react-redux';

import JsonLoader from '../component/jsonLoader';
import { onDrop } from '../action/jsonLoader';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    onDrop: (json) => { dispatch(onDrop(json)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonLoader);
