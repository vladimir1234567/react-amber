import React, { Component } from 'react';

class Month extends Component {
    render() {
        return (

            <section className="month">
                <div className="container-fluid">
                    <h3 className="section-title-dark text-center">Steal of the month</h3>
                    <p className="section-descript-dark text-center">
                        That we can tuck in our children at night and know that they are fed and clothed and safe from harm.
                        Our trials and triumphs became at once unique and universal.</p>
                    <button  type="button" className="my-btn green-btn hvr-float">Purshase now</button>
                </div>
            </section>
        );
    }
}

export default Month;