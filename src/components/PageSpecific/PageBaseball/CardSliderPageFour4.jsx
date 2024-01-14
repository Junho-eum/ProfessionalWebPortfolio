import React, { useState, useEffect, useRef } from "react";
import '../../styles/CardSliderPageFour.css'; // assuming you moved your CSS into this file

const CardSliderPageFourFour = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const slideCount = 2; // replace with the actual number of slides
  const slideWidth = 1200; // match the width of each slide in your CSS

  const slidesData = [
    {
      image: "/heatmap1.png",
      title: "Heatmap representation of KBO PCs",
      description:
        "I dissect notable variables, focusing on what the different loadings in various components imply.\nFirst Component 2 (0.339) Teams in this component exhibit high positive loadings for the WHIP variable, indicating a less effective pitching strategy characterized by a high number of walks and hits per innings pitched.\n A high WHIP value signifies that the pitchers allow too many batters to reach base, thus reflecting a potential area of concern and a possible indicator of poor pitching performance.\nStrategies for improvement include enhancing pitch selection, improving control to reduce walks, or working on defensive strategies to reduce hits allowed.\n\nOn the other hand, Component 1 (-0.164) represents teams maintaining a strong pitching performance, as illustrated by the negative loading on the WHIP variable.\nThese teams have successfully controlled the number of pitched walks and hit per inning, achieving a lower WHIP value and, consequently, a stronger defense strategy.\nTeams in these clusters are characterized by skilled pitchers who can maintain a low WHIP, possibly resulting in fewer scoring opportunities for opposing teams.\nTeams focus on nurturing pitcher talent and adopting strategies that favor a low WHIP to continue this trend. ",
    },
    {
      image: "/heatmap2.png",
      title: "Heatmap representation of MLB PCs",
      description:
        "Major League teams associated with component 3 (-0.299) reflect high negative loadings for the 'Caught Stealing' variable.\n This indicates that these teams have fewer instances of their players being caught while attempting to steal bases. Such teams either have exceptional base runners, adopt a conservative base-stealing approach, or both.\n\nContrarily, teams categorized within component 5 exhibit high positive loadings for the 'Caught Stealing' variable.\nThese teams experience a relatively higher number of instances where their base runners are caught stealing bases. While attempting to steal bases can demonstrate an aggressive offensive strategy, being frequently caught can impede momentum and waste scoring opportunities. It is indicative of either poor base running decisions or exceptional defense by the opposing team. ",
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
      <div id="slider">
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

export default CardSliderPageFourFour;
