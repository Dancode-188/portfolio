import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './PortfolioPage.module.scss';

const SimpleClockCaseStudy = () => {
  const scrollRef = useRef(null);
  const [props, set] = useSpring(() => ({ opacity: 1, y: 100 }));
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const handleScroll = () => {
    const scrollPosition = scrollRef.current.scrollTop;
    const maxScroll = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    const scrollFraction = scrollPosition / maxScroll;
    set({ opacity: scrollFraction, y: 100 * (1 - scrollFraction) });
  };

  const handleFeatureHover = (index) => {
    setHoveredFeature(index);
  };

  const handleFeatureUnhover = () => {
    setHoveredFeature(null);
  };

  return (
    <div ref={scrollRef} onScroll={handleScroll} className={styles.caseStudy}>
      <animated.div style={{ opacity: props.opacity, transform: `translateY(${props.y}px)` }}>
        <h2 className={`${styles.caseStudyTitle} ${styles.glitch}`} data-text="SimpleClock">
          Simple Clock Application
        </h2>
        <p>A simple Java application that displays the current time and date in a classic format.</p>
        <div className={styles.caseStudyContent}>
          <h3 className={`${styles.glitch} ${styles.colorGlitch}`} data-text="Project Overview">
            Project Overview
          </h3>
          <p>
            This project was part of the CS 1103: Programming 2 course at the University of the People, and it was assigned by Mr. Wasim Alim on February 22, 2023. The goal of the project was to create a simple Java application that displays the current time and date in a classic format, demonstrating the use of Java's date and time APIs, as well as string formatting and console output.
          </p>
        </div>
        <div className={styles.caseStudyContent}>
          <h3 className={`${styles.glitch} ${styles.colorGlitch}`} data-text="Features">
            Features
          </h3>
          <ul>
            {['Displays current time in 24-hour format', 'Displays current date in DD-MM-YYYY format', 'Updates every second', 'Centered text in a fixed-width frame'].map((feature, index) => (
              <li
                key={index}
                onMouseEnter={() => handleFeatureHover(index)}
                onMouseLeave={handleFeatureUnhover}
                className={hoveredFeature === index ? styles.hoveredFeature : ''}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.caseStudyContent}>
          <h3 className={`${styles.glitch} ${styles.colorGlitch}`} data-text="Technologies Used">
            Technologies Used
          </h3>
          <ul>
            <li>Java</li>
            <li>Java Date and Time APIs</li>
            <li>String formatting</li>
          </ul>
        </div>
      </animated.div>
    </div>
  );
};

export default SimpleClockCaseStudy;