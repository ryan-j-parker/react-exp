import React, { useState } from 'react';
import './Home.css';
import Particle from './Particle';
import ParticleAlt from './ParticleAlt';
import { GalleryArray } from '../artwork/GalleryArray';

function Home() {
  const [gallery, setGallery] = useState(false);

  // const animateGallery = ({}) => {
  //   const Hover = () => {};

  //   GalleryArray.map((image) => {
  //     <img src={image.source} />;
  //   });
  // };

  return (
    <>
      <ParticleAlt />
      <div className="home">
        <div className="front left">
          <img className="portrait" src="../previews/ai-render-self-neoclassical.png" />
          <p className="mj-text">
            self-portrait generated with{' '}
            <a className="mj-link" href="https://www.midjourney.com/">
              Midjourney AI
            </a>
            <p className="mustache">(mustache not to scale)</p>
          </p>
        </div>
        <div className="front right">
          <div className="home-text">
            <h1 className="hi">hi.</h1>
            <h2 className="ryan">i&apos;m ryan.</h2>
            <h3 className="dev">i&apos;m a software developer.</h3>
          </div>
          <div className="links">
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

// <FontAwesomeIcon icon="fa-solid fa-person" />;
