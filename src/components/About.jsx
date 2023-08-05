<div className="header-container-2">
    <h1>Methodology</h1>
    <ul>
        <li class="list-title">
            Correlation Analysis
            <ul>
                <li class="list-item">Initial data import and integrity check.</li>
                <li class="list-item">Removal of duplicates and null entries for data quality.</li>
                <li class="list-item">Identification of correlated variables with a heatmap.</li>
                <li class="list-item">Acknowledging limitations of the correlation method.</li>
                <li class="list-item">Dividing features into pitcher and batter categories for deeper insights.</li>
            </ul>
        </li>
        <li class="list-title">
            Regression Analysis to Understand Influence of Batting and Pitching Variables
            <ul>
                <li class="list-item">Conducted regression analyses to understand impact of batting and pitching variables on win-loss percentage.</li>
                <li class="list-item">Found collective influence of normalized pitching-related features to be around 1.42, and batting-related features around 2.98.</li>
                <li class="list-item">41.7% of the variability in win-loss percentage was explained by pitching variables, and 28.4% by batting variables.</li>
                <li class="list-item">Discovered differing impacts of these variables on win-loss percentage, indicating a need for further examination of potential multicollinearity and interaction effects.</li>
            </ul>
        </li>
        <li class="list-title">
            Principal Component Analysis with Gaussian Mixture Model
            <ul>
            <li>Applied Principal Component Analysis (PCA) in conjunction with Gaussian Mixture Models (GMM) clustering to reduce dimensionality and identify influential features.</li>
                    <li class="list-item">Transformed the dataset using PCA into a new set of components, each representing a certain amount of total dataset variance.</li>
                    <li class="list-item">Features for PCA and subsequent GMM were carefully chosen based on a correlation heatmap analysis.</li>
                    <li class="list-item">Selected six components based on cumulative explained variance, condensing the original 16 variables to 6.</li>
                    <li class="list-item">Each component represented specific aspects of performance, as evident from the various batting metrics they include.</li>
                    <li class="list-item">Created a biplot to understand the relationship between original variables and PCA components.</li>
                    <li class="list-item">Applied GMM clustering, with the optimal number of clusters determined by the lowest BIC and AIC values.</li>
                    <li class="list-item">Assigned teams to respective clusters based on the Gaussian distribution they most closely matched.</li>
                    <li class="list-item">Identified distinct team clusters, each defined by specific performance traits.</li>
                
            </ul>
        </li>
    </ul>
</div>
