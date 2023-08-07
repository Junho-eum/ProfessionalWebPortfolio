import React, { useState, useRef } from "react";
import VerticalMenu from "../components/VerticalMenu"; // Adjust the path as needed
import "../components/styles/ArticlePage.css";

function ArticlePage() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const handleSectionChange = (index) => {
    setActiveSection(index);
  };

  return (
    <div className="article-body">
      <header className="article-header">RESEARCH & NOTES</header>
      <nav className="article-nav">
        <VerticalMenu onSectionChange={handleSectionChange} />
      </nav>
      <section className="article-section">
        <div
          ref={sectionRefs[0]}
          style={
            activeSection === 0
              ? { backgroundColor: "red", fontSize: "larger" }
              : { backgroundColor: "red" }
          }
        >
          Content for section 1 (CV)
        </div>
        <div
          ref={sectionRefs[1]}
          style={
            activeSection === 1
              ? { backgroundColor: "orange", fontSize: "larger" }
              : { backgroundColor: "orange" }
          }
        >
          Content for section 2 (RESEARCH)
        </div>
        <div
          ref={sectionRefs[2]}
          style={
            activeSection === 2
              ? { backgroundColor: "yellow", fontSize: "larger" }
              : { backgroundColor: "yellow" }
          }
        >
          Content for section 3 (ARTICLES)
        </div>
        {/* More content as needed */}
      </section>
      
      <footer className="article-footer">footer</footer>
    </div>
  );
}

export default ArticlePage;
