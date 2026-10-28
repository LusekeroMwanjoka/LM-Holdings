import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700"], variable: "--fd" });
const body = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--fb" });
export const metadata = {
  title: { default: "LM Holdings | Building Businesses. Creating Possibilities.", template: "%s | LM Holdings" },
  description: "LM Holdings is a Malawi-based holding company with the ambition to build, partner with and grow businesses across industries.",
  icons: { icon: "/logo/lm-monogram.svg" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
