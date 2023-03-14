import React from 'react';
import './App.css';




function Card(props) {
  
  return (
    <div className='card'>
      <h1 className='card-name'>{props.name}</h1>
      <h3 className='card-job'>{props.job}</h3>
    </div>
  );
}

export default Card;
