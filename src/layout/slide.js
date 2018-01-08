
import React, { Component } from 'react';

import FirstSlide from '../img/sl-1-1.png'

class Slide extends Component {
    render() {
        return (
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
                                <img className="d-block w-100" src={FirstSlide} height="950px" alt="First slide" />
                                    <div className="carousel-caption main-carousel-caption d-none d-md-block">
                                        <h3>Creating a unique look.</h3>
                                        <p>Never been easier.</p>
                                    </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/sl-1-2.jpg" alt="Third slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Creating a unique look.</h3>
                                        <p>Never been easier.</p>
                                    </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/sl-1-3.jpg" alt="Second slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Creating a unique look.</h3>
                                        <p>Never been easier.</p>
                                    </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/sl-1-1.png" alt="Third slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Creating a unique look.</h3>
                                        <p>Never been easier.</p>
                                    </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/sl-1-5.jpg" alt="Third slide" />
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
        );
    }
}

export default Slide;