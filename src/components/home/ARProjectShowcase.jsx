// src/components/home/ARProjectShowcase.jsx

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ARButton, Interactive, useHitTest } from '@react-three/xr';
import styles from './ARProjectShowcase.module.scss';

const ARCube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshBasicMaterial color={0x00FF7F} />
    </mesh>
  );
};

const ARProjectShowcase = () => {
  const hitTestRef = useHitTest();

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
          <ARButton />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Interactive onSelect={() => console.log('Cube selected')}>
            <ARCube />
          </Interactive>
          {hitTestRef && (
            <mesh position={hitTestRef.point} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[1, 1]} />
              <meshBasicMaterial color={0xff0000} transparent opacity={0.5} />
            </mesh>
          )}
        </Canvas>
      </div>
    </div>
  );
};

export default ARProjectShowcase;