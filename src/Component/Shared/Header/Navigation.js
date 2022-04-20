import React from 'react';
import './Navigation.css'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../../images/icon/BongoDemy-Logo-Transparent.png'
import useAuth from '../../../Hooks/useAuth'

const Navigation = () => {

    const { logOut, user } = useAuth();
    
    return (

        <Navbar className='navbarstyle ' expand="lg ">
            <Container fluid>
                <Navbar.Brand  href="#">
                    <img src={logo} alt="" className='header_logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className=" text-decoration-none d-flex justify-content-around align-items-center ">

                    
                        <Link className='text-white ms-4 text-decoration-none ' to='/home'>Home</Link>
                        {/* <Link className='text-black ms-4 text-decoration-none' to='/cyberBulling'>Cyberbullying</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/cyberCrime'>Cybercrime</Link> */}
                        <Link className='text-white ms-4 text-decoration-none' to='/services'>Services</Link>
                        {/* <Link className='text-black ms-4 text-decoration-none' to='/training'>Training</Link> */}

                        <NavDropdown title="Training" className='text-white ms-4 text-decoration-none' id="basic-nav-dropdown">
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

                    <Navbar.Collapse className="d-flex justify-content-center ">
                        <Navbar.Text >


                            {/*<button className='signUp_button'>
                                <Link className='text-black ms-4 text-decoration-none' to='/login'>Signup/Login</Link>
                            </button> */}
                            {
                                user?.email ?
                                    //<Button id='btn-color' onClick={logOut} style={{ margin: '5px'  }}>Logout</Button>
                                    <Button id='btn-color' onClick={logOut}>
                                        <Link className='text-black  text-decoration-none' to='/login'>Logout</Link>
                                    </Button>
                                    :
                                    <Button id='btn-color'>
                                        <Link className='text-black text-decoration-none' to='/login'>Signup/Login</Link>
                                    </Button>
                            }




                        </Navbar.Text>

                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;