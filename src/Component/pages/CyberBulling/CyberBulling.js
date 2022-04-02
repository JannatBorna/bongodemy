import React from 'react';
import Cards from '../../subComp/Cards';


const CyberBulling = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <Cards text="Report Cyberbullying" follow="complainforms"></Cards>
                <Cards text="Get a Consultation" follow="getConsultation"></Cards>

            </div>
            <div class="row my-5">
                <Cards text="Cyberbullying Resources" follow="#"></Cards>
                <Cards text="Emergency Helpline" follow="#"></Cards>
            </div>
        </div>
    );
};

export default CyberBulling;