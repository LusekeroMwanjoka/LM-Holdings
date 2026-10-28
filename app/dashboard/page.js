"use client";
import { useState } from "react";
import Link from "next/link";
import { Mark } from "@/components/Logo";
// FICTIONAL demonstration data. Replace with database-backed data behind authentication.
const months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], rev = [42, 48, 51, 47, 58, 63], exp = [30, 33, 35, 34, 38, 40];
const biz = [["LM [Technology Venture]", "Technology", "Planned"], ["LM [Property Venture]", "Property", "Planned"], ["LM [Trading Venture]", "Commerce", "Developing"]];
const projects = [["Project A", "High", "30 Nov", 70], ["Project B", "Medium", "15 Dec", 40], ["Project C", "Low", "31 Jan", 15]];
const roles = [["Administrator", "All modules, users, settings, audit log"], ["Executive", "All business data, reports, documents"], ["Business unit manager", "Own unit's data and projects"], ["Finance or operations", "Financial and project data"], ["Read-only viewer", "Approved reports only"]];
const tabs = { ov: "Overview", pf: "Portfolio", fn: "Financials", pj: "Projects", us: "Users and access" };
export default function Dashboard() {
  const [t, setT] = useState("ov"), [q, setQ] = useState("");
  const rows = biz.filter((b) => (b[0] + b[1]).toLowerCase().includes(q.toLowerCase()));
  const mx = Math.max(...rev), sum = (a) => a.reduce((x, y) => x + y, 0);
  return (
    <div className="dash">
      <aside aria-label="Dashboard navigation">
        <Link href="/" className="logo" style={{ color: "#F7F4EC", margin: "4px 6px 18px" }}><Mark size={30} color="#F7F4EC" /><b>LM HOLDINGS</b></Link>
        {Object.entries(tabs).map(([k, v]) => (<button key={k} aria-current={t === k ? "page" : undefined} onClick={() => setT(k)}>{v}</button>))}
      </aside>
      <main>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <h1 style={{ fontSize: "1.8rem" }}>{tabs[t]}</h1>
          <input style={{ maxWidth: 260 }} type="search" placeholder="Search businesses" aria-label="Search businesses" value={q} onChange={(e) => { setQ(e.target.value); setT("pf"); }} />
        </div>
        <p className="note">Prototype with fictional demonstration data. Figures do not represent LM Holdings. Authentication, role-based authorization and a database are not implemented yet.</p>
        {t === "ov" && (<>
          <div className="kpis">
            <div className="card kpi"><small>Business units</small><strong>0 active</strong></div>
            <div className="card kpi"><small>Revenue (sample)</small><strong className="num">{sum(rev)}M</strong></div>
            <div className="card kpi"><small>Expenses (sample)</small><strong className="num">{sum(exp)}M</strong></div>
            <div className="card kpi"><small>Open projects (sample)</small><strong>{projects.length}</strong></div>
          </div>
          <div className="card"><h3>Revenue by month (sample, MWK millions)</h3>
            <div className="bars" role="img" aria-label="Sample monthly revenue">{rev.map((v, i) => <div key={i} style={{ height: `${(v / mx) * 100}%` }}><span>{months[i]}</span></div>)}</div>
          </div>
        </>)}
        {t === "pf" && (<div className="card"><table><thead><tr><th>Business (sample)</th><th>Category</th><th>Status</th></tr></thead><tbody>
          {rows.map((b) => <tr key={b[0]}><td>{b[0]}</td><td>{b[1]}</td><td>{b[2]}</td></tr>)}</tbody></table>
          {!rows.length && <p className="muted">No businesses match your search. Clear the search box to see all entries.</p>}</div>)}
        {t === "fn" && (<div className="card"><table><thead><tr><th>Month</th><th>Revenue</th><th>Expenses</th><th>Net</th></tr></thead><tbody>
          {months.map((m, i) => <tr key={m}><td>{m}</td><td className="num">{rev[i]}.0M</td><td className="num">{exp[i]}.0M</td><td className="num">{rev[i] - exp[i]}.0M</td></tr>)}</tbody></table></div>)}
        {t === "pj" && (<div className="card"><table><thead><tr><th>Project</th><th>Priority</th><th>Due</th><th>Progress</th></tr></thead><tbody>
          {projects.map((p) => <tr key={p[0]}><td>{p[0]}</td><td>{p[1]}</td><td>{p[2]}</td><td><progress max="100" value={p[3]} aria-label="Progress" /> {p[3]}%</td></tr>)}</tbody></table></div>)}
        {t === "us" && (<div className="card"><table><thead><tr><th>Role</th><th>Planned access</th></tr></thead><tbody>
          {roles.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td></tr>)}</tbody></table></div>)}
      </main>
    </div>
  );
}
