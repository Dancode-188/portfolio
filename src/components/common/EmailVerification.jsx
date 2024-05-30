// src/components/common/EmailVerification.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './EmailVerification.module.scss';

const EmailVerification = () => {
  const { token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL_VERIFY_EMAIL}`, { token });
        setVerificationStatus('Email verified successfully!');
        setIsSuccess(true);
      } catch (error) {
        console.error('Error verifying email:', error);
        setVerificationStatus('An error occurred while verifying your email.');
        setIsSuccess(false);
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className={styles.emailVerification}>
      <h2>Email Verification</h2>
      <p className={isSuccess ? styles.success : styles.error}>{verificationStatus}</p>
    </div>
  );
};

export default EmailVerification;
