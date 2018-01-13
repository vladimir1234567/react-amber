import React, { Component } from 'react';

import CardeItem from './cardsItem'
import '../App.css';
import clock from '../img/clock.jpg';




class ListMenu extends Component {
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
            <div className="container">
                <p className="d-color pad-default page-descript">
                    Gingerbread candy chupa chups topping. Halvah cake croissant jelly beans. Unerdwear.com brownie lollipop
                    sesame snaps bear claw sweet roll sweet I love soufflé. Caramels powder gummies pudding danish sesame snaps.
                    Sweet roll caramels fruitcake bonbon unerdwear.com brownie ice cream carrot cake. Carrot cake apple pie
                    gummies I love applicake I love I love chocolate bar pudding.
                </p>
                <ul className="nav gallery-menu">
                    <li className="nav-item gallery-item">
                        <a className="nav-link gallery-link active" href="#">View all</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  gallery-link" href="#">Videos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  gallery-link" href="#">Photos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  gallery-link" href="#">Games</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  gallery-link" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  gallery-link" href="#">Poisons</a>
                    </li>
                </ul>
                <CardeItem CardsItem={MyCards}/>
                <CardeItem CardsItem={MyCards}/>
                <CardeItem CardsItem={MyCards}/>
                <button className="show" type="button">Show more images</button>
            </div>
        );
    }
}

export default ListMenu;