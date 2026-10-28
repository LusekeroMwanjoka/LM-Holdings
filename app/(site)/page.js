import Image from "next/image";
import Link from "next/link";
const sectors = [
  ["Technology and digital", "Software, IT services, cloud and digital platforms."],
  ["Finance and investments", "Investment and fintech ventures, subject to regulation."],
  ["Property and infrastructure", "Real estate, development and construction."],
  ["Commerce and trade", "Retail, distribution, import and export."],
  ["Agriculture and industry", "Agribusiness, processing and manufacturing."],
  ["Professional services", "Consulting, logistics, media and hospitality."],
];
const principles = [
  ["Build with discipline", "Clear plans, careful use of capital and honest reporting."],
  ["Partner with intent", "Relationships that bring skill, access and trust to each venture."],
  ["Think long term", "Lasting value matters more than speed for its own sake."],
];
export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div>
          <h1>Building Businesses. Creating Possibilities.</h1>
          <p className="lead">LM Holdings is a Malawi-based holding company. We set out to build, partner with and grow businesses across industries, with discipline and a long view.</p>
          <div className="row">
            <Link className="btn" href="/businesses">Explore our businesses</Link>
            <Link className="btn alt" href="/contact">Start a conversation</Link>
          </div>
        </div>
        <div className="art">
          <Image src="/images/hero.svg" alt="Abstract landscape of hills and a rising sun" fill priority unoptimized style={{ objectFit: "cover" }} />
          <div className="float">
            <div><b>Malawi</b>Home market</div><div><b>Southern Africa</b>Regional direction</div><div><b>Beyond</b>Long-term ambition</div>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="three">
          {principles.map(([t, d]) => (<div key={t}><h3>{t}</h3><p className="muted">{d}</p></div>))}
        </div>
        <p className="note" style={{ marginTop: 32 }}>Placeholder copy for review. Company facts, history and achievements will be added only once verified.</p>
      </section>

      <section className="wrap" style={{ padding: "0 20px" }}>
        <div className="ban">
          <div>
            <h2>A parent company for ventures yet to be built</h2>
            <p>We are early in this journey. Our ambition is to create opportunities through innovation, partnership and entrepreneurship, starting in Malawi.</p>
            <div className="row"><Link className="btn gold" href="/contact">Talk to us</Link></div>
          </div>
          <Image src="/images/banner.svg" alt="Connected points across a ridge line" width={800} height={560} unoptimized />
        </div>
      </section>

      <section className="sec ivory" style={{ marginTop: 64 }}>
        <div className="wrap">
          <h2>Sectors we may build in</h2>
          <p className="muted">Directions we are exploring. None is a statement of current operations.</p>
          <div className="bento">
            {sectors.map(([t, d], i) => (
              <div key={t} className={`tile t${i}`}>
                <svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r={52 - i * 2} fill="none" stroke="currentColor" strokeOpacity=".3" /><circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeOpacity=".3" /><circle cx="60" cy="60" r="4" fill="currentColor" /></svg>
                <h3>{t}</h3><p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <h2>Insights and news</h2>
        <div className="card"><strong>No articles published yet.</strong><p className="muted" style={{ margin: "6px 0 0" }}>Announcements and company updates will appear here.</p></div>
      </section>
    </>
  );
}
