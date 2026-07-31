"use client";

import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "../lib/images";
import { sectionH2Class, sectionLedeClass } from "../lib/sectionTypography";

const GALLERY = [IMAGES.heroTechnician, IMAGES.bathroomRenovation, IMAGES.heatingSystem];

const SERVICES = [
  {
    title: "Putkityöt",
    text: "Hanojen, wc-istuinten, vesikalusteiden asennukset ja korjaukset.",
    image: GALLERY[0],
    icon: (
      <path d="M7 21V10.5M17 21V10.5M4 10.5l8-6 8 6M9.5 21v-5a2.5 2.5 0 015 0v5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Vuotokorjaukset",
    text: "Vuotojen paikannus ja korjaus nopeasti.",
    image: GALLERY[1],
    icon: (
      <path d="M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    title: "Viemärihuollot",
    text: "Avaukset, huuhtelut ja ongelmien selvitys.",
    image: GALLERY[2],
    icon: (
      <path d="M4 9l1.5-5h13L20 9M4 9h16M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9M9 20v-5a1 1 0 011-1h4a1 1 0 011 1v5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Lämmitysjärjestelmät",
    text: "Huolto ja asennukset.",
    image: GALLERY[0],
    icon: (
      <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Saneeraukset",
    text: "Kylpyhuoneet ja kodin remontit.",
    image: GALLERY[1],
    icon: (
      <path d="M4 21V10.5L12 4l8 6.5V21M9 21v-6h6v6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Taloyhtiöpalvelut",
    text: "Huollot ja suuremmat projektit.",
    image: GALLERY[2],
    icon: (
      <path d="M4 20.5V5a1 1 0 011-1h6a1 1 0 011 1v15.5M12 20.5v-8a1 1 0 011-1h6a1 1 0 011 1v8M7.5 8h1M7.5 12h1M7.5 16h1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Services() {
  const [activeImage, setActiveImage] = useState(SERVICES[0].image);

  return (
    <section id="palvelut" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <h2 className={sectionH2Class}>Palvelumme</h2>
        <p className={sectionLedeClass}>
          Yhdestä hanan vaihdosta koko taloyhtiön LVI-urakkaan — hoidamme sen luotettavasti
          alusta loppuun.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="flex flex-col overflow-hidden rounded-[1.75rem] bg-[var(--color-accent)]">
            {Array.from({ length: Math.ceil(SERVICES.length / 2) }, (_, rowIdx) => {
              const rowItems = SERVICES.slice(rowIdx * 2, rowIdx * 2 + 2);
              const isLastRow = rowIdx === Math.ceil(SERVICES.length / 2) - 1;

              return (
                <div
                  key={rowIdx}
                  className={`grid grid-cols-1 divide-y divide-white/20 sm:grid-cols-2 sm:divide-x sm:divide-y-0 ${
                    !isLastRow ? "border-b border-white/20" : ""
                  }`}
                >
                  {rowItems.map((service) => (
                    <button
                      key={service.title}
                      type="button"
                      onMouseEnter={() => setActiveImage(service.image)}
                      onFocus={() => setActiveImage(service.image)}
                      className="group flex flex-col gap-3 p-6 text-left transition-colors duration-200 hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none md:p-7"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors duration-200 group-hover:bg-white/25">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          {service.icon}
                        </svg>
                      </span>
                      <h3 className="font-heading text-[16px] font-bold tracking-[-0.01em] text-white">
                        {service.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-white/80">{service.text}</p>
                    </button>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] lg:min-h-0">
            {GALLERY.map((src) => (
              <Image
                key={src}
                src={src}
                alt="LVI-asentaja töissä kotitalouden kylpyhuoneessa"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={`object-cover transition-opacity duration-500 ${
                  activeImage === src ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
