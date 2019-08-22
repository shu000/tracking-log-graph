import React from 'react';
import { connect } from 'react-redux';

import Templates from '../component/templates';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
