import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import CustomersContainer from './containers/CustomersContainer'
import './App.css';

class App extends Component {
  renderCustomerContainer = () => <h1>Customer Container</h1>
  // renderCustomerListContainer = () => <h1>Customer List Container</h1>
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/customers/new' component={this.renderCustomerNewContainer} />
            <Route path='/customers/:dni' component={this.renderCustomerContainer} />
            <Route path='/customers' component={CustomersContainer} />
            <Route path='/' component={HomeContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
