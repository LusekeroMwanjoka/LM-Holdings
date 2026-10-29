"use client";
import { useState } from "react";
import Link from "next/link";
import { Mark } from "@/components/Logo";

// FICTIONAL demonstration data.
// Replace with database-backed data behind authentication.
const months   = ["May", "Jun", "Jul", "Aug", "Sep", "Oct"];
const rev      = [42, 48, 51, 47, 58, 63];
const exp      = [30, 33, 35, 34, 38, 40];
const biz      = [
  ["LM [Technology Venture]", "Technology",  "Planned"],
  ["LM [Property Venture]",   "Property",    "Planned"],
  ["LM [Trading Venture]",    "Commerce",    "Developing"],
];
const projects = [
  ["Project A", "High",   "30 Nov", 70],
  ["Project B", "Medium", "15 Dec", 40],
  ["Project C", "Low",    "31 Jan", 15],
];
const roles = [
  ["Administrator",         "All modules, users, settings, audit log"],
  ["Executive",             "All business data, reports, documents"],
  ["Business unit manager", "Own unit's data and projects"],
  ["Finance or operations", "Financial and project data"],
  ["Read-only viewer",      "Approved reports only"],
];

const tabs = {
  ov: "Overview",
  pf: "Portfolio",
  fn: "Financials",
  pj: "Projects",
  us: "Users & access",
};

export default function Dashboard() {
  const [t, setT] = useState("ov");
  const [q, setQ] = useState("");

  const rows = biz.filter((b) =>
    (b[0] + b[1]).toLowerCase().includes(q.toLowerCase())
  );
  const mx  = Math.max(...rev);
  const sum = (a) => a.reduce((x, y) => x + y, 0);

  return (
    <div className="dash">
      {/* ── Sidebar ───────────────────────────────────────────── */}
      <aside aria-label="Dashboard navigation">
        <Link
          href="/"
          className="logo"
          style={{ color: "var(--cream)", margin: "4px 4px 22px", display: "inline-flex" }}
          aria-label="LM Holdings home"
        >
          <Mark size={26} color="var(--cream)" />
          <b style={{ letterSpacing: ".18em", fontSize: ".88rem" }}>LM HOLDINGS</b>
        </Link>

        <div
          style={{
            fontSize: ".68rem", fontWeight: 600, letterSpacing: ".1em",
            textTransform: "uppercase", color: "rgba(254,250,224,.3)",
            padding: "0 12px", marginBottom: 6,
          }}
        >
          Navigation
        </div>

        {Object.entries(tabs).map(([k, v]) => (
          <button
            key={k}
            aria-current={t === k ? "page" : undefined}
            onClick={() => setT(k)}
          >
            {v}
          </button>
        ))}

        <div
          style={{
            height: 1, background: "rgba(254,250,224,.08)",
            margin: "14px 6px",
          }}
          aria-hidden="true"
        />

        <Link
          href="/"
          style={{
            display: "block", padding: "8px 12px",
            fontSize: ".83rem", color: "rgba(254,250,224,.35)",
            textDecoration: "none",
            transition: "color 180ms ease",
          }}
        >
          ← Back to site
        </Link>
      </aside>

      {/* ── Main ──────────────────────────────────────────────── */}
      <main>
        <div
          style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", gap: 16, flexWrap: "wrap",
            marginBottom: 18,
          }}
        >
          <div>
            <div
              style={{
                fontSize: ".68rem", fontWeight: 600, letterSpacing: ".1em",
                textTransform: "uppercase", color: "var(--ink-60)", marginBottom: 3,
              }}
            >
              Dashboard
            </div>
            <h1 style={{ fontSize: "1.6rem", margin: 0 }}>{tabs[t]}</h1>
          </div>

          <input
            style={{ maxWidth: 250 }}
            type="search"
            placeholder="Search businesses…"
            aria-label="Search businesses"
            value={q}
            onChange={(e) => { setQ(e.target.value); setT("pf"); }}
          />
        </div>

        <p className="note" style={{ marginBottom: 22 }}>
          Prototype with fictional demonstration data. Figures do not represent LM Holdings.
          Authentication, role-based authorization and a database are not implemented yet.
        </p>

        {/* ── Overview ──────────────────────────────────── */}
        {t === "ov" && (
          <>
            <div className="kpis">
              {[
                { label: "Business units",    value: "0 active" },
                { label: "Revenue (sample)",  value: `${sum(rev)}M` },
                { label: "Expenses (sample)", value: `${sum(exp)}M` },
                { label: "Open projects",     value: projects.length },
              ].map(({ label, value }) => (
                <div key={label} className="kpi">
                  <small>{label}</small>
                  <strong className="num">{value}</strong>
                </div>
              ))}
            </div>

            <div className="card" style={{ marginTop: 0 }}>
              <h3 style={{ marginBottom: 18, fontSize: ".95rem" }}>
                Revenue by month{" "}
                <span style={{ fontWeight: 400, color: "var(--ink-60)", fontSize: ".83rem" }}>
                  (sample, MWK millions)
                </span>
              </h3>
              <div
                className="bars"
                role="img"
                aria-label="Sample monthly revenue bar chart"
              >
                {rev.map((v, i) => (
                  <div
                    key={i}
                    style={{ height: `${(v / mx) * 100}%` }}
                    title={`${months[i]}: ${v}M`}
                  >
                    <span>{months[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ── Portfolio ────────────────────────────────── */}
        {t === "pf" && (
          <div className="card">
            <table>
              <thead>
                <tr>
                  <th>Business (sample)</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((b) => (
                  <tr key={b[0]}>
                    <td>{b[0]}</td>
                    <td>{b[1]}</td>
                    <td>
                      <span
                        className={`tag ${
                          b[2].toLowerCase() === "developing" ? "dev" : "planned"
                        }`}
                      >
                        {b[2]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!rows.length && (
              <p className="muted" style={{ marginTop: 14, fontSize: ".875rem" }}>
                No businesses match your search. Clear the search box to see all entries.
              </p>
            )}
          </div>
        )}

        {/* ── Financials ───────────────────────────────── */}
        {t === "fn" && (
          <div className="card">
            <table>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Revenue</th>
                  <th>Expenses</th>
                  <th>Net</th>
                </tr>
              </thead>
              <tbody>
                {months.map((m, i) => (
                  <tr key={m}>
                    <td>{m}</td>
                    <td className="num">{rev[i]}.0M</td>
                    <td className="num">{exp[i]}.0M</td>
                    <td className="num" style={{ color: "var(--ok)", fontWeight: 600 }}>
                      {rev[i] - exp[i]}.0M
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── Projects ─────────────────────────────────── */}
        {t === "pj" && (
          <div className="card">
            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Priority</th>
                  <th>Due</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p[0]}>
                    <td>{p[0]}</td>
                    <td>
                      <span
                        className="tag"
                        style={{
                          color:
                            p[1] === "High"   ? "var(--bad)"  :
                            p[1] === "Medium" ? "var(--warn)" : "var(--ink-60)",
                          background:
                            p[1] === "High"   ? "rgba(156,32,32,.07)"  :
                            p[1] === "Medium" ? "rgba(122,80,0,.07)"   : "var(--ink-06)",
                          borderColor:
                            p[1] === "High"   ? "rgba(156,32,32,.2)"   :
                            p[1] === "Medium" ? "rgba(122,80,0,.2)"    : "var(--ink-12)",
                        }}
                      >
                        {p[1]}
                      </span>
                    </td>
                    <td style={{ color: "var(--ink-60)" }}>{p[2]}</td>
                    <td style={{ minWidth: 150 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            flex: 1, height: 4, borderRadius: 2,
                            background: "var(--ink-12)", overflow: "hidden",
                          }}
                          role="progressbar"
                          aria-valuenow={p[3]}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${p[0]} progress`}
                        >
                          <div
                            style={{
                              width: `${p[3]}%`, height: "100%",
                              background: "var(--ink)",
                              borderRadius: 2,
                            }}
                          />
                        </div>
                        <span style={{ fontSize: ".78rem", color: "var(--ink-60)", flexShrink: 0 }}>
                          {p[3]}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── Users & access ───────────────────────────── */}
        {t === "us" && (
          <div className="card">
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Planned access</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((r) => (
                  <tr key={r[0]}>
                    <td style={{ fontWeight: 600 }}>{r[0]}</td>
                    <td style={{ color: "var(--ink-60)" }}>{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
