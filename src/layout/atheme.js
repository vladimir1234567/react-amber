import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Atheme extends Component {
    render() {
        return (
            <section className="amber-theme">
                <header className="green-head">
                    <div className="container">
                        <div className="row green-row">
                            <h4 className="theme-title text-light light">
                                Amber is the most metrolly WordPress theme ever created.
                            </h4>
                            <button type="button" className="my-btn white-btn hvr-float">Purchase now</button>
                        </div>
                    </div>
                </header>
                <section className="theme-features">
                    <div className="container">
                        <div className="min-wrap">
                            <h3 className="section-title-dark text-center">
                                Superb features
                            </h3>
                        </div>
                        <ul className="row features-list">
                            <li className="col-sm-12 col-md features-item">
                                <h4 className="theme-title dark">
                                    Brilliant creative design
                                </h4>
                                <p className="descript-features">
                                    Ah, well! It means much the same thing, said the Duchess, digging her sharp little
                                    chin into Alice's shoulder as she added, and the moral of that is m-dash.
                                </p>
                            </li>
                            <li className="col-sm-12 col-md features-item">
                                <h4 className="theme-title dark">
                                    On mouse over title
                                </h4>
                                <p className="descript-features">
                                    Then they both bowed low, and their curls got entangled together. Alice laughed so
                                    much at this, that she had to run back into the wood for fear of their hearing her.
                                </p>
                            </li>
                            <li className="w-100"></li>
                            <li className="col-sm-12 col-md features-item">
                                <h4 className="theme-title dark">
                                    Incredible documentation
                                </h4>
                                <p className="descript-features">
                                    Alice went timidly up to the door, and knocked. 'There's no sort of use in
                                    knocking,' said the Footman, 'and that for two reasons.
                                </p>
                            </li>
                            <li className="col-sm-12 col-md features-item">
                                <h4 className="theme-title dark">
                                    Responsive & retina ready
                                </h4>
                                <p className="descript-features">
                                    Alice went timidly up to the door, and knocked. 'There's no sort of use in
                                    knocking,' said the Footman, 'and that for two reasons. First, because I'm on the
                                    same side.

                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        );
    }
}

export default Atheme;