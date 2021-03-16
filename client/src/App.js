import React, { Component } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import LoginCallback from './components/LoginCallback';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/loginCallback'>
            <LoginCallback />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
