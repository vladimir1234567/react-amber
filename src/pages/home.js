import React, { Component } from 'react';
import Header from '../layout/header';
import Slide from '../layout/slide';

import Atheme from '../layout/atheme';
import Footer from '../layout/footer';


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slide />
                <Atheme />
                <Footer />
            </div>
        );
    }
}

export default Home;
