import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import { MorfoosGlobalProvider } from "@morfoos/core/providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileStickyCta from "./components/MobileStickyCta";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Fallback baseline metadata metrics
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={`${manrope.variable} ${sourceSans.variable}`}>
      <body>
        {/* Automatically activates case-insensitive link delegation and form monitoring */}
        <MorfoosGlobalProvider
          siteId={process.env.NEXT_PUBLIC_SITE_ID || "development_fallback"}
          autoTrackClicks={true}
        >
          <a
            href="#sisalto"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-[var(--color-dark)] focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
          >
            Siirry sisältöön
          </a>
          <Header />
          {children}
          <Footer />
          <MobileStickyCta />
        </MorfoosGlobalProvider>
      </body>
    </html>
  );
}
