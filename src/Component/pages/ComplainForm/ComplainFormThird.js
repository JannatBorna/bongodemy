import React from 'react';
import { faTimesCircle, faArrowRight ,faArrowLeft,faUser,faLocationArrow,faMobile} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import './ComplainForm.css';


const ComplainFormThird=()=>{
    const cross = <FontAwesomeIcon icon={faTimesCircle} />;
    const rightarrow = <FontAwesomeIcon icon={faArrowRight} />;
    const leftarrow = <FontAwesomeIcon icon={faArrowLeft} />;
    const user = <FontAwesomeIcon icon={faUser} />;
    const location = <FontAwesomeIcon icon={faLocationArrow} />;
    const mobile = <FontAwesomeIcon icon={faMobile} />;
    return (
      <div
        style={{ color: "white", textAlign: "initial" }}
        className="container mt-5"
      >
        <h1>অভিযোগ ফরম</h1>
        <p>জরুরী প্রয়োজনেঃ ০১৬১১ ৮৬০ ৯৯৯ নাম্বারে ফোন দিন ।</p>
        <ProgressBar completed={100} bgColor="#0ED7A8" className="my-3" />

        <h6>{user}নাম</h6>
        <input
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>

        <h5 className="mt-3">এই আবেদনটি কি তুমি নিজে করছ?</h5>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label class="form-check-label" for="inlineCheckbox1">
            {" "}
            হ্যাঁ
          </label>
        </div>
        <div class="form-check ">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            {" "}
            না
          </label>
        </div>

        <h5 className="mt-3">
          লিঙ্গ
        </h5>
           <select class="form-select">
          <option selected>Please select</option>
          <option value="1">নারী</option>
          <option value="2">পুরুষ</option>
          <option value="3">অন্যান্য</option>
          
        </select> 

        <h6 className="mt-3">ভুক্তভোগীর বয়স*</h6>
        <input 
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>

        <h6 className="mt-3">ইমেইল</h6>
        <input 
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>

        <h6 className="mt-3">{location} উপজেলা *</h6>
        <input
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>

        <h6 className="mt-3">{mobile} মোবাইল নাম্বার*</h6>
        <input ইমেইল
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>
  <small>( ইংরেজিতে দিতে হবে )</small><br/>      
  
        <Link to="/complainformsec" className="me-4">
          <button className="complain-button">{leftarrow}পিছনে যান </button>
        </Link>
        <Link to="/complainformthird">
          <button className="complain-button">পরবর্তী ধাপ {rightarrow}</button>
        </Link>
      </div>
    )
}

export default ComplainFormThird;