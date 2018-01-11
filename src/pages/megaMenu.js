import React, { Component } from 'react';
import Header from '../layout/header';
import BlogHead from '../layout/blogHead';
import ListMenu from '../layout/listMenu';

import Footer from '../layout/footer';


class MegaMenu extends Component {
    render() {
        return (
            <div className='gallery'>
                <Header/>
                <BlogHead/>
                <ListMenu/>
                <Footer/>
            </div>

        );
    }
}

export default MegaMenu;