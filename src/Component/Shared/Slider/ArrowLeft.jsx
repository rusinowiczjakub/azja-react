import React from 'react';

const ArrowLeft = (props) => {
    return (
        <div className="prevArrow arrow" onClick={props.prevSlide}>
            <span uk-icon="icon: arrow-left; ratio: 3"></span>
        </div>
    )
};

export default ArrowLeft;