import React from "react";
import "./ComplainForm.css";

const CrimeComplainform = () => {
  var Recaptcha = require("react-recaptcha");
  var callback = function () {
    console.log('ReCaptcha Loaded!');
  };

  return (
    <div className="complainform-div">
      <div className="container mx-5">
        <form>
          <div class="form-group my-3">
            <label className="my-2" for="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Enter email"
            />
          </div>
          <div class="form-group my-3">
            <label for="exampleInputEmail1" className="my-2">Gender</label>
            <input
              type="text"
              required
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group my-3">
            <label for="exampleInputEmail1" className="my-2">Birth Date</label>
            <input
              type="text"
              required
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group my-3">
            <label for="exampleInputEmail1" className="my-2">Email (Optional)</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group my-3">
            <label for="exampleInputEmail1" className="my-2">Phone Number</label>
            <input
              type="text"
              required
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group my-3">
            <label for="exampleInputEmail1" className="my-2">Address</label>
            <input
              type="text"
              required
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="row ">
            <div class="col" >
              <label for="exampleInputEmail1" className="my-2">City</label>
              <input type="text" class="form-control" placeholder="City" />
            </div>
            <div class="col">
              <label for="exampleInputEmail1" className="my-2">State</label>
              <input type="text" class="form-control" placeholder="State" />
            </div>
            <div class="col">
              <label for="exampleInputEmail1" className="my-2">Zip Code</label>
              <input type="text" class="form-control" placeholder="Zip Code" />
            </div>
          </div>
          <label for="exampleInputEmail1" className="my-2">Complain Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Complain Description"
          ></textarea>
          <div>
          <label for="exampleInputEmail1" className="my-2">Proof</label><br/>
          <input type="file" id="inputGroupFile01" />
          </div>
        
          <label for="exampleInputEmail1" className="my-2">Details about the criminal</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Details about the criminal"
          ></textarea>
          
          <label for="exampleInputEmail1" className="my-2">
            What is Your expectations from this case?
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Complain Description"
          ></textarea> <br/>
          <Recaptcha className="mt-2"
            sitekey="6LdeGhEfAAAAAP9c99MW1nbfCjgZ0HMRwdZJWquH"
            render="explicit"
            onloadCallback={callback}
          />
          <button type="submit" class="complain-button mx-auto">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrimeComplainform;
