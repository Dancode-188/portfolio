import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './PortfolioPage.module.scss';

const OnlineChatCaseStudy = () => {
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
        <h2 className={`${styles.caseStudyTitle} ${styles.glitch}`} data-text="Online Chat Application">
          Online Chat Application
        </h2>
        <p>
          This project is a Java-based client-server application that allows multiple users to connect and chat with each
          other.
        </p>
        <div className={styles.caseStudyContent}>
          <h3 className={`${styles.glitch} ${styles.colorGlitch}`} data-text="Project Features">
            Project Features
          </h3>
          <ul>
            {[
              'Multiple clients can connect to the server simultaneously',
              'Clients can send messages to the server',
              'Server broadcasts messages to all connected clients',
              'Clients can disconnect from the server',
            ].map((feature, index) => (
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
            <li>Sockets</li>
            <li>Threads</li>
          </ul>
        </div>
        <div className={styles.caseStudyContent}>
          <h3 className={`${styles.glitch} ${styles.colorGlitch}`} data-text="Screenshots">
            Screenshots
          </h3>
          <img src="media/image1.png" alt="Screenshot 1" className={styles.caseStudyImage} />
          <img src="media/image2.png" alt="Screenshot 2" className={styles.caseStudyImage} />
          <img src="media/image3.png" alt="Screenshot 3" className={styles.caseStudyImage} />
        </div>
      </animated.div>
    </div>
  );
};

export default OnlineChatCaseStudy;