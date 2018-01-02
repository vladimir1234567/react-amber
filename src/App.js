import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Home from './pages/home.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
