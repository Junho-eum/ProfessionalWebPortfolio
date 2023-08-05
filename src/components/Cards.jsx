import React from "react";
import "./styles/Cards.css";
import Page2 from "../pages/PageTwo.jsx";

import { Link } from "react-router-dom";
const cardsData = [
  {
    to: "/Page2",
    imgSrc: "../assets/KBOvsMLB.png",  // removed "src/"
    title: "Baseball Across Cultures",
    date: "6 Oct 2017",
    tags: ["HTML"],
  },
  {
    href: "https://github.com/jpa203/Junho_JP_Heap_Project/blob/main/README.md",
    imgSrc: "../assets/heap.png",  // removed "src/"
    title: "Heap Doc Clustering Algorithm",
    tags: ["HTML"],
  },
  {
    href: "https://junho-eum.github.io/dental_map.html",
    imgSrc: "../assets/dentalClinic.png",  // removed "src/"
    title: "Clinic Location Finder",
    tags: ["HTML"],
  },
];



const Card = ({ num, to, href, imgSrc, title, description, date, tags }) => {
  const isExternal = href !== undefined;
  const linkProps = isExternal ? {href, target: "_blank", rel: "noopener noreferrer"} : {to};

  const LinkTag = isExternal ? "a" : Link;

  return (
    <div className="card-grid-space">
      <div className="num">{num}</div>
      <LinkTag
        className="card"
        style={{ backgroundImage: `url(${imgSrc})` }}
        {...linkProps}
      >
        <div>
          <h1>{title}</h1>
          <div className="tags">
            {tags.map((tag, index) => (
              <div className="tag" key={index}></div>
            ))}
          </div>
        </div>
      </LinkTag>
    </div>
  );
};


const Cards = () => (
  <section className="cards-wrapper">
    {cardsData.map((cardData, index) => (
      <Card key={index} {...cardData} />
    ))}
  </section>
);

export default Cards;
