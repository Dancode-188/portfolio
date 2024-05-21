import React from 'react';
import styles from './ProjectIllustrations.module.scss';

const ProjectBIllustration = () => {
  return (
    <div className={styles.illustration}>
      {/* Add your illustration code or SVG file import here */}
      <h3>Project B Illustration</h3>
      {/* Example SVG code */}
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#6495ed" />
        <rect x="20" y="20" width="60" height="20" fill="#87cefa" />
      </svg>
    </div>
  );
};

export default ProjectBIllustration;