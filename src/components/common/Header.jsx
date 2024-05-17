// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>
          <TypeAnimation
            sequence={[
              'DANIEL BITENGO',
              1000,
              'Software Engineer',
              1000,
              'Code Architect',
              1000,
              'Tech Rebel',
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className={styles.glitch}
            data-text="DANIEL BITENGO"
            style={{ fontFamily: 'Custom Font, sans-serif' }}
          />
        </h1>
        <p>
          <span className={styles.glitch} data-text="Crafting cutting-edge software solutions that push the boundaries of technology." style={{ fontFamily: 'Custom Font, sans-serif' }}>
            Crafting cutting-edge software solutions that push the boundaries of technology.
          </span>
        </p>
        <Link to="/portfolio" className={styles.ctaButton}>
          Explore Portfolio
        </Link>
      </div>
    </header>
  );
};

export default Header;