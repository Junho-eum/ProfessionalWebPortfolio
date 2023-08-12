import React from "react";
import "../components/styles/Page2.css";
import HtmlComp from "../components/3DHTML.jsx";
import HeatmapComp from "../components/Heatmap";
import GmmCluster from "../components/GmmCluster";

function Page2() {
  return (
    <div className="page">
      <h1>Baseball Analytic Across Cultures</h1>
      <div className="container-fluid content-1">
        <p className="Intro">
        This study explores the unique style of the Korean Baseball Organization (KBO) through the lens of baseball statistics and the Pythagorean Expectation formula. The research delves into the estimation of a team's win rate, using varied parameters from pitching and batting datasets. By focusing on the deviations from predicted win-loss ratios, it uncovers insights into team performance and the key elements that define KBO's distinct style. The ultimate goal is to offer a refined understanding of KBO and its unique traits shaped by various influential factors.
        </p>
      </div>
      <h2>Pythagorean Exp 3D-Modeling</h2>
      <div className="container-fluid content-1 ">
        <HtmlComp />
        <div className="summary-1">
          <p className="description">
            Pythagorean Expectation in baseball, which proposes a
            proportionaliPythagorean Exp 3D-Modelling win-loss ratio and their
            runs ratio, doesn't always hold true. Some teams deviate from this
            theory due to factors like exceptional performance or pure chance.
            This paper explores such anomalies through a comparative analysis
            across baseball leagues, aiming to provide a nuanced understanding
            of team performance beyond the Pythagorean Expectation.
          </p>
        </div>
      </div>

      <div className="container-fluid content">
        <HeatmapComp />

        <div className="summary">
          <h1>Preprocessing & parameter selection</h1>
          <p className="description">
            I conducted a correlation analysis to identify key factors impacting
            the win-loss percentage in baseball, using heatmaps for
            visualization. Recognizing the limitations of correlation-based
            feature selection, like the potential for multicollinearity and the
            risk of missing non-linear relationships, I categorized our analysis
            into pitcher and batter features. This provided deeper insights into
            the factors influencing the game outcomes
          </p>
        </div>
      </div>

      <div className="container-fluid content-3">
        <div className="figure2">
          <PCAComp />
          <GmmCluster />
        </div>
        <div className="summary-3">
          <h1>Principal component analysis with Gaussian Mixture Model</h1>
          <p className="description">
            The analytical process used to interpret the batter data involves
            two primary steps - Principal Component Analysis (PCA) and Gaussian
            Mixture Models (GMM) clustering. The PCA helped to reduce the
            dimensionality of the batter data, which comprises several features
            like hits, doubles, triples, home runs scored, etc. The goal was to
            convert these variables into a smaller set of new features (the
            Principal Components) while retaining most of the variability
            present in the original data. The interpretation of these principal
            components was conducted by examining the loadings of the original
            features on each component, i.e., the contribution of each feature
            to each component. The features with the highest absolute loading on
            a component are considered to be the ones that the component
            represents. Following PCA, we applied GMM to classify or group the
            data points in the PCA transformed space into different clusters,
            each represented by a Gaussian distribution. We used Bayesian
            Information Criterion (BIC) and Akaike Information Criterion (AIC)
            to determine the best number of clusters for GMM. The final
            interpretation of the PCA components and GMM clustering resulted in
            four significant components:
          </p>

          <ul>
            <li>
              <b>Offensive Power</b> - This component represents the inverse of
              a team's overall offensive strength, with features such as 'RBI',
              'total_runs_scored', 'total_bases', 'hits_y', 'plate_appearances',
              etc. Teams with strong offensive performance may have a lower
              score in this component.
            </li>
            <li>
              <b>Offensive Efficiency</b> - This component captures the
              efficiency of a team's offensive output. Teams that play fewer
              games, have fewer strikeouts, and lower at-bats, or those with
              higher batting average, OPS, and SLG values are considered more
              efficient.
            </li>
            <li>
              <b>Hit Type Tendency</b> - This component captures a team's
              inclination towards specific types of hits. Teams with more
              triples and sacrifice flies and fewer home runs may score higher
              in this component, reflecting a specific style of play.
            </li>
            <li>
              <b>Strategic Baserunning</b> - This component indicates a team's
              strategic approach to advancing runners and gaining bases. Teams
              that utilize sacrifice hits strategy score higher in this
              component. Conversely, teams with fewer strikeouts and GDP have a
              higher component score.
            </li>
          </ul>
        </div>
      </div>

      <div className="container-fluid content">
        <InteractionComp />
        <div className="summary">
          <h2>
            Optimization and Interaction Analysis of Batting and Pitching
            Variables Using XGBoost Models
          </h2>
          <p className="description">
            Our research involves the development of two separate XGBoost models
            for pitcher and batter data in the KBO league, targeting the
            prediction of total runs scored. After executing a Grid Search
            methodology, we achieved high model accuracy scores, 0.9837 and
            0.9796, for batter and pitcher data respectively. In-depth analysis
            of these models revealed significant interactions between certain
            features. In batter data, the RBI and hits variables were
            consolidated due to their strong interaction, while in the pitcher
            data, key variable pairs like hits allowed and ERA, ERA and batters
            faced, and homeruns allowed and ERA were combined. Interestingly, we
            noted that high homerun counts correlated with a higher ERA,
            particularly when ERA was greater than 4.5. This highlights a trend
            where teams with higher scores tend to allow more homeruns. These
            findings and enhanced understanding of variable interactions will
            guide our future model refinements for better predictive performance
            and richer understanding of KBO league dynamics.
          </p>
        </div>
      </div>
      <div className="container text-center">
        <div className="row row-cols-2">
          <div className="col">Column</div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
