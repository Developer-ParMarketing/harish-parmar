import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Cormorant_Garamond, Allura, Jost } from "next/font/google";

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

const script = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});

export const metadata = {
  title: "Harish Parmar",
  description: "Harish Parmar",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${script.variable}`}
    >
      <body className={`${sans.className} flex min-h-full flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}