import React from 'react';
import "../common.css";

const Float = () => {
  return (
    <div className='container clearfix'>
      <div className='green w-25 float-start '>
        <h2>Green Box</h2>
        <p>It seems the issue persists with the button not being displayed. Let's revisit the code and</p>
      </div>
      <div className='orange w-25 float-end'>
        <h2>Orange Box</h2>
        <p>It seems the issue persists with the button not being displayed. Let's revisit the code and</p>
      </div>
    </div>
  );
};

export default Float;

