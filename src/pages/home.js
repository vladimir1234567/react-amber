import React, { Component } from 'react';
import Header from '../layout/header';
import Slide from '../layout/slide';
import Month from '../layout/month';
import Works from '../layout/last-works';
import Atheme from '../layout/atheme';
import SliderTwo from '../layout/sliderTwo';
import Blog from '../layout/blog';
import Expiriens from '../layout/expiriens';
import Team from '../layout/team';
import Footer from '../layout/footer';


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slide />
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

export default Home;
