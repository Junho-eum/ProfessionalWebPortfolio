import React, { useState, useEffect, useRef } from "react";
import '../../styles/CardSliderPageFour.css'; // assuming you moved your CSS into this file
import '../../styles/Page4.scss'; // assuming you moved your CSS into this file


const CardSliderPageFourThree = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const slideCount = 2; // replace with the actual number of slides
  const slideWidth = 1200; // match the width of each slide in your CSS

  const slidesData = [
    {
      image: "kbo_corr_heatmap2.png",
      title: "Pairwise Correlation Plot",
      description:
        "In my analysis, I first used a pairwise correlation plot to identify and filter out highly correlated variables./nThis step helped simplify the dataset by removing redundant variables, such as certain batting and pitching statistics that showed strong correlations with each other. By doing so, I ensured a more focused and accurate SHAP analysis, enhancing the interpretability of our results.",
    },
    {
      image: "pitcher_interaction_summ.png",
      title: "Interaction Plot (Pitcher Features)",
      description:
        "In the SHAP plot analysis of the baseball data of KBO League, I found a significant correlation between the number of doubles and home runs a team scores, suggesting teams good at hitting doubles also tend to hit more home runs. This insight is helpful for statistical modeling, as it indicates these two variables are closely linked, and using both is redundant.\n\nSimilarly, for pitching stats, I observed that a pitcher's ERA often increases with the number of batters faced and is also affected by the number of walks and home runs allowed. This finding helps understand the relationships between these variables and guides us in choosing which ones to include in our models to avoid redundancy and improve accuracy.",
    },
    // add more slides data as needed
  ];

  const moveLeft = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide <= 0) return slideCount - 1;
      return prevSlide - 1;
    });
  };

  const moveRight = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide >= slideCount - 1) return 0;
      return prevSlide + 1;
    });
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}vw)`;
    }
  }, [currentSlide]);
  

  return (
    <div>
      <h2 className="sliderTitle">Correlation & Interaction Plots</h2>
      <div className="sliderContent" id="slider">
        <a href="#" className="control_next" onClick={moveRight}>&gt;&gt;</a>
        <a href="#" className="control_prev" onClick={moveLeft}>&lt;&lt;</a>
        <ul ref={slideRef}>
        {slidesData.map((slide, index) => (
  <li key={index}>
    <img src={slide.image} alt={slide.title} />
    <div className="slide-description">
      <h2>{slide.title}</h2>
      <p>{slide.description}</p>
    </div>
  </li>
))}

        </ul>
      </div>

    </div>
  );
};

export default CardSliderPageFourThree;
