import React, { useState } from 'react';
import styles from './ChatRoomComponent.module.scss';
import { FaUser } from 'react-icons/fa';

const ChatRoomComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        id: Date.now(),
        text: newMessage,
        user: 'John Doe', // Replace with actual user data
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className={styles.chatRoomComponent}>
      <h2>Chat Room</h2>
      <div className={styles.chatMessages}>
        {messages.map((message) => (
          <div key={message.id} className={styles.message}>
            <span className={styles.user}>
              <FaUser /> {message.user}
            </span>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.chatInput}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleNewMessageChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoomComponent;