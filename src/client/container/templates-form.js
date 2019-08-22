import React from 'react';
import { connect } from 'react-redux';

import TemplatesForm from '../component/templates-form';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesForm);
