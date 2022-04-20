import React from 'react';
import Campaign from '../../subComp/Campaign/Campaign';
import Cards from '../../subComp/Cards';
import Counter from '../../subComp/Counter/Counter';
import FreeReport from '../../subComp/FreeReport/FreeReport';
import WhyUs from '../../subComp/WhyUs/WhyUs';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <Cards text="Cyberbullying" follow="cyberBulling"></Cards>
        <Cards text="Cyber crime" follow="cyberCrime"></Cards>
      </div>
      <div class="row my-5">
        <Cards text="Cyber Security Solution" follow="/comingPage"></Cards>
        <Cards text="Cyber Security Training" follow="/courses"></Cards>
      </div>

      <hr />
      <hr />
      <h1>Our Achievements</h1>
      <div className="wrapper">
        <Counter dvalue={
          <span>
            <CountUp end={100} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </span>
        } dname="Counting - cyberbullying victim's help" />
        <Counter dvalue={
          <span>
            <CountUp end={150} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </span>
        } dname="Cyber Security Service" />
        <Counter dvalue={
          <span>
            <CountUp end={350} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </span>
        } dname="Bugs Found" />
        <Counter dvalue={
          <span>
            <CountUp end={100} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </span>
        } dname="Clients Served" />
        <Counter dvalue={
          <span>
            <CountUp end={11} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </span>
        } dname="Secured Web Development" />
        <Counter dvalue={
          <span>
            <CountUp end={4} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </span>
        } dname="Campus Ambassador" />
        <Counter dvalue={
          <span>
            <CountUp end={100} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </span>
        } dname="Secured Software Development" />
        <Counter dvalue={
          <span>
            <CountUp end={100} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </span>
        } dname="Mobile Application Development" />
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
        <img className='w-100 ' src={require('../../../images/howwework/howwework.png')} alt="" />
      </div>

      <hr />
      <hr />
      <FreeReport />
      <hr />
      <hr />
      <WhyUs />
    </div>
  );
};

export default Home;
