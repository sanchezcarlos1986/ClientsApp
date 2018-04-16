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

/*
<Link to='/'>Home</Link><br />

<Link to='/customers/3000'>Customer</Link><br />
<Link to='/customers/new'>New</Link><br />
*/

export default withRouter(HomeContainer)
