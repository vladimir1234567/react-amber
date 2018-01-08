import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../App.scss';
import '../slide.css';
import sl from '../img/sl-1-1.jpg';

class Slider extends Component {
    render() {
        return (

            <section className="slider">
                <img src={sl} alt=""/>
            </section>
                );
            }
        }

export default Slider;