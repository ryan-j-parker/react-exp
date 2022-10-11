import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticleAlt() {
  const particlesInit = async (main) => {
    await loadFull(main);
    // eslint-disable-next-line no-console
    console.log(main);
  };
  const particlesLoaded = (container) => {
    // eslint-disable-next-line no-console
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        smooth: true,
        background: '#00002f',
        // Interactivity
        interactivity: {
          // events
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          // modes
          modes: {
            push: {
              quantity: 8,
            },
            repulse: {
              distance: 110,
              duration: 1.5,
            },
          },
        },
        // Particles
        particles: {
          bounce: false,
          color: {
            value: '#cc0877',
            size: 1,
          },
          links: {
            color: '#123495',
            distance: 175,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 85,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: 'triangle',
          },
          size: {
            value: { min: 0.5, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticleAlt;
