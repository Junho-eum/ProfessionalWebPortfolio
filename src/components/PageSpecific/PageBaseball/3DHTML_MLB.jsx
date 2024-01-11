function HtmlComp_MLB() {
  return (
    <>
      <div className="container-3dPlot left-side-mlb">
        <p className="figure-description">
          Use your mouse to rotate the 3D plot. Scroll to zoom in and out.
        </p>
        <iframe
          src="/3-d_pytha_exp_plot_MLB.html"
          title="3D Plot"
          width="100%"
          height="100%"
          style={{ border: "none", background: "white" }}
        />
      </div>
    </>
  );
}

export default HtmlComp_MLB;
