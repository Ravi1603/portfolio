'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

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
            value: 90, // Lowered for performance
            density: { enable: true, area: 2000 }, // More spread out
          },
          color: { value: '#ffffff' },
          links: {
            enable: true,
            color: '#ffffff',
            distance: 120,
            opacity: 0.03,
            width: 1,
          },
          move: { enable: true, speed: 0.2 }, // Slower movement
          opacity: { value: 0.15 },
          size: { value: 1.5 },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
      }}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default ParticlesBackground;