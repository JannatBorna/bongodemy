import React, { useState } from 'react';
import './Services.css';
import Lottie from 'react-lottie-player';
import lottieJson from '../../../images/animation/web.json';
import lottieJson2 from '../../../images/animation/web2.json';
import lottieJson3 from '../../../images/animation/web3.json';
import lottieJson4 from '../../../images/animation/web4.json';
import lottieJson5 from '../../../images/animation/web5.json';

const Services = () => {
    // const [show, setShow] = useState(false)
    // const [show1, setShow1] = useState(false)
    // const [show2, setShow2] = useState(false)
    // const [show3, setShow3] = useState(false)

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
                <div className="d-flex flex-wrap justify-content-between  m-5">

                    {/*--------------------- A Service Holder Card Starts  ---------------------*/}
                    <div className="service-holder text-center mx-3 mb-2 p-3 col-md-5">
                        <Lottie
                            className="mx-auto"
                            loop
                            animationData={lottieJson}
                            play
                            style={{ width: 200, height: 200, background: "rgba(0, 0, 0, 0)" }}
                        />
                        <h5 className="">Web Design & Development</h5>
                        <p className='text-white'>Provide All kainds of website</p>


                    <button type="button" style={{backgroundColor:"#1E2D40"}} class="border-0 text-white p-1 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                            See More
                        </button>


                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Web Design & Development</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <li className='text-start'>We are working withBusiness</li>
                                        <li className='text-start'>Corporate Websites</li>
                                        <li className='text-start'>E-Commerce Websites</li>
                                        <li className='text-start'>Educational Websites</li>
                                        <li className='text-start'>NGO lNon-Profit Websites</li>
                                        <li className='text-start'>Social Media Websites</li>
                                        <li className='text-start'>Portfolio/Personal Website</li>
                                        <li className='text-start'>Brochure and Catalogue websites</li>
                                        <li className='text-start'>Business directory websites</li>
                                        <li className='text-start'>Crowdfunding websites</li>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            See More
                        </button>


                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Web Design & Development</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
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
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* {show && <p className='text-white'>

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

                        </p>} */}
                        {/* {!show ?

                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow(true)}>See More</button>
                            :
                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow(false)}>See Less</button>
                        } */}
                    </div>

                    {/*--------------------- A Service Holder Card Starts  ---------------------*/}
                    <div className="mb-2 service-holder text-center mx-3  col-md-5">
                        <Lottie
                            className="mx-auto"
                            loop
                            animationData={lottieJson2}
                            play
                            style={{ width: 250, height: 200, background: "rgba(0, 0, 0, 0)" }}
                        />
                        <h5 className="">Secured Software Development</h5>
                        <p className='text-white'>Weare Secured Software Development</p>


                        <button type="button" style={{backgroundColor:"#1E2D40"}}  class="text-white border-0 p-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            See More
                        </button>


                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Secured Software Development</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <li className='text-start'>Inventory Software</li>
                                        <li className='text-start'>Point of Sale(POS)</li>
                                        <li className='text-start'>Shop Management</li>
                                        <li className='text-start'>Office Management</li>
                                        <li className='text-start'>School Management</li>
                                        <li className='text-start'>Hospital Management</li>
                                        <li className='text-start'>Accounting Management</li>
                                        <li className='text-start'>Restaurant Management</li>
                                        <li className='text-start'>Micro Credit(NGO) Software</li>
                                        <li className='text-start'>Water Management Software</li>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {show1 && <p className="">
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

                        </p>} */}
                        {/* {!show1 ?

                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow1(true)}>See More</button>
                            :
                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow1(false)}>See Less</button>
                        } */}
                    </div>


                    {/*--------------------- 3rd Service Holder Card Starts  ---------------------*/}
                    <div className="service-holder text-center mx-3 my-5 p-3 col-md-5">
                        <Lottie
                            className="mx-auto"
                            loop
                            animationData={lottieJson3}
                            play
                            style={{ width: 250, height: 200, background: "rgba(0, 0, 0, 0)" }}
                        />
                        <h5 className="">Cyber Security Services</h5>
                        <p className="mb-5">We are provide Cyber security services
                        </p>

                        <button type="button" style={{backgroundColor:"#1E2D40"}}  class="text-white p-1  border-0" data-bs-toggle="modal" data-bs-target="#exampleModalll">
                            See More
                        </button>


                        <div class="modal fade" id="exampleModalll" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Cyber Security Services</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <li className='text-start'>Web Application Pentesting</li>
                                        <li className='text-start'>Mobile Application Pentesting</li>
                                        <li className='text-start'>Network Pentesting</li>
                                        <li className='text-start'>Forensic & Crime Investigation</li>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            See More
                        </button>


                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Cyber Security Services</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-start">
                                        <p>Web Application Pentesting</p>
                                        <p>Mobile Application Pentesting</p>
                                        <p>Network Pentesting</p>
                                        <li>Forensic & Crime Investigation</li>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* {show2 && <p className="mb-5">
                            <li>Web Application Pentesting</li>
                            <li>Mobile Application Pentesting</li>
                            <li>Network Pentesting</li>
                            <li>Forensic & Crime Investigation</li>

                        </p>}
                        {!show2 ?

                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow2(true)}>See More</button>
                            :
                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow2(false)}>See Less</button>
                        } */}
                    </div>


                    {/*--------------------- 4th Service Holder Card Starts  ---------------------*/}
                    <div className="service-holder text-center mx-3 my-5 p-3 col-md-5">
                        <Lottie
                            className="mx-auto"
                            loop
                            animationData={lottieJson4}
                            play
                            style={{ width: 250, height: 200, background: "rgba(0, 0, 0, 0)" }}
                        />
                        <h5 className="mt-2">Mobile Application</h5>
                        <p className="mb-5">We are provide all Mobile Application
                        </p>




                        <button type="button" style={{backgroundColor:"#1E2D40"}}  class="p-1 text-white border-0" data-bs-toggle="modal" data-bs-target="#exampleModall">
                            See More
                        </button>


                        <div class="modal fade" id="exampleModall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Mobile Application</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <li className='text-start'>Android Application</li>
                                        <li className='text-start'>Company Application</li>
                                        <li className='text-start'>Organization Application</li>
                                        <li className='text-start'>E-Commerce Application</li>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {show3 && <p className="mb-5">
                            <li>Android Application</li>
                            <li>Company Application</li>
                            <li>Organization Application</li>
                            <li>E-Commerce Application</li>

                        </p>}
                        {!show3 ?

                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow3(true)}>See More</button>
                            :
                            <button style={{ backgroundColor: "#1e2d40" }} type="button" className="text-white p-2 border-0" onClick={() => setShow3(false)}>See Less</button>
                        } */}
                    </div>


                    {/*--------------------- Ending Div  ---------------------*/}
                </div>
            </div>
        </div>
    );
};

export default Services;