import React, { useState } from 'react';
import styles from './ChatbotComponent.module.scss';
import { FaRobot, FaUser } from 'react-icons/fa';

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        text: inputMessage,
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate chatbot response after a short delay
      setTimeout(() => {
        const botResponse = {
          text: 'This is a sample chatbot response.',
          isUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className={styles.chatbotComponent}>
      <div className={styles.chatbotHeader}>
        <h3>
          <FaRobot className={styles.chatbotIcon} />
          Chatbot
        </h3>
      </div>
      <div className={styles.chatbotMessages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.chatbotMessage} ${
              message.isUser ? styles.userMessage : styles.botMessage
            }`}
          >
            {message.isUser ? (
              <FaUser className={styles.messageIcon} />
            ) : (
              <FaRobot className={styles.messageIcon} />
            )}
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className={styles.chatbotInput}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatbotComponent;