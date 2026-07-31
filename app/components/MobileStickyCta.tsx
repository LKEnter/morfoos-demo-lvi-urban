"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "../lib/contact";
import PrimaryButton from "./PrimaryButton";

export default function MobileStickyCta() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-[var(--color-border)] bg-white/95 p-3 backdrop-blur-sm [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] transition-transform duration-300 ease-out lg:hidden ${
        heroVisible ? "translate-y-full" : "translate-y-0"
      }`}
      role="region"
      aria-label="Pikavalinnat"
    >
      <a
        href={CONTACT.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-dark)] px-4 py-3.5 text-[15px] font-semibold text-[var(--color-dark)]"
      >
        Soita
      </a>
      <PrimaryButton href="#yhteystiedot" center className="flex-1">
        Pyydä tarjous
      </PrimaryButton>
    </div>
  );
}
