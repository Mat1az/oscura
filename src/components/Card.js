import React from 'react';

const Card = (props) => {
    return (
        <div className='card has-text-centered has-text-white'>
            <div className='card-header'>
                <p className='card-header-title is-centered'>{props.title}</p>
            </div>
            <div className='card-content'>
                <div className='content'>{props.content}</div>
            </div>
        </div>
    );
}

export default Card;