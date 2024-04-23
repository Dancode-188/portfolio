import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import styles from './Header.module.scss';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsActive(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} ${isActive ? styles.active : ''}`}>
        <div className={styles.navbarBrand}>
          <Link to="/">
            <span className={styles.glitch} data-text="CYBER.DEV">
              CYBER.DEV
            </span>
          </Link>
        </div>
        <div className={`${styles.navbarMenu} ${isActive ? styles.active : ''}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  <span className={styles.glitch} data-text={item.label}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.navbarToggle} onClick={toggleMenu}>
          <span className={styles.glitch} data-text="&#9776;">
            &#9776;
          </span>
        </div>
      </nav>
      <div className={styles.headerContent}>
        <h1>
          <TypeAnimation
            sequence={[
              'CYBER.DEV',
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
            data-text="CYBER.DEV"
          />
        </h1>
        <p>
          <span className={styles.glitch} data-text="Crafting cutting-edge software solutions that push the boundaries of technology.">
            Crafting cutting-edge software solutions that push the boundaries of technology.
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;