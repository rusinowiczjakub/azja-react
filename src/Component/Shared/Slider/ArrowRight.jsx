import React from 'react';

const ArrowRight = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.nextSlide}>
            <span uk-icon="icon: arrow-right; ratio: 3"></span>
        </div>
    )
};

export default ArrowRight;