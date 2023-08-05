import React from 'react';

function PCAPlots() {
  return (
    <>
      <p className='figure-description'>Use your mouse to rotate the 3D plot. Scroll to zoom in and out.</p>
      <div className="image-container">
        <img
          src="/pca_scatter_gmm_cluster_kbobat.png"
          alt="PCA Scatter Plot GMM Cluster"
          width="100%"
          height="100%"
          style={{ border: "none", maxWidth: "100%" }}
        />
        <img
          src="/Biplot_pca_batting.png"
          alt="Biplot PCA Batting"
          width="100%"
          height="100%"
          style={{ border: "none", maxWidth: "100%" }}
        />
        <img
          src="/PCA_screeplot.png"
          alt="PCA Scree Plot"
          width="100%"
          height="100%"
          style={{ border: "none", maxWidth: "100%" }}
        />
      </div>
    </>
  );
}


export default PCAPlots;
