import React, {Component} from 'react';
import './Offer.scss';
import Slider from "../Shared/Slider/Slider";
import Slide from "../Shared/Slider/Slide";

export default class Offer extends Component {
    render() {
        return (
            <section className="uk-grid-large uk-child-width-expand@m" data-uk-grid>
                <div className="uk-width-1-2@l uk-width-1-2@m uk-flex-center uk-flex-first@l uk-flex-first@xl uk-flex-first@m uk-flex-last@s">
                    <div className="cards-slider">
                        <Slider>
                            <Slide>
                                <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg" />
                            </Slide>
                            <Slide>
                                <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg" />
                            </Slide>
                            <Slide>
                                <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg" />
                            </Slide>
                        </Slider>
                    </div>
                </div>
                <div className="uk-width-1-3@l uk-width-1-2@m uk-flex-first@s uk-flex-last@m uk-flex-first">
                    <div className="offer__text uk-padding-large uk-align-center uk-flex-center uk-flex uk-flex-center@m uk-flex-center@s uk-flex-center@l uk-flex-column">
                        <h2>Amazing Places to enjoy your travel</h2>
                        <div className="offer-section-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida gravida felis,
                            sed
                            finibus diam. Integer a vulputate dolor. Maecenas elementum ligula elementum mollis
                            rutrum
                        </div>
                        <button className="uk-sign-up uk-margin-large">Explore</button>
                    </div>
                </div>
            </section>
        )
    }
}