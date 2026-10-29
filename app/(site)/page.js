import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ── data ────────────────────────────────────────────────── */
const sectors = [
  ["Technology & Digital",      "Software, IT services, cloud and digital platforms."],
  ["Finance & Investments",     "Investment and fintech ventures, subject to regulation."],
  ["Property & Infrastructure", "Real estate, development and construction."],
  ["Commerce & Trade",          "Retail, distribution, import and export."],
  ["Agriculture & Industry",    "Agribusiness, processing and manufacturing."],
  ["Professional Services",     "Consulting, logistics, media and hospitality."],
];

const principles = [
  {
    title: "Build with discipline",
    body:  "Clear plans, careful use of capital and honest reporting.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
  {
    title: "Partner with intent",
    body:  "Relationships that bring skill, access and trust to each venture.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: "Think long term",
    body:  "Lasting value matters more than speed for its own sake.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

const values = [
  ["Integrity",     "We do what we say and say what we mean."],
  ["Client focus",  "Every decision serves the people we work for."],
  ["Risk awareness","We understand what we're taking on before we act."],
  ["Expertise",     "We invest in people who know their field deeply."],
];

/* ── page ─────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section className="wrap hero-wrap">
        <div>
          {/* Location label */}
          <div style={{ marginBottom: 20 }}>
            <span className="pill">
              <span className="dot dot-ok" aria-hidden="true" />
              Malawi · Southern Africa
            </span>
          </div>

          <h1>
            Building Businesses.<br />
            <span style={{ color: "var(--olive)" }}>Creating Possibilities.</span>
          </h1>

          <p className="hero-lead">
            LM Holdings is a Malawi-based holding company. We build, partner with and
            grow businesses across industries — with discipline and a long view.
          </p>

          <div className="row">
            <Link className="btn gold" href="/businesses">Explore our businesses</Link>
            <Link className="btn alt" href="/contact">Start a conversation</Link>
          </div>

          {/* Value labels */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 36 }}>
            {["Integrity", "Discipline", "Long-term value", "Local roots"].map((v) => (
              <span key={v} className="pill">{v}</span>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="hero-art">
          <Image
            src="/images/hero.svg"
            alt="Abstract landscape — hills, horizon and a rising sun"
            fill
            priority
            unoptimized
            style={{ objectFit: "cover" }}
          />
          <div className="hero-float">
            <div className="hero-float-item">
              <b>Malawi</b>Home market
            </div>
            <div className="hero-float-item">
              <b>Southern Africa</b>Regional direction
            </div>
            <div className="hero-float-item">
              <b>Beyond</b>Long-term ambition
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRINCIPLES ════════════════════════════════════════ */}
      <ScrollReveal as="section" className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="principles-grid">
          {principles.map(({ title, body, icon }, i) => (
            <div
              key={title}
              className={`principle-cell reveal reveal-delay-${i + 1}`}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40, height: 40,
                  borderRadius: 5,
                  background: "var(--olive-15)",
                  color: "var(--olive)",
                  marginBottom: 14,
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                {icon}
              </span>
              <h3>{title}</h3>
              <p className="muted" style={{ margin: 0, fontSize: ".875rem" }}>{body}</p>
            </div>
          ))}
        </div>

        <p className="note" style={{ marginTop: 24 }}>
          Placeholder copy for review. Company facts, history and achievements will be
          added only once verified.
        </p>
      </ScrollReveal>

      {/* ══ VALUES ════════════════════════════════════════════ */}
      <ScrollReveal as="section" className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="eyebrow">Our values</div>
        <h2>How we operate, every day</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
            marginTop: 28,
          }}
        >
          {values.map(([title, body], i) => (
            <div
              key={title}
              className={`card reveal reveal-delay-${i + 1}`}
            >
              {/* Olive rule accent */}
              <div
                style={{
                  width: 24, height: 2,
                  background: "var(--olive)",
                  marginBottom: 14,
                  borderRadius: 1,
                }}
                aria-hidden="true"
              />
              <h3 style={{ fontSize: ".95rem", marginBottom: 6 }}>{title}</h3>
              <p className="muted" style={{ margin: 0, fontSize: ".85rem" }}>{body}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* ══ BANNER CTA ════════════════════════════════════════ */}
      <ScrollReveal as="section" className="wrap" style={{ paddingBottom: 64 }}>
        <div className="ban reveal">
          <div>
            <div
              className="eyebrow"
              style={{ color: "rgba(254,250,224,.5)" }}
            >
              <span style={{ background: "var(--tan)" }} />
              Our mission
            </div>
            <h2 style={{ color: "var(--cream)" }}>
              A parent company for ventures yet to be built
            </h2>
            <p>
              We are early in this journey. Our ambition is to create opportunities
              through innovation, partnership and entrepreneurship — starting in Malawi.
            </p>
            <div className="row">
              <Link className="btn gold" href="/contact">Talk to us</Link>
              <Link
                className="btn"
                href="/businesses"
                style={{
                  background: "transparent",
                  borderColor: "rgba(254,250,224,.2)",
                  color: "var(--bg)",
                }}
              >
                View portfolio
              </Link>
            </div>
          </div>
          <Image
            src="/images/banner.svg"
            alt="Connected points across a ridge line representing growth"
            width={800}
            height={560}
            unoptimized
            style={{ width: "100%", height: "auto", borderRadius: 4 }}
          />
        </div>
      </ScrollReveal>

      {/* ══ SECTORS BENTO ════════════════════════════════════ */}
      <ScrollReveal
        as="section"
        id="sectors"
        style={{ background: "var(--olive-08)", padding: "80px 0" }}
      >
        <div className="wrap">
          <div className="eyebrow">Where we build</div>
          <h2>Sectors we may build in</h2>
          <p className="muted" style={{ maxWidth: "52ch", marginBottom: 32, fontSize: ".95rem" }}>
            Directions we are exploring. None is a statement of current operations.
          </p>
          <div className="bento">
            {sectors.map(([title, desc], i) => (
              <div
                key={title}
                className={`tile t${i} reveal reveal-delay-${(i % 3) + 1}`}
              >
                <svg viewBox="0 0 120 120" aria-hidden="true">
                  <circle cx="60" cy="60" r={52 - i * 2} fill="none" stroke="currentColor" strokeOpacity=".15" />
                  <circle cx="60" cy="60" r="30"           fill="none" stroke="currentColor" strokeOpacity=".1" />
                  <circle cx="60" cy="60" r="4"            fill="currentColor" fillOpacity=".4" />
                </svg>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ══ INSIGHTS ═════════════════════════════════════════ */}
      <ScrollReveal as="section" className="wrap sec">
        <div
          style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", gap: 16, flexWrap: "wrap",
            marginBottom: 28,
          }}
        >
          <div>
            <div className="eyebrow">Updates</div>
            <h2>Insights &amp; news</h2>
          </div>
        </div>

        <div
          className="card reveal"
          style={{
            display: "flex", alignItems: "center", gap: 20,
            borderStyle: "dashed",
          }}
        >
          <div
            style={{
              flexShrink: 0, width: 36, height: 36,
              borderRadius: 4,
              background: "var(--olive-15)",
              border: "1px solid var(--olive-25)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--olive)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </div>
          <div>
            <strong style={{ fontSize: ".95rem" }}>No articles published yet.</strong>
            <p className="muted" style={{ margin: "4px 0 0", fontSize: ".875rem" }}>
              Announcements and company updates will appear here.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
