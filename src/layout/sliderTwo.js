import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../App.scss';
import '../slider.css';
import sl5 from '../img/slider1-5.jpg';

class SliderTwo extends Component {
    render() {
        return (

            <section className="slider">
                <img src={sl5} alt=""/>
            </section>
        );
    }
}

export default SliderTwo;