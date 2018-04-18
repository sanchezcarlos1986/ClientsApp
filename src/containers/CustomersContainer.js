import React, { Component } from 'react';
import AppFrame from '../components/AppFrame'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCustomers } from '../actions/fetchCustomers'
import CustomersActions from '../components/CustomersActions'
import CustomersList from '../components/CustomersList'
import { getCustomers } from '../selectors/customers';

class CustomersContainer extends Component {
  componentDidMount = () => {
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
        <AppFrame header={'Listado Clientes'} body={this.renderBody(this.props.customers)}></AppFrame>
      </div>
    );
  }
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired
}

CustomersContainer.defaultProps = {
  customers: []
}

// const mapDispatchToProps = dispatch => ({
//   fetchCustomers: () => dispatch(fetchCustomers())
// })

const mapStateToProps = state => ({
  customers: getCustomers(state)
})

const mapDispatchToProps = { fetchCustomers }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainer))