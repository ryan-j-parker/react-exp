import React from 'react';
import { useState } from 'react';
import './PlayerSummary.css';

// const [] = useState();
const red = '#821200';
const blue = '#1953cb';
function PlayerSummary({ main = false }) {
  return (
    <div style={{ backgroundColor: main ? red : blue }} className="">
      PlayerSummary
    </div>
  );
}

export default PlayerSummary;
