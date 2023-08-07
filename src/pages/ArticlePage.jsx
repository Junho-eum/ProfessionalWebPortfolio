import React from "react";
import "../components/styles/ArticlePage.css"; // assuming the CSS is defined in this file

function ArticlePage() {
  return (
    <div className="article-body">
      <header className="article-header">header</header>
      <nav className="article-nav">nav</nav>
      <section className="article-section">section</section>
      <aside className="article-aside">aside</aside>
      <footer className="article-footer">footer</footer>
    </div>
  );
}

export default ArticlePage;
