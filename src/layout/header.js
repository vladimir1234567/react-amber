
import React, { Component } from 'react';
import logo from '../img/logo.png';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="main-header">
                    <div className="header-top">
                        <div className="container">
                            <nav className="navbar top-navbar row">
                                <form className="form-inline form-search">
                                    <input className="form-control top-search" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="my-btn-s" type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
                                </form>
                                <ul className="log-menu d-flex flex-row">
                                    <li className="nav-item log-item">
                                        <a className="link-item log-link" href="index.html">Login</a>
                                    </li>
                                    <li className="nav-item log-item">
                                        <a className="link-item log-link text-right" href="#">Register</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg main-nav">
                            <h1 className="logo"><a className="navbar-brand  text-hide" href="index.html"><img src={logo} alt="Amber" />Amber</a></h1>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span><i className="fa fa-bars" aria-hidden="true" /></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav main-navbar-nav">
                                    <a className="nav-item nav-link main-nav-link text-center" href="index.html">Home</a>
                                    <a className="nav-item nav-link main-nav-link text-center" href="#">Typography</a>
                                    <a className="nav-item nav-link main-nav-link text-center" href="blogs.html">Blog</a>
                                    <a className="nav-item nav-link main-nav-link text-center" href="gallery.html">sPage</a>
                                    <a className="nav-item nav-link main-nav-link text-center" href="#">Elements</a>
                                    <a className="nav-item nav-link main-nav-link text-center" href="project.html">Eccomerse</a>
                                    <a className="nav-item nav-link main-nav-link text-center" href="#">Mega menu</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
