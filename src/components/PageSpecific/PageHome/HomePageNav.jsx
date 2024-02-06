import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../../styles/HomePageNav.css";


function HomePageNav() {
  return (
    <ul className="NavulList">
      <li className="NavList">
        <a
          className="nav-link"
          href="https://github.com/Junho-eum"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
      </li>
      <li className="NavList">
        <Link className="nav-link" to="/skillsets">
          Skillsets
        </Link>
      </li>
      <li className="NavList">
        <a
          className="nav-link"
          href="https://github.com/Junho-eum/MultiLeagueBaseballAnalytics/blob/main/STRATEGIC%20DIVERGENCE%20IN%20GLOBAL%20BASEBALL.pdf"
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
