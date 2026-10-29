"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  ["/", "Home"],
  ["/businesses", "Businesses"],
  ["/contact", "Contact"],
  ["/dashboard", "Dashboard"],
];

export default function Header() {
  const path = usePathname();
  return (
    <header className="site">
      <div className="bar">
        <Link href="/" aria-label="LM Holdings home">
          <Logo />
        </Link>

        <nav aria-label="Main navigation">
          {navLinks.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={path === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-cta" aria-label="Start a conversation">
          Get in touch
        </Link>
      </div>
    </header>
  );
}
