import Link from "next/link";
import Logo from "./Logo";

const cols = [
  {
    heading: "Company",
    links: [
      ["/", "About LM Holdings"],
      ["/businesses", "Our Businesses"],
      ["/contact", "Contact Us"],
    ],
  },
  {
    heading: "Sectors",
    links: [
      ["#sectors", "Technology"],
      ["#sectors", "Finance"],
      ["#sectors", "Property"],
      ["#sectors", "Commerce"],
    ],
  },
  {
    heading: "Legal",
    links: [
      ["#", "Privacy Policy (draft)"],
      ["#", "Terms of Use (draft)"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        {/* Brand column */}
        <div className="foot-col">
          <Logo size={28} color="#fefae0" />
          <p
            style={{
              marginTop: 16,
              fontSize: ".85rem",
              color: "rgba(254,250,224,.5)",
              maxWidth: "28ch",
              lineHeight: 1.65,
            }}
          >
            A Malawi-based holding company building businesses with discipline
            and a long view.
          </p>
          <p style={{ fontSize: ".78rem", color: "rgba(254,250,224,.3)", marginTop: 10 }}>
            Company registration: [to be supplied]
          </p>
        </div>

        {/* Link columns */}
        {cols.map(({ heading, links }) => (
          <div className="foot-col" key={heading}>
            <h4>{heading}</h4>
            {links.map(([href, label]) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="foot-bottom">
        <small>© {new Date().getFullYear()} LM Holdings. All rights reserved.</small>
        <small>Malawi · Southern Africa · Beyond</small>
      </div>
    </footer>
  );
}
