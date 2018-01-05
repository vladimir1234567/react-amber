import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import './App.css';

import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import logo from './img/logo.png';
import sl from './img/sl-1-1.png';
const history = createBrowserHistory();

const Home = () => (
    <div>

        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <section className="footer-section col-sm-6 col-md-3">
                        <h3 className="footer-title light">Get in touch</h3>
                        <ul className="map-list footer-list">
                            <li className="map-item footer-item"><span>Address:</span> 321 Street Name, United Kingdom, London</li>
                            <li className="map-item footer-item"><span>Phone:</span> +7 998 71 150 30 20</li>
                            <li className="map-item footer-item"><span>Email:</span> info@ambertheme.com</li>
                        </ul>
                        {/*<div classNamemap">*/}
                        {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.959125097727!2d32.05619291560897!3d49.428586779347455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b85294003b9%3A0x281207f2579e0bca!2z0JDQnNCR0JXQoCwg0J_Qnw!5e0!3m2!1suk!2sua!4v1511552571624" width="210" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>*/}
                        {/*</div>*/}
                    </section>
                    <section className="footer-section tweets col-sm-6 col-md-3">
                        <h3 className="footer-title light">Latest tweets</h3>
                        <ul className="tweets-list">
                            <li className="tweet-item footer-item">
                                <span className="capt">CMS Masters And Their Best Web Design Tools</span> #bestwebdesigntools #webdesign
                                <span className="ago">— about 12 min ago</span>
                            </li>
                            <li className="tweet-item footer-item">
                                <span className="capt">WOOCOMMERCE functionality added!!! See Industrial theme become even powerful! -</span> bit.ly/industrial-wp
                                <span className="ago">— about 47 days ago</span>
                            </li>
                            <li className="tweet-item footer-item">
                                <span className="capt">CMS Masters And Their Best Web Design Tools</span> #bestwebdesigntools #webdesign
                            </li>
                        </ul>
                    </section>
                    <section className="footer-section follow-us col-sm-6 col-md-3">
                        <h3 className="footer-title light">Follow us</h3>
                        <ul className="followings">
                            <li className="follow-item"><a className="follow-link" href="#">Like us on Facebook</a></li>
                            <li className="follow-item"><a className="follow-link" href="#">Follow us on Twitter</a></li>
                            <li className="follow-item"><a className="follow-link" href="#">Watch videos on YouTube</a></li>
                            <li className="follow-item"><a className="follow-link" href="#">Friend us on Instagram</a></li>
                            <li className="follow-item"><a className="follow-link" href="#">Repin on Pinterest</a></li>
                        </ul>
                    </section>
                    <section className="footer-section col-sm-6 col-md-3">
                        <h3 className="footer-title light">Popular posts</h3>
                        <ul className="post-list footer-list">
                            <li className="post-item footer-item">
                                <p className="post-descript"><span>September, 30</span>Candy canes dragée pudding. Donut cheesecake I love chocolate icing</p>
                            </li>
                            <li className="post-item footer-item">
                                <p className="post-descript"><span>April, 22</span>Muffin croissant cookie sesame snaps. Ice cream donut cookie gingerbread</p>
                            </li>
                            <li className="post-item footer-item">
                                <p className="post-descript"><span>May, 12</span>Cotton candy muffin tart gummies candy danish liquorice chupa chups tootsie roll</p>
                            </li>
                        </ul>
                    </section>


                </div>
                <div className="row">
                    <section className="footer-bottom   justify-content-between d-flex">
                        <div className="footer-copy">
					<span>
						© 2014 StylemixThemes. All rights reserved.
Powered by WordPress.
					</span>
                        </div>

                        <a href="" className="my-btn white-btn">Back to top of page</a>
                    </section>
                </div>
            </div>

        </footer>
    </div>
)
const Blog = () => (
    <div>
        <section className="slider">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="3" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="4" />
                </ol>
                <div className="carousel-inner main-carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={sl} height="950px" alt="First slide" />
                        <div className="carousel-caption main-carousel-caption d-none d-md-block">
                            <h3>Creating a unique look.</h3>
                            <p>Never been easier.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/sl-1-2.jpg" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Creating a unique look.</h3>
                            <p>Never been easier.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/sl-1-3.jpg" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Creating a unique look.</h3>
                            <p>Never been easier.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/sl-1-1.png" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Creating a unique look.</h3>
                            <p>Never been easier.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/sl-1-5.jpg" alt="Third slide" />
                        <div className="carousel-caption .main-carousel-caption d-none d-md-block">
                            <h3>Creating a unique look.</h3>
                            <p>Never been easier.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-buttons">
                <button type="button" className="my-btn green-btn hvr-float">See Features</button>
                <button type="button" className="my-btn green-btn hvr-float">Purchase now</button>
            </div>
        </section>
    </div>
)


class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter history={history}>
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
                                            <a className="link-item log-link text-right" href="/">Register</a>
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
                                        <a className="nav-item nav-link main-nav-link text-center" href="index.html"><Link to="/">Home</Link></a>
                                        <a className="nav-item nav-link main-nav-link text-center" href="/">Typography</a>
                                        <a className="nav-item nav-link main-nav-link text-center" href="blogs.html"><Link to="/about">Blog</Link></a>
                                        <a className="nav-item nav-link main-nav-link text-center" href="gallery.html">sPage</a>
                                        <a className="nav-item nav-link main-nav-link text-center" href="/">Elements</a>
                                        <a className="nav-item nav-link main-nav-link text-center" href="project.html">Eccomerse</a>
                                        <a className="nav-item nav-link main-nav-link text-center" href="/">Mega menu</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/blog" component={Blog}/>

                </div>
            </BrowserRouter>
        )
    }
}
export default Navigation;

