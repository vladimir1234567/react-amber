import React, { Component } from 'react';

import blog1 from '../img/blog1.jpg';
import blog2 from '../img/blog2.jpg';
import blog3 from '../img/blog3.jpg';

class Blog extends Component {
    render() {
        return (

            <section className="blog-post">
                <div className="container">
                    <div className="min-wrap">
                        <h3 className="section-title-dark text-center">
                            Latest blog posts
                        </h3>
                    </div>
                    <div className="row">
                        <div className="card-deck">
                            <div className="card  col-sm-12 col-md-4">
                                <img className="card-img-top hvr-grow" src={blog1} width="290" alt="Card image cap" />
                                    <div className="card-body  my-card-body">
                                        <h4 className="theme-title green">Runway to Red Carpet: Awards Season</h4>
                                        <p className="card-text">
                                            Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.
                                        </p>
                                    </div>
                                    <div className="card-footer  my-card-footer">
                                        <a href="/blog">Learn nmore</a>
                                        <span className="comments"><a className="comment-link" href="#" />454</span>
                                    </div>
                            </div>
                            <div className="card  col-sm-12 col-md-4">
                                <img className="card-img-top hvr-grow" src={blog2} width="290" alt="Card image cap" />
                                    <div className="card-body  my-card-body">
                                        <h4 className="theme-title green">Runway to Red Carpet: Awards Season</h4>
                                        <p className="card-text">
                                            Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.
                                        </p>
                                    </div>
                                    <div className="card-footer  my-card-footer">
                                        <a href="/blog">Learn nmore</a>
                                        <span className="comments"><a className="comment-link" href="#" />454</span>
                                    </div>
                            </div>
                            <div className="card  col-sm-12 col-md-4">
                                <img className="card-img-top hvr-grow" src={blog3} width="290" alt="Card image cap" />
                                    <div className="card-body my-card-body">
                                        <h4 className="theme-title blue">Runway to Red Carpet: Awards Season</h4>
                                        <p className="card-text">Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.</p>
                                    </div>
                                    <div className="card-footer  my-card-footer">
                                        <a href="/blog">Learn nmore</a>
                                        <span className="comments"><a className="comment-link" href="#" />454</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;