import Link from "next/link";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="foot">
      <Logo size={30} color="#F7F4EC" />
      <p>A Malawi-based holding company. Company registration details: [to be supplied].</p>
      <p><Link href="/contact">Contact</Link> · Privacy and terms: [draft pending legal review]</p>
      <small>© LM Holdings. All rights reserved.</small>
    </footer>
  );
}
