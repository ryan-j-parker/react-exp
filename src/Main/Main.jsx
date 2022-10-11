import React from 'react';
import './Main.css';
import { Portfolio } from '../components/Portfolio';
import Header from '../Header/Header';
import ParticleAlt from '../components/ParticleAlt';

function Main() {
  return (
    <>
      <Header />
      <ParticleAlt />
      <div className="main">
        <div className="project-box">
          <h2 className="project-title">projects:</h2>
          <div className="projects-wrap">
            <Portfolio />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
