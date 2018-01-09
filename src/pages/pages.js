import React, { Component } from 'react';
import Header from '../layout/header';
import BlogList from '../layout/blogList';
import Footer from '../layout/footer';

class Pages extends Component {
    render() {
        return (
            <div>
                <Header />
                <BlogList />
                <Footer />
            </div>
        );
    }
}

export default Pages;