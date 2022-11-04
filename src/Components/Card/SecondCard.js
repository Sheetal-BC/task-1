import React from 'react';
import './SecondCard.css';

function SecondCard(props) {
  return (
    <div className='second--card'>{props.children}</div>
  )
}

export default SecondCard;