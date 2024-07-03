// src/components/blog/BlogPage.jsx

import React, { useState, useEffect } from "react";
import styles from "./BlogPage.module.scss";
import axios from "axios";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get("https://danielback-cc3b9627b533.herokuapp.com/blogPost");
      setBlogPosts(response.data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  return (
    <div className={styles.blogPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>My Blog</h1>
      </header>
      <main className={styles.content}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{post.title}</h3>
            <p className={styles.cardMeta}>
              Published on <span className={styles.cardDate}>{post.publishedDate}</span> by{" "}
              <span className={styles.cardAuthor}>{post.author}</span>
            </p>
            <div className={styles.cardContent}>{post.content}</div>
            <a href={`/blog/${post.id}`} className={styles.cardButton}>
              Read More
            </a>
          </div>
        ))}
      </main>
    </div>
  );
};

export default BlogPage;