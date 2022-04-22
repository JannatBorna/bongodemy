import React from 'react';
import './FreeReport.css';

const FreeReport = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6">
          <p className="fs-2 my-4 text-paste text-left">
            Yours Free: Get a free report!
          </p>
          <p className="reportP my-4">
            BongoDemy is here to secure your data, assets, and business. Please
            submit your email address, to get a free penetration testing report.
          </p>
          <div className="d-flex">
            <input
              type="text"
              name="email"
              value=""
              placeholder="Enter business email"
              data-patern-validation=""
            ></input>
            <button type="submit" class="red-btn ms-5">
              Grab Your Free Copy
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="w-100 "
            src={require('../../../images/howwework/report.png')}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FreeReport;
