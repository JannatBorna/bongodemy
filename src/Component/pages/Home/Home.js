import React from 'react';
import Cards from '../../subComp/Cards';
import ComingPage from '../ComingPage/ComingPage';

const Home = () => {
    
    
    return (
            <div className="container">
            
                <div className="row mt-5">
                    <Cards text="Cyberbullying" follow ="cyberBulling"></Cards>
                    <Cards text="Cyber crime" follow ="cyberCrime"></Cards>

                </div>
                <div class="row my-5">
                <Cards text="Cyber Security Solution" follow="comingPage"></Cards>
                <Cards text="Cyber Security Training" follow="comingPage"></Cards>
                </div>
                <ComingPage></ComingPage>
            </div>
    );
};

export default Home;