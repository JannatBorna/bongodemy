import React, { useState } from 'react';
import './Services.css';
import Lottie from 'react-lottie-player';
import lottieJson from '../../../images/animation/web.json';
import lottieJson2 from '../../../images/animation/web2.json';
import lottieJson3 from '../../../images/animation/web3.json';
import lottieJson4 from '../../../images/animation/web4.json';
import lottieJson5 from '../../../images/animation/web5.json';

const Services = () => {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    return (
        <div className="container">
            <div className="row">
                <h1 className='m-2'>Services</h1>
                <Lottie
                    className="mx-auto"
                    loop
                    animationData={lottieJson5}
                    play
                    style={{ width: "80vw", background: "rgba(0, 0, 0, 0)" }}
                />
                <div className="d-flex flex-wrap justify-content-between m-5">

                    {/*--------------------- A Service Holder Card Starts  ---------------------*/}
                    <div className="service-holder text-center mx-3 p-3 col-md-5">
                        <Lottie
                            className="mx-auto"
                            loop
                            animationData={lottieJson}
                            play
                            style={{ width: 200, height: 200, background: "rgba(0, 0, 0, 0)" }}
                        />
                        <h5 className="">Secured Web Design & Development</h5>
                        <p className='text-white'>We are ProvideAll kainds of website</p>
                        {show && <p className='text-white'>
                            <li>We are working withBusiness</li>
                            <li>Corporate Websites</li>
                            <li>E-Commerce Websites</li>
                            <li>Educational Websites</li>
                            <li>NGO lNon-Profit Websites</li>
                            <li>Social Media Websites</li>
                            <li>Portfolio/Personal Website</li>
                            <li>Brochure and Catalogue websites</li>
                            <li>Business directory websites</li>
                            <li>Crowdfunding websites</li>
                            
                        </p>}
                        {!show ?

                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow(true)}>See More</button>
                            :
                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow(false)}>See Less</button>
                        }
                    </div>

                    {/*--------------------- A Service Holder Card Starts  ---------------------*/}
                    <div className="service-holder text-center mx-3 p-3 col-md-5">
                        <Lottie
                            className="mx-auto"
                            loop
                            animationData={lottieJson2}
                            play
                            style={{ width: 250, height: 250, background: "rgba(0, 0, 0, 0)" }}
                        />
                        <h5 className="">Secured Software Development</h5>
                        <p className='text-white'>Weare Secured Software Development</p>
                        {show1 && <p className="">
                            <li>Inventory Software</li>
                            <li>Point of Sale(POS)</li>
                            <li>Shop Management</li>
                            <li>Office Management</li>
                            <li>School Management</li>
                            <li>Hospital Management</li>
                            <li>Accounting Management</li>
                            <li>Restaurant Management</li>
                            <li>Micro Credit(NGO) Software</li>
                            <li>Water Management Software</li>
                            
                        </p>}
                        {!show1 ?

                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow1(true)}>See More</button>
                            :
                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow1(false)}>See Less</button>
                        }
                    </div>


                    {/*--------------------- 3rd Service Holder Card Starts  ---------------------*/}
                    <div className="service-holder text-center mx-3 my-5 p-3 col-md-5">
                        <Lottie
                            className="mx-auto"
                            loop
                            animationData={lottieJson3}
                            play
                            style={{ width: 250, height: 250, background: "rgba(0, 0, 0, 0)" }}
                        />
                        <h5 className="">Cyber Security Services</h5>
                        <p className="mb-5">We are provide Cyber security services
                        </p>
                        {show2 && <p className="mb-5">
                            <li>Web Application Pentesting</li>
                            <li>Mobile Application Pentesting</li>
                            <li>Network Pentesting</li>
                            <li>Forensic & Crime Investigation</li>
                           
                        </p>}
                        {!show2 ?

                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow2(true)}>See More</button>
                            :
                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow2(false)}>See Less</button>
                        }
                    </div>


                    {/*--------------------- 4th Service Holder Card Starts  ---------------------*/}
                    <div className="service-holder text-center mx-3 my-5 p-3 col-md-5">
                        <Lottie
                            className="mx-auto"
                            loop
                            animationData={lottieJson4}
                            play
                            style={{ width: 250, height: 250, background: "rgba(0, 0, 0, 0)" }}
                        />
                        <h5 className="mt-2">Mobile Application</h5>
                        <p className="mb-5">We are provide all Mobile Application 
                        </p>
                        {show3 && <p className="mb-5">
                            <li>Android Application</li>
                            <li>Company Application</li>
                            <li>Organization Application</li>
                            <li>E-Commerce Application</li>
                            
                        </p>}
                        {!show3 ?

                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow3(true)}>See More</button>
                            :
                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow3(false)}>See Less</button>
                        }
                    </div>


                    {/*--------------------- Ending Div  ---------------------*/}
                </div>
            </div>
        </div>
    );
};

export default Services;