import React from 'react';
import PlayerSummary from '../PlayerSummary';
import './Battle.css';
// import Bar from '../Bar';

function Battle() {
  return (
    <>
      <div className="main">
        <div className="opponent">
          <div className="summary">
            <PlayerSummary />
          </div>
        </div>
        <div className="user">
          <div className="summary">
            <PlayerSummary main />
          </div>
        </div>
      </div>
    </>
  );
}

export default Battle;
