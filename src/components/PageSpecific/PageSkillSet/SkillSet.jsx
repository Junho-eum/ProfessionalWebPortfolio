import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import "../../styles/SkillSet.scss";

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];
const TAGS = [
  "ReactJS",
  "Web_Development",
  "Data_Visualization",
  "LSTM",
  "AI_Modeling",
  "Image_Segmentation",
  "R",
  "Cloud_Computing",
  "GCP",
  "Java",
  "Statistics",
  "Convolutional Networks",
  "Natural Language Processing",
  "Web Scrapping",
  "Transformer Architecture"
];
const DURATION = 15000;
const ROWS = 9;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag">
    <span>#</span> {text}
  </div>
);

function Skillsets(){
    return (
      <div className="app skillsets-container">
        <div className="app">
          <header>
            <h1>Junho's Skillsets</h1>
            <p>My Skills that I've craved and am enthusiastic about</p>
          </header>
          <div className="tag-list">
            {[...new Array(ROWS)].map((_, i) => (
              <InfiniteLoopSlider
                key={i}
                duration={random(DURATION - 5000, DURATION + 5000)}
                reverse={i % 2}
              >
                {shuffle(TAGS)
                  .slice(0, TAGS_PER_ROW)
                  .map((tag) => (
                    <Tag text={tag} key={tag} />
                  ))}
              </InfiniteLoopSlider>
            ))}
            <div className="fade" />
          </div>
        </div>
      </div>
    );
};


export default Skillsets;
