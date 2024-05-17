// src/components/blog/BlogPage.jsx

import React, { useState, useEffect } from "react";
import styles from "./BlogPage.module.scss";
import { FaCode, FaQuestionCircle, FaLightbulb } from "react-icons/fa";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("challenges");
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [userPoints, setUserPoints] = useState(0);
  const [userBadges, setUserBadges] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API or database
    const fetchCompletedChallenges = () => {
      // Replace with your own logic to fetch completed challenges from an API or database
      const completedChallenges = ["challenge1", "challenge2"];
      setCompletedChallenges(completedChallenges);
    };

    const fetchUserPoints = () => {
      // Replace with your own logic to fetch user points from an API or database
      const userPoints = 150;
      setUserPoints(userPoints);
    };

    const fetchUserBadges = () => {
      // Replace with your own logic to fetch user badges from an API or database
      const userBadges = ["badge1", "badge2"];
      setUserBadges(userBadges);
    };

    fetchCompletedChallenges();
    fetchUserPoints();
    fetchUserBadges();
  }, []);

  const challenges = [
    {
      id: "challenge1",
      title: "Palindrome Checker",
      description: "Write a function that checks if a given string is a palindrome.",
      difficulty: "Easy",
    },
    {
      id: "challenge2",
      title: "Fibonacci Sequence",
      description: "Implement a function to generate the Fibonacci sequence up to a given number.",
      difficulty: "Medium",
    },
    // Add more challenges...
  ];

  const tutorials = [
    {
      id: "tutorial1",
      title: "Introduction to React",
      description: "Learn the basics of React and build your first components.",
      duration: "1 hour",
    },
    {
      id: "tutorial2",
      title: "JavaScript ES6 Features",
      description: "Explore the latest features introduced in JavaScript ES6.",
      duration: "30 minutes",
    },
    // Add more tutorials...
  ];

  const quizzes = [
    {
      id: "quiz1",
      title: "JavaScript Quiz",
      description: "Test your knowledge of JavaScript fundamentals.",
      questions: 10,
    },
    {
      id: "quiz2",
      title: "React Quiz",
      description: "Assess your understanding of React concepts.",
      questions: 15,
    },
    // Add more quizzes...
  ];

  const renderContent = () => {
    switch (selectedCategory) {
      case "challenges":
        return challenges.map((challenge) => (
          <div key={challenge.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{challenge.title}</h3>
            <p className={styles.cardDescription}>{challenge.description}</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardDifficulty}>{challenge.difficulty}</span>
              {completedChallenges.includes(challenge.id) ? (
                <span className={styles.cardCompleted}>Completed</span>
              ) : (
                <button className={styles.cardButton}>Start Challenge</button>
              )}
            </div>
          </div>
        ));
      case "tutorials":
        return tutorials.map((tutorial) => (
          <div key={tutorial.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{tutorial.title}</h3>
            <p className={styles.cardDescription}>{tutorial.description}</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardDuration}>{tutorial.duration}</span>
              <button className={styles.cardButton}>Start Tutorial</button>
            </div>
          </div>
        ));
      case "quizzes":
        return quizzes.map((quiz) => (
          <div key={quiz.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{quiz.title}</h3>
            <p className={styles.cardDescription}>{quiz.description}</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardQuestions}>{quiz.questions} Questions</span>
              <button className={styles.cardButton}>Start Quiz</button>
            </div>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className={styles.blogPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.glitch} data-text="Interactive Learning Platform">
            Interactive Learning Platform
          </span>
        </h1>
        <div className={styles.userStats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{userPoints}</span>
            <span className={styles.statLabel}>Points</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{userBadges.length}</span>
            <span className={styles.statLabel}>Badges</span>
          </div>
        </div>
      </header>
      <nav className={styles.nav}>
        <button
          className={`${styles.navButton} ${selectedCategory === "challenges" ? styles.active : ""}`}
          onClick={() => setSelectedCategory("challenges")}
        >
          <FaCode className={styles.navIcon} />
          Challenges
        </button>
        <button
          className={`${styles.navButton} ${selectedCategory === "tutorials" ? styles.active : ""}`}
          onClick={() => setSelectedCategory("tutorials")}
        >
          <FaLightbulb className={styles.navIcon} />
          Tutorials
        </button>
        <button
          className={`${styles.navButton} ${selectedCategory === "quizzes" ? styles.active : ""}`}
          onClick={() => setSelectedCategory("quizzes")}
        >
          <FaQuestionCircle className={styles.navIcon} />
          Quizzes
        </button>
      </nav>
      <main className={styles.content}>{renderContent()}</main>
    </div>
  );
};

export default BlogPage;