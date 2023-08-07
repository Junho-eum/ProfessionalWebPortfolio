import React from "react";
import VerticalMenu from "../components/VerticalMenu"; // Adjust the path as needed
import "../components/styles/ArticlePage.css";

function ArticlePage() {
  return (
    <div className="article-body">
      <header className="article-header">header</header>
      <nav className="article-nav">
        <VerticalMenu />
      </nav>
      <section className="article-section">section</section>
      <aside className="article-aside">aside</aside>
      <footer className="article-footer">footer</footer>
    </div>
  );
}

export default ArticlePage;
