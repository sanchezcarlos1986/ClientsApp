import React, { Component } from 'react';
import AppFrame from '../components/AppFrame'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCustomers } from '../actions/fetchCustomers'
import CustomersActions from '../components/CustomersActions'
import CustomersList from '../components/CustomersList'

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
  componentDidMount = () => {
    console.log('props de CustomersContainer', this.props)
    this.props.fetchCustomers()
  }

  handleAddNew = () => {
    this.props.history.push('/customers/new')
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

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  fetchCustomers: () => dispatch(fetchCustomers())
})

export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer))