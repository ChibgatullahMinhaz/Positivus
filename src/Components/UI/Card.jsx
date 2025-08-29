import React from 'react';

const Card = ({card}) => {
    const {title,bgColor} = card
    return (
        <div className={`rounded-2xl ${bgColor} p-3`}>
           {title}
        </div>
    );
};

export default Card;