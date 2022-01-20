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
<<<<<<< HEAD:src/Component/Navigation.js
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


=======
                <Navbar.Brand className='text-black' href="#">BongoDemy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className=" text-decoration-none text-black  d-flex justify-content-around align-items-center "

                    >
                            <Link className='text-black ms-4 text-decoration-none' to='/home'>Home</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/cyberBulling'>Cyberbullying</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/cyberCrime'>Cybercrime</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/services'>Services</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/training'>Training</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/resources'>Resources</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/contact'>Contact</Link>
                            <Link className='text-black ms-4 text-decoration-none' to='/about'>About Us</Link>
                       
                     
>>>>>>> 1101d72512486efadc937204e5fba3aaecf33002:src/Component/Shared/Header/Navigation.js
                    </Nav>

                    <Navbar.Collapse className="d-flex justify-content-center ">
                        <Navbar.Text >
<<<<<<< HEAD:src/Component/Navigation.js
                           <div>
                           <button className='btn btn-outline-success'>
                                <Link className='text-white ms-4 text-decoration-none' to='/login'>Signup/Login</Link>
                            </button>
                           </div>
=======


                         <button className='btn btn-outline-success'>
                         <Link className='text-black ms-4 text-decoration-none' to='/login'>Signup/Login</Link>
                         </button>
>>>>>>> 1101d72512486efadc937204e5fba3aaecf33002:src/Component/Shared/Header/Navigation.js



                        </Navbar.Text>

                    </Navbar.Collapse>

                </Navbar.Collapse>
            </Container>
        </Navbar>



<<<<<<< HEAD:src/Component/Navigation.js
=======
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
>>>>>>> 1101d72512486efadc937204e5fba3aaecf33002:src/Component/Shared/Header/Navigation.js
    );
};

export default Navigation;
