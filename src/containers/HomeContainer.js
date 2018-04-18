import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppFrame from '../components/AppFrame'
import CustomersActions from '../components/CustomersActions'

 class HomeContainer extends Component {
  handleOnClick = () => {
    this.props.history.push('/customers')
  }

  render() {
    return (
      <div>
        <AppFrame header='Home' body={
          <div>
            Pantalla inicial
            <CustomersActions>
              <Link to='/customers'>Clients List</Link><br />
              <button onClick={this.handleOnClick}>Clients List</button>
            </CustomersActions>
          </div>
        } />
      </div>
    )
  }
}

export default withRouter(HomeContainer)
