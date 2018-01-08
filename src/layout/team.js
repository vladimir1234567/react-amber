import React, { Component } from 'react';
import face1 from '../img/face1.jpg';
import face2 from '../img/face2.jpg';
import face3 from '../img/face3.jpg';
import face4 from '../img/face4.jpg';

class Team extends Component {
    render() {
        return (
            <section className="team bg-light pad-default">
                <div className="container">
                    <div className="min-wrap">
                        <h3 className="section-title-dark text-center">Our team</h3>
                    </div>
                    <div className="row">
                        <div className="my-card col-6 col-sm-3">
                            <div className="wrap-card">
                                <div className="wrap-img">
                                    <img src={face1} height="280" alt="face" />
                                </div>
                                <div className="card-info">
                                    <div className="carde-title">
                                        <h5>Manny Delgado</h5>
                                        <span>a little boy</span>
                                    </div>
                                    <p className="card-description text-center">
                                        Be who you are and say what
                                        you feel, because those who
                                        mind don't matter.
                                    </p>
                                </div>
                            </div>
                            <div className="b-2 text-center">
                                <a className="my-btn green-btn hvr-grow">profile</a>
                            </div>
                        </div>
                        <div className="my-card col-6 col-sm-3">
                            <div className="wrap-card">
                                <div className="wrap-img">
                                    <img src={face2} height="280" alt="face" />
                                </div>
                                <div className="card-info">
                                    <div className="carde-title">
                                        <h5>Manny Delgado</h5>
                                        <span>a little boy</span>
                                    </div>
                                    <p className="card-description text-center">
                                        Be who you are and say what
                                        you feel, because those who
                                        mind don't matter.
                                    </p>
                                </div>
                            </div>
                            <div className="b-2 text-center">
                                <a className="my-btn green-btn hvr-grow">profile</a>
                            </div>
                        </div>
                        <div className="my-card col-6 col-sm-3">
                            <div className="wrap-card">
                                <div className="wrap-img">
                                    <img src={face3} height="280" alt="face" />
                                </div>
                                <div className="card-info">
                                    <div className="carde-title">
                                        <h5>Manny Delgado</h5>
                                        <span>a little boy</span>
                                    </div>
                                    <p className="card-description text-center">
                                        Be who you are and say what
                                        you feel, because those who
                                        mind don't matter.
                                    </p>
                                </div>
                            </div>
                            <div className="b-2 text-center">
                                <a className="my-btn green-btn hvr-grow">profile</a>
                            </div>
                        </div>
                        <div className="my-card col-6 col-sm-3">
                            <div className="wrap-card">
                                <div className="wrap-img">
                                    <img src={face4} height="280" alt="face" />
                                </div>
                                <div className="card-info">
                                    <div className="carde-title">
                                        <h5>Manny Delgado</h5>
                                        <span>a little boy</span>
                                    </div>
                                    <p className="card-description text-center">
                                        Be who you are and say what
                                        you feel, because those who
                                        mind don't matter.
                                    </p>
                                </div>
                            </div>
                            <div className="b-2 text-center">
                                <a className="my-btn green-btn hvr-grow">profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
    }
}

export default Team;