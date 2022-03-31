import React from 'react';
import Cards from '../../subComp/Cards';
import Counter from '../../subComp/Counter/Counter';

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
               
               <hr />
               <hr />
               <h1 className='text-center'>Our Achievements</h1>
               <div className='ms-5 d-flex flex-wrap'>
                   <Counter dvalue="100+" dname="Counting - cyberbullying victim’s help"/>
                   <Counter dvalue="150+" dname="Cyber Security Service"/>
                   <Counter dvalue="320+" dname="Bugs Found"/>
                   <Counter dvalue="65+" dname="Clients Served"/>
                   <Counter dvalue="11+" dname="Secured Web Development"/>
                   <Counter dvalue="100+" dname="Campus Ambassador"/>
                   <Counter dvalue="3+" dname="Secured Software Development"/>
                   <Counter dvalue="4+" dname="Mobile Application Development"/>
               </div>
            </div>
    );
};

export default Home;