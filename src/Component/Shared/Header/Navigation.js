import React from 'react';
import './Navigaition.css'
import image from '../img/BongoDemy-Logo-Transparent.png'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {

    Link
} from "react-router-dom";
const Navigation = () => {
    return (

        <Navbar className='navbarstyle' expand="lg ">
            <Container fluid>
                <Navbar.Brand className=' text-white' href="#">
                    <img className='logo' src={image} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className=" text-decoration-none text-white  d-flex justify-content-start align-items-center "
                    >

                        <Link className='text-white ms-4 text-decoration-none navhover' to='/home'>
                          <em>Home</em>
                        </Link>
                        <Link className='text-white ms-4 text-decoration-none navhover' to='/cyberbulling'> <em>Cyberbulling</em> </Link>
                        <Link className='text-white ms-4 text-decoration-none navhover' to='/cybercrime'><em>Cybercrime</em></Link>
                        <Link className='text-white ms-4 text-decoration-none navhover' to='/services'><em>Services</em></Link>
                        <Link className='text-white ms-4 text-decoration-none navhover' to='/training'><em>Training</em></Link>
                        <Link className='text-white ms-4 text-decoration-none navhover' to='/resources'><em>Resources</em></Link>
                        <Link className='text-white ms-4 text-decoration-none navhover' to='/contact'><em>Contact</em></Link>
                        <Link className='text-white ms-4 text-decoration-none navhover' to='/about'><em>AboutUs</em></Link>


                    </Nav>

                    <Navbar.Collapse className="d-flex justify-content-center ">
                        <Navbar.Text >
                           <div>
                           <button className='btn btn-outline-success'>
                                <Link className='text-white ms-4 text-decoration-none' to='/login'>Signup/Login</Link>
                            </button>
                           </div>



                        </Navbar.Text>

                    </Navbar.Collapse>

                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
};

export default Navigation;
