import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import './index.css';
import Home from './components/Home';
import Login from "./components/Login";
import Auth from "./components/Auth";
import Favorites from './Favorites';

const Index = () => {
  
  return (
    <Switch>
      <Route path="/home/" component={Home} />
      <Route path="/favorites" component={Favorites} />
      <Route exact path="/" render={() => <Login />} />
      <Route path="/auth" render={() => <Auth />} />     
    </Switch>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));