import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {

    return (
        <div style={{backgroundColor:"#1e2d40"}}>
           <div className='pt-5 pb-5 ms-5 me-5' >
            <p className='' style={{backgroundColor:"#0ED7A8" , height:"50px"}}>
            <Link style={{color:"black", textDecoration:"none"}} to="/overview">Overview</Link></p>
            <p style={{backgroundColor:"#0ED7A8", height:"50px"}}><Link style={{color:"black", textDecoration:"none"}} to="/overview">Mission</Link></p>
            <p style={{backgroundColor:"#0ED7A8", height:"50px"}}>
            <Link style={{color:"black", textDecoration:"none"}} to="/overview">Vision</Link></p>
            <p style={{backgroundColor:"#0ED7A8", height:"50px"}}>
            <Link style={{color:"black", textDecoration:"none"}} to="/overview">Team</Link></p>
        </div>
        </div>
    );
};

export default AboutUs;