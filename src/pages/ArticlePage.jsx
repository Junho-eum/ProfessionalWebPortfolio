import React, { useState, useRef } from "react";
import VerticalMenu from "../components/VerticalMenu"; // Adjust the path as needed
import "../components/styles/ArticlePage.css";
import FilterTab from "../components/FilterTab";

function ArticlePage() {
  const [activeSection, setActiveSection] = useState(0);
  const backgroundColors = ["white", "white", "white"]; // Define the background colors

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
        {activeSection === 0 && (
          <div
            className="article-content"
            style={{ backgroundColor: backgroundColors[0] }}
          ></div>
        )}
        {activeSection === 1 && (
          <div
            className="article-content"
            style={{ backgroundColor: backgroundColors[1] }}
          ></div>
        )}
        {activeSection === 2 && (
          <div
            className="article-content"
            style={{ backgroundColor: backgroundColors[2] }}
          >
            <FilterTab />
          </div>
        )}
        {/* More content as needed */}
      </section>
      <footer className="article-footer">footer</footer>
    </div>
  );
}


export default ArticlePage;
