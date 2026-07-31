import React from "react";
import { generateMorfoosSEO } from "@morfoos/core/seo";
import { LocalBusinessSchema } from "@morfoos/core/components/schemas";
import Hero from "./components/Hero";
import QuickBookingBar from "./components/QuickBookingBar";
import TrustIntro from "./components/TrustIntro";
import EmergencyService from "./components/EmergencyService";
import Services from "./components/Services";
import AudienceSplit from "./components/AudienceSplit";
import Renovation from "./components/Renovation";
import Reviews from "./components/Reviews";
import AboutCompany from "./components/AboutCompany";
import FinalCta from "./components/FinalCta";
import Contact from "./components/Contact";

// 1. Compile immutable page structural SEO parameters
export const generateMetadata = () => generateMorfoosSEO({
  title: "Pääkaupungin Putkihuolto | LVI- ja saneerauspalvelut pääkaupunkiseudulla",
  description:
    "Luotettavat LVI- ja saneerauspalvelut pääkaupunkiseudulla ja Etelä-Suomessa. Vuosien kokemus, 24/7 päivystys. Pyydä tarjous jo tänään.",
  path: "/",
  ogImage: "/assets/default-og.jpg"
});

export default function Page() {
  return (
    <main id="sisalto" className="w-full pb-16 lg:pb-0">
      {/* 2. Structured JSON-LD Schema data injected cleanly into the markup */}
      <LocalBusinessSchema
        name="Pääkaupungin Putkihuolto"
        phone="+358400000012"
        email="info@paakaupungin-putkihuolto.fi"
      />

      <Hero />
      <QuickBookingBar />
      <TrustIntro />
      <EmergencyService />
      <Services />
      <AudienceSplit />
      <Renovation />
      <Reviews />
      <AboutCompany />
      <FinalCta />
      <Contact />
    </main>
  );
}
