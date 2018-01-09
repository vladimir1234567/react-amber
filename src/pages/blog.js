import React, { Component } from 'react';

import Header from '../layout/header';
import BlogHead from '../layout/blogHead';
import BlogSingle from '../layout/blogSingle';

import Footer from '../layout/footer';
class Blog extends Component {
    render() {
        return (
            <div>
                <Header />
                <BlogHead />
                <BlogSingle />
                <Footer />
            </div>
        );
    }
}

export default Blog;