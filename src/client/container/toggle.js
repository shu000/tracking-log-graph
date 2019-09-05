import React from 'react';
import { connect } from 'react-redux';

import Toggle from '../component/toggle';
import { onClick } from '../action/toggle';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => { dispatch(onClick()) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
