// src/components/home/VoiceNavigation.jsx

// VoiceNavigation.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './VoiceNavigation.module.scss';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

const VoiceNavigation = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const interimTranscript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');

      setTranscript(interimTranscript);
    };

    recognition.onend = () => {
      if (isListening) {
        recognition.start();
      }
    };

    if (isListening) {
      recognition.start();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  useEffect(() => {
    const processTranscript = () => {
      const lowercaseTranscript = transcript.toLowerCase();

      if (lowercaseTranscript.includes('home') || lowercaseTranscript.includes('go to home')) {
        navigate('/');
      } else if (lowercaseTranscript.includes('about') || lowercaseTranscript.includes('go to about')) {
        navigate('/about');
      } else if (lowercaseTranscript.includes('projects') || lowercaseTranscript.includes('go to projects')) {
        navigate('/projects');
      } else if (lowercaseTranscript.includes('contact') || lowercaseTranscript.includes('go to contact')) {
        navigate('/contact');
      } else if (lowercaseTranscript.includes('portfolio') || lowercaseTranscript.includes('go to portfolio')) {
        navigate('/portfolio');
      } else if (lowercaseTranscript.includes('services') || lowercaseTranscript.includes('go to services')) {
        navigate('/services');
      }
    };

    processTranscript();
  }, [transcript, navigate]);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className={styles.voiceNavigation}>
      <button className={styles.microphoneButton} onClick={toggleListening}>
        {isListening ? (
          <FaMicrophoneSlash className={styles.microphoneIcon} />
        ) : (
          <FaMicrophone className={styles.microphoneIcon} />
        )}
        <span className={styles.microphoneText}>
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </span>
      </button>
      <div className={styles.transcriptContainer}>
        <p className={styles.transcript}>{transcript}</p>
      </div>
    </div>
  );
};

export default VoiceNavigation;