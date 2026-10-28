"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
const links = [["/", "Home"], ["/businesses", "Businesses"], ["/contact", "Contact"], ["/dashboard", "Dashboard"]];
export default function Header() {
  const path = usePathname();
  return (
    <header className="site">
      <div className="bar">
        <Link href="/" aria-label="LM Holdings home"><Logo /></Link>
        <nav aria-label="Main">
          {links.map(([h, t]) => (
            <Link key={h} href={h} aria-current={path === h ? "page" : undefined}>{t}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
