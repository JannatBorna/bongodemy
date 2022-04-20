import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Campaign = () => {
  return (
    <div className='mt-5'>
      <Carousel >
        <Carousel.Item interval={1000}>
          <img height="450px"
            className="d-block w-100 "
            src="https://i.postimg.cc/sgXf2tdX/1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img height="450px"
            className="d-block w-100 "
            src="https://i.postimg.cc/3w0KXmwQ/2.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img height="450px"
            className="d-block w-100"
            src="https://i.postimg.cc/mg5L18BS/3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Campaign;
