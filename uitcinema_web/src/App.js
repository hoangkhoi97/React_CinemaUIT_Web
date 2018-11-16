import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Routerr from "./component/main/route";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <Header/>
              <Routerr/>
              <Footer/>
     </div>
  </Router>
    );
  }
}

export default App;
