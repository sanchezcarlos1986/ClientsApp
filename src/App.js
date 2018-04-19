import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import CustomerContainer from './containers/CustomerContainer'
import CustomersContainer from './containers/CustomersContainer'
import './App.css';

class App extends Component {
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/customers/new' component={this.renderCustomerNewContainer} />
            <Route path='/customers/:dni' render={props => <CustomerContainer dni={props.match.params.dni} />} />
            <Route path='/customers' component={CustomersContainer} />
            <Route path='/' component={HomeContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
