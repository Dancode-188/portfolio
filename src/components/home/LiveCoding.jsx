// src/components/home/LiveCoding.jsx

import React from 'react';
import styles from './LiveCoding.module.scss';

const LiveCoding = () => {
  return (
    <div className={styles.liveCoding}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.glitch} data-text="Live Coding Sessions">
            Live Coding Sessions
          </span>
        </h2>
        <p className={styles.description}>
          Join me in live coding sessions where I showcase my skills, provide insights, and build projects from scratch.
        </p>
      </div>

      <div className={styles.videoContainer}>
        {/* Replace this with your live coding video or embed */}
        <video src="/path/to/live-coding-video.mp4" controls></video>
      </div>

      <div className={styles.upcomingSessions}>
        <h3 className={styles.subtitle}>Upcoming Sessions</h3>
        <ul className={styles.sessionList}>
          <li className={styles.sessionItem}>
            <span className={styles.sessionDate}>June 15, 2023</span>
            <span className={styles.sessionTitle}>Building a React App from Scratch</span>
          </li>
          <li className={styles.sessionItem}>
            <span className={styles.sessionDate}>July 1, 2023</span>
            <span className={styles.sessionTitle}>Mastering CSS Animations</span>
          </li>
          {/* Add more upcoming sessions */}
        </ul>
      </div>

      <div className={styles.callToAction}>
        <p>Don't miss out on the opportunity to learn and interact with me during the live coding sessions!</p>
        <a href="/register" className={styles.registerButton}>
          Register Now
        </a>
      </div>
    </div>
  );
};

export default LiveCoding;