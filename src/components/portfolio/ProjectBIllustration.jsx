import React, { useEffect } from 'react';
import styles from './ProjectIllustrations.module.scss';
import ReactGA from 'react-ga';

const ProjectBIllustration = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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