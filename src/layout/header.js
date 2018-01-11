import React, { Component } from 'react';
import logo from '../img/logo.png';
import Nav from './nav.js';

class Header extends Component {
    render() {
        const navLinks = [
            {
                link: '/',
                text: 'Home',
                className: 'main-nav-link text-center'
            },
            {
                link: '/',
                text: 'Home2',
                className: 'main-nav-link text-center',
            },
            {
                link: '/blog',
                text: 'Blog',
                className: 'main-nav-link text-center'
            },
            {
                link: '/pages',
                text: 'Pages',
                className: 'main-nav-link text-center'
            },
            {
                link: '/',
                text: 'Home5',
                className: 'main-nav-link text-center'
            },
            {
                link: '/eccomerse',
                text: 'Eccomerse',
                className: 'main-nav-link text-center'
            },
            {
                link: '/megaMenu',
                text: 'Mega Menu',
                className: 'main-nav-link text-center'
            }
        ];

        return (
            <header className="main-header">
                <div className="header-top">
                    <div className="container">
                        <nav className="navbar top-navbar row">
                            <form className="form-inline form-search">
                                <input className="form-control top-search" type="search" placeholder="Search" aria-label="Search" />
                                <button className="my-btn-s" type="submit">
                                    <i className="fa fa-search" aria-hidden="true" />
                                </button>
                            </form>
                            <ul className="log-menu d-flex flex-row">
                                <li className="nav-item log-item">
                                    <a className="link-item log-link" href="index.html">Login</a>
                                </li>
                                <li className="nav-item log-item">
                                    <a className="link-item log-link text-right" href="/">Register</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <nav className="navbar navbar-expand-lg main-nav">
                        <h1 className="logo">
                            <a className="navbar-brand text-hide" href="/">
                                <img src={logo} alt="Amber" />
                                Amber
                            </a>
                        </h1>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span>
                              <i className="fa fa-bars" aria-hidden="true" />
                            </span>
                        </button>

                        <Nav ololo={navLinks} />
                    </nav>
                </div>
            </header>
        )

    }
}

export default Header;
