import React from 'react'


const Slide = ({image, index, activeIndex}) => {
    const activeStyle = {
        transform: 'translateY(-35px)'
    };

    const nonActiveStyle = {
        transform: 'translateY(0)'
    };

    return (
        <div className="slide" style={
            activeIndex === index ? activeStyle : nonActiveStyle
        }>
            <img src={image} />
        </div>
    )
};

export default Slide