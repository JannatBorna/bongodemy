import React from 'react';
import './Cards.css'

const Cards = (props) => {
    return (
            
            <div className='d-flex align-items-center col-sm boxoo justify-content-center m-4'>
            <h4>{ props.text }</h4>
            </div>
        
    );
};

export default Cards;