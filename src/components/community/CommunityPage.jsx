// src/components/community/CommunityPage.jsx

import React, { useState } from 'react';
import styles from './CommunityPage.module.scss';
import { FaComments, FaUsers, FaShare } from 'react-icons/fa';
import ForumComponent from './ForumComponent';
import ChatRoomComponent from './ChatRoomComponent';
import KnowledgeShareComponent from './KnowledgeShareComponent';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('forum');

  return (
    <div className={styles.communityPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.glitch} data-text="Community">
            Community
          </span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.glitch} data-text="Connect, Collaborate, and Learn">
            Connect, Collaborate, and Learn
          </span>
        </p>
      </div>

      <div className={styles.tabContainer}>
        <div
          className={`${styles.tabItem} ${activeTab === 'forum' ? styles.active : ''}`}
          onClick={() => setActiveTab('forum')}
        >
          <FaComments className={styles.tabIcon} />
          <span className={styles.tabLabel}>Forums</span>
        </div>
        <div
          className={`${styles.tabItem} ${activeTab === 'chatroom' ? styles.active : ''}`}
          onClick={() => setActiveTab('chatroom')}
        >
          <FaUsers className={styles.tabIcon} />
          <span className={styles.tabLabel}>Chat Rooms</span>
        </div>
        <div
          className={`${styles.tabItem} ${activeTab === 'knowledge' ? styles.active : ''}`}
          onClick={() => setActiveTab('knowledge')}
        >
          <FaShare className={styles.tabIcon} />
          <span className={styles.tabLabel}>Knowledge Sharing</span>
        </div>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'forum' && (
          <div className={styles.tabPane}>
            <ForumComponent />
          </div>
        )}
        {activeTab === 'chatroom' && (
          <div className={styles.tabPane}>
            <ChatRoomComponent />
          </div>
        )}
        {activeTab === 'knowledge' && (
          <div className={styles.tabPane}>
            <KnowledgeShareComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityPage;
