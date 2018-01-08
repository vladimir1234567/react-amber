import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
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
                                {/*<div className="map">*/}
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
        );
    }
}

export default Footer;