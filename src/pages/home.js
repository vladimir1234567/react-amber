import React, { Component } from 'react';
import Header from '../layout/header';
import Slide from '../layout/slide';
import Month from '../layout/month';
import Works from '../layout/last-works';
import Atheme from '../layout/atheme';
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
                <Footer />
            </div>
        );
    }
}

export default Home;
