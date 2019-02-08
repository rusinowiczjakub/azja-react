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

        this.state = {
            children: this.props.children
        }
    }

    componentDidMount () {
        let index = Math.floor(this.state.children.length / 2);
        if (index % 2 === 0) {
            index--;
        }
        this.setState( {
            currentIndex: index,
            translateValue: -(this.slideWidth() + 40) * index
        });
    }

    prevSlide = () => {
        if(this.state.currentIndex === 0) {
            return this.setState({
                currentIndex: this.state.children.length - 1,
                translateValue: -(this.slideWidth() * (this.state.children.length - 1))
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (this.slideWidth())
        }));
    };

    nextSlide = () => {
        if(this.state.currentIndex === this.state.children.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth() + 40)
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
                        this.state.children.map((child, i) => (
                            <Slide key={i} index={i} activeIndex={this.state.currentIndex}>
                                {child}
                            </Slide>
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