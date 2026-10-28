"use client";
import { useState } from "react";
export default function Contact() {
  const [msg, setMsg] = useState({ text: "", ok: true });
  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    const out = await res.json();
    setMsg({ text: out.message, ok: res.ok });
    if (res.ok) e.target.reset();
  }
  return (
    <section className="wrap sec" style={{ maxWidth: 740 }}>
      <h1 style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)" }}>Contact LM Holdings</h1>
      <p className="note">Prototype: enquiries are validated but not stored or emailed yet. Contact details below are placeholders until supplied.</p>
      <form onSubmit={submit}>
        <label htmlFor="name">Full name</label><input id="name" name="name" required autoComplete="name" />
        <label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" />
        <label htmlFor="type">Enquiry type</label>
        <select id="type" name="type">{["Partnership", "Investment", "Supplier or vendor", "Careers", "Media", "General"].map((o) => <option key={o}>{o}</option>)}</select>
        <label htmlFor="message">Message</label><textarea id="message" name="message" rows={5} required />
        <p style={{ marginTop: 16 }}><button className="btn" type="submit">Send enquiry</button></p>
        <p role="status" aria-live="polite" style={{ color: msg.ok ? "var(--ok)" : "var(--bad)" }}>{msg.text}</p>
      </form>
      <p className="muted">Office: [to be confirmed] · Phone: [to be supplied] · Email: [to be supplied]</p>
    </section>
  );
}
