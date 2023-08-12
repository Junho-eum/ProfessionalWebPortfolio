import React, { useState, useRef } from "react";
import "../../styles/VerticalMenu.css";

function VerticalMenu({ onSectionChange }) {
const [activeItem, setActiveItem] = useState(0);
  const markerRef = useRef(null);
  const menuItems = ["CV", "RESEARCH", "ARTICLES", "SKILLS&PASSION"];

  const toggleActive = (index, e) => {
    e.preventDefault();
    setActiveItem(index);
    const offset = e.target.parentElement.offsetTop;
    markerRef.current.style.transform = `translateY(${offset}px)`;
    onSectionChange(index);
  };

  return (
    <div className="article-vertical-menu-wrapper">
      <ul className="article-vertical-menu">
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
        <i className="active-marker-article" ref={markerRef}></i>
      </ul>
    </div>
  );
}

export default VerticalMenu;
