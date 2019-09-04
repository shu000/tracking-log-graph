import React from 'react';
import { connect } from 'react-redux';

import Customers from '../component/customers';
import { addCustomer } from '../action/customers';
import { fetchTemplate } from '../action/templates';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    addCustomer: (customerName) => { dispatch(addCustomer(customerName)) },
    fetchTemplate: (customerName) => { dispatch(fetchTemplate(customerName)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
