import React, { Component } from 'react';

import BlogDeck from './blog-deck.js';
import BlogHead from './blogHead.js';


import imageFirst from '../img/blog1.jpg';
import imageSecond from '../img/blog2.jpg';
import imageThird from '../img/blog3.jpg';



class BlogList extends Component {
    render() {
        const CardItem = [
            {
                classWrap: 'card card1 col-sm-12 col-md-4',
                imageFirst: imageFirst,
                cardTitleText: 'Runway to Red Carpet: Awards Season',
                textMain: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
                cardFooterLink: '/blog',
                FooterLinkText: 'Learn more',
                spanNumber: '450'
            },
            {
                classWrap: 'card card2 col-sm-12 col-md-4',
                imageFirst: imageSecond,
                cardTitleText: 'Runway to Red Carpet: Awards Season',
                textMain: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
                cardFooterLink: '/blog',
                FooterLinkText: 'Learn more',
                spanNumber: '450'
            },
            {
                classWrap: 'card card3 col-sm-12 col-md-4',
                imageFirst: imageThird,
                cardTitleText: 'Runway to Red Carpet: Awards Season',
                textMain: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
                cardFooterLink: '/blog',
                FooterLinkText: 'Learn more',
                spanNumber: '450'
            }
        ];
        return (
            <section className="blog">
                <BlogHead />
                <section className="blog-post">
                    <div className="container">
                        <div className="row">
                            <BlogDeck BlogsItem={CardItem}/>
                        </div>
                        <div className="row">
                            <BlogDeck BlogsItem={CardItem}/>
                        </div>
                        <div className="row">
                            <BlogDeck BlogsItem={CardItem}/>
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                            <li className="page-item"><a className="page-link" href="#">7</a></li>
                            <li className="page-item"><a className="page-link" href="#">...</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">2015</a>
                            </li>
                        </ul>
                    </nav>
            </section>
            < /section>
        );
    }
}

export default BlogList;