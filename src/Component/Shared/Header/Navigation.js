import React from 'react';
import './Navigation.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../../images/icon/BongoDemy-Logo-Transparent.png'
const Navigation = () => {
    return (

        <Navbar className='navbarstyle' expand="lg ">
            <Container fluid>
                <Navbar.Brand className='text-white' href="#">
                    <img src={logo} alt="" className='header_logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className=" text-decoration-none d-flex justify-content-around align-items-center ">

                    
                        <Link className='text-black ms-4 text-decoration-none ' to='/home'>Home</Link>
                        {/* <Link className='text-black ms-4 text-decoration-none' to='/cyberBulling'>Cyberbullying</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/cyberCrime'>Cybercrime</Link> */}
                        <Link className='text-black ms-4 text-decoration-none' to='/services'>Services</Link>
                        {/* <Link className='text-black ms-4 text-decoration-none' to='/training'>Training</Link> */}

                        <NavDropdown title="Training" className='ms-4 text-decoration-none' id="basic-nav-dropdown">
                            <NavDropdown.Item href="/freeTraining">Free Training</NavDropdown.Item>
                            <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>
                            <Link to='/hackingLab'>
                                <NavDropdown.Item href="/hackingLab">Hacking Lab</NavDropdown.Item>

                            </Link>
                            <NavDropdown.Item href="/battleGround">Battle Ground</NavDropdown.Item>
                        </NavDropdown>

                        <Link className='text-black ms-4 text-decoration-none' to='/resources'>Resources</Link>
                        <Link className='text-black ms-4 text-decoration-none' to='/contact'>Contact</Link>
                        <Link className='text-black ms-4 text-decoration-none' to='/about'>About Us</Link>


                    </Nav>

                    <Navbar.Collapse className="d-flex justify-content-end ">
                        <Navbar.Text >


                            <button className='btn btn-outline-success'>
                                <Link className='text-black ms-4 text-decoration-none' to='/login'>Signup/Login</Link>
                            </button>



                        </Navbar.Text>

                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;