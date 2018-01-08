import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../App.css';
import clock from '../img/clock.jpg';


class Works extends Component {
    render() {
        return (
            <section className="last-works">
                <div className="container">
                    <div className="row">
                        <div className="min-wrap">
                            <h3 className="section-title-light text-light text-center">
                                Last works
                            </h3>
                            <p className="section-descript-light text-light text-center">
                                That we can tuck in our children at night and know that they are fed and clothed and safe from harm. Our trials and triumphs became at once unique and universal.
                            </p>
                        </div>
                    </div>
                    <ul className=" my-cards row">
                        <li className="cards-item col-cm-12 col-md-4">
                            <img src={clock} className="card-photo hvr-grow" alt="hand-clock" />
                                <ul className="card-vertical">
                                    <li className="icon-item"><a href="" className="icon-linc" /></li>
                                    <li className="icon-item"><a href="" className="icon-linc" /></li>
                                    <li className="icon-item"><a href="" className="icon-linc" /></li>
                                </ul>
                                <div className="down-text">
                                    <h5 className="card-title"><span>Lindemans Wine</span><span className="icon" /></h5>
                                    <p className="person-position"><span>Art Direction, Web Design</span><span className="curent">257</span></p>
                                </div>
                        </li>
                        <li className="cards-item col-cm-12 col-md-4">
                            <img src={clock} className="card-photo hvr-grow" alt="hand-clock" />
                                <ul className="card-vertical">
                                    <li className="icon-item"><a href="" className="icon-linc" /></li>
                                    <li className="icon-item"><a href="" className="icon-linc" /></li>
                                    <li className="icon-item"><a href="" className="icon-linc" /></li>
                                </ul>
                                <div className="down-text">
                                    <h5 className="card-title"><span>Lindemans Wine</span><span className="icon" /></h5>
                                    <p className="person-position"><span>Art Direction, Web Design</span><span className="curent">257</span></p>
                                </div>
                        </li>
                        <li className="cards-item col-cm-12 col-md-4">
                            <img src={clock} className="card-photo hvr-grow" alt="hand-clock" />
                                <ul className="card-vertical">
                                    <li className="icon-item"><a href="" className="icon-linc" /></li>
                                    <li className="icon-item"><a href="" className="icon-linc" /></li>
                                    <li className="icon-item"><a href="" className="icon-linc" /></li>
                                </ul>
                                <div className="down-text">
                                    <h5 className="card-title"><span>Lindemans Wine</span><span className="icon" /></h5>
                                    <p className="person-position"><span>Art Direction, Web Design</span><span className="curent">257</span></p>
                                </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Works;