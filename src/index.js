import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import './index.css';
import Home from './components/Home';
import Login from "./components/Login";
import Auth from "./components/Auth";

const Index = () => {
  
  return (
    <Switch>
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/auth" render={() => <Auth />} />
      <Route path="/" render={() => <Home />} />
    </Switch>
  )
}

ReactDOM.render(<Index />, document.getElementById('root')); 