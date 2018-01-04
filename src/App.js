import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import React, { Component } from 'react';


import Home from './pages/home.js';
import Footer from './pages/blog.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
