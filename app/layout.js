import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "LM Holdings | Building Businesses. Creating Possibilities.",
    template: "%s | LM Holdings",
  },
  description:
    "LM Holdings is a Malawi-based holding company with the ambition to build, partner with and grow businesses across industries.",
  icons: { icon: "/logo/lm-monogram.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
