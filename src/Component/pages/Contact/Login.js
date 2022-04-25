import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from './images/login.svg'
import './Register.css'
import useAuth from '../../../Hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

//import { FcGoogle } from "react-icons/fc";
// initializeAuthentication();

// const provider = new GoogleAuthProvider();


const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { handleGoogleSignIn, handleGitSignin, loginUser, user, isLoading, error, } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnchange = e => {
        const field = e.target.type;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    //console.log(loginData.email);

    const refreshPage = () => {
        window.location.reload();
    }
    const handleEmailPassLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();

    }

    return (
        <div>
            <div className='bg-col'>
                <h3 className='text-white' style={{ margin: '25px', textAlign: 'center', }}>Login</h3>
                <div className='bg-color'>
                    <div className='row'>
                        <div className='col-md-5 marge-btm'>
                            <Form onSubmit={handleEmailPassLogin} id='form-bgm'>
                                <Form.Group className="mb-3 ">
                                    <Form.Label className='mb-2'>
                                        <h6 className=" ">
                                            Email Address
                                        </h6>
                                    </Form.Label>
                                    <Form.Control onChange={handleOnchange} id='form-color' className='bg-dark' type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>
                                        <h6 className="">
                                            Password
                                        </h6>
                                    </Form.Label>
                                    <Form.Control onChange={handleOnchange} id='form-color' className='bg-dark' type="password" placeholder='enter your password' />
                                </Form.Group>

                                <Button id='btn-color' type="submit">
                                    Login
                                </Button>
                                <Button onClick={refreshPage} id='btn-color' style={{ margin: '5px' }}>Refresh</Button>
                            </Form>
                            {isLoading && <div class="spinner-border spin-col" role="status">
                                <span class="sr-only"></span>
                            </div>}
                            {error && <div className="alert alert-danger my-5" role="alert">
                                {error}
                            </div>}
                            <Button id='btn-color' className='mt-3' onClick={handleGoogleSignIn} style={{ margin: '10px', width: '200px' }}> <span> <FcGoogle /> </span> Google Sign in </Button>
                            <Button id='btn-color' className='mt-3' onClick={handleGitSignin} style={{ margin: '10px', width: '200px' }}> <span> <FaGithub /> </span> Github Sign in </Button>

                            {user?.email && <div className="alert alert-success" role="alert">
                                Login Successful !!!
                            </div>}
                            {user?.email && <Button id='btn-color' > <Link className='home-text' to="/home">Go to Home</Link> </Button>}

                        </div>
                        <div className='col-md-5'>
                            <img src={login} width="80%" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {
                <h5 className='text-white' style={{ margin: '25px', textAlign: 'center',marginBottom:"50px",marginTop:"0px" }} > New user? please <Link to="/register">register</Link></h5>

            }
        </div>
    );
};

export default Login;