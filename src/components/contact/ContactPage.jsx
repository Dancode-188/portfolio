// src/components/contact/ContactPage.jsx

import React, { useState, useEffect } from 'react';
import styles from './ContactPage.module.scss';
import { FaComments, FaCalendarAlt } from 'react-icons/fa';
// import ChatbotComponent from './ChatbotComponent';
import SchedulerComponent from './SchedulerComponent';
import axios from 'axios';
import ReactGA from 'react-ga';

const ContactPage = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const [selectedOption, setSelectedOption] = useState('contact-form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post('https://danielback-cc3b9627b533.herokuapp.com/contact', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setFormErrors({});
      } catch (error) {
        console.error('Error submitting contact form:', error);
        setFormSubmitError(true);
      }
    }
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'contact-form':
        return (
          <div className={styles.contactForm}>
            <h2 className={styles.formTitle}>Contact Form</h2>
            {formSubmitted && (
              <div className={styles.successMessage}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {formSubmitError && (
              <div className={styles.errorMessage}>
                Oops! Something went wrong. Please try again later.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.name && <span className={styles.errorText}>{formErrors.name}</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.email && <span className={styles.errorText}>{formErrors.email}</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                {formErrors.message && <span className={styles.errorText}>{formErrors.message}</span>}
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        );
      /*case 'chatbot':
        return (
          <div className={styles.chatbot}>
            <h2 className={styles.chatbotTitle}>Chatbot</h2>
            <ChatbotComponent />
          </div>
        );*/
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
          {/*<button
            className={`${styles.navButton} ${selectedOption === 'chatbot' ? styles.active : ''}`}
            onClick={() => handleOptionChange('chatbot')}
          >
            <FaComments className={styles.navIcon} />
            Chatbot
  </button>*/}
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
