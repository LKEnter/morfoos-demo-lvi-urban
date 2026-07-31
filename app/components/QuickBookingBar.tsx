"use client";

import { useState } from "react";
import { CONTACT } from "../lib/contact";

export default function QuickBookingBar() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = name.trim() !== "" && phone.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const mailto = `${CONTACT.emailHref}?subject=${encodeURIComponent(
      "Pikapyyntö verkkosivulta"
    )}&body=${encodeURIComponent(`Nimi: ${name}\nPuhelin: ${phone}`)}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section className="bg-white px-5 pb-16 md:px-8 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-stretch gap-5 rounded-2xl bg-[var(--color-dark)] p-6 md:flex-row md:items-center md:justify-between md:gap-8 md:p-7">
          <p className="font-heading text-xl font-bold leading-snug text-white md:max-w-[20ch] md:text-2xl">
            Nopea LVI-apu.
            <br />
            Apua <span className="text-[var(--color-accent-light)]">alle 60 sekunnissa.</span>
          </p>

          {submitted ? (
            <p className="flex-1 text-[15px] font-medium text-white/90 md:text-right">
              Kiitos! Sähköpostisovelluksesi avautui viestiluonnoksella — jos se ei avautunut,
              soita meille suoraan{" "}
              <a href={CONTACT.phoneHref} className="font-semibold text-[var(--color-accent-light)] underline underline-offset-2">
                {CONTACT.phoneLabel}
              </a>
              .
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center md:max-w-2xl"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Etunimi Sukunimi"
                aria-label="Nimi"
                required
                className="w-full flex-1 rounded-full border border-transparent bg-white/95 px-5 py-3 text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)] transition-colors duration-150 focus-visible:border-[var(--color-accent-light)] focus-visible:outline-none"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Puhelinnumero"
                aria-label="Puhelinnumero"
                required
                className="w-full flex-1 rounded-full border border-transparent bg-white/95 px-5 py-3 text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)] transition-colors duration-150 focus-visible:border-[var(--color-accent-light)] focus-visible:outline-none"
              />
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full shrink-0 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[var(--color-dark)] transition-colors duration-150 ease-out hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                Lähetä pyyntö
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
