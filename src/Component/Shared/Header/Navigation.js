import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/icon/BongoDemy-Logo-Transparent.png'

const Navigation = () => {

   
    
    return (
        <div >
            <nav style={{ backgroundColor: "#1E2D40" }} className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <img  width="200px" height="50px" src={logo} alt="" className='header_logo pe-3' />
                    <button className="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/services">Services</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link text-white" to='/resources'>Resources</Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Traning
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item " to="/freeTraining">Free Training</Link></li>
                                    <li><Link className="dropdown-item " to="/courses">Courses</Link></li>
                                    <li><Link className="dropdown-item " to="/hackingLab">Hacking Lab</Link></li>
                                    <li><Link className="dropdown-item " to="/battleGround">Battle Ground</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to='/contact'>Contact</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item " to="about">About bongoDemy</Link></li>
                                    <li><Link className="dropdown-item " to="campaign">Campaign</Link></li>
                                    <li><Link className="dropdown-item " to="methodology">Methodology</Link></li>
                                    <li><Link className="dropdown-item " to="standerGuideline">Stander & Guideline</Link></li>
                                    <li><Link className="dropdown-item " to="ourTeamMember">Our Team Members</Link></li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button className='signUp_button m-3'>
                        <Link className='text-black ms-2 text-decoration-none' to='/login'>Signup/Login</Link>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;