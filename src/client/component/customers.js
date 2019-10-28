import React from 'react';

export default class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleClickAddButton= this.handleClickAddButton.bind(this);
    this.handleClickRemoveButton= this.handleClickRemoveButton.bind(this);
  }

  /**
   * Event Handler when select gets changed.
   * @param  {Object} event React Event Object
   */
  handleChangeSelect(e) {
    clearTemplatesForms();
    this.props.onChange(e.target.value);
    this.props.fetchTemplate(e.target.value);
  }

  /**
   * Event Handler when input gets changed.
   * @param  {Object} event React Event Object
   */
  handleChangeInput(e) {
    this.props.onChangeAddingName(e.target.value);
  }

  /**
   * Event Handler when add-button get clicked.
   * @param  {Object} event React Event Object
   */
  handleClickAddButton(e) {
    // Cansel events for preventing send form.
    e.preventDefault();
    e.stopPropagation();

    document.getElementById('newCustomerName').value = '';// TODO: use store

    clearTemplatesForms();
    this.props.addCustomer(this.props.addingCustomerName);

    return false;
  }

  /**
   * Event Handler when remove-button get clicked.
   * @param  {Object} event React Event Object
   */
  handleClickRemoveButton(e) {
    // Cansel events for preventing send form.
    e.preventDefault();
    e.stopPropagation();

    this.props.deleteCustomer(this.props.selecting);

    return false;
  }

  render() {
    const { customers, selecting, addingCustomerName, isOpenForms } = this.props;

    return (
      <div id='customers' style={ isOpenForms ? { display: 'block' } : { display: 'none' } }>
        <form className='customerForm'>
          <select
            name='customerName'
            className='form-control'
            value={ selecting }
            onChange={ this.handleChangeSelect }
          >
            {
              customers.map((name, i) => {
                return <option key={i} value={ name }>{ name }</option>
              })
            }
          </select>
          <div className='customers-ope'>
            <div className='customers-ope-add'>
              <input
                id='newCustomerName'
                name='newCustonerName'
                className='form-control'
                onChange={ this.handleChangeInput }
              ></input>
              <button className='btn btn-primary' onClick={ this.handleClickAddButton }>
                追加
              </button>
            </div>
            <button className='btn btn-danger' onClick={ this.handleClickRemoveButton }>
              削除
            </button>
          </div>
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
