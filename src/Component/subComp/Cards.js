import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

const Cards = (props) => {
    return (

        <Link className='d-flex align-items-center col-sm boxoo justify-content-center m-4' to={props.follow}>
            <h4>{props.text}</h4>
        </Link>

    );
};

export default Cards;