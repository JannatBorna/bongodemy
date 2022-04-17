// import React from 'react';
// import './Navigation.css'
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import logo from '../../../images/icon/BongoDemy-Logo-Transparent.png'
// const Navigation = () => {
//     return (

//         <Navbar className='navbarstyle ' expand="lg ">
//             <Container fluid>
//                 <Navbar.Brand to="#">
//                     <img src={logo} alt="" className='header_logo' />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbarScroll" />
//                 <Navbar.Collapse id="navbarScroll">
//                     <Nav className=" text-decoration-none d-flex justify-content-around align-items-center ">


//                         <Link className='text-white ms-4 text-decoration-none ' to='/home'>Home</Link>
//                         <Link className='text-white ms-4 text-decoration-none' to='/services'>Services</Link>
//                         <NavDropdown  className='btn btn-secondary ms-4 text-decoration-none rounded-3' title="Training" id="basic-nav-dropdown">
//                             <NavDropdown.Item to="/freeTraining">Free Training</NavDropdown.Item>
//                             <NavDropdown.Item to="/courses">Courses</NavDropdown.Item>
//                             <Link to='/hackingLab'>
//                                 <NavDropdown.Item to="/hackingLab">Hacking Lab</NavDropdown.Item>

//                             </Link>
//                             <NavDropdown.Item to="/battleGround">Battle Ground</NavDropdown.Item>
//                         </NavDropdown>

//                         <Link className='text-white ms-4 text-decoration-none' to='/resources'>Resources</Link>
//                         <Link className='text-white ms-4 text-decoration-none' to='/contact'>Contact</Link>
//                         <Link className='text-white ms-4 text-decoration-none' to='/about'>About Us</Link>

//                     </Nav>

//                     <Navbar.Collapse className="d-flex justify-content-end ">
//                         <Navbar.Text >


//                             <button className='signUp_button m-3'>
//                                 <Link className='text-black ms-2 text-decoration-none' to='/login'>Signup/Login</Link>
//                             </button>
//                         </Navbar.Text>

//                     </Navbar.Collapse>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/icon/BongoDemy-Logo-Transparent.png'

const Navigation = () => {
    return (
        <div >
            <nav style={{ backgroundColor: "#1E2D40" }} className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <img width="200px" height="50px" src={logo} alt="" className='header_logo' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to='/resources'>Resources</Link>
                            </li>
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
                                    <li><Link className="dropdown-item " to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item " to="#">Something else here</Link></li>
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