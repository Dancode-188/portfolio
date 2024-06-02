import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { NAV_LINKS } from '../../utils/constants';
import ReactGA from 'react-ga';

const Navigation = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className={`${styles.navigation} ${isActive ? styles.active : ''}`}>
      <div className={styles.logoContainer}>
        <Link to="/" onClick={closeMenu}>
          <span className={styles.glitch} data-text="CYBER.DEV">
            CYBER.DEV
          </span>
        </Link>
      </div>
      <div className={`${styles.menuContainer} ${isActive ? styles.active : ''}`}>
        <ul>
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <Link
                to={link.url}
                className={`${styles.menuLink} ${location.pathname === link.url ? styles.active : ''}`}
                onClick={closeMenu}
              >
                <span className={styles.glitch} data-text={link.name}>
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.toggleMenu} onClick={toggleMenu}>
        <span className={styles.glitch} data-text="&#9776;">
          &#9776;
        </span>
      </div>
    </nav>
  );
};

export default Navigation;