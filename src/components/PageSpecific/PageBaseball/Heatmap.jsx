function HeatmapComp() {
  return (
    <div className="container-heatmap heatmap left-side2">
      <iframe
        src="/Corr_heatmap.html"
        title="correlation heatmap"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}

export default HeatmapComp;
