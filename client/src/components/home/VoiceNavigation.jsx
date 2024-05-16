// src/components/home/VoiceNavigation.jsx

// VoiceNavigation.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './VoiceNavigation.module.scss';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

const VoiceNavigation = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const navigate = useNavigate();
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onresult = (event) => {
      const interimTranscript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      setTranscript(interimTranscript);
    };

    recognitionRef.current.onend = () => {
      if (isListening) {
        recognitionRef.current.start();
      }
    };
  }, [isListening]);

  const startListening = useCallback(() => {
    if (!isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    if (isListening) {
      setIsListening(false);
      recognitionRef.current.stop();
    }
  }, [isListening]);

  useEffect(() => {
    const processTranscript = () => {
      const lowercaseTranscript = transcript.toLowerCase();

      if (lowercaseTranscript.includes('hello')) {
        startListening();
      } else if (lowercaseTranscript.includes('stop listening')) {
        stopListening();
      } else if (lowercaseTranscript.includes('home') || lowercaseTranscript.includes('go to home')) {
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
  }, [transcript, navigate, startListening, stopListening]);

  useEffect(() => {
    startListening();
    return () => {
      stopListening();
    };
  }, [startListening, stopListening]);

  return (
    <div className={styles.voiceNavigation}>
      <button className={styles.microphoneButton} onClick={isListening ? stopListening : startListening}>
        {isListening ? (
          <FaMicrophoneSlash className={styles.microphoneIcon} />
        ) : (
          <FaMicrophone className={styles.microphoneIcon} />
        )}
        <span className={styles.microphoneText}>{isListening ? 'Listening...' : 'Start Listening'}</span>
      </button>
      <div className={styles.transcriptContainer}>
        <p className={styles.transcript}>{transcript}</p>
      </div>
    </div>
  );
};

export default VoiceNavigation;