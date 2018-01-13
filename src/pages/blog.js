import React, { Component } from 'react';

import Header from '../layout/header';
import BlogHead from '../layout/blogHead';
import BlogSingle from '../layout/blogSingle';

import Footer from '../layout/footer';

class Blog extends Component {
    render() {
        let footerData = {
          author: 'Alex Poushkin',
          date: 'September 31',
          commentsCount: 12
        };

        return (
            <div>
                <BlogHead title="Blog grid view" footerData={ footerData } />
                <BlogSingle />
            </div>
        );
    }
}

export default Blog;