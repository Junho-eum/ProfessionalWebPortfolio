import React, { useState, useEffect, useRef } from 'react';
import '../components/styles/Page4.scss';
import "../components/styles/Page2.css";
import HtmlComp from '../components/PageSpecific/PageBaseball/3DHTML';
import "../components/styles/listStyle.css";
import CardSliderPageFourThree from "../components/PageSpecific/PageBaseball/CardSliderPageFour3";
import CardSliderPageFourFour from "../components/PageSpecific/PageBaseball/CardSliderPageFour4";
import HtmlComp_MLB from '../components/PageSpecific/PageBaseball/3DHTML_MLB';


function PageFour() {
    const [currentId, setCurrentId] = useState(null);
    const [currentTab, setCurrentTab] = useState(null);
    const tabContainerHeight = 70;

    const tabContainerRef = useRef(null);
    const tabSliderRef = useRef(null);

    // Event Handlers
    // OnScroll function is called when the user scrolls the page and
    // It invokes two other functions checkTabContainerPosition, findCurrentTab Selector
    const onScroll = () => {
        checkTabContainerPosition();
        findCurrentTabSelector();
    };

    // Checks the position of the tab container on the page and
    // adds or removes a CSS class based on the scroll position
    const checkTabContainerPosition = () => {
        const tabContainer = tabContainerRef.current;
        let offset = tabContainer.getBoundingClientRect().top + tabContainer.getBoundingClientRect().height - tabContainerHeight;
        if (window.scrollY > offset) {
            tabContainer.classList.add('et-hero-tabs-container--top');
        } else {
            tabContainer.classList.remove('et-hero-tabs-container--top');
        }
    };

    // Finds the current tab selector based on the scroll position
    // and updates the state accordingly
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

    // Adjust the style of a slider element based on the dimensions of a currentTab element
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
    // event listener for scroll event on the window object
    // when the component is mounted by colling window.addEventListener("scroll, onScroll")
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    // HTML components to variables
    const HeaderSection = () => (
      <section className="et-hero-tabs baseball-title">
        {/*
          This is a container element that contains all tab elements in the Hero Tabs component
        */}
        <div className="et-hero-tabs-container" ref={tabContainerRef}>
          {/*
            These are tab elements in the Hero Tabs component, which can be used to navigate to different sections of the page
          */}
          <a className="et-hero-tab" href="#tab-intro">
            INTRO
          </a>
          <a className="et-hero-tab" href="#tab-preprocessing">
            EDA
          </a>
          <a className="et-hero-tab" href="/China3.html">
            3D Data
          </a>
          <a className="et-hero-tab" href="/Japan3.html">
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
          {/*
            This is the slider element that is used to indicate which tab is currently active
            in the Hero Tabs component
          */}
          <span className="et-hero-tab-slider" ref={tabSliderRef}></span>
        </div>
      </section>
    );

    const InitiativeSection = () => (
      <section className="et-slide section1" id="tab-intro">
        <div className="header-container-1">
          <h1 className="intro1">INITIATIVE</h1>
          <p className="intro2">
            Pythagorean Expectation in baseball, which proposes a proportional
            win-loss ratio and their runs ratio, doesn't always hold true. Some
            teams deviate from this theory due to factors like exceptional
            performance or pure chance. This project explores such anomalies
            through a comparative analysis across baseball leagues, aiming to
            provide an understanding of team performance beyond the Pythagorean
            Expectation. <br></br>
            Below is a intuitive 3-d visualization of KBO and MLB baseball
            leagues:
          </p>
          <br></br>

          <div className="content-container-1 htmlcomp-container">
            <HtmlComp />
          </div>
        </div>
      </section>
    );

    const ScrollMessage = () => (
      <div className="scroll-message">
        Click here to scroll and see further content
      </div>
    );

    const DataExplorationSection = () => (
      <section className="et-slide-2">
        <div className="header-container-2" id="tab-preprocessing">
          <h1 className="intro1">Data Exploration&Preprocessing</h1>
          <p className="intro2">
            I compared team data from the Korean Baseball Organization
            (1982-2021) with Major League Baseball (2002-2023), using data from
            Baseball Reference. The focus was on 24 important variables to
            understand team and player performance.
          </p>
          <h2 className="intro1">Dataset Overview</h2>
          <div>
            <p className="intro2">
              <strong>Team and Player Information:</strong> Includes IDs, team
              details, the year of data, and average player age.
              <br></br>
              <strong>Defensive Stats:</strong> Examines pitching metrics like
              ERA and Innings Pitched, and team defense stats such as double
              plays and caught stealing.<br></br>
              <strong>Offensive Stats:</strong> Looks at batting performance,
              including Hits, RBI, and Slugging Percentage, along with batter's
              age.<br></br>
              <strong>Analysis Process:</strong>
              <br></br>
              1. Cleaned the data by removing duplicates and filling in missing
              values.<br></br>
              2. Conducted a correlation analysis to see which variables most
              affect win ratios, using R and Python for visualizations (heatmap
              and bar chart).<br></br>
            </p>
          </div>
        </div>

        <div className="content-container-3">
          <CardSliderPageFourThree />
        </div>
      </section>
    );

    const MLBHtmlSection = () => (
      <div className="content-container-2 htmlcomp-container">
        <HtmlComp_MLB />
      </div>
    );

    const MethodologySection = () => (
      <div>
        <h2 className="intro1">
          Principal Component Analysis (PCA) Methodology
        </h2>
        <p className="intro2">
          <strong>Preliminary Preprocessing:</strong> I started by selecting
          important variables and removing unnecessary ones from the dataset,
          resulting in a more focused dataset named matrix P with dimensions
          (323, 24).<br></br>
          <br></br>
          <strong>Data Standardization:</strong> For effective PCA, it's crucial
          to standardize the data so each variable has a mean of 0 and a
          standard deviation of 1. <br />I used the formula "P_std = (P -
          P_mean) / P_sd", where "P" is the data, "P_mean" is the average, and
          "P_sd" is the standard deviation.<br></br>
          <br></br>
          <strong>Computing the Covariance Matrix:</strong> Using the
          standardized data, I created a covariance matrix, labeled S, to
          understand the relationships between variables in terms of variance
          and covariance.<br></br>
          <br></br>
          <strong>Eigen Decomposition:</strong>
          <br></br>
          1. I decomposed the covariance matrix to find its eigenvalues and
          eigenvectors.<br></br>
          2. The eigenvalues reveal the variance captured by each PCA component,
          while eigenvectors show how to combine original variables to form
          these components.<br></br>
        </p>
      </div>
    );
    
    const InterpretationSection = () => (
      <div>
        <h1 className="intro1">Interpretation of PCA Components</h1>
        <h2 className="intro1">Heatmap Representation of PC loadings</h2>
        <p className="intro2">
          The loadings show how each variable in the dataset contributes to each
          principal component.<br></br>
          By examining these loadings, we can understand what each principal
          component represents in terms of the original variables.<br></br>
          Below is a heatmap of the loadings for the represetation of the first
          8 principal components:
        </p>
      </div>
    );

    const DiscussionSection = () => (
      <section className="et-slide-4" id="tab-interaction">
        <div className="header-container-5">
          <h1 className="intro1">Decoding Team Dynamics</h1>
          <p className="intro2">
            I focused on the principal components that are most crucial in the
            dataset.<br></br> By analyzing the loadings and applying thresholds
            based on means and standard deviations, I identified the key
            elements and evaluated the strength of the variable’s impact on
            them.<br></br>
            Here, I present a brief description and title for each of these
            significant components:
          </p>
          <h2 className="intro1">KBO Dataset Key Component Extraction</h2>
          <p className="intro2"></p>
          <div className="content-container-5">
            <div className="div-footer">{/* <Footer /> */}</div>
          </div>
        </div>
      </section>
    );

    return (
      <div>
        <HeaderSection />
        <main className="et-main">
          <InitiativeSection />
          <ScrollMessage />
          <div className="left-side">
            <MLBHtmlSection />
            <DataExplorationSection />
          </div>
          <div className="content-container-3">
            <section className="et-slide-3 section3" id="tab-PCA">
              <div className="header-container">
                <MethodologySection />
                <InterpretationSection />
                <div className="content-container-4">
                  <CardSliderPageFourFour />
                </div>
                <DiscussionSection />
                <div className="div-footer">{/* <Footer /> */}</div>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
}


export default PageFour;
