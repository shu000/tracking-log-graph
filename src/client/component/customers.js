import React from 'react';

export default class Customers extends React.Component {
  render() {
    return (
      <div id='customers'>
        <form>
          <select name='customerName' onChange={ e => {
            console.log(e.target.value);
            this.props.onChange(e.target.value);
          }}>
            {
              this.props.customers.map((name, i) => {
                return <option key={i} value={ name }>{ name }</option>
              })
            }
          </select>
          <input id='newCustomerName' name='newCustonerName'></input>
          <button onClick={ e => {
            // Cansel events for preventing send form.
            e.preventDefault();
	          e.stopPropagation();

            const newCustomerName = document.getElementById('newCustomerName').value;

            this.props.onAddCustomer(newCustomerName);

            return false;
          }}>Add an customer</button>
        </form>
      </div>
    );
  }
}
