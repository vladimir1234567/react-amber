import React, { Component } from 'react';

class BlogHead extends Component {
    render() {
        return (
            <div>
            <header className="blog-header">
                <div className="container">
                    <div className="row blog-title">
                        <h2 className="text-white">Blog grid view</h2>
                    </div>
                    <div className="row row justify-content-between">
                        <ul className="nav nav-blog">
                            <li className="nav-item blog-item">
                                <a className="nav-link blog-link" href="/">By Alex Poushkin</a>
                            </li>
                            <li className="nav-item blog-item">
                                <a className="nav-link blog-link">September 31</a>
                            </li>
                            <li className="nav-item blog-item">
                                <a className="nav-link blog-link" href="/">12 Comments</a>
                            </li>
                        </ul>
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