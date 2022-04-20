import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/icon/BongoDemy-Logo-Transparent.png'

const Navigation = () => {

   
    
    return (
<<<<<<< HEAD

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
=======
        <div >
            <nav style={{ backgroundColor: "#1E2D40" }} className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <img  width="200px" height="50px" src={logo} alt="" className='header_logo pe-3' />
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
>>>>>>> 2847e8bf927f0cbd4960e3ee5288abbaedc88f3b
    );
};

export default Navigation;