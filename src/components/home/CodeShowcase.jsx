// src/components/home/CodeShowcase.jsx

import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import styles from './CodeShowcase.module.scss';

const CodeShowcase = () => {
  const [code, setCode] = useState('');
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    const initialCode = `
      // Welcome to CYBER.DEV's Code Showcase!
      // This interactive coding environment allows you to
      // explore my coding skills and experience firsthand.

      // Let's kick things off with a simple function:

      function greetUser(name) {
        const greeting = \`Hello, \${name}! Welcome to my cyberpunk world.\`;
        return greeting;
      }

      const userGreeting = greetUser('Visitor');
      console.log(userGreeting);
    `;

    setCode(initialCode);
    setEditorLoaded(true);
  }, []);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const editorOptions = {
    selectOnLineNumbers: true,
    renderSideBySideEditingControl: true,
    glyphMargin: true,
    folding: true,
    lineNumbersMinChars: 3,
    fontSize: 16,
    scrollBeyondLastLine: false,
    automaticLayout: true,
    readOnly: true,
  };

  return (
    <div className={styles.codeShowcase}>
      <div className={styles.editorContainer}>
        {editorLoaded && (
          <MonacoEditor
            language="javascript"
            theme="vs-dark"
            value={code}
            options={editorOptions}
            onChange={handleCodeChange}
            editorDidMount={(editor) => {
              editor.layout();
            }}
          />
        )}
      </div>
      <div className={styles.description}>
        <p>
          This code showcase demonstrates a simple function that greets the user with a personalized message.
          Feel free to explore the code and see how it works!
        </p>
      </div>
    </div>
  );
};

export default CodeShowcase;