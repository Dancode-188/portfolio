import React, { useState } from 'react';
import styles from './KnowledgeShareComponent.module.scss';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const KnowledgeShareComponent = () => {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: '',
    content: '',
  });

  const handleInputChange = (e) => {
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitArticle = () => {
    if (newArticle.title.trim() !== '' && newArticle.content.trim() !== '') {
      const article = {
        id: Date.now(),
        title: newArticle.title,
        content: newArticle.content,
        likes: 0,
        dislikes: 0,
      };
      setArticles([...articles, article]);
      setNewArticle({
        title: '',
        content: '',
      });
    }
  };

  const handleLike = (articleId) => {
    const updatedArticles = articles.map((article) => {
      if (article.id === articleId) {
        return { ...article, likes: article.likes + 1 };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

  const handleDislike = (articleId) => {
    const updatedArticles = articles.map((article) => {
      if (article.id === articleId) {
        return { ...article, dislikes: article.dislikes + 1 };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

  return (
    <div className={styles.knowledgeShareComponent}>
      <h2>Knowledge Sharing</h2>
      <div className={styles.newArticle}>
        <input
          type="text"
          name="title"
          placeholder="Article Title"
          value={newArticle.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Article Content"
          value={newArticle.content}
          onChange={handleInputChange}
        ></textarea>
        <button onClick={handleSubmitArticle}>Submit</button>
      </div>
      <div className={styles.articles}>
        {articles.map((article) => (
          <div key={article.id} className={styles.article}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <div className={styles.articleActions}>
              <button onClick={() => handleLike(article.id)}>
                <FaThumbsUp /> {article.likes}
              </button>
              <button onClick={() => handleDislike(article.id)}>
                <FaThumbsDown /> {article.dislikes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeShareComponent;