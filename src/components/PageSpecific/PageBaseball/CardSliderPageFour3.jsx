import React, { useState, useEffect, useRef } from "react";
import '../../styles/CardSliderPageFour.css'; // assuming you moved your CSS into this file
import '../../styles/Page4.scss'; // assuming you moved your CSS into this file


const CardSliderPageFourThree = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const slideCount = 3; // replace with the actual number of slides
  const slideWidth = 1200; // match the width of each slide in your CSS

  const slidesData = [
    { image: 'batter_interaction_summ.png', title: 'Interaction Plot (Batter Features)', description: ' A comprehensive summary of these batting feature interactions is shown in the SHAP plot. Examining batting statistics I found a significant relationship between homeruns_scored and doubles with a coefficient of 032. This suggests teams skilled in hitting doubles also tend to score more home runs indicating a potential synergy between these hitting strategies.' },
    { image: 'pitcher_interaction_summ.png', title: 'Interaction Plot (Pitcher Features)', description: 'In the pitching statistics analysis significant interactions were identified among ERA Earned Run Average batters faced hits_x home runs allowed and walks The analysis revealed that a pitchers ERA generally increases as they face more batters likely due to the rise in scoring opportunities Also there seems to be a connection between allowing more walks and conceding more home runs emphasizing the importance of pitcher control These interactions and their impacts on the game outcomes can be seen in the SHAP interaction plots'},
    { image: 'Summary_plot_homeruns_ERA_interaction.png', title: 'ERA, home_runs_allowed Interaction Plot ', description: 'A deeper analysis into homeruns allowed and ERA revealed an intriguing correlation. When the ERA is low theres a significant interaction with low homerun counts. However when the ERA increases the number of homeruns allowed also rises particularly when the ERA is greater than 4.5. Essentially this means that teams that concede higher scores (greater than 4.5 ERA) typically allow more homeruns.' },
  
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
      <h2 className="sliderTitle">Correlation Plots</h2>
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
