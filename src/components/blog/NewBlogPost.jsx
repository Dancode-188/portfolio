import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewBlogPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try {
      const response = await axios.post('https://danielback.netlify.app/.netlify/functions/blogPost', { title, content, author: 'Your Name' }, config);
      console.log('Blog post created:', response.data);
      navigate('/'); // Redirect to homepage or another page after submission
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

  if (!isAuthenticated) {
    return null; // Do not render the form if not authenticated
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
      </div>
      <button type="submit">Create Blog Post</button>
    </form>
  );
};

export default NewBlogPost;
