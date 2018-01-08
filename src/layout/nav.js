import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import _map from 'lodash/map';


class Nav extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav main-navbar-nav">
                    {
                        _map(this.props.ololo, (item, index) => (
                            <a key={item.text + index}
                               className={`nav-item nav-link ${item.className}`}
                               href={item.link}>
                                {item.text} {item.isActive && ' (active)'}
                            </a>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Nav;