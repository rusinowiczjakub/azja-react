import React from 'react'


const Slide = (props) => {
    const activeStyle = {
        transform: 'translateY(-35px)'
    };

    const nonActiveStyle = {
        transform: 'translateY(0)'
    };

    return (
        <div className="slide" style={
            props.activeIndex === props.index ? activeStyle : nonActiveStyle
        }>
            {props.children}
        </div>
    )
};

export default Slide