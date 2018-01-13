import React, { Component } from 'react';

import BlogHead from '../layout/blogHead';
import ListMenu from '../layout/listMenu';


class MegaMenu extends Component {
    render() {
        return (
            <div className='gallery'>
                <BlogHead/>
                <ListMenu/>
            </div>
        );
    }
}

export default MegaMenu;