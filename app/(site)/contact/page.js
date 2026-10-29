"use client";
import { useState } from "react";

const infoItems = [
  {
    label: "Office",
    value: "[Address to be confirmed]",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "[To be supplied]",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    value: "[To be supplied]",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

const enquiryTypes = [
  "Partnership",
  "Investment",
  "Supplier or vendor",
  "Careers",
  "Media",
  "General",
];

export default function Contact() {
  const [msg, setMsg] = useState({ text: "", ok: true });

  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const out = await res.json();
    setMsg({ text: out.message, ok: res.ok });
    if (res.ok) e.target.reset();
  }

  return (
    <section className="wrap sec">
      {/* Page header */}
      <div style={{ maxWidth: "52ch", marginBottom: 40 }}>
        <div className="eyebrow">Get in touch</div>
        <h1 style={{ fontSize: "clamp(2.2rem,4vw,3rem)", marginBottom: 10 }}>
          Contact LM Holdings
        </h1>
        <p className="muted" style={{ fontSize: ".95rem" }}>
          Whether you have a partnership idea, investment question or just want to
          learn more — we would love to hear from you.
        </p>
      </div>

      <p className="note" style={{ marginBottom: 36 }}>
        Prototype: enquiries are validated but not stored or emailed yet. Contact
        details below are placeholders until supplied.
      </p>

      <div className="contact-grid">
        {/* Left: info panel */}
        <div className="contact-info-card">
          <h3>Contact information</h3>

          {infoItems.map(({ label, value, icon }) => (
            <div className="contact-info-item" key={label}>
              <span className="ci-icon" aria-hidden="true">{icon}</span>
              <div>
                <div
                  style={{
                    fontSize: ".7rem", fontWeight: 600,
                    letterSpacing: ".08em", textTransform: "uppercase",
                    color: "rgba(254,250,224,.4)", marginBottom: 2,
                  }}
                >
                  {label}
                </div>
                <span style={{ fontSize: ".875rem" }}>{value}</span>
              </div>
            </div>
          ))}

          {/* Response time notice */}
          <div
            style={{
              marginTop: 32,
              padding: "16px 18px",
              background: "rgba(221,161,94,.1)",
              border: "1px solid rgba(221,161,94,.2)",
              borderRadius: 4,
            }}
          >
            <p style={{ margin: 0, fontSize: ".83rem", color: "rgba(254,250,224,.6)", lineHeight: 1.6 }}>
              We aim to respond to all enquiries within{" "}
              <strong style={{ color: "var(--tan)" }}>2–3 business days</strong>.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className="contact-form-card">
          <h3 style={{ marginBottom: 24, fontSize: "1.1rem" }}>Send us a message</h3>

          <form onSubmit={submit} noValidate>
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}
            >
              <div>
                <label htmlFor="name">Full name</label>
                <input
                  id="name" name="name"
                  required autoComplete="name"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email" name="email"
                  type="email" required autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <label htmlFor="type">Enquiry type</label>
            <select id="type" name="type">
              {enquiryTypes.map((o) => <option key={o}>{o}</option>)}
            </select>

            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message"
              rows={5} required
              placeholder="Tell us about your enquiry…"
            />

            <div style={{ marginTop: 4 }}>
              <button
                className="btn gold"
                type="submit"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Send enquiry
              </button>
            </div>

            {msg.text && (
              <p
                role="status"
                aria-live="polite"
                style={{
                  color: msg.ok ? "var(--ok)" : "var(--bad)",
                  marginTop: 12,
                  fontSize: ".875rem",
                  fontWeight: 600,
                }}
              >
                {msg.ok ? "Message sent." : msg.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
