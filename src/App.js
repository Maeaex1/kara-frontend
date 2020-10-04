import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './Assets/css/default.min.css';

//components
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/footer';


class App extends Component {
  render() {
    return(
      <Router>
      <div className="App">
          <Header />
          < Main />
      </div>
      </Router>
      );
    }
  }

export default App;
