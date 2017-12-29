import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './layout/header';
import Slider from './layout/slider';
import Month from './layout/month';
import Works from './layout/last-works';
import Atheme from './layout/amber-theme';
import SliderTwo from './layout/sliderTwo';
import Blog from './layout/blog';
import Expiriens from './layout/expiriens';
import Team from './layout/team';
import Footer from './layout/footer';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <Month />
        <Works />
        <Atheme />
        <SliderTwo />
        <Blog />
        <Expiriens />
        <Team />
          <Footer />
      </div>
    );
  }
}

export default App;





