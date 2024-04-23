// src/components/home/SkillsAssessment.jsx

import React, { useState } from 'react';
import styles from './SkillsAssessment.module.scss';
import { questions } from './questions';

const SkillsAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className={styles.skillsAssessment}>
      {showResult ? (
        <div className={styles.resultContainer}>
          <h2>
            <span className={styles.glitch} data-text="Result">
              Result
            </span>
          </h2>
          <p>
            <span className={styles.glitch} data-text={`Your score: ${score}/${questions.length}`}>
              Your score: {score}/{questions.length}
            </span>
          </p>
          <button className={styles.restartButton} onClick={restartQuiz}>
            <span className={styles.glitch} data-text="Restart">
              Restart
            </span>
          </button>
        </div>
      ) : (
        <div className={styles.questionContainer}>
          <h2>
            <span className={styles.glitch} data-text={`Question ${currentQuestion + 1}`}>
              Question {currentQuestion + 1}
            </span>
          </h2>
          <p className={styles.questionText}>
            <span className={styles.glitch} data-text={questions[currentQuestion].question}>
              {questions[currentQuestion].question}
            </span>
          </p>
          <div className={styles.answerOptions}>
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                className={styles.answerButton}
                onClick={() => handleAnswer(answer.isCorrect)}
              >
                <span className={styles.glitch} data-text={answer.text}>
                  {answer.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsAssessment;