import React from 'react';
import styles from './ProjectIllustrations.module.scss';

const OnlineChatIllustration = () => {
  return (
    <div className={styles.illustration}>
      <h3>Online Chat Illustration</h3>
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#7cfc00" />
        <rect x="30" y="30" width="40" height="40" fill="#adff2f" />
      </svg>
    </div>
  );
};

export default OnlineChatIllustration;