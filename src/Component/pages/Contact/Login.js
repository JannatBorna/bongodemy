import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from './images/login.svg'
import './Register.css'
import useAuth from '../../../Hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

//import { FcGoogle } from "react-icons/fc";
// initializeAuthentication();

// const provider = new GoogleAuthProvider();


const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { handleGoogleSignIn,handleredirect, handleGitSignin, loginUser, user, isLoading, error, logOut } = useAuth();



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
        loginUser(loginData.email, loginData.password)
        e.preventDefault();

    }

    return (
        <div>
            <div className='bg-col'>
                <h3 className='text-white'>Login</h3>
                <div className='bg-color'>
                    <div className='row'>
                        <div className='col-md-5 marge-btm'>
                            <Form onSubmit={handleEmailPassLogin} id='form-bgm'>
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        <h6>
                                            Email Address
                                        </h6>
                                    </Form.Label>
                                    <Form.Control onChange={handleOnchange} id='form-color' type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>
                                        <h6>
                                            Password
                                        </h6>
                                    </Form.Label>
                                    <Form.Control onChange={handleOnchange} id='form-color' type="password" />
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
                            <Button id='btn-color' className='my-4' onClick={handleGoogleSignIn} style={{ margin: '10px', width: '200px' }}> <span> <FcGoogle /> </span> Google Sign in </Button>
                            <Button id='btn-color' className='my-4' onClick={handleGitSignin} style={{ margin: '10px', width: '200px' }}> <span> <FaGithub/> </span> Github Sign in </Button>

                            {user?.email && <div className="alert alert-success" role="alert">
                                Login Successful !!!
                            </div>}
                        </div>
                        <div className='col-md-5'>
                            <img src={login} width="80%" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {
                user?.email ?
                    <h6></h6>
                    :
                    <h6 className='text-white mb-5'>New User? <Link to="/register">Please register!</Link>  </h6>

            }
        </div>
    );
};

export default Login;