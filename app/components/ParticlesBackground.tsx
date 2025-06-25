'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine'; // ✅ CORRECT SOURCE

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: '#0b0f19' },
        particles: {
          number: {
            value: 90,         // or try 300 for even denser dots
            density: {
              enable: true,
              area: 1000,        // smaller area = more concentrated
            },
          },
          color: { value: '#ffffff' },
          links: {
            enable: true,
            color: '#ffffff',
            distance: 150,
            opacity: 0.1,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.3 },
          size: { value: 2 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: 'grab' } },
          modes: { grab: { distance: 140, links: { opacity: 0.4 } } },
        },
      }}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default ParticlesBackground;
