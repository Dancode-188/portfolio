// src/components/common/Footer.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { SOCIAL_LINKS } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL_SUBSCRIBE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, firstName }),
      });

      if (response.ok) {
        setSubscriptionStatus('Successfully subscribed to the newsletter');
        setEmail('');
        setFirstName('');
      } else {
        const errorData = await response.json();
        console.error('Failed to subscribe to the newsletter', errorData);
        setSubscriptionStatus(`Failed to subscribe: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error subscribing to the newsletter:', error);
      setSubscriptionStatus('An error occurred while subscribing to the newsletter');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <h3>
            <span className={styles.glitch} data-text="DANIEL BITENGO">
              DANIEL BITENGO
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
                  <i className={`fab ${link.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerNewsletter}>
          <h3>
            <span className={styles.glitch} data-text="Newsletter">
              Newsletter
            </span>
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {subscriptionStatus && <p>{subscriptionStatus}</p>}
        </div>
        <div className={styles.footerContact}>
          <h3>
            <span className={styles.glitch} data-text="Contact">
              Contact
            </span>
          </h3>
          <p>
            Email: <a href="mailto:danielbitengo@danielbitengo.com">danielbitengo@danielbitengo.com</a>
          </p>
          <p>
            Resume: <a href="https://docs.google.com/document/d/1sbVolCkodhqprKyGkdtDZ_ab_W97aM9DXj6BhBHqHVE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Download</a>
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          <p>
            <span className={styles.glitch} data-text={`© ${currentYear} DANIEL BITENGO. All rights reserved.`}>
              &copy; {currentYear} DANIEL BITENGO. All rights reserved.
            </span>
          </p>
        </div>
        <button className={styles.backToTop} onClick={scrollToTop}>
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;