import React from 'react';
import './Card.css';
import { Projects } from './Projects';

function Card(props) {
  return (
    <>
      <div className="card">
        <div>{props.image}</div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default Card;
