import React, {Component} from 'react';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar="mode: click">
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="/">Odkryj Azję</a>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a href="/">Home</a></li>
                        <li><a href="/">Video</a></li>
                        <li><a href="/">Destinations</a></li>
                        <li><a href="/">Booking</a></li>
                        <li><a className="uk-sign-in" href="/">Sign In</a></li>
                    </ul>

                </div>
            </nav>
        );
    }
}