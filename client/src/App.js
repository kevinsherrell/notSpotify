import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import LoginCallback from './components/LoginCallback';
import Home from './components/Home';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path="/loginCallback" render = {(props) => <LoginCallback {...props} redirectUser= {this.redirectUser} />}/>
          <Route path='/home'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
