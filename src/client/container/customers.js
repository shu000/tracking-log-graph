import React from 'react';
import { connect } from 'react-redux';

import Customers from '../component/customers';
import { onChange, onChangeAddingName, addCustomer, deleteCustomer } from '../action/customers';
import { fetchTemplate } from '../action/templates';

function mapStateToProps(state) {
  return Object.assign({}, state.customers, state.toggle);
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: customerName => { dispatch(onChange(customerName)) },
    onChangeAddingName: addingCustomerName => { dispatch(onChangeAddingName(addingCustomerName)) },
    addCustomer: customerName => { dispatch(addCustomer(customerName)) },
    deleteCustomer: customerName => { dispatch(deleteCustomer(customerName)) },
    fetchTemplate: customerName => { dispatch(fetchTemplate(customerName)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
