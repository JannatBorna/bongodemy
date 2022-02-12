import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'
import { getAuth  } from "firebase/auth";
import register from './images/register.svg'
import useAuth from '../../../Hooks/useAuth';
const Register = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [error,setError] = useState('');

    const { registerUser, error, setError, user, isLoading } = useAuth();

    const auth = getAuth();
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleRegistration = e => {
        e.preventDefault();

        //console.log(email,password);
        registerUser(email, password);
        // if(password.length <6)
        // {
        //     setError('Password Must be 6 character long');
        //     return;
        // }
        // else
        // {
        //     setError('');
        // }

        //    createUserWithEmailAndPassword(auth,email,password)
        //    .then(result =>{
        //        const user = result.user;
        //        console.log(user);
        //        setError('');
        //    }) 
        //    .catch(error =>{
        //        setError(error.message);
        //    })

    }
    //console.log(user);
    return (
        <div>
            <h3 className='text-white' style={{ margin: '25px' }} >Register</h3>
            <div className='bg-color'>
                <div className='row'>
                    <div className='col-md-5 marge-btm'>
                        <Form onSubmit={handleRegistration} id='form-bgm'>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <h6>
                                        Name
                                    </h6>
                                </Form.Label>
                                <Form.Control id='form-color' type="name" placeholder="Enter your name" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <h6>
                                        Email Address
                                    </h6>
                                </Form.Label>
                                <Form.Control id='form-color' onBlur={handleEmailChange} className='form-col' type="email" placeholder="name@example.com" required />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>
                                    <h6>
                                        Type Password
                                    </h6>
                                </Form.Label>
                                <Form.Control id='form-color' onBlur={handlePasswordChange} className='form-col' type="password" required />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>
                                    <h6>
                                        Re-type Password
                                    </h6>
                                </Form.Label>
                                <Form.Control className='form-col' type="password" />
                            </Form.Group> */}
                            {/* <div className="text-danger my-2" style={{ margin: '5px', backgroundColor: 'white', textAlign: 'center' }}>{error}</div> */}
                            <Button id='btn-color' type="submit">
                                Register
                            </Button>
                        </Form>
                        {isLoading && <div class="spinner-border spin-col" role="status">
                            <span class="sr-only"></span>
                        </div>}
                        {user?.email && <div class="alert alert-success my-5" role="alert">
                            Registration Successful !!!
                        </div>}
                        {user?.email && <Button id='btn-color' > <Link className='home-text' to="/home">Go to Home</Link> </Button>}
                        {error && <div class="alert alert-danger my-5" role="alert">
                            {error}
                        </div>}
                    </div>
                    <div className='col-md-5'>
                        <img src={register} width="80%" />
                    </div>
                </div>
            </div>
            <h6 className='text-white'>Already registered? <Link to="/login">Please Login</Link></h6>
        </div>

    );
};

export default Register;