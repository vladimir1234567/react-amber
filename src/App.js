import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import './App.css';

import React, { Component } from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './pages/home';

import Header from './layout/header';
import Footer from './layout/footer';

import Blog from './pages/blog.js';
import BlogList from './layout/blogList';
import MegaMenu from './pages/megaMenu.js';
import Eccomerse from './pages/eccomerse.js';

const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/blog" component={Blog} />
                        <Route path="/pages" component={BlogList} />
                        <Route path="/megaMenu" component={MegaMenu} />
                        <Route path="/eccomerse" component={Eccomerse} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;