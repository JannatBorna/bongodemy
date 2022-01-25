import React from 'react';
import './HackingLab.css'
import img from '../../../Component/img.svg'
import HackingCard from './HackingCard';
import { NavDropdown } from 'react-bootstrap';
const HackingLab = () => {
    return (
        <div className='my-2 '>
            <div className="row">
                <div className="col-md-7">
                    <div className="firstdiv  p-2 d-flex justify-content-start align-items-center ">
                        <div className='text-start p-3'>
                            <h1>Search</h1>
                            <div class="mb-3  mx-start">
                                <div className=" searchinput w-50 h-50">
                                    <input placeholder='Search over 500 rooms ' class="form-control my-3" id="exampleInputPassword1" />

                                </div>
                                <h6 className='fs-5'>
                                    Search hundreds of walkthroughs and challenges by security category or difficulty
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="seconddiv  p-2 d-flex justify-content-start align-items-center ">
                        <div className='text-start'>
                            <div class="mb-3 mx-start">
                                <h3>Hello</h3>
                                <img className='imgstyle' src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-around">
                    <div class="input-group mb-3  ">
                        <div class="input-group mt-3 ">
                            <span class="input-group-text bg-white" id="inputGroup-sizing-default">Show</span>
                            <NavDropdown title="Training" className='bg-white text-black ms-4 text-decoration-none' id="basic-nav-dropdown">
                                <NavDropdown.Item href="/freeTraining">Free Training</NavDropdown.Item>
                                <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>

                                <NavDropdown.Item href="/battleGround">Battle Ground</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                    <div class="input-group mb-3  ">
                        <div class="input-group mt-3 ">
                            <span class="input-group-text bg-white" id="inputGroup-sizing-default">Type</span>
                            <NavDropdown title="Training" className='bg-white text-black ms-4 text-decoration-none' id="basic-nav-dropdown">
                                <NavDropdown.Item href="/freeTraining">Free Training</NavDropdown.Item>
                                <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>

                                <NavDropdown.Item href="/battleGround">Battle Ground</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                    <div class="input-group mb-3  ">
                        <div class="input-group mt-3 ">
                            <span class="input-group-text bg-white" id="inputGroup-sizing-default">Order</span>
                            <NavDropdown title="Training" className='bg-white text-black ms-4 text-decoration-none' id="basic-nav-dropdown">
                                <NavDropdown.Item href="/freeTraining">Free Training</NavDropdown.Item>
                                <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>

                                <NavDropdown.Item href="/battleGround">Battle Ground</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                    <div class="input-group mb-3  ">
                        <div class="input-group mt-3 ">
                            <span class="input-group-text bg-white" id="inputGroup-sizing-default">Difficuly</span>
                            <NavDropdown title="Training" className='bg-white text-black ms-4 text-decoration-none' id="basic-nav-dropdown">
                                <NavDropdown.Item href="/freeTraining">Free Training</NavDropdown.Item>
                                <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>

                                <NavDropdown.Item href="/battleGround">Battle Ground</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>

                </div>



                <div class="input-group mt-3">
                    <span class="input-group-text fs-5" id="inputGroup-sizing-default">Search</span>
                    <input placeholder='Search Security Terms Or Topics ' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>
            <HackingCard></HackingCard>
        </div>
    );
};

export default HackingLab;