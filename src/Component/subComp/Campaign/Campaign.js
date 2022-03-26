import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Campaign = () => {
  return (
    <div className='mt-5'>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/261145276_901489283873623_8607694682989386542_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ggBXLLBjCFgAX_kOSxi&tn=0d58VTVJ2bUEYO6N&_nc_ht=scontent.fdac138-1.fna&oh=00_AT_ftLTl3nTB7NyAnzgDSngMG9gI6s99QXAXeQljZdkLBQ&oe=62444C18"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/262846391_901489223873629_3862038527606989952_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=trRNxsN3t8MAX9oBupN&tn=0d58VTVJ2bUEYO6N&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-gYHCMZ2knn4QRGaD2WKKdsUl1BSpryPim-cFDJB0jPQ&oe=6243F9B6"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/261983780_901489107206974_8916107463270661093_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PmEpqP_bFeoAX8DCxUZ&_nc_ht=scontent.fdac138-1.fna&oh=00_AT9QIFnTuvS9VjvFGqenwfPg34FtYqnbPTQ3LZ8P-XySow&oe=62444F8B"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Campaign;
