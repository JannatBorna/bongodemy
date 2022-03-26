import React from 'react';
import Campaign from '../../subComp/Campaign/Campaign';
import Cards from '../../subComp/Cards';
import Counter from '../../subComp/Counter/Counter';
import FreeReport from '../../subComp/FreeReport/FreeReport';

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <Cards text="Cyberbullying" follow="cyberBulling"></Cards>
        <Cards text="Cyber crime" follow="cyberCrime"></Cards>
      </div>
      <div class="row my-5">
        <Cards text="Cyber Security Solution" follow="comingPage"></Cards>
        <Cards text="Cyber Security Training" follow="comingPage"></Cards>
      </div>

      <hr />
      <hr />
      <h1>Our Achievements</h1>
      <div className="ms-5 d-flex flex-wrap">
        <Counter dvalue="100+" dname="Counting - cyberbullying victim’s help" />
        <Counter dvalue="150+" dname="Cyber Security Service" />
        <Counter dvalue="320+" dname="Bugs Found" />
        <Counter dvalue="65+" dname="Clients Served" />
        <Counter dvalue="11+" dname="Secured Web Development" />
        <Counter dvalue="100+" dname="Campus Ambassador" />
        <Counter dvalue="3+" dname="Secured Software Development" />
        <Counter dvalue="4+" dname="Mobile Application Development" />
      </div>
      <hr />
      <h5>
        Got Jash Asian Awards. Finalist on Meenahackathon powered by Amazon
      </h5>
      <h5>and IEEE YESIST12 2021</h5>

      <hr />
      <hr />
      <h1>Campaign Photo</h1>
      <Campaign />

      <hr />
      <hr />
      <h1 className='mt-5'>How We Start</h1>
      <div className='w-100 howWe mb-5'>
        {/* <img src="../../../images/howwework/howwework.png" alt="" /> */}
        <img className='w-100 ' src={require('../../../images/howwework/howwework.png')} alt=""  />
      </div>

      <hr />
      <hr />
      <FreeReport/>
    </div>
  );
};

export default Home;
