import React from 'react';
import './Counter.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Counter = (props) => {
  return (
    <div className="m-4 count text-center">
      <CountdownCircleTimer
        isPlaying
        duration={5}
        colors={['#1E2D40']}
        size={200}
        strokeWidth={20}
        trailStrokeWidth={26}
        strokeLinecap="square"
        trailColor="#0ED7A8"
        color="#FFFFFF"
      >
        {({ remainingTime }) => (<h1 >{props.dvalue}</h1>)}  
      
      </CountdownCircleTimer>
      <h5 className='mt-3 text-paste'>{props.dname}</h5>
    </div>
  );
};

export default Counter;
