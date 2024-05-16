import React, { useState } from 'react';
import styles from './ForumComponent.module.scss';
import { FaComments, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const ForumComponent = () => {
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState('');

  const handleNewDiscussionChange = (e) => {
    setNewDiscussion(e.target.value);
  };

  const handleSubmitDiscussion = () => {
    if (newDiscussion.trim() !== '') {
      const discussion = {
        id: Date.now(),
        text: newDiscussion,
        likes: 0,
        dislikes: 0,
      };
      setDiscussions([...discussions, discussion]);
      setNewDiscussion('');
    }
  };

  const handleLike = (discussionId) => {
    const updatedDiscussions = discussions.map((discussion) => {
      if (discussion.id === discussionId) {
        return { ...discussion, likes: discussion.likes + 1 };
      }
      return discussion;
    });
    setDiscussions(updatedDiscussions);
  };

  const handleDislike = (discussionId) => {
    const updatedDiscussions = discussions.map((discussion) => {
      if (discussion.id === discussionId) {
        return { ...discussion, dislikes: discussion.dislikes + 1 };
      }
      return discussion;
    });
    setDiscussions(updatedDiscussions);
  };

  return (
    <div className={styles.forumComponent}>
      <h2>Forum</h2>
      <div className={styles.newDiscussion}>
        <textarea
          placeholder="Start a new discussion..."
          value={newDiscussion}
          onChange={handleNewDiscussionChange}
        ></textarea>
        <button onClick={handleSubmitDiscussion}>Submit</button>
      </div>
      <div className={styles.discussions}>
        {discussions.map((discussion) => (
          <div key={discussion.id} className={styles.discussion}>
            <p>{discussion.text}</p>
            <div className={styles.discussionActions}>
              <button onClick={() => handleLike(discussion.id)}>
                <FaThumbsUp /> {discussion.likes}
              </button>
              <button onClick={() => handleDislike(discussion.id)}>
                <FaThumbsDown /> {discussion.dislikes}
              </button>
              <button>
                <FaComments /> Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumComponent;