export function LegendPanel() {
  return (
    <aside className="panel legend-panel">
      <h2>Legend</h2>
      <ul>
        <li><span className="legend-line political" /> Political control bands</li>
        <li><span className="legend-line contested" /> Contested influence (dashed)</li>
        <li><span className="legend-line trade" /> Trade and transit routes</li>
        <li><span className="legend-line military" /> Strategic pressure corridors</li>
        <li><span className="legend-line hidden" /> Hidden / rumoured networks</li>
      </ul>
      <ul>
        <li><span className="legend-dot major" /> Major node</li>
        <li><span className="legend-dot minor" /> Minor node</li>
        <li><span className="legend-dot hidden" /> Hidden/uncertain node</li>
      </ul>
    </aside>
  );
}
