import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';
import CustomersList from '../components/CustomersList';

const customers = [
  {
    'dni': '27777',
    'name': 'Juan Pérez',
    'age': 37
  },
  {
    'dni': '3333',
    'name': 'Carlos Pérez',
    'age': 37
  },
  {
    'dni': '4444',
    'name': 'María Pérez',
    'age': 37
  }
]

class CustomersContainer extends Component {
  handleAddNew = () => {
    console.log('handleAddNew')
  }

  renderBody = customers => (
    <div>
      <CustomersList customers={customers} urlPath={'customers/'} />
      <CustomersActions>
        <button onClick={this.handleAddNew}>New Client</button>
      </CustomersActions>
    </div>
  )

  render() {
    return (
      <div>
        <AppFrame header={'Listado Clientes'} body={this.renderBody(customers)}></AppFrame>
      </div>
    );
  }
}

export default CustomersContainer;