import React from 'react';
import './Navigation.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {

    Link
} from "react-router-dom";
const Navigation = () => {
    return (

        <Navbar className='navbarstyle'  expand="lg ">
            <Container fluid>
                <Navbar.Brand className='text-black' href="#">BongoDemy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className=" text-decoration-none text-black  d-flex justify-content-around align-items-center "

                    >
                            <Link className='text-black ms-4 text-decoration-none' to='/home'>Home</Link>
                            {/* <Link className='text-black ms-4 text-decoration-none' to='/cyberBulling'>Cyberbullying</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/cyberCrime'>Cybercrime</Link> */}
                            <Link className='text-black ms-4 text-decoration-none' to='/services'>Services</Link>
                            {/* <Link className='text-black ms-4 text-decoration-none' to='/training'>Training</Link> */}

                       
                        <NavDropdown title="Training" className='dropdown_color ms-4 text-decoration-none' id="basic-nav-dropdown">
                            <div className='dropdown_item'>
                                <NavDropdown.Item href="/freeTraining" className='text-white dropdown_text'>Free Training</NavDropdown.Item>
                                <NavDropdown.Item href="/courses" className='text-white dropdown_text'>Courses</NavDropdown.Item>
                                <NavDropdown.Item href="/hackingLab" className='text-white dropdown_text'>Hacking Lab</NavDropdown.Item>
                                <NavDropdown.Item href="/battleGround" className='text-white dropdown_text'>Battle Ground</NavDropdown.Item> 
                            </div>
                            </NavDropdown>
                       

                            <Link className='text-black ms-4 text-decoration-none' to='/resources'>Resources</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/contact'>Contact</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/about'>About Us</Link>
                       
                     
                    </Nav>

                    <Navbar.Collapse className="d-flex justify-content-end ">
                        <Navbar.Text >

                            <Nav.Link to="/login" className="text-end">
                                <button className='signUp_button'>Signup/Login</button>
                            </Nav.Link> 
                            
                    </Navbar.Text>
                    
                    </Navbar.Collapse>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;