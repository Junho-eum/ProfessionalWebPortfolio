import React from "react";
import "../../styles/Cards.scss";
import KBOvsMLB from "../../../assets/KBOvsMLB.png";
import heap from "../../../assets/heap.png";
import dentalClinic from "../../../assets/dentalClinic.png";
import { Link } from "react-router-dom";

const cardsData = [
  {
    to: "/Page2",
    imgSrc: KBOvsMLB,
    title: "Baseball Across Cultures",
    date: "6 Oct 2017",
    tags: ["HTML"],
  },
  {
    href: "https://github.com/jpa203/Junho_JP_Heap_Project/blob/main/README.md",
    imgSrc: heap,
    title: "Heap Doc Clustering Algorithm",
    tags: ["HTML"],
  },
  {
    href: "https://junho-eum.github.io/dental_map.html",
    imgSrc: dentalClinic,
    title: "Clinic Location Finder",
    tags: ["HTML"],
  },
  {
    href: "https://eqwebapp1.netlify.app/",
    imgSrc: "/EQWave.png",
    title: "Pop to K-Pop EQ Matching",
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
  <div className="card-container">
    <section className="cards-wrapper">
      {cardsData.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
    </section>
  </div>
);

export default Cards;
