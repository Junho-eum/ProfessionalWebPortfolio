import React, { useState, useEffect, useRef } from "react";
import '../../styles/CardSliderPageFour.css'; // assuming you moved your CSS into this file

const CardSliderPageFourFour = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const slideCount = 4; // replace with the actual number of slides
  const slideWidth = 1200; // match the width of each slide in your CSS

  const slidesData = [
    { image: '/PCA_screeplot.png', title: 'Scree Plot', description: 'In my Principal Component Analysis (PCA), I used a scree plot and cumulative explained variance to determine the number of components to retain. I chose six components, capturing approximately 92.3% of the dataset variation. This effectively distilled the crucial information from 16 variables into just six, making the subsequent Gaussian Mixture Model (GMM) clustering more manageable and insightful.' },
    { image: 'Biplot_pca_batting.png', title: 'Bi Plot', description: 'Through a biplot analysis, I found that team metrics such as OBP, SLG, and OPS significantly enhance overall offensive performance. However, higher strikeouts often imply less offensive success. Interestingly, while sacrifice hits can negatively impact overall team statistics, they may also indicate superior plate discipline and speed. This study helps understand how individual team metrics influence winning probabilities in the KBO league.'},
    { image: 'gmm_pcaLoadings.png', title: 'GMM Clustering', description: 'Ive categorized teams into unique clusters with GMM, represented visually through histograms which shows the distribution of principal components across clusters.' },
    { image: 'pca_scatterplot_batter.png', title: 'Scatter Plot of GMM clusters', description: ' Identified distinctive clusters as : \n1. Offensive Powerhouses 2. Disciplined and Fast Teams 3. Opportunistic Speed Teams 4. Heavy Hitting Teams and Strategic Baserunning Teams These are based on batting metric contributions to performance factors This analysis is crucial for more effective KBO league strategies' },
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
