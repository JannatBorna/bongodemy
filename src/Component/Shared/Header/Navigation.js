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

                        <NavDropdown title="Training" className='text-black ms-4 text-decoration-none' id="basic-nav-dropdown">
                            <NavDropdown.Item href="/freeTraining">Free Training</NavDropdown.Item>
                            <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>
                            <NavDropdown.Item href="/hackingLab">Hacking Lab</NavDropdown.Item>
                            <NavDropdown.Item href="/battleGround">Battle Ground</NavDropdown.Item>
                            <NavDropdown.Item href="/complainform">Complain Form</NavDropdown.Item>
                        </NavDropdown>

                            <Link className='text-black ms-4 text-decoration-none' to='/resources'>Resources</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/contact'>Contact</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/about'>About Us</Link>
                       
                     
                    </Nav>

                    <Navbar.Collapse className="d-flex justify-content-center ">
                        <Navbar.Text >


                         <button className='btn btn-outline-success'>
                         <Link className='text-black ms-4 text-decoration-none' to='/login'>Signup/Login</Link>
                         </button>



                        </Navbar.Text>
                    
                    </Navbar.Collapse>

                </Navbar.Collapse>
            </Container>
        </Navbar>



        // <div>
        //     <Navbar bg="light" className='navbarstyle' expand="lg">
        //         <Container>
        //             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">
        //                 <Nav className="d-flex justify-content-center align-items-center">
        //                     <div className=" d-flex justify-content-center align-items-center">
        //                     <Link className='text-black ms-1' to='/home'>Home</Link>
        //                     <Link className='text-black ms-1' to='/cyberbulling'>Cyber-bulling</Link>
        //                     <Link className='text-black ms-1' to='/cybercrime'>Cyber-Crime</Link>
        //                     <Link className='text-black ms-1' to='/services'>Services</Link>
        //                     <Link className='text-black ms-1' to='/training'>Training</Link>
        //                     <Link className='text-black ms-1' to='/resources'>Resources</Link>
        //                     <Link className='text-black ms-1' to='/contact'>Contact</Link>
        //                     <Link className='text-black ms-1' to='/about'>About Us</Link>
        //                     <Link className='text-black ms-1' to='/login'>Signup/Login</Link>
        //                     </div>


        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </div>
    );
};

export default Navigation;