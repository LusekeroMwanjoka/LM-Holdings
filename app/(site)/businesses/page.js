export const metadata = { title: "Our businesses" };
const biz = [
  ["LM [Technology Venture]", "planned", "Planned"],
  ["LM [Property Venture]", "planned", "Planned"],
  ["LM [Trading Venture]", "dev", "Developing"],
  ["LM [Future Venture]", "planned", "Planned"],
];
export default function Businesses() {
  return (
    <section className="wrap sec">
      <h1 style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)" }}>Our businesses</h1>
      <p className="muted">No ventures are listed as active until confirmed. These cards show how the portfolio will be presented.</p>
      <div className="grid">
        {biz.map(([n, c, l]) => (
          <div className="card" key={n}>
            <span className={`tag ${c}`}>{l}</span>
            <h3 style={{ marginTop: 14 }}>{n}</h3>
            <p className="muted" style={{ margin: 0 }}>Placeholder entry. Description to be supplied.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
