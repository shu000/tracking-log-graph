import React from 'react';
import { connect } from 'react-redux';

import Legends from '../component/legends';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Legends);
