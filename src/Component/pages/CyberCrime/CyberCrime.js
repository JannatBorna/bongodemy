import React from 'react';
import Cards from '../../subComp/Cards';

const CyberCrime = () => {
    return (
        <div className="container">
        <div className="row mt-5">
            <Cards text="Complain Cyber-crime" follow="#"></Cards>
            <Cards text="Get a Consultation" follow="#"></Cards>

        </div>
        <div class="row mt-5">
            <Cards text="Cyber-crime Resources" follow="#"></Cards>
            <Cards text="Emergency Helpline" follow="#"></Cards>
        </div>
    </div>
    );
};

export default CyberCrime;