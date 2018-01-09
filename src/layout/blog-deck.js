import React, { Component } from 'react';
import _ from 'lodash';
// import imageFirst from '../img/blog1.jpg';
// import imageSecond from '../img/blog2.jpg';
// import imageThird from '../img/blog3.jpg';

class BlogDeck extends Component {
    render() {
        return (
            <div className="card-deck">
                {
                    _.map(this.props.BlogsItem, (item, index) =>(
                        <div className={item.classWrap}>
                            <img className="card-img-top hvr-grow" src={item.imageFirst} width="290" alt="Card image cap" />
                            <div className="card-body  my-card-body">
                                <h4 className="theme-title green">{item.cardTitleText}</h4>
                                <p className="card-text">{item.textMain}
                                </p>
                            </div>
                            <div className="card-footer  my-card-footer">
                                <a href={item.
                                    cardFooterLink}>{item.
                                    FooterLinkText}</a>
                                <span className="comments"><a className="comment-link" href="#" />{item.spanNumber}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default BlogDeck;