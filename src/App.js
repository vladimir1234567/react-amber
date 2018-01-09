import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


import './App.css';

import React, { Component } from 'react';

import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './pages/home.js';
import Blog from './pages/blog.js';
import Pages from './pages/pages.js';




const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog/" component={Blog} />
                    <Route exact path="/pages/" component={Pages} />
                </div>
            </Router>
        );
    }
}

export default App;