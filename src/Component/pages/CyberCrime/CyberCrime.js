import React from 'react';
import Cards from '../../subComp/Cards';

const CyberCrime = () => {
    return (
        <div className="container">
        <div className="row mt-5">
            <Cards text="Complain Cyber-crime" follow="crimecomplainform"></Cards>
            
            <Cards text="Get a Consultation" follow="getConsultation"></Cards>

        </div>
        <div class="row my-5">
                <Cards text="Cyber-crime Resources" follow="comingPage"></Cards>
                <Cards text="Emergency Helpline" follow="comingPage"></Cards>
        </div>
    </div>
    );
};

export default CyberCrime;