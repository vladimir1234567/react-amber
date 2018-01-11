import React, { Component } from 'react';
import CardeItem from './cardsItem.js'
import '../App.css';
import clock from '../img/clock.jpg';


class Works extends Component {

    render() {
        const MyCards = [
            {
                imgOnce: clock,
                cardeTitle: 'Lindemans Wine',
                personPosition: 'Art Direction, Web Design',
                cardNumber: '256',
            },
            {
                imgOnce: clock,
                cardeTitle: 'Wine',
                personPosition: 'Art Direction',
                cardNumber: '257',
            },
            {
                imgOnce: clock,
                cardeTitle: 'Lindemans',
                personPosition: 'Web Design',
                cardNumber: '258',
            }
        ];

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
                    <CardeItem CardsItem={MyCards}/>
                </div>
            </section>
        );
    }
}

export default Works;