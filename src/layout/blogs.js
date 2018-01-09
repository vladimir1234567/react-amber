import React, { Component } from 'react';

import BlogDeck from './blog-deck.js'

import imageFirst from '../img/blog1.jpg';
import imageSecond from '../img/blog2.jpg';
import imageThird from '../img/blog3.jpg';

class Blogs extends Component {
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

            <section className="blog-post">
                <div className="container">
                    <div className="min-wrap">
                        <h3 className="section-title-dark text-center">
                            Latest blog posts
                        </h3>
                    </div>
                    <div className="row">
                        <BlogDeck BlogsItem={CardItem}/>

                    </div>
                </div>
            </section>
        );
    }
}

export default Blogs;