import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './EmailVerification.module.scss';

const EmailVerification = () => {
  const location = useLocation();
  const [verificationStatus, setVerificationStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    const verifyEmail = async () => {
      try {
        console.log('Verifying email with token:', token);
        console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL_VERIFY_EMAIL);

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL_VERIFY_EMAIL}?token=${token}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log('Response:', response);

        if (response.ok) {
          setVerificationStatus('Email verified successfully!');
          setIsSuccess(true);
        } else {
          const errorData = await response.json();
          setVerificationStatus(`Email verification failed: ${errorData.error}`);
          setIsSuccess(false);
        }
      } catch (error) {
        console.error('Error verifying email:', error);
        setVerificationStatus('An error occurred while verifying your email.');
        setIsSuccess(false);
      }
    };

    verifyEmail();
  }, [location.search]);

  return (
    <div className={styles.emailVerification}>
      <h2>Email Verification</h2>
      <p className={isSuccess ? styles.success : styles.error}>{verificationStatus}</p>
    </div>
  );
};

export default EmailVerification;
