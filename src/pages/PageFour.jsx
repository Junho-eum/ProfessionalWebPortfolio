import React, { useState, useEffect, useRef } from 'react';
import '../components/styles/Page4.scss';
import KBOvsMLB from '../assets/KBOvsMLB.png';
import "../components/styles/Page2.css";
import HtmlComp from '../components/PageSpecific/PageBaseball/3DHTML';
import CardSliderPageFour from '../components/PageSpecific/PageBaseball/CardSliderPageFour';
import HeatmapComp from "../components/PageSpecific/PageBaseball/Heatmap";
import "../components/styles/listStyle.css";
import CardSliderPageFourTwo from '../components/PageSpecific/PageBaseball/CardSliderPageFour2';
import CardSliderPageFourThree from "../components/PageSpecific/PageBaseball/CardSliderPageFour3";
import Footer from '../components/PageSpecific/PageBaseball/Footer';
import HtmlComp_MLB from '../components/PageSpecific/PageBaseball/3DHTML_MLB';


function PageFour() {
    const title = "ANALYZING BASEBALL STATISTICS ACROSS CULTURES:"
    const subtitle = "A STUDY OF THE KBO"
    const introDescription = "This paper presents an approach to cluster documents using term frequency-inverse document frequency (TF-IDF) to identify the most important terms in each document and then using cosine similarity implemented by heap data structures to sort the documents based on their cosine similarity to the root document."
    const [currentId, setCurrentId] = useState(null);
    const [currentTab, setCurrentTab] = useState(null);
    const tabContainerHeight = 70;

    const tabContainerRef = useRef(null);
    const tabSliderRef = useRef(null);

    // Event Handlers
    const onScroll = () => {
        checkTabContainerPosition();
        findCurrentTabSelector();
    };

    const checkTabContainerPosition = () => {
        const tabContainer = tabContainerRef.current;
        let offset = tabContainer.getBoundingClientRect().top + tabContainer.getBoundingClientRect().height - tabContainerHeight;
        if (window.scrollY > offset) {
            tabContainer.classList.add('et-hero-tabs-container--top');
        } else {
            tabContainer.classList.remove('et-hero-tabs-container--top');
        }
    };

    const findCurrentTabSelector = () => {
        let newCurrentId;
        let newCurrentTab;
        const tabs = document.querySelectorAll(".et-hero-tab");
        tabs.forEach(tab => {
            let id = tab.getAttribute("href");
            let target = document.querySelector(id);
            let offsetTop = target.offsetTop - tabContainerHeight;
            let offsetBottom = target.offsetTop + target.offsetHeight - tabContainerHeight;
            if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = tab;
            }
        });
        if (currentId !== newCurrentId || currentId === null) {
            setCurrentId(newCurrentId);
            setCurrentTab(newCurrentTab);
            setSliderCss();
        }
    };

    const setSliderCss = () => {
        let width = 0;
        let left = 0;
        if (currentTab) {
            width = getComputedStyle(currentTab).width;
            left = currentTab.getBoundingClientRect().left;
        }
        const slider = tabSliderRef.current;
        slider.style.width = width;
        slider.style.left = `${left}px`;
    };

    // Use Effects
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
      <div>
        <section className="et-hero-tabs baseball-title">
          <div className="et-hero-tabs-container" ref={tabContainerRef}>
            <a className="et-hero-tab" href="#tab-intro">
              INTRO
            </a>
            <a className="et-hero-tab" href="#tab-preprocessing">
              EDA
            </a>
            <a className="et-hero-tab" href="/biplot.html">
              3D Data
            </a>
            <a className="et-hero-tab" href="/2d_scatter_plot.html">
              2D Projection
            </a>
            <a
              className="et-hero-tab"
              href="/Weekly%20Average%20Sentiment%20Scores.html"
            >
              Weekly Sentiment
            </a>
            <a
              className="et-hero-tab"
              href="https://github.com/Junho-eum/Baseball_Analytics/blob/main/KBO_analytics_draft3.pdf"
            >
              README
            </a>
            <span className="et-hero-tab-slider" ref={tabSliderRef}></span>
          </div>
        </section>
        <main className="et-main">
          <section className="et-slide section1" id="tab-intro">
            <div className="header-container-1">
              <h1 className="intro1">INITIATIVE</h1>
              <p className="intro2">
                Pythagorean Expectation in baseball, which proposes a
                proportional win-loss ratio and their runs ratio, doesn't always
                hold true. Some teams deviate from this theory due to factors
                like exceptional performance or pure chance. This project
                explores such anomalies through a comparative analysis across
                baseball leagues, aiming to provide an understanding of team
                performance beyond the Pythagorean Expectation. <br></br>
                Below is a intuitive 3-d visualization of KBO and MLB baseball
                leagues:
              </p>
              <br></br>

              <div className="content-container-1 htmlcomp-container">
                <HtmlComp />
              </div>
            </div>
          </section>
          <div className="scroll-message">
            Click here to scroll and see further content
          </div>
          {/* <p id="tab-flexbox"></p> */}
          <div className="left-side">
            <div className="content-container-2 htmlcomp-container">
              <HtmlComp_MLB />
            </div>
            <section className="et-slide-2">
              <div className="header-container-2" id="tab-preprocessing">
                <h1 className="intro1">Data Exploration&Preprocessing</h1>
                <p className="intro2">
                  I compared team data from the Korean Baseball Organization
                  (1982-2021) with Major League Baseball (2002-2023), using data
                  from Baseball Reference. The focus was on 24 important
                  variables to understand team and player performance.
                </p>
                <h2 className="intro1">Dataset Overview</h2>
                <div>
                  <p className="intro2">
                    <strong>Team and Player Information:</strong> Includes IDs,
                    team details, the year of data, and average player age.
                    <br></br>
                    <strong>Defensive Stats:</strong> Examines pitching metrics
                    like ERA and Innings Pitched, and team defense stats such as
                    double plays and caught stealing.<br></br>
                    <strong>Offensive Stats:</strong> Looks at batting
                    performance, including Hits, RBI, and Slugging Percentage,
                    along with batter's age.<br></br>
                    <strong>Analysis Process:</strong>
                    <br></br>
                    1. Cleaned the data by removing duplicates and filling in
                    missing values.<br></br>
                    2. Conducted a correlation analysis to see which variables
                    most affect win ratios, using R and Python for
                    visualizations (heatmap and bar chart).<br></br>
                  </p>
                </div>
              </div>

              <div className="content-container-3">
                <CardSliderPageFourThree />
              </div>
            </section>
          </div>
          <div className="content-container-3">
            <section className="et-slide-3 section3" id="tab-PCA">
              <div className="header-container">
                <h2 className="intro1">
                  Principal Component Analysis (PCA) Methodology
                </h2>
                <div>
                  <p className="intro2">
                    <strong>Preliminary Preprocessing:</strong> I started by
                    selecting important variables and removing unnecessary ones
                    from the dataset, resulting in a more focused dataset named
                    matrix P with dimensions (323, 24).<br></br>
                    <br></br>
                    <strong>Data Standardization:</strong> For effective PCA,
                    it's crucial to standardize the data so each variable has a
                    mean of 0 and a standard deviation of 1. <br />I used the
                    formula "P_std = (P - P_mean) / P_sd", where "P" is the
                    data, "P_mean" is the average, and "P_sd" is the standard
                    deviation.<br></br>
                    <br></br>
                    <strong>Computing the Covariance Matrix:</strong> Using the
                    standardized data, I created a covariance matrix, labeled S,
                    to understand the relationships between variables in terms
                    of variance and covariance.<br></br>
                    <br></br>
                    <strong>Eigen Decomposition:</strong>
                    <br></br>
                    1. I decomposed the covariance matrix to find its
                    eigenvalues and eigenvectors.<br></br>
                    2. The eigenvalues reveal the variance captured by each PCA
                    component, while eigenvectors show how to combine original
                    variables to form these components.<br></br>
                  </p>
                </div>

                <h1 className="intro1">Interpretation of PCA Components</h1>
                <p>
                  The six retained PCA components each reveal different aspects
                  of a team's performance:
                  <br></br>
                  <br></br>
                  <strong>1. Overall Offensive Performance:</strong> A team's
                  general offensive performance is captured by this component.
                  It suggests that teams with high scores show strong offensive
                  performances, yet fewer sacrifice hits.
                  <br></br>
                  <br></br>
                  <strong>2. Plate Discipline and Speed:</strong> This component
                  represents a mix of plate discipline and speed. High-scoring
                  teams here display good discipline, proficient contact-making,
                  and potentially have fast runners.
                  <br></br>
                  <br></br>
                  <strong>3. Speed and Opportunism:</strong> This indicates a
                  tendency for speed and situational play. High-scoring teams
                  might be fast, seizing scoring opportunities, but may not hit
                  many home runs.
                  <br></br>
                  <br></br>
                  <strong>4. Sacrifice Play:</strong> Teams that often opt for
                  sacrifice for the overall score are captured by this
                  component.
                  <br></br>
                  <br></br>
                  <strong>5. Aggressive Play and Efficiency:</strong> Represents
                  a blend of aggressive play and efficient hitting. High-scoring
                  teams could be hit by pitches often, draw walks, and hit
                  efficiently for extra bases.
                  <br></br>
                  <br></br>
                  <strong>6. Tactical Baserunning:</strong> Reflects a team's
                  tactical approach to advancing runners and gaining bases, with
                  less focus on walks or getting hit by pitches.
                </p>
                <br></br>
                <div className="content-container-4">
                  <CardSliderPageFour />
                </div>
                <section className="et-slide-4" id="tab-interaction">
                  <div className="header-container-5">
                    <h1 className="intro1">
                      Optimization and Interaction Analysis of Batting and
                      Pitching Variables Using XGBoost Models
                    </h1>
                    <p>
                      To better understand and capture the complex interactions
                      between variables, I developed two XGBoost models for
                      batter and pitcher data. The target variables were total
                      runs scored and total runs allowed, respectively. By using
                      Grid Search, I fine-tuned the models and achieved accuracy
                      scores of 0.9837 and 0.9796 for the batter and pitcher
                      data, respectively. The pitcher's data analysis revealed
                      key insights into different pitching scenarios and
                      strategies' impacts on game results, emphasizing the
                      importance of a pitcher's control. These insights are
                      visually depicted in the SHAP interaction plots.
                    </p>
                    <div className="content-container-5">
                      <CardSliderPageFourTwo />
                      <div className="div-footer">
                        <Footer />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
}


export default PageFour;
