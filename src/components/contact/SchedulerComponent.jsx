import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './SchedulerComponent.module.scss';
import { FaCalendarAlt } from 'react-icons/fa';
import ReactGA from 'react-ga';

const SchedulerComponent = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('30');
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleDurationChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  const handleScheduleMeeting = () => {
    if (name && email && phone && selectedDate && selectedTime) {
      const currentDate = new Date();
      const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);

      if (selectedDateTime <= currentDate) {
        setFormError('Please select a future date and time.');
        return;
      }

      const newMeeting = {
        name,
        email,
        phone,
        date: selectedDate,
        time: selectedTime,
        duration: selectedDuration,
      };

      axios.post(process.env.REACT_APP_BACKEND_URL_MEET, newMeeting)
        .then((response) => {
          setSuccessMessage('Meeting successfully scheduled!');
          setName('');
          setEmail('');
          setPhone('');
          setSelectedDate('');
          setSelectedTime('');
          setSelectedDuration('30');
          setFormError('');
        })
        .catch((error) => {
          console.error('Error scheduling meeting:', error);
          setFormError('Failed to schedule meeting. Please try again.');
        });
    } else {
      setFormError('Please fill in all the required fields.');
    }
  };

  return (
    <div className={styles.schedulerComponent}>
      <div className={styles.schedulerHeader}>
        <h3>
          <FaCalendarAlt className={styles.schedulerIcon} />
          Schedule a Meeting
        </h3>
      </div>
      <div className={styles.schedulerForm}>
      <div className={styles.schedulerFormGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div className={styles.schedulerFormGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className={styles.schedulerFormGroup}>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} required />
        </div>
        <div className={styles.schedulerFormGroup}>
          <label htmlFor="date">Select Date:</label>
          <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
        </div>
        <div className={styles.schedulerFormGroup}>
          <label htmlFor="time">Select Time:</label>
          <input type="time" id="time" value={selectedTime} onChange={handleTimeChange} />
        </div>
        <div className={styles.schedulerFormGroup}>
          <label htmlFor="duration">Select Duration:</label>
          <select id="duration" value={selectedDuration} onChange={handleDurationChange}>
            <option value="30">30 minutes</option>
            <option value="60">60 minutes</option>
            <option value="90">90 minutes</option>
          </select>
        </div>
        {formError && <div className={styles.formError}>{formError}</div>}
        {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
        <button onClick={handleScheduleMeeting}>Schedule Meeting</button>
      </div>
    </div>
  );
};

export default SchedulerComponent;
