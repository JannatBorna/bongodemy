import React from 'react';
import Cards from '../../subComp/Cards';
import './Home.css'

const Home = () => {
    return (
            <div className="container">
                <div className="row mt-5">
                    <Cards text="Cyberbullying" follow ="#"></Cards>
                    <Cards text="Cyber crime" follow ="#"></Cards>

                </div>
                <div className="row my-5">
                    <Cards text="Cyber Security Solution" follow ="#"></Cards>
                    <Cards text="Cyber Security Training" follow ="#"></Cards>
                </div>
            </div>
    );
};

export default Home;