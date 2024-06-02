import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './PortfolioPage.module.scss';
import ReactGA from 'react-ga';

const ProjectACaseStudy = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
        <h2 className={`${styles.caseStudyTitle} ${styles.glitch}`} data-text="Project A">
          Project A
        </h2>
        <p>This was my first major project...</p>
        <div className={styles.caseStudyContent}>
          <h3 className={`${styles.glitch} ${styles.colorGlitch}`} data-text="Project Overview">
            Project Overview
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt lacinia, nisl nisl
            aliquam nisl, eget aliquam nisl nisl eget nisl.
          </p>
        </div>
        <div className={styles.caseStudyContent}>
          <h3 className={`${styles.glitch} ${styles.colorGlitch}`} data-text="Features">
            Features
          </h3>
          <ul>
            {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, index) => (
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
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </animated.div>
    </div>
  );
};

export default ProjectACaseStudy;