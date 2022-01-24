import React from 'react';
import './Navigation.css'
import { Navbar, Nav, Container, NavDropdown, Dropdown } from 'react-bootstrap';
import {

    Link
} from "react-router-dom";
const Navigation = () => {
    return (

        <Navbar className='navbarstyle'  expand="lg ">
            <Container fluid>
                <Navbar.Brand className='text-white' href="#">BongoDemy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className=" text-decoration-none d-flex justify-content-around align-items-center ">

                            <Link className='text-white ms-4 text-decoration-none' to='/home'>Home</Link>
                            {/* <Link className='text-white ms-4 text-decoration-none' to='/cyberBulling'>Cyberbullying</Link>
                            <Link className='text-white ms-4 text-decoration-none' to='/cyberCrime'>Cybercrime</Link> */}
                            <Link className='text-white ms-4 text-decoration-none' to='/services'>Services</Link>
                            {/* <Link className='text-white ms-4 text-decoration-none' to='/training'>Training</Link> */}


                        {/* <NavDropdown title="Training" className='dropdown_color text-white ms-4 text-decoration-none' id="basic-nav-dropdown">
                            <div className='dropdown_item'>
                                <NavDropdown.Item href="/freeTraining" className='text-white dropdown_text'>Free Training</NavDropdown.Item>
                                <NavDropdown.Item href="/courses" className='text-white dropdown_text'>Courses</NavDropdown.Item>
                                <NavDropdown.Item href="/hackingLab" className='text-white dropdown_text'>Hacking Lab</NavDropdown.Item>
                                <NavDropdown.Item href="/battleGround" className='text-white dropdown_text'>Battle Ground</NavDropdown.Item> 
                            </div>
                            </NavDropdown> */}

                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className='mx-4'>
                                Training
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='dropdown_item'>
                                <Dropdown.Item href="/freeTraining" className='text-white dropdown_text'>Free Training</Dropdown.Item>
                                <Dropdown.Item href="/courses" className='text-white dropdown_text'>Courses</Dropdown.Item>
                                <Dropdown.Item href="/hackingLab" className='text-white dropdown_text'>Hacking Lab</Dropdown.Item>
                                <Dropdown.Item href="/battleGround" className='text-white dropdown_text'>Battle Ground</Dropdown.Item>
                            </Dropdown.Menu>
                           
                        </Dropdown>
                       

                            <Link className='text-white text-decoration-none' to='/resources'>Resources</Link>
                            <Link className='text-white ms-4 text-decoration-none' to='/contact'>Contact</Link>
                            <Link className='text-white ms-4 text-decoration-none' to='/about'>About Us</Link>
                       
                     
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