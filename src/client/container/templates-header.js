import React from 'react';
import { connect } from 'react-redux';

import TemplatesHeader from '../component/templates-header';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesHeader);
