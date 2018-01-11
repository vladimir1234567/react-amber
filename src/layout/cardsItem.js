import React, {Component} from 'react';
import _ from 'lodash';


class CardeItem extends Component {
    render() {
        return (
            <ul className=" my-cards row">
                {
                    _.map(this.props.CardsItem, (item, index) => (
                        <li className="cards-item col-cm-12 col-md-4">
                            <img src={item.imgOnce} className="card-photo hvr-grow" alt="hand-clock"/>
                            <ul className="card-vertical">
                                <li className="icon-item"><a href="/" className="icon-linc"/></li>
                                <li className="icon-item"><a href="/" className="icon-linc"/></li>
                                <li className="icon-item"><a href="/" className="icon-linc"/></li>
                            </ul>
                            <div className="down-text">
                                <h5 className="card-title"><span>{item.cardeTitle}</span><span className="icon"/></h5>
                                <p className="person-position"><span>{item.personPosition}</span><span
                                    className="curent">{item.cardNumber}</span></p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default CardeItem;