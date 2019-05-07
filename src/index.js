import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Temp from './Temp';
import Login from './components/authorization/login'

const Index = () => {
  
  return (
    <Router>
      {/* <Route  path="/" render={() => <Home/>} /> */}
      <Route path="/temp" render={() => <Temp/>} />
      <Route exact path="/" render={() => <Login/>} />
    <script src="https://unpkg.com/ionicons@4.2.2/dist/ionicons.js"></script>
    </Router>
  )
}


ReactDOM.render(<Index />, document.getElementById('root')); 