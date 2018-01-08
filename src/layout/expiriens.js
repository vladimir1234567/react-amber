import React, { Component } from 'react';

class Expiriens extends Component {
    render() {
        return (
            <section className="expiriens bg-green pad-default">
                <div className="min-wrap">
                    <h3 className="section-title-light text-center">
                        Company expirience
                    </h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 progress-scale">
                            <div className="item progress-50
">
                                <div className="radial-inner-bg  hvr-grow" />
                                <div className="black-round bg-black round  hvr-grow" />
                            </div>
                            <h3 className="section-title light text-center">500</h3>
                            <p className="section-descript-light text-center">
                                years of web development
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4 progress-scale">
                            <div className="item progress-60">
                                <div className="radial-inner-bg  hvr-grow" />
                                <div className="black-round bg-black round  hvr-grow" />
                            </div>
                            <h3 className="section-title light text-center">25 000</h3>
                            <p className="section-descript-light text-center">
                                results of the last winter&nbsp;year
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4 progress-scale">
                            <div className="item progress-55">
                                <div className="radial-inner-bg  hvr-grow" />
                                <div className="black-round bg-black round  hvr-grow" />
                            </div>
                            <h3 className="section-title light text-center">100 000</h3>
                            <p className="section-descript-light text-center">
                                euros of the military budget
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Expiriens;