import Image from "next/image";
import { IMAGES } from "../lib/images";

const CARDS = [
  {
    title: "Kokemus",
    text: "Vuosien kokemus LVI-alalta.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Luotettavuus",
    text: "Ammattitaitoista palvelua koteihin ja yrityksille.",
    icon: (
      <path
        d="M12 3l7 3v5.5c0 4.6-3 8.7-7 9.5-4-.8-7-4.9-7-9.5V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Nopeus",
    text: "Apua myös kiireellisissä tilanteissa.",
    icon: (
      <path
        d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
];

const IMAGE_CELLS = [IMAGES.heroTechnician, IMAGES.bathroomRenovation];

const CELLS = [
  { type: "image" as const, src: IMAGE_CELLS[0] },
  { type: "text" as const, card: CARDS[0] },
  { type: "image" as const, src: IMAGE_CELLS[1] },
  { type: "text" as const, card: CARDS[1] },
  { type: "image" as const, src: IMAGES.heatingSystem },
  { type: "text" as const, card: CARDS[2] },
];

export default function TrustIntro() {
  return (
    <section className="bg-[var(--color-bg-light)] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <h2 className="font-heading text-3xl font-semibold tracking-[-0.015em] text-[var(--color-ink)] md:text-4xl">
          Putkityöt kerralla kuntoon
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CELLS.map((cell, i) =>
            cell.type === "image" ? (
              <div
                key={i}
                className="reveal group relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <Image
                  src={cell.src}
                  alt=""
                  fill
                  quality={70}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
            ) : (
              <div
                key={i}
                className="reveal group flex aspect-[4/3] w-full flex-col justify-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-7 transition-colors duration-200 hover:bg-[var(--color-accent)]"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-tint)] text-[var(--color-accent)] transition-colors duration-200 group-hover:bg-[var(--color-accent-tint)] group-hover:text-[var(--color-accent)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {cell.card.icon}
                  </svg>
                </span>
                <h3 className="font-heading text-lg font-bold tracking-[-0.01em] text-[var(--color-ink)] group-hover:text-white">
                  {cell.card.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[var(--color-ink-muted)] group-hover:text-white">{cell.card.text}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
