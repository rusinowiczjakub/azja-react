import React, {Component} from 'react';
import './Offer.scss';
import Slider from "../Shared/Slider/Slider";

export default class Offer extends Component{
    render() {
        return (
            <section className="uk-grid-large uk-child-width-expand@m" data-uk-grid>
                <div className="uk-width-1-2@l uk-width-1-1@m">
                    <div className="cards-slider">
                        <Slider/>
                    </div>
                </div>
                <div className="uk-width-1-3@l uk-width-1-1@m">
                    <h2>Amazing Places to enjoy your travel</h2>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida gravida felis, sed
                        finibus diam. Integer a vulputate dolor. Maecenas elementum ligula elementum mollis rutrum
                    </div>
                    <button className="uk-sign-up">Explore</button>
                </div>
            </section>
        )
    }
}