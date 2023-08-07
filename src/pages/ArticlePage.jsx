import React from "react";
import "../components/styles/ArticlePage.css"; // assuming the CSS is defined in this file
import { Tab, Nav } from "react-bootstrap";

function ArticlePage() {
  return (
    <div className="article-body">
      <header className="article-header">header</header>
      <nav className="article-nav">
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
      <section className="article-section">
        <Tab.Content>
          <Tab.Pane eventKey="home">
            <h2>Home</h2>
            <p>Your content for the Home section goes here...</p>
          </Tab.Pane>
          <Tab.Pane eventKey="profile">
            <h2>Profile</h2>
            <p>Your content for the Profile section goes here...</p>
          </Tab.Pane>
          <Tab.Pane eventKey="contact">
            <h2>Contact</h2>
            <p>Your content for the Contact section goes here...</p>
          </Tab.Pane>
        </Tab.Content>
      </section>
      <aside className="article-aside">aside</aside>
      <footer className="article-footer">footer</footer>
    </div>
  );
}

export default ArticlePage;
