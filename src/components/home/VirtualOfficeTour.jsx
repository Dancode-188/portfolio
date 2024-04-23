// src/components/home/VirtualOfficeTour.jsx

import React, { useEffect, useRef } from 'react';
import { ReactPanoramic } from 'react-panoramic';
import styles from './VirtualOfficeTour.module.scss';
import { FaInfoCircle } from 'react-icons/fa';

const VirtualOfficeTour = () => {
  const panoramaRef = useRef(null);

  useEffect(() => {
    const panorama = panoramaRef.current;
    if (panorama) {
      panorama.addScene('office', '/path/to/office-360-image.jpg');
      panorama.addScene('workstation', '/path/to/workstation-360-image.jpg');
      panorama.addScene('creative-space', '/path/to/creative-space-360-image.jpg');

      panorama.addHotspot('office', {
        pitch: 0,
        yaw: 0,
        radius: 0.05,
        distance: 1,
        label: 'Workstation',
        onClick: () => {
          panorama.setScene('workstation');
        },
      });

      panorama.addHotspot('workstation', {
        pitch: 0,
        yaw: 180,
        radius: 0.05,
        distance: 1,
        label: 'Creative Space',
        onClick: () => {
          panorama.setScene('creative-space');
        },
      });

      panorama.addHotspot('creative-space', {
        pitch: 0,
        yaw: -90,
        radius: 0.05,
        distance: 1,
        label: 'Office',
        onClick: () => {
          panorama.setScene('office');
        },
      });

      panorama.addInfo('office', {
        pitch: 15,
        yaw: 90,
        content: `
          <div class="${styles.infoContent}">
            <h2>Welcome to my office!</h2>
            <p>This is where I spend most of my time working on projects and collaborating with clients.</p>
          </div>
        `,
      });

      panorama.addInfo('workstation', {
        pitch: -10,
        yaw: -45,
        content: `
          <div class="${styles.infoContent}">
            <h2>My Workstation</h2>
            <p>Here's where the magic happens! I have a powerful setup that allows me to tackle any coding challenge.</p>
          </div>
        `,
      });

      panorama.addInfo('creative-space', {
        pitch: 20,
        yaw: 150,
        content: `
          <div class="${styles.infoContent}">
            <h2>Creative Space</h2>
            <p>This is my dedicated area for brainstorming, sketching, and exploring new ideas.</p>
          </div>
        `,
      });

      panorama.setScene('office');
    }
  }, []);

  return (
    <div className={styles.virtualOfficeTour}>
      <h1 className={styles.title}>
        <span className={styles.glitch} data-text="Virtual Office Tour">
          Virtual Office Tour
        </span>
      </h1>
      <div className={styles.panoramaContainer}>
        <ReactPanoramic
          ref={panoramaRef}
          zoom={80}
          keyboard
          mousewheel
          touchmove
          autoRotate={{ enabled: true, velocity: 0.5 }}
        />
        <div className={styles.infoIcon}>
          <FaInfoCircle />
        </div>
      </div>
    </div>
  );
};

export default VirtualOfficeTour;