import React, { useState } from 'react';
import axios from 'axios';
import styles from './ChatbotComponent.module.scss';
import { FaRobot, FaUser } from 'react-icons/fa';

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        text: inputMessage,
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      setIsLoading(true);

      try {
        // Make API call to chatbot endpoint
        const response = await axios.post('/api/chatbot', { message: inputMessage });
        const botResponse = {
          text: response.data.message,
          isUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      } catch (error) {
        console.error('Error communicating with chatbot:', error);
        setError('Oops! Something went wrong. Please try again.');
      }

      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <div className={styles.chatbotComponent}>
      <div className={styles.chatbotHeader}>
        <h3>
          <FaRobot className={styles.chatbotIcon} />
          Chatbot
        </h3>
        <button onClick={handleClearChat}>Clear Chat</button>
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
        {isLoading && <div className={styles.loadingIndicator}>Typing...</div>}
        {error && <div className={styles.errorMessage}>{error}</div>}
      </div>
      <div className={styles.chatbotInput}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotComponent;