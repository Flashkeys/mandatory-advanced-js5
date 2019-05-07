import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import './index.css';
import Home from './components/Home';

const Index = () => {
  
  return (
    <Switch>
      <Route path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <Login />} />
    </Switch>
  )
}

const Login = () => {
  return (
    <p>Login</p>
  )
}


ReactDOM.render(<Index />, document.getElementById('root')); 