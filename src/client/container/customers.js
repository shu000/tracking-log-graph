import React from 'react';
import { connect } from 'react-redux';

import Customers from '../component/customers';
import { onChange, onAddCustomer } from '../action/customers';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (customerName) => { dispatch(onChange(customerName)) },
    onAddCustomer: (customerName) => { dispatch(onAddCustomer(customerName)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
