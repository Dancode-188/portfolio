// src/components/contact/ContactPage.jsx

import React, { useState, useRef, useEffect } from 'react';
import styles from './ContactPage.module.scss';
import { FaVideo, FaPhoneSlash, FaComments, FaCalendarAlt } from 'react-icons/fa';
import ChatbotComponent from './ChatbotComponent';
import SchedulerComponent from './SchedulerComponent';

const VideoChat = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [isCallStarted, setIsCallStarted] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const startLocalStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setLocalStream(stream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing local media devices:', error);
      }
    };

    startLocalStream();

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [localStream]);

  const startCall = async () => {
    try {
      const peerConnection = new RTCPeerConnection();

      localStream.getTracks().forEach((track) => peerConnection.addTrack(track, localStream));

      peerConnection.ontrack = (event) => {
        setRemoteStream(event.streams[0]);
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        }
      };

      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);

      // Send offer to the remote peer (e.g., via a signaling server)
      // ...

      setIsCallStarted(true);
    } catch (error) {
      console.error('Error starting video call:', error);
    }
  };

  const endCall = () => {
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
    }
    if (remoteStream) {
      remoteStream.getTracks().forEach((track) => track.stop());
    }
    setLocalStream(null);
    setRemoteStream(null);
    setIsCallStarted(false);
  };

  return (
    <div className={styles.videoChat}>
      <h2 className={styles.videoChatTitle}>Video Chat</h2>
      <div className={styles.videoContainer}>
        <video ref={localVideoRef} autoPlay muted className={styles.localVideo} />
        {remoteStream && <video ref={remoteVideoRef} autoPlay className={styles.remoteVideo} />}
      </div>
      <div className={styles.videoControls}>
        {!isCallStarted ? (
          <button onClick={startCall} className={styles.startCallButton}>
            <FaVideo className={styles.videoIcon} />
            Start Call
          </button>
        ) : (
          <button onClick={endCall} className={styles.endCallButton}>
            <FaPhoneSlash className={styles.videoIcon} />
            End Call
          </button>
        )}
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [selectedOption, setSelectedOption] = useState('contact-form');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'contact-form':
        return (
          <div className={styles.contactForm}>
            <h2 className={styles.formTitle}>Contact Form</h2>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        );
      case 'video-chat':
        return <VideoChat />;
      case 'chatbot':
        return (
          <div className={styles.chatbot}>
            <h2 className={styles.chatbotTitle}>Chatbot</h2>
            <ChatbotComponent />
          </div>
        );
      case 'scheduler':
        return (
          <div className={styles.scheduler}>
            <h2 className={styles.schedulerTitle}>Scheduler</h2>
            <SchedulerComponent />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.contactPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.glitch} data-text="Contact Me">
            Contact Me
          </span>
        </h1>
        <nav className={styles.nav}>
          <button
            className={`${styles.navButton} ${selectedOption === 'contact-form' ? styles.active : ''}`}
            onClick={() => handleOptionChange('contact-form')}
          >
            <FaComments className={styles.navIcon} />
            Contact Form
          </button>
          <button
            className={`${styles.navButton} ${selectedOption === 'video-chat' ? styles.active : ''}`}
            onClick={() => handleOptionChange('video-chat')}
          >
            <FaVideo className={styles.navIcon} />
            Video Chat
          </button>
          <button
            className={`${styles.navButton} ${selectedOption === 'chatbot' ? styles.active : ''}`}
            onClick={() => handleOptionChange('chatbot')}
          >
            <FaComments className={styles.navIcon} />
            Chatbot
          </button>
          <button
            className={`${styles.navButton} ${selectedOption === 'scheduler' ? styles.active : ''}`}
            onClick={() => handleOptionChange('scheduler')}
          >
            <FaCalendarAlt className={styles.navIcon} />
            Scheduler
          </button>
        </nav>
      </header>
      <main className={styles.content}>{renderContent()}</main>
    </div>
  );
};

export default ContactPage;
