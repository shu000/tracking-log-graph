import React from 'react';
import { connect } from 'react-redux';

import TemplatesHeader from '../component/templates-header';
import { updateTemplate } from '../action/templates';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    updateTemplate: (template) => { dispatch(updateTemplate(template)) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesHeader);
