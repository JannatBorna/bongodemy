import React from 'react';
import './GetConsultation.css';
import { Link } from 'react-router-dom';
const GetConsultation=()=>{
    return (
    <div  style={{ color: "white", textAlign: "initial" }} className='text-white m-5'>
        <h6 className="mt-3">Name</h6>
        <input 
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>

        <h6 className="mt-3">Email</h6>
        <input 
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>

        <h6 className="mt-3">Details</h6>
        <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="6"
      ></textarea>

        <h6 className="mt-3">Phone Number</h6>
        <input 
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>
         <Link to="/" className="me-4 ">
          <button className="complain-button fw-bold">Submit </button>
        </Link>
    </div>
    )
}
export default GetConsultation;