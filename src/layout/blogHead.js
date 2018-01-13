import React, { Component } from 'react';

class BlogHead extends Component {
    render() {
        let footerClassName = this.props.footerData ? 'justify-content-between' : 'justify-content-end';

        return (
            <div>
            <header className="blog-header">
                <div className="container">
                    <div className="row blog-title">
                        <h2 className="text-white">{this.props.title}</h2>
                    </div>
                    <div className={`row ${footerClassName}`}>
                      { this.props.footerData &&
                          <ul className="nav nav-blog">
                              <li className="nav-item blog-item">
                                  <a className="nav-link blog-link" href="/">By {this.props.footerData.author}</a>
                              </li>
                              <li className="nav-item blog-item">
                                  <a className="nav-link blog-link">{this.props.footerData.date}</a>
                              </li>
                              <li className="nav-item blog-item">
                                  <a className="nav-link blog-link" href="/">{this.props.footerData.commentsCount} Comments</a>
                              </li>
                          </ul>
                      }
                        <nav aria-label="breadcrumb" role="navigation">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/" className="breadcrumb-link">Home</a></li>
                                <li className="breadcrumb-item"><a href="/" className="breadcrumb-link">Shortcodes</a></li>
                                <li className="breadcrumb-item"><a href="/" className="breadcrumb-link">Typografy</a></li>
                                <li className="breadcrumb-item active"><a className="breadcrumb-link">Blog</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>
            </div>
        );
    }
}

export default BlogHead;