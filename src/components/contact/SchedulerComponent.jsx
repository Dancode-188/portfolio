import React, { useState } from 'react';
import styles from './SchedulerComponent.module.scss';
import { FaCalendarAlt } from 'react-icons/fa';

const SchedulerComponent = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleScheduleMeeting = () => {
    if (selectedDate && selectedTime) {
      // Handle scheduling logic here
      console.log(`Meeting scheduled for ${selectedDate} at ${selectedTime}`);
      setSelectedDate('');
      setSelectedTime('');
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
          <label htmlFor="date">Select Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className={styles.schedulerFormGroup}>
          <label htmlFor="time">Select Time:</label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={handleTimeChange}
          />
        </div>
        <button onClick={handleScheduleMeeting}>Schedule Meeting</button>
      </div>
    </div>
  );
};

export default SchedulerComponent;