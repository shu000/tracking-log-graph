import React from 'react';
import { connect } from 'react-redux';

import Customers from '../component/customers';
import { onChange, addCustomer, deleteCustomer } from '../action/customers';
import { fetchTemplate } from '../action/templates';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: customerName => { dispatch(onChange(customerName)) },
    addCustomer: customerName => { dispatch(addCustomer(customerName)) },
    deleteCustomer: customerName => { dispatch(deleteCustomer(customerName)) },
    fetchTemplate: customerName => { dispatch(fetchTemplate(customerName)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
