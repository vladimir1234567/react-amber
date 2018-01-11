import React, { Component } from 'react';

import Cat from '../img/cat4.jpg';
import Man from '../img/man2.jpg';
import Lenin from '../img/lenin.jpg';

class EccomerseBlock extends Component {
    render() {
        return (

            <section className="project-main pad-defoukt">
                <div className="container">
                    <div className="row">
                        <div className="slider-goods col-9">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={Cat} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={Man} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={Lenin} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                   data-slide="prev">
                                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                   data-slide="next">
                                    <i className="fa fa-chevron-right" aria-hidden="true" />
                                </a>
                            </div>
                            <ul className="soc-list d-flex justify-content-center">
                                <li className="soc-item"><a href="#" className="soc-link text-hide">fb</a></li>
                                <li className="soc-item"><a href="#" className="soc-link text-hide">tw</a></li>
                                <li className="soc-item"><a href="#" className="soc-link text-hide">lt</a></li>
                                <li className="soc-item"><a href="#" className="soc-link text-hide">prnt</a></li>
                                <li className="soc-item" data-toggle="tooltip" data-placement="right" title="2.3m"><a href="#"
                                                                                                                  className="soc-link text-hide">plus</a>
                                </li>
                            </ul>
                        </div>
                        <aside className="add-info project-info col-3">
                            <div className="control">
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                   data-slide="prev">
                                    <i className="fa fa-chevron-left" aria-hidden="true" />
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                   data-slide="next">
                                    <i className="fa fa-chevron-right" aria-hidden="true" />
                                </a>
                            </div>
                            <span className="comments"><a className="comments-link" href="#" />257</span>


                            <h4 className="item-title y-color">
                                Art Direction, Web Design
                            </h4>
                            <p className="d-color page-descript">
                                Gingerbread candy chupa chups topping. Halvah cake croissant jelly beans. Unerdwear.com brownie lollipop sesame snaps bear claw sweet roll sweet I love soufflé.

                            </p>
                            <p className="d-color page-descript">
                                Caramels powder gummies pudding danish sesame snaps. Sweet roll caramels fruitcake bonbon unerdwear.
                            </p>
                            <h4 className="item-title d-color">
                                Work description
                            </h4>
                            <form action="/">
                                <ul className="list-like">
                                    <li className="item-like"><label><input type="checkbox" name="option1" value="a1" /> Brownie ice
                                        cream carrot</label></li>
                                    <li className="item-like"><label><input type="checkbox" name="option2" value="a2" /> Carrot cake
                                        apple pie</label></li>
                                    <li className="item-like"><label><input type="checkbox" name="option3" value="a3" /> Love applicake
                                        I love</label></li>
                                    <li className="item-like"><label><input type="checkbox" name="option4" value="a4" /> Chocolate bar
                                        pudding</label></li>
                                </ul>
                                <button className="my-btn yellow-btn">buy now</button>
                            </form>
                        </aside>
                    </div>
                </div>
            </section>

        );
    }
}

export default EccomerseBlock;