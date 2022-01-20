import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import {

    Link, NavLink
} from "react-router-dom";
import "./Navigation.css"
const Navigation = () => {
    return (

        <Navbar className='navbarstyle' expand="lg ">
            <Container fluid>
                <Navbar.Brand className='' href="#">BongoDemy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className=" text-decoration-none d-flex justify-content-around align-items-center "

                    >
                        <Link className=' navstyle  ms-4 text-decoration-none' to='/home'>Home</Link>
                        <Link className=' navstyle  ms-4 text-decoration-none' to='/cyberBulling'>Cyber-bulling</Link>
                        <Link className='navstyle  ms-4 text-decoration-none' to='/cyberCrime'>Cyber-Crime</Link>
                        <Link className='navstyle  ms-4 text-decoration-none' to='/services'>Services</Link>
                        <Link className='navstyle  ms-4 text-decoration-none' to='/training'>Training</Link>
                        <Link className='navstyle  ms-4 text-decoration-none' to='/resources'>Resources</Link>
                        <Link className='navstyle  ms-4 text-decoration-none' to='/contact'>Contact</Link>
                        <Link className='navstyle  ms-4 text-decoration-none' to='/about'>About Us</Link>


                    </Nav>

                    <Navbar.Collapse className="d-flex justify-content-center ">
                        <Navbar.Text >


                            <button className='btn btn-outline-success'>
                                <Link className='text-white ms-4 text-decoration-none' to='/login'>Signup/Login</Link>
                            </button>
                          



                        </Navbar.Text>

                    </Navbar.Collapse>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigation;