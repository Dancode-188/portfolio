import React from 'react';
import styles from './ProjectIllustrations.module.scss';

const ProjectAIllustration = () => {
  return (
    <div className={styles.illustration}>
      {/* Add your illustration code or SVG file import here */}
      <h3>Project A Illustration</h3>
      {/* Example SVG code */}
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#ff6347" />
        <rect x="20" y="60" width="60" height="20" fill="#ffa07a" />
      </svg>
    </div>
  );
};

export default ProjectAIllustration;