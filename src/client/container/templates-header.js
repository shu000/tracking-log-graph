import React from 'react';
import { connect } from 'react-redux';

import TemplatesHeader from '../component/templates-header';
import { onSelectCustomer } from '../action/templates';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectCustomer: (customerName) => { dispatch(onSelectCustomer(customerName)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesHeader);
