import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { EditorState, convertToRaw, Modifier, AtomicBlockUtils, SelectionState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './NewBlogPost.scss';

const NewBlogPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(EditorState.createEmpty());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);
  const linkInputRef = useRef(null);
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
      const response = await axios.post('https://danielback-cc3b9627b533.herokuapp.com/blogPost', { title, content: contentRaw, author: 'Daniel Bitengo' }, config);
      console.log('Blog post created:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

  const handleLinkClick = () => {
    setShowLinkInput(true);
    setTimeout(() => {
      linkInputRef.current.focus();
    }, 0);
  };

  const handleLinkInputChange = (evt) => {
    setLinkUrl(evt.target.value);
  };

  const handleLinkInputBlur = () => {
    setShowLinkInput(false);
    if (linkUrl) {
      const contentState = content.getCurrentContent();
      const contentStateWithLink = contentState.createEntity('LINK', 'MUTABLE', { url: linkUrl });
      const entityKey = contentStateWithLink.getLastCreatedEntityKey();
      const newEditorState = EditorState.set(content, { currentContent: contentStateWithLink });
      const newContentState = Modifier.applyEntity(
        newEditorState.getCurrentContent(),
        newEditorState.getSelection(),
        entityKey
      );
      const finalEditorState = EditorState.push(newEditorState, newContentState, 'apply-entity');
      setContent(finalEditorState);
      setLinkUrl('');
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const contentState = content.getCurrentContent();
      const contentStateWithImage = contentState.createEntity('IMAGE', 'IMMUTABLE', { src: event.target.result });
      const entityKey = contentStateWithImage.getLastCreatedEntityKey();
      const newEditorState = AtomicBlockUtils.insertAtomicBlock(content, entityKey, ' ');
      setContent(newEditorState);
    };

    reader.readAsDataURL(file);
  };

  if (!isAuthenticated) {
    return null;
  }

  /*const handlePastedText = (text, html, editorState) => {
    if (html) {
      const contentState = Modifier.insertText(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        html
      );
      const newEditorState = EditorState.push(editorState, contentState, 'insert-fragment');
      setContent(newEditorState);
      return 'handled';
    }
    return 'not-handled';
  };*/

  const handlePastedText = (text, html, editorState) => {
    if (html) {
      // Sanitize the HTML
      const cleanHtml = DOMPurify.sanitize(html);
      // Convert sanitized HTML to plain text
      const parser = new DOMParser();
      const doc = parser.parseFromString(cleanHtml, 'text/html');
      const plainText = doc.body.textContent || "";

      // Get the current selection
      const selection = editorState.getSelection();
      // Create a content state with the text inserted at the current selection
      const contentState = Modifier.replaceText(
        editorState.getCurrentContent(),
        selection,
        plainText
      );

      // Create a new editor state with the content state
      let newEditorState = EditorState.push(editorState, contentState, 'insert-characters');

      // Move the selection to the end of the inserted text
      const blockMap = contentState.getBlockMap();
      const key = blockMap.last().getKey();
      const length = blockMap.last().getLength();
      const newSelection = new SelectionState({
        anchorKey: key,
        anchorOffset: length,
        focusKey: key,
        focusOffset: length,
      });

      // Force the new selection
      newEditorState = EditorState.forceSelection(newEditorState, newSelection);

      setContent(newEditorState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <div className="new-blog-post">
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <Editor
            editorState={content}
            onEditorStateChange={setContent}
            handlePastedText={handlePastedText}
            blockRendererFn={(block) => {
              if (block.getType() === 'atomic') {
                const entityKey = block.getEntityAt(0);
                const contentState = content.getCurrentContent();
                const entity = contentState.getEntity(entityKey);
                const type = entity.getType();
                if (type === 'IMAGE') {
                  const { src } = entity.getData();
                  return {
                    component: (props) => <img src={src} alt="Uploaded" />,
                    editable: false,
                  };
                }
              }
              return null;
            }}
            toolbar={{
              options: ['inline', 'blockType', 'link', 'colorPicker', 'list', 'textAlign', 'history'],
              inline: {
                inDropdown: false,
                options: ['bold', 'italic', 'underline', 'strikethrough'],
              },
              link: {
                inDropdown: false,
                options: ['link', 'unlink'],
                defaultTargetOption: '_blank',
                inputPlaceholder: 'Enter URL',
                showOpenOptionOnHover: true,
                linkCallback: {
                  showOpenOptionOnHover: true,
                  defaultTargetOption: '_blank',
                },
              },
            }}
          />
        </div>
        <button type="button" onClick={handleLinkClick}>Add Link</button>
        {showLinkInput && (
          <div>
            <input
              type="text"
              ref={linkInputRef}
              value={linkUrl}
              onChange={handleLinkInputChange}
              onBlur={handleLinkInputBlur}
              placeholder="Enter link URL"
            />
          </div>
        )}
        <button type="button" onClick={() => setShowImageInput(true)}>Add Image</button>
        {showImageInput && (
          <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
        )}
        <button type="submit" className="btn-submit">Create Blog Post</button>
      </form>
    </div>
  );
};

export default NewBlogPost;