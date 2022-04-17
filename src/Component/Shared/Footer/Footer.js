import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-3 pb-3">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <div class="cta-text">
                                        <h4 style={{color:"#373636"}} className='fw-bold'>Find us</h4>
                                        <span className='fw-bold'>1351 East Barandi Para, Jessore, Khulna Division, Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <div class="cta-text">
                                        <h4 style={{color:"#373636"}} className='fw-bold'>Call us</h4>
                                        <span className='fw-bold'>+8801722-769661</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <div class="cta-text">
                                        <h4 style={{color:"#373636"}} className='fw-bold'>Mail us</h4>
                                        <span className='fw-bold'>support@bongodemy.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-3 pb-3">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">

                                        <h3>BongoDemy</h3>

                                    </div>
                                    <div class="footer-text">
                                        <p className='fw-bold'>BongoDemy is working to prevent cyber-bullying and cyber-crime in Bangladesh. Provide free training and cyber awareness programs for students. We also provide cyber security training and services to build skilled manpower in cyber security field.</p>
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <Link to="#"><i class="fab fa-facebook-f facebook-bg"></i></Link>
                                        <Link to="#"><i class="fab fa-twitter twitter-bg"></i></Link>
                                        <Link to="#"><i class="fab fa-google-plus-g google-bg"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Menu</h3>
                                    </div>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="#">about</Link></li>
                                        <li><Link to="/cyberBulling">Cyber-bullying</Link></li>
                                        <li><Link to="/cyberCrime">Cyber-crime</Link></li>
                                        <li><Link to="/">Cyber-security</Link></li>
                                        <li><Link to="/training/courses">Cyber-traning</Link></li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i class="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2022, All Right Reserved by bongodemy <Link to="https://codepen.io/anupkumar92/"></Link></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;