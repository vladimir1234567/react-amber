import React, { Component } from 'react';
import Header from '../layout/header';
import BlogHead from '../layout/blogHead';
import EccomerseBlock from '../layout/eccomerseBlock';

import Footer from '../layout/footer';

class Eccomerse extends Component {
    render() {
        return (

            <div>
                <Header />
                <BlogHead />
                <EccomerseBlock />
                <Footer />
            </div>
        );
    }
}

export default Eccomerse;