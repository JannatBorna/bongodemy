import React from 'react';
import './Navigation.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../../images/icon/BongoDemy-Logo-Transparent.png'
const Navigation = () => {
    return (

        <Navbar className='navbarstyle ' expand="lg ">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logo} alt="" className='header_logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className=" text-decoration-none d-flex justify-content-around align-items-center ">


                        <Link className='text-white ms-4 text-decoration-none ' to='/home'>Home</Link>
                        <Link className='text-white ms-4 text-decoration-none' to='/services'>Services</Link>
                        <NavDropdown  className='btn btn-secondary ms-4 text-decoration-none rounded-3' title="Training" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/freeTraining">Free Training</NavDropdown.Item>
                            <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>
                            <Link to='/hackingLab'>
                                <NavDropdown.Item href="/hackingLab">Hacking Lab</NavDropdown.Item>

                            </Link>
                            <NavDropdown.Item href="/battleGround">Battle Ground</NavDropdown.Item>
                        </NavDropdown>

                        <Link className='text-white ms-4 text-decoration-none' to='/resources'>Resources</Link>
                        <Link className='text-white ms-4 text-decoration-none' to='/contact'>Contact</Link>
                        <Link className='text-white ms-4 text-decoration-none' to='/about'>About Us</Link>

                    </Nav>

                    <Navbar.Collapse className="d-flex justify-content-end ">
                        <Navbar.Text >


                            <button className='signUp_button m-3'>
                                <Link className='text-black ms-2 text-decoration-none' to='/login'>Signup/Login</Link>
                            </button>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;