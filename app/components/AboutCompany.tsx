"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "../lib/images";

const TABS = [
  {
    label: "Tehtävämme",
    text: "Tarjoamme nopeaa, luotettavaa ja laadukasta LVI-palvelua, joka on räätälöity asiakkaan tarpeisiin. Haluamme olla se kumppani, johon voi luottaa niin kotona kuin taloyhtiössä.",
  },
  {
    label: "Osaamisemme",
    text: "Vuosien kokemus putkitöistä, lämmitysjärjestelmistä ja saneerauksista. Olemme ratkoneet lähes kaiken vanhojen kiinteistöjen ongelmista uusien kohteiden suuriin urakoihin.",
  },
  {
    label: "Arvomme",
    text: "Rehellisyys, täsmällisyys ja siisti jälki. Kerromme suoraan mitä työ vaatii ja mitä se maksaa — ja pidämme kiinni siitä, mitä lupaamme.",
  },
];

const CHECKS = [
  "Luotettavaa, nopeaa ja tehokasta palvelua",
  "Ammattitaitoiset asentajat, laadukas jälki",
  "Selkeä hinnoittelu, ei yllätyksiä",
  "Tyytyväisyystakuu jokaisella käynnillä",
];

const STATS = [
  { value: "Kok.", label: "vuosien kokemus" },
  { value: "98%", label: "asiakastyytyväisyys" },
  { value: "1 tunnin", label: "vasteaika" },
  { value: "24/7", label: "päivystys" },
];

export default function AboutCompany() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="yritys" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal aspect-[4/3] w-full overflow-hidden rounded-[28px]">
            <Image
              src={IMAGES.heatingSystem}
              alt="Pääkaupungin Putkihuolto -asentajat työn ääressä"
              width={640}
              height={480}
              quality={70}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)]">
              Keitä olemme
            </p>
            <h2 className="balance mt-3 font-heading text-3xl font-bold tracking-[-0.02em] text-[var(--color-ink)] md:text-4xl">
              LVI-ratkaisut jokaiseen kotiin
            </h2>

            <div className="mt-7 flex items-center gap-6 border-b border-[var(--color-border)]">
              {TABS.map((tab, i) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`relative pb-3 text-[15px] font-semibold transition-colors duration-150 ${
                    activeTab === i ? "text-[var(--color-accent)]" : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {tab.label}
                  {activeTab === i && (
                    <span className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                  )}
                </button>
              ))}
            </div>

            <p className="pretty mt-5 max-w-[52ch] text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
              {TABS[activeTab].text}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-1">
              {CHECKS.map((check) => (
                <div key={check} className="flex items-start gap-2.5">
                  <span className="mt-0 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-tint)] text-[var(--color-accent)]">
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-[14px] leading-relaxed font-medium text-[var(--color-ink)]">{check}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-[var(--color-border)] pt-10 sm:grid-cols-4 md:mt-20">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-heading text-3xl font-extrabold text-[var(--color-ink)] md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[14px] text-[var(--color-ink-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
