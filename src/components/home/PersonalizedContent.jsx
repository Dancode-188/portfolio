// src/components/home/PersonalizedContent.jsx

import React, { useState } from 'react';
import axios from 'axios';
import styles from './PersonalizedContent.module.scss';

const PersonalizedContent = () => {
  const [interests, setInterests] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInterestsChange = (event) => {
    setInterests(event.target.value);
  };

  const generatePersonalizedContent = async () => {
    if (interests.trim() !== '') {
      setIsLoading(true);
      try {
        const response = await axios.post('/api/generate-content', { interests });
        setGeneratedContent(response.data.content);
      } catch (error) {
        console.error('Error generating personalized content:', error);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.personalizedContent}>
      <h2 className={styles.title}>
        <span className={styles.glitch} data-text="Personalized Content">
          Personalized Content
        </span>
      </h2>
      <div className={styles.inputContainer}>
        <label htmlFor="interests" className={styles.label}>
          Enter your interests:
        </label>
        <input
          type="text"
          id="interests"
          value={interests}
          onChange={handleInterestsChange}
          className={styles.input}
        />
        <button onClick={generatePersonalizedContent} className={styles.button}>
          <span className={styles.glitch} data-text="Generate">
            Generate
          </span>
        </button>
      </div>
      {isLoading ? (
        <div className={styles.loadingSpinner}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Generating personalized content...</p>
        </div>
      ) : (
        generatedContent && (
          <div className={styles.generatedContent}>
            <h3 className={styles.contentTitle}>
              <span className={styles.glitch} data-text="Your Personalized Content">
                Your Personalized Content
              </span>
            </h3>
            <p className={styles.contentText}>{generatedContent}</p>
          </div>
        )
      )}
    </div>
  );
};

export default PersonalizedContent;
