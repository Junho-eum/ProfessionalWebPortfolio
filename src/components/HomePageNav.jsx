import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./styles/HomePageNav.css";


function HomePageNav() {
  return (
    <ul className="NavulList">
      <li className="NavList">
        <a
          href="https://www.linkedin.com/in/junho-eum-239409187/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
      </li>
      <li className="NavList">
        <Link to="/skillsets">Skillsets</Link>
      </li>
      <li className="NavList">
        <a
          href="https://github.com/Junho-eum/Baseball_Analytics/blob/main/KBO_analytics_draft3.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </li>
    </ul>
  );
}

export default HomePageNav;
