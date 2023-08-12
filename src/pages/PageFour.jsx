import React, { useState, useEffect, useRef } from 'react';
import '../components/styles/Page4.css';
import KBOvsMLB from '../assets/KBOvsMLB.png';
import "../components/styles/Page2.css";
import HtmlComp from '../components/PageSpecific/PageBaseball/3DHTML';
import CardSliderPageFour from '../components/PageSpecific/PageBaseball/CardSliderPageFour';
import HeatmapComp from "../components/PageSpecific/PageBaseball/Heatmap";
import "../components/styles/listStyle.css";
import CardSliderPageFourTwo from '../components/PageSpecific/PageBaseball/CardSliderPageFour2';
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
        <section
          className="et-hero-tabs baseball-title"
        >
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
          <div className="et-hero-tabs-container" ref={tabContainerRef}>
            <a className="et-hero-tab" href="#tab-intro">
              INTRO
            </a>
            <a className="et-hero-tab" href="#tab-methodology">
              Methodology
            </a>
            <a className="et-hero-tab" href="#tab-PCA">
              PCA
            </a>
            <a className="et-hero-tab" href="#tab-interaction">
              Interaction
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
              <h1 className="intro1">INTRO</h1>
              <h3>
                Pythagorean Expectation in baseball, which proposes a
                proportional win-loss ratio and their runs ratio, doesn't always
                hold true. Some teams deviate from this theory due to factors
                like exceptional performance or pure chance. This paper explores
                such anomalies through a comparative analysis across baseball
                leagues, aiming to provide a nuanced understanding of team
                performance beyond the Pythagorean Expectation.
              </h3>
              <br></br>
              <h3 className="intro2">
                The Pythagorean Expectation theory may not fully capture the
                complexities and variabilities in sports like baseball. A 3D
                plot of KBO data indicates the presence of outliers that the
                theory doesn't readily explain. These outliers could be
                attributed to exceptional performances, strong pitching, or
                random fluctuations. This paper will investigate these
                contributing factors and attempt to provide a better
                understanding of these deviations. By analyzing features that
                has strong influence on wins in KBO I aim to identify
                distinctive characteristics that may influence these outliers.{" "}
              </h3>
              <div className="content-container-1 htmlcomp-container">
                <HtmlComp />
              </div>
            </div>
          </section>

          {/* <p id="tab-flexbox"></p> */}
          <div className="left-side">
            <div className="content-container-1 htmlcomp-container">
              <HtmlComp_MLB />
            </div>

            <section className="et-slide-2 slide2" id="tab-methodology">
              <div className="header-container-2">
                <h1>Methodology</h1>
                <ul>
                  <li class="list-title">
                    <h3>Correlation Analysis</h3>
                    <ul>
                      <li class="list-item">
                        Initial data import and integrity check.
                      </li>
                      <li class="list-item">
                        Removal of duplicates and null entries for data quality.
                      </li>
                      <li class="list-item">
                        Identification of correlated variables with a heatmap.
                      </li>
                      <li class="list-item">
                        Acknowledging limitations of the correlation method.
                      </li>
                      <li class="list-item">
                        Dividing features into pitcher and batter categories for
                        deeper insights.
                      </li>
                    </ul>
                  </li>
                  <li class="list-title">
                    <h3>
                      Regression Analysis to Understand Influence of Batting and
                      Pitching Variables
                    </h3>
                    <ul>
                      <li class="list-item">
                        Conducted regression analyses to understand impact of
                        batting and pitching variables on win-loss percentage.
                      </li>
                      <li class="list-item">
                        Found collective influence of normalized
                        pitching-related features to be around 1.42, and
                        batting-related features around 2.98.
                      </li>
                      <li class="list-item">
                        41.7% of the variability in win-loss percentage was
                        explained by pitching variables, and 28.4% by batting
                        variables.
                      </li>
                      <li class="list-item">
                        Discovered differing impacts of these variables on
                        win-loss percentage, indicating a need for further
                        examination of potential multicollinearity and
                        interaction effects.
                      </li>
                    </ul>
                  </li>
                  <li class="list-title">
                    <h3>
                      Principal Component Analysis with Gaussian Mixture Model
                    </h3>
                    <ul>
                      <li>
                        Applied Principal Component Analysis (PCA) in
                        conjunction with Gaussian Mixture Models (GMM)
                        clustering to reduce dimensionality and identify
                        influential features.
                      </li>
                      <li class="list-item">
                        Transformed the dataset using PCA into a new set of
                        components, each representing a certain amount of total
                        dataset variance.
                      </li>
                      <li class="list-item">
                        Features for PCA and subsequent GMM were carefully
                        chosen based on a correlation heatmap analysis.
                      </li>
                      <li class="list-item">
                        Selected six components based on cumulative explained
                        variance, condensing the original 16 variables to 6.
                      </li>
                      <li class="list-item">
                        Each component represented specific aspects of
                        performance, as evident from the various batting metrics
                        they include.
                      </li>
                      <li class="list-item">
                        Created a biplot to understand the relationship between
                        original variables and PCA components.
                      </li>
                      <li class="list-item">
                        Applied GMM clustering, with the optimal number of
                        clusters determined by the lowest BIC and AIC values.
                      </li>
                      <li class="list-item">
                        Assigned teams to respective clusters based on the
                        Gaussian distribution they most closely matched.
                      </li>
                      <li class="list-item">
                        Identified distinct team clusters, each defined by
                        specific performance traits.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="content-container-3">
                <HeatmapComp />
              </div>
            </section>
          </div>
          <div className="content-container-3">
            <section className="et-slide-3 section3" id="tab-PCA">
              <div className="header-container">
                <h1 className="intro1">Principal Component Analysis&GMM</h1>
                <p>
                  In the analysis, PCA was used to manage the high
                  dimensionality of the dataset. This technique transformed the
                  data into new orthogonal features, or "components", each
                  representing a certain amount of the dataset's total variance.
                  Sixteen KBO batting features were selected for this analysis,
                  based on their strong interactions and impact on a team's
                  offensive performance. By observing a scree plot and
                  considering the cumulative explained variance, I decided to
                  retain six components from the PCA. These components captured
                  92.3% of the variation in the dataset, effectively condensing
                  the information of 16 variables into 6, which greatly
                  facilitated the subsequent GMM clustering.
                </p>
                <br></br>
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
