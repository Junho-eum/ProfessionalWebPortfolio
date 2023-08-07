import React, { useState, useRef } from "react";
import "./styles/VerticalMenu.css";

function VerticalMenu() {
  const [activeItem, setActiveItem] = useState(0);
  const markerRef = useRef(null);
  const menuItems = [
    "This is the Day",
    "Hello World",
    "Just Don't Forget",
    "Us vs. Them",
    "Flavor of the Month",
    "Things We're Loving",
  ];

  const toggleActive = (index, e) => {
    e.preventDefault();
    setActiveItem(index);
    const offset = e.target.parentElement.offsetTop;
    markerRef.current.style.transform = `translateY(${offset}px)`;
  };

  return (
    <div className="article-vertical-menu-wrapper">
      <ul className="article-vertical-menu ul--reset-article">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`article-vertical-menu-item ${
              index === activeItem ? "is-active-article" : ""
            }`}
          >
            <a
              href="#"
              className="link--inverse-menu-article"
              onClick={(e) => toggleActive(index, e)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <i className="active-marker-article" ref={markerRef}></i>
    </div>
  );
}

export default VerticalMenu;
