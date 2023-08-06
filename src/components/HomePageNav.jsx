import React from "react";
import "./styles/HomePageNav.css";

function HomePageNav() {
    return (
        <ul className="NavulList">
            <li className="NavList">About</li>
            <li className="NavList">
                <a href="https://github.com/Junho-eum/Baseball_Analytics/blob/main/KBO_analytics_draft3.pdf" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            </li>
        </ul>
    );
}

export default HomePageNav;
