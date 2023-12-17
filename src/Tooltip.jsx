import React from 'react';

const Tooltip = (props) => {
    const classnm = () => {
        return `${props.position}`;
    };

    return (
        <div className={`${classnm()}`}>
            Thanks for hovering  on {props.position} position!
        </div>
    );
};

export default Tooltip;


