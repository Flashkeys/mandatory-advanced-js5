import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Temp from './Temp';

const Index = () => {
  
  return (
    <Router>
      <Route exact path="/" render={() => <Home/>} />
      <Route path="/temp" render={() => <Temp/>} />
      
    <script src="https://unpkg.com/ionicons@4.2.2/dist/ionicons.js"></script>
    </Router>
  )
}


ReactDOM.render(<Index />, document.getElementById('root')); 