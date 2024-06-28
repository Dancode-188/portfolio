import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './NewBlogPost.scss';

const NewBlogPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(EditorState.createEmpty());
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
      const contentRaw = JSON.stringify(convertToRaw(content.getCurrentContent()));
      const response = await axios.post('https://danielback.netlify.app/.netlify/functions/blogPost', { title, content: contentRaw, author: 'Your Name' }, config);
      console.log('Blog post created:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="new-blog-post">
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <Editor
            editorState={content}
            onEditorStateChange={setContent}
            toolbar={{
              options: ['inline', 'blockType', 'colorPicker', 'list', 'textAlign', 'history'],
              inline: {
                inDropdown: false,
                options: ['bold', 'italic', 'underline', 'strikethrough'],
                bold: { className: 'custom-inline-option' },
                italic: { className: 'custom-inline-option' },
                underline: { className: 'custom-inline-option' },
                strikethrough: { className: 'custom-inline-option' },
              },
              colorPicker: {
                className: 'custom-color-picker',
                component: ({ onChange }) => (
                  <input
                    type="color"
                    className="custom-color-picker"
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                ),
              },
            }}
          />
        </div>
        <button type="submit" className="btn-submit">Create Blog Post</button>
      </form>
    </div>
  );
};

export default NewBlogPost;
