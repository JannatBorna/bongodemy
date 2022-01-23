import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='my-5 foterstyle text-black'>
            <hr />
            <div className="row my-4">
                <div className="col-md-2">
                    <div className='justify-content-around align-items-center text-start ms-2'>

                        <div className=" text-start ">
                            <h3>Contact</h3>
                        </div>
                        <hr />
                        <a> Office Location  </a>
                        <a> Phone Number  </a>
                        <a>  Telephone Number </a>
                        <a> Mail  </a>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="justify-content-around align-items-center text-start ">
                        <div className=" text-start ">
                            <h3> Menu</h3>
                        </div>

                        <hr />

                        <a> Home </a>
                        <br />
                        <a>Cyber-bullying</a>
                        <br />

                        <a> Cyber-Crime </a>
                        <br />

                        <a>Cyber-Security Solution</a>
                        <br />

                        <a>Training</a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" text-start ">
                        <h3>Recent aost</h3>
                    </div>

                    <hr />

                    <p>Recent Posrt 1</p>
                    <p>Recent Posrt 2</p>
                </div>
                <div className="col-md-5">
                    <div className=" text-start ">
                        <h3 className=''>News Letter</h3>
                    </div>
                    <hr />
                    <form>
                        <div class="mb-3 me-3">
                            <div className=" w-100 h-100 d-flex justify-content-around align-items-center">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <button className='ms-2 btn btn-outline-success text-black'>Subscribe</button>
                            </div>

                        </div>
                    </form>
                </div>
                <div className=" mb-5 ">
                    <p className='mb-3'>@ All Rights Reserved By BongoDemy 2021</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;