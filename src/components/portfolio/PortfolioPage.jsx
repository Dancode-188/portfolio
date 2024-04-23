// src/components/portfolio/PortfolioPage.jsx
import React, { useMemo, useRef } from 'react';
import styles from './PortfolioPage.module.scss';
import { Canvas } from '@react-three/fiber';
import { Text, OrbitControls, Sphere, useTexture } from '@react-three/drei';

const PortfolioPage = () => {
  const hotspotPositions = useMemo(
    () => [
      { position: [5, 0, -10], text: 'Project 1', url: '/project1' },
      { position: [-5, 0, 10], text: 'Project 2', url: '/project2' },
      { position: [10, 0, 5], text: 'Project 3', url: '/project3' },
    ],
    []
  );

  const handleHotspotClick = (url) => {
    // Handle navigation to the project URL
    console.log(`Navigating to ${url}`);
  };

  const Hotspot = ({ position, text, url }) => {
    const mesh = useRef();
    const texture = useTexture('/path/to/hotspot-texture.png');

    return (
      <mesh ref={mesh} position={position} onClick={() => handleHotspotClick(url)}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial map={texture} />
        <Text position={[0, 1, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="bottom">
          {text}
        </Text>
      </mesh>
    );
  };

  return (
    <div className={styles.portfolioPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.glitch} data-text="Portfolio">Portfolio</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.glitch} data-text="Immerse yourself in my projects">
            Immerse yourself in my projects
          </span>
        </p>
      </div>
      <div className={styles.vr360Container}>
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <ambientLight />
          <Sphere args={[500, 60, 40]}>
            <meshBasicMaterial side={2}>
              <texture attach="map" url="/path/to/360-image.jpg" />
            </meshBasicMaterial>
          </Sphere>
          {hotspotPositions.map((hotspot, index) => (
            <Hotspot key={index} position={hotspot.position} text={hotspot.text} url={hotspot.url} />
          ))}
        </Canvas>
      </div>
      <div className={styles.projectDetails}>
        <h2 className={styles.projectTitle}>Project Highlights</h2>
        <ul className={styles.projectList}>
          <li className={styles.projectItem}>
            <strong className={styles.projectItemTitle}>Project 1:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li className={styles.projectItem}>
            <strong className={styles.projectItemTitle}>Project 2:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li className={styles.projectItem}>
            <strong className={styles.projectItemTitle}>Project 3:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioPage;