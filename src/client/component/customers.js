import React from 'react';

export default class Customers extends React.Component {
  render() {
    return (
      <div id='customers' style={ this.props.toggle.isOpenForms ? { display: 'block' } : { display: 'none' } }>
        <form className='customerForm'>
          <select name='customerName' className='form-control' onChange={ e => {
            clearTemplatesForms();
            this.props.fetchTemplate(e.target.value);
          }}>{
            this.props.customers.customers.map((name, i) => {
              return <option key={i} value={ name }>{ name }</option>
            })
          }</select>
          <input id='newCustomerName' name='newCustonerName' className='form-control'></input>
          <button className='btn btn-primary' onClick={ e => {
            // Cansel events for preventing send form.
            e.preventDefault();
	          e.stopPropagation();

            // TODO: use store
            const newCustomerName = document.getElementById('newCustomerName').value;

            this.props.addCustomer(newCustomerName);

            return false;
          }}>Add</button>
        </form>
      </div>
    );
  }
}

/**
 * Clear form[name="templatesForm"].
 * Because, Browser remember user inputs,
 * when just replace forms by React's state change event,
 */
function clearTemplatesForms() {
  const forms = document.getElementsByClassName('templatesForm');
  // Type of forms is HTMLCollection, so convert it to Array before loop.
  Array.prototype.slice.call(forms).map(form => {
    form.reset();
  });
}
