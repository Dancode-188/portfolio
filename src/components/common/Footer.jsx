// src/components/common/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { SOCIAL_LINKS } from '/Users/User/portfolio/src/utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <h3>
            <span className={styles.glitch} data-text="CYBER.DEV">
              CYBER.DEV
            </span>
          </h3>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <span className={styles.glitch} data-text="Home">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span className={styles.glitch} data-text="About">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <span className={styles.glitch} data-text="Services">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <span className={styles.glitch} data-text="Portfolio">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span className={styles.glitch} data-text="Contact">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.footerSocial}>
          <h3>
            <span className={styles.glitch} data-text="Connect">
              Connect
            </span>
          </h3>
          <ul>
            {SOCIAL_LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <span className={styles.glitch} data-text={link.icon}>
                    {link.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>
          <span className={styles.glitch} data-text={`© ${currentYear} CYBER.DEV. All rights reserved.`}>
            &copy; {currentYear} CYBER.DEV. All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;