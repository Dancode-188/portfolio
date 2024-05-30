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
        const response = await axios.get(`https://danielback.netlify.app/.netlify/functions/verify-email/${token}`);
        setVerificationStatus(response.data.message);
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