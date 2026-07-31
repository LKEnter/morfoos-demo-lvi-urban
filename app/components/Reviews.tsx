"use client";

import { useEffect, useRef, useState } from "react";

const REVIEWS = [
  {
    quote:
      "Putki vuoti keskellä yötä ja he vastasivat puhelimeen heti. Asentaja oli paikalla alle tunnissa ja vahinko saatiin pysäytettyä nopeasti.",
    name: "Anna Virtanen",
    meta: "Yksityishenkilö",
  },
  {
    quote:
      "Kylpyhuoneremontti sujui alusta loppuun ammattimaisesti. Aikataulussa pysyttiin ja lopputulos on todella siisti.",
    name: "Mikko Laine",
    meta: "Yrityksen edustaja",
  },
  {
    quote:
      "Taloyhtiömme käyttää heitä säännöllisesti huoltotöihin. Aina asiallista palvelua ja selkeät raportit tehdyistä töistä.",
    name: "Päivi Korhonen",
    meta: "Isännöitsijä",
  },
  {
    quote: "Nopea ja asiantunteva apu viemäritukokseen. Suosittelen lämpimästi.",
    name: "Jussi Mäkinen",
    meta: "Yksityishenkilö",
  },
  {
    quote:
      "Lämmitysjärjestelmän huolto hoidettiin ammattitaidolla ja kaikki selitettiin ymmärrettävästi.",
    name: "Elina Salo",
    meta: "Yksityishenkilö",
  },
  {
    quote: "Rehellinen hinta-arvio etukäteen ja työ tehtiin juuri niin kuin luvattiin.",
    name: "Tomi Nieminen",
    meta: "Taloyhtiön hallituksen puheenjohtaja",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[var(--color-accent)]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.9 29.6 5 24 5c-7.7 0-14.4 4.3-17.7 10.7z" />
      <path fill="#4CAF50" d="M24 44c5.5 0 10.4-1.8 14-4.9l-6.5-5.5c-2 1.5-4.6 2.4-7.5 2.4-5.2 0-9.6-3.5-11.2-8.2l-6.5 5C9.6 39.6 16.3 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.5 5.5C41.4 36 44 30.7 44 24c0-1.2-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-white p-7">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-tint)] font-heading text-[15px] font-bold text-[var(--color-accent)]">
            {review.name.charAt(0)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold text-[var(--color-ink)]">{review.name}</p>
            <p className="truncate text-[12.5px] text-[var(--color-ink-muted)]">{review.meta}</p>
          </div>
        </div>
        <div className="mt-3">
          <Stars />
        </div>
        <blockquote className="pretty mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]">
          {review.quote}
        </blockquote>
      </div>
    </figure>
  );
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pageCount, setPageCount] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const pages = Math.max(1, Math.round(track.scrollWidth / track.clientWidth));
      setPageCount(pages);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const onScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setActiveIndex(index);
    };
    track.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      resizeObserver.disconnect();
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToPage = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-light)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.015em] text-[var(--color-ink)] md:text-4xl">
              Mitä asiakkaamme sanovat
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
              Suurin osa uusista asiakkaistamme tulee suositusten kautta — se kertoo enemmän kuin
              mikään mainoslause.
            </p>
          </div>
        </div>

        <div className="relative mt-12">
          <div
            ref={trackRef}
            className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
          >
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="w-full shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {pageCount > 1 && (
            <>
              <button
                type="button"
                onClick={() => scrollToPage(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                aria-label="Edelliset arvostelut"
                className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-ink)] shadow-[var(--shadow-soft)] transition-opacity duration-150 disabled:pointer-events-none disabled:opacity-0 md:flex"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollToPage(Math.min(pageCount - 1, activeIndex + 1))}
                disabled={activeIndex === pageCount - 1}
                aria-label="Seuraavat arvostelut"
                className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 translate-x-5 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-ink)] shadow-[var(--shadow-soft)] transition-opacity duration-150 disabled:pointer-events-none disabled:opacity-0 md:flex"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
        </div>

        {pageCount > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToPage(i)}
                aria-label={`Näytä sivu ${i + 1}`}
                aria-current={i === activeIndex}
                className={`h-2 rounded-full transition-all duration-300 ease-out ${
                  i === activeIndex ? "w-6 bg-[var(--color-accent)]" : "w-2 bg-[var(--color-border)]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
