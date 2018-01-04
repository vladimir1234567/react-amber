import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import React, { Component } from 'react';

import './App.css';

import Header from './layout/header';
import Footer from './layout/footer';
import Slider from './layout/slider';

import Month from './layout/month';
import Works from './layout/last-works';
import Atheme from './layout/amber-theme';
import SliderTwo from './layout/sliderTwo';
import Blog from './layout/blog';
import Expiriens from './layout/expiriens';
import Team from './layout/team';

import Router from 'react-router';

class App extends Component {
  render() {
    return (
        <Router>
          <Route component={Team} path='/team'/>
        </Router>
    );
  }
}

export default App;





{/*<div>*/}
  {/*<Header />*/}
  {/*<Slider />*/}
  {/*<Month />*/}
  {/*<Works />*/}
  {/*<Atheme />*/}
  {/*<SliderTwo />*/}
  {/*<Blog />*/}
  {/*<Expiriens />*/}
  {/*<Team />*/}
  {/*<Footer />*/}
{/*</div>*/}