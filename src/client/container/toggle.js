import React from 'react';
import { connect } from 'react-redux';

import Toggle from '../component/toggle';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
