import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../App.scss';
import FirstSl from '../img/slider1-1.jpg';
import SecondSl from '../img/slider1-2.jpg';
import ThirdSl from '../img/slider1-3.jpg';
import FourthSl from '../img/slider1-4.jpg';
import FifthSl from '../img/slider1-5.jpg';



class SliderTwo extends Component {
    render() {
        return (
            <div>
            <section className="carousel-1">
                <div id="ndicators-1" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#ndicators-1" data-slide-to="0" className="active" />
                        <li data-target="#ndicators-1" data-slide-to="1" />
                        <li data-target="#ndicators-1" data-slide-to="2" />
                        <li data-target="#ndicators-1" data-slide-to="3" />
                        <li data-target="#ndicators-1" data-slide-to="4" />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={FirstSl} alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="text-center">
                                        Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.</h3>
                                    <p>— Moby-Dick, Herman Melville</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={SecondSl} alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.
                                    </h3>
                                    <p>— Moby-Dick, Herman Melville</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={ThirdSl} alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.</h3>
                                    <p>— Moby-Dick, Herman Melville</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={FourthSl} alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.</h3>
                                    <p>— Moby-Dick, Herman Melville</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={FifthSl} alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.</h3>
                                    <p>— Moby-Dick, Herman Melville</p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default SliderTwo;