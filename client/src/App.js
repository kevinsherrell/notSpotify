import React, { Component } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
