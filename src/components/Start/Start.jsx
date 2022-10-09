import React from 'react';
import './Start.css';

function Start({ onStartClick }) {
  return (
    <>
      <div className="main">
        <button className="startButton" onClick={onStartClick}>
          Start
        </button>
      </div>
    </>
  );
}

export default Start;
