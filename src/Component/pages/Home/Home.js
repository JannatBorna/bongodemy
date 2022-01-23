import React from 'react';
<<<<<<< HEAD
import Cards from '../../subComp/Cards';

const Home = () => {
    return (
            <div className="container">
                <div className="row mt-5">
                    <Cards text="Cyberbullying" follow ="#"></Cards>
                    <Cards text="Cyber crime" follow ="#"></Cards>

                </div>
                <div class="row my-5">
                    <Cards text="Cyber Security Solution" follow ="#"></Cards>
                    <Cards text="Cyber Security Training" follow ="#"></Cards>
                </div>
            </div>
=======
import Cards from './../../subComp/Cards';


const Home = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <Cards text="Cyberbullying" follow="#"></Cards>
                <Cards text="Cyber crime" follow="#"></Cards>

            </div>
            <div className="row my-5">
                <Cards text="Cyber Security Solution" follow="#"></Cards>
                <Cards text="Cyber Security Training" follow="#"></Cards>
            </div>
        </div>
>>>>>>> 6067e655ca8b3af0cb8c90437e45eb6fcb0869ad
    );
};

export default Home;
