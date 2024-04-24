// src/components/home/ARProjectShowcase.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { XR, Interactive, useHitTest } from '@react-three/xr';
import { ARButton } from '@react-three/xr';
import styles from './ARProjectShowcase.module.scss';

const ARCube = () => {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshBasicMaterial color={0x00FF7F} />
    </mesh>
  );
};

const ARProjectShowcase = () => {
  return (
    <div className={styles.arProjectShowcase}>
      <div className={styles.content}>
        <h2>
          <span className={styles.glitch} data-text="AR Project Showcase">
            AR Project Showcase
          </span>
        </h2>
        <p>
          <span className={styles.glitch} data-text="Experience my projects in augmented reality!">
            Experience my projects in augmented reality!
          </span>
        </p>
      </div>
      <div className={styles.arContainer}>
        <Canvas>
          <XR>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Interactive onSelect={() => console.log('Cube selected')}>
              <ARCube />
            </Interactive>
            <HitTestComponent />
          </XR>
        </Canvas>
        <ARButton /> {/* Use the ARButton component directly */}
      </div>
    </div>
  );
};

const HitTestComponent = () => {
  const hitTestRef = useHitTest();

  return hitTestRef ? (
    <mesh position={hitTestRef.point} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color={0xff0000} transparent opacity={0.5} />
    </mesh>
  ) : null;
};

export default ARProjectShowcase;