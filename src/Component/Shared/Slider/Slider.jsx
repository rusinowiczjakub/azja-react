import React, {Component} from 'react';
import Slide from "./Slide";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import './Slider.scss';

/**
 * @TODO MAKE IT REUSABLE
 */
export default class Slider extends Component {
    constructor(props) {
        super(props);

        const images = [
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        ];

        this.state = {
            images: images,
        }
    }

    componentDidMount () {
        const index = Math.floor(this.state.images.length / 2);
        this.setState( {
            currentIndex: index,
            translateValue: -(this.slideWidth()) * index
        });
    }

    prevSlide = () => {
        if(this.state.currentIndex === 0) {
            return this.setState({
                currentIndex: this.state.images.length - 1,
                translateValue: -(this.slideWidth() * (this.state.images.length - 1))
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (this.slideWidth())
        }));
    };

    nextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    };

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    };

    render() {
        return (
            <div className="slider">
                <div className="slides-wrapper"
                     style={{
                         transform: `translateX(${this.state.translateValue}px)`,
                         transition: 'transform ease-out 0.45s'
                     }}
                >
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} index={i} activeIndex={this.state.currentIndex} image={image} />
                        ))
                    }
                </div>
                <div className="arrows-container">
                    <ArrowLeft prevSlide={this.prevSlide}/>
                    <ArrowRight nextSlide={this.nextSlide}/>
                </div>
            </div>
        );
    }
}