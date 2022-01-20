import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Image/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{
                height: "500px",
                width: "100%"
            }} src={img} alt="" srcset="" />
            <Link className="d-flex justify-content-center fs-2" to="/home">Go Back Home</Link>
        </div>
    );
};

export default NotFound;