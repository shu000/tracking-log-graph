import React from 'react';
import { connect } from 'react-redux';

import Customers from '../component/customers';
import { onAddCustomer } from '../action/customers';
import { fetchTemplate } from '../action/templates';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    onAddCustomer: (customerName) => { dispatch(onAddCustomer(customerName)) },
    fetchTemplate: (customerName) => { dispatch(fetchTemplate(customerName)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
