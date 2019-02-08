import React, {Component} from 'react';
import Navigation from "../Navigation/Navigation";
import './Header.scss';
import headerImage from '../../assets/images/header.svg';

export default class Header extends Component {

    render() {
        return (
            <header>
                <div className="uk-container-header uk-container">
                    <Navigation/>
                    <div className="header__content">
                        <div className="uk-flex uk-flex-wrap uk-flex-wrap-around uk-flex-middle">
                            <div className="header__text uk-width-1-2">
                                <h1 className="header__text-heading">Travel around the world</h1>
                                <div className="header__text-body">
                                    Plan and book your perfect trip with expert advice,
                                    travel tips, destination information and inspiration from us.
                                </div>
                                <button className="uk-sign-up">Sign Up Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="svg" src={headerImage} />
            </header>
        );
    }
}