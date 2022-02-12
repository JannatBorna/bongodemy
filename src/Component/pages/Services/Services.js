import React from 'react';
import './Services.css';
import Lottie from 'react-lottie-player';
import lottieJson from '../../../images/animation/web.json';
import lottieJson2 from '../../../images/animation/web2.json';
import lottieJson3 from '../../../images/animation/web3.json';
import lottieJson4 from '../../../images/animation/web4.json';
import lottieJson5 from '../../../images/animation/web5.json';

const Services = () => {
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
                        <p className="">We are working withBusiness/Corporate Websites E-Commerce Websites, Educational Websites, NGO lNon-Profit Websites, Social Media Websites, Portfolio/Personal Website, Brochure and Catalogue websites, Business directory websites, Crowdfunding websites, Wiki/Community Forum Website, Blogs etc.
                        </p>
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
                        <p className="">- Inventory Software, Point of Sale(POS), Shop Management, Office Management, School Management, Hospital Management, Accounting Management, Restaurant Management, Micro Credit(NGO) Software, Water Management Software
                        </p>
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
                        <p className="mb-5">Web Application Pentesting, Mobile Application Pentesting, Network Pentesting, Forensic & Crime Investigation
                        </p>
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
                        <p className="mb-5">Android Application, Company Application, Organization Application, E-Commerce Application
                        </p>
                    </div>


                    {/*--------------------- Ending Div  ---------------------*/}
                </div>
            </div>
        </div>
    );
};

export default Services;