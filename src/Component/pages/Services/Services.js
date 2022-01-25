import React from 'react';
import "./Service.css"
const Services = () => {
    return (
        <div className='subscribe '>
            <div className="d-flex flex-column  container ">
                <div className="card   navbarstyle  m-3 p-5 ">

                    <div className="card-body">
                        <h5 className="card-title">SERVICES Plan & Pricing </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="m-3 card  navbarstyle p-5 "> <h5 className="card-title">Portfoliyo</h5>
                    <p className="card-text"> quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                <div className="m-3 card  navbarstyle p-5  "> <h5 className="card-title">Client Review</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
            </div>
        </div>
    );
};

export default Services;