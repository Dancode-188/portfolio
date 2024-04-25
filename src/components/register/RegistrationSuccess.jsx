import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RegistrationSuccess.module.scss';

const RegistrationSuccess = () => {
  return (
    <div className={styles.registrationSuccess}>
      <div className={styles.content}>
        <h2 className={styles.title}>Welcome to the Cyberpunk Revolution!</h2>
        <p className={styles.message}>
          Congratulations, you have successfully joined the ranks of the cyber elite.
        </p>
        <p className={styles.instructions}>
          Prepare to embark on a thrilling journey through the neon-lit streets of the digital frontier.
        </p>
        <Link to="/login" className={styles.loginButton}>
          <span className={styles.buttonText}>Log In</span>
          <span className={styles.buttonIcon}>&#x2192;</span>
        </Link>
      </div>
      <div className={styles.background}></div>
    </div>
  );
};

export default RegistrationSuccess;