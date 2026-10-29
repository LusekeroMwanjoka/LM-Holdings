import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "Our businesses" };

const biz = [
  {
    name:   "LM [Technology Venture]",
    sector: "Technology & Digital",
    status: "planned",
    label:  "Planned",
    desc:   "Software, IT services and digital platforms to serve the Malawian market and beyond.",
  },
  {
    name:   "LM [Property Venture]",
    sector: "Property & Infrastructure",
    status: "planned",
    label:  "Planned",
    desc:   "Real estate development and construction with a focus on quality and sustainability.",
  },
  {
    name:   "LM [Trading Venture]",
    sector: "Commerce & Trade",
    status: "dev",
    label:  "Developing",
    desc:   "Retail, distribution, import and export — connecting local producers to regional markets.",
  },
  {
    name:   "LM [Future Venture]",
    sector: "To be determined",
    status: "planned",
    label:  "Planned",
    desc:   "Placeholder for an emerging opportunity under evaluation.",
  },
];

const stats = [
  ["6",  "Sectors under exploration"],
  ["4",  "Ventures in pipeline"],
  ["MW", "Home market — Malawi"],
  ["—",  "Long-term ambition"],
];

export default function Businesses() {
  return (
    <>
      {/* ── Page header ──────────────────────────────────────── */}
      <section className="wrap sec" style={{ paddingBottom: 40 }}>
        <div style={{ maxWidth: "64ch" }}>
          <div className="eyebrow">Our portfolio</div>
          <h1 style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)" }}>
            Ventures we&apos;re building
          </h1>
          <p className="muted" style={{ fontSize: "1rem", maxWidth: "50ch" }}>
            No ventures are listed as active until confirmed. These cards show how the
            portfolio will be presented as businesses come online.
          </p>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────── */}
      <ScrollReveal as="section" className="wrap" style={{ paddingBottom: 48 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))",
            gap: 12,
          }}
        >
          {stats.map(([num, label]) => (
            <div key={num} className="stat-badge reveal">
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* ── Business cards ───────────────────────────────────── */}
      <ScrollReveal as="section" className="wrap" style={{ paddingBottom: 72 }}>
        <p className="note" style={{ marginBottom: 28 }}>
          Prototype: business details are placeholders until ventures are confirmed and
          descriptions supplied by the team.
        </p>
        <div className="grid">
          {biz.map(({ name, sector, status, label, desc }, i) => (
            <div
              key={name}
              className={`biz-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              {/* Icon placeholder — geometric, no emoji */}
              <div className="biz-card-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--olive)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="12" y1="8" x2="12" y2="16"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
              </div>

              {/* Sector + status row */}
              <div
                style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between", gap: 8,
                }}
              >
                <span
                  style={{
                    fontSize: ".75rem",
                    color: "var(--ink-60)",
                    fontWeight: 500,
                  }}
                >
                  {sector}
                </span>
                <span className={`tag ${status}`}>{label}</span>
              </div>

              <h3 style={{ margin: 0, fontSize: "1.05rem" }}>{name}</h3>

              <p
                className="muted"
                style={{ margin: 0, fontSize: ".875rem", lineHeight: 1.6 }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* ── CTA banner ───────────────────────────────────────── */}
      <ScrollReveal as="section" className="wrap" style={{ paddingBottom: 80 }}>
        <div
          className="ban reveal"
          style={{ gridTemplateColumns: "1fr", textAlign: "center", padding: "52px 40px" }}
        >
          <div>
            <div
              className="eyebrow"
              style={{ color: "rgba(254,250,224,.5)", justifyContent: "center" }}
            >
              <span style={{ background: "var(--tan)" }} />
              Ready to partner?
            </div>
            <h2 style={{ color: "var(--cream)", maxWidth: "32ch", margin: "0 auto 14px" }}>
              Interested in working with LM Holdings?
            </h2>
            <p
              style={{
                color: "rgba(254,250,224,.6)",
                maxWidth: "44ch",
                margin: "0 auto",
                fontSize: ".95rem",
              }}
            >
              Whether you are a potential business partner, investor or supplier —
              we would love to hear from you.
            </p>
            <div className="row" style={{ justifyContent: "center" }}>
              <Link className="btn gold" href="/contact">Get in touch</Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
