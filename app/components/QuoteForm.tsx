"use client";

import { useState } from "react";
import { CONTACT } from "../lib/contact";

type IconOption = { label: string; icon: React.ReactNode };

const SERVICE_OPTIONS: IconOption[] = [
  {
    label: "Putkityö",
    icon: (
      <path
        d="M4 13l4.5-4.5m0 0L14 3m0 0l2.5 2.5L11 11m3 3l5-5m0 0l-2-2m2 2l1.5 1.5L17 15l-2-2M6 16.5L4 20l3.5-2 5-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Vuotokorjaus",
    icon: (
      <path
        d="M12 3.5S6.5 10.2 6.5 14.3a5.5 5.5 0 0011 0C17.5 10.2 12 3.5 12 3.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Viemärihuolto",
    icon: (
      <>
        <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 6v3.2M12 14.8V18M6 12h3.2M14.8 12H18M8 8l2.2 2.2M15.8 15.8L13.6 13.6M16 8l-2.2 2.2M8 16l2.2-2.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Lämmitysjärjestelmä",
    icon: (
      <path
        d="M8 4v6a2 2 0 104 0V4M8 7h4M8 10h4M13.5 11c0 3-2.5 3.6-2.5 6.2a2.5 2.5 0 005 0c0-1.4-.7-2-1.2-2.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Saneeraus",
    icon: (
      <path
        d="M14.5 6.5l3 3-1.4 1.4-3-3zM13 8l-8 8v2.5H7.5l8-8M17 4l3 3-1.3 1.3-3-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Taloyhtiöpalvelu",
    icon: (
      <path
        d="M5 20V6.5L12 3l7 3.5V20M9 20v-4h6v4M9 10h.01M9 13h.01M15 10h.01M15 13h.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Muu",
    icon: (
      <path
        d="M6.5 12h.01M12 12h.01M17.5 12h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    ),
  },
];

const PROPERTY_OPTIONS: IconOption[] = [
  {
    label: "Omakotitalo",
    icon: (
      <path
        d="M4 11l8-6.5L20 11M6 9.5V19h12V9.5M10 19v-5h4v5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Taloyhtiö",
    icon: (
      <path
        d="M5 20V5.5L11 3v17M11 8h7v12h-7M14 11h.01M17 11h.01M14 14h.01M17 14h.01M7 8h.01M7 11h.01M7 14h.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Teollisuus",
    icon: (
      <path
        d="M4 20V11l4.5 3V11l4.5 3V11l4.5 3V6.5L20 8.5V20H4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Liiketila",
    icon: (
      <path
        d="M4 9l1-4.5h14L20 9M5 9v10.5h14V9M5 9a2 2 0 004 0 2 2 0 004 0 2 2 0 004 0M10 19.5V14h4v5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const CONTACT_TIMES = ["Arkisin klo 8–16", "Arkisin klo 16–20", "Viikonloppuna", "Milloin vain"];

const STEPS = ["Palvelu", "Kohde", "Yhteystiedot"];

const inputClass =
  "w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-[15px] text-white placeholder:text-[var(--color-accent-tint)] transition-colors duration-150 focus-visible:border-white focus-visible:bg-white/15 focus-visible:outline-white focus-visible:outline-offset-2";

const selectClass = `${inputClass} appearance-none`;

function StepIndicator({ step }: { step: number }) {
  return (
    <div className="mb-7 flex items-left justify-left gap-7 sm:gap-10">
      {STEPS.map((label, i) => {
        const idx = i + 1;
        const active = idx === step;
        const done = idx < step;
        return (
          <div key={label} className="flex flex-col items-center gap-1.5 max-w-[4rem] w-full">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-[13px] font-semibold transition-colors duration-150 ${
                active || done ? "bg-white text-[var(--color-accent)]" : "bg-white/20 text-white"
              }`}
            >
              {done ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12.5l4.5 4.5L19 7"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                idx
              )}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function ToggleGrid({
  options,
  value,
  onSelect,
  columns = "grid-cols-2 sm:grid-cols-3",
}: {
  options: IconOption[];
  value: string;
  onSelect: (label: string) => void;
  columns?: string;
}) {
  return (
    <div className={`grid ${columns} gap-3`}>
      {options.map(({ label, icon }) => {
        const selected = value === label;
        return (
          <button
            key={label}
            type="button"
            aria-pressed={selected}
            onClick={() => onSelect(label)}
            className={`flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl border px-3 py-3 text-center transition-colors duration-150 ${
              selected
                ? "border-white bg-white text-[var(--color-accent)]"
                : "border-white/25 bg-white/10 text-white hover:bg-white/15"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {icon}
            </svg>
            <span className="text-[12.5px] font-semibold leading-tight">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contactTime, setContactTime] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = name.trim() !== "" && (phone.trim() !== "" || email.trim() !== "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const bodyLines = [
      `Nimi: ${name}`,
      phone ? `Puhelin: ${phone}` : null,
      email ? `Sähköposti: ${email}` : null,
      address ? `Osoite: ${address}` : null,
      serviceType ? `Palvelu: ${serviceType}` : null,
      propertyType ? `Kohde: ${propertyType}` : null,
      contactTime ? `Toivottu yhteydenottoaika: ${contactTime}` : null,
      description ? `Kuvaus: ${description}` : null,
    ].filter(Boolean);

    const mailto = `${CONTACT.emailHref}?subject=${encodeURIComponent(
      "Tarjouspyyntö verkkosivulta"
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 px-7 py-14 text-center sm:px-9">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="font-heading text-xl font-bold text-white">Kiitos pyynnöstäsi!</h3>
        <p className="max-w-[36ch] text-[15px] leading-relaxed text-white/85">
          Sähköpostisovelluksesi avautui viestiluonnoksella. Jos se ei avautunut, soita meille
          suoraan numeroon{" "}
          <a href={CONTACT.phoneHref} className="font-semibold text-white underline underline-offset-2">
            {CONTACT.phoneLabel}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col px-7 py-8 sm:px-9 sm:py-9">
      <StepIndicator step={step} />

      {step === 1 && (
        <div className="flex flex-1 flex-col">
          <h3 className="font-heading text-xl font-bold text-white md:text-2xl">Mitä tarvitset?</h3>
          <p className="mt-1.5 text-[14px] text-white/80">Valitse lähinnä tarpeitasi vastaava palvelu.</p>
          <div className="mt-6">
            <ToggleGrid options={SERVICE_OPTIONS} value={serviceType} onSelect={setServiceType} />
          </div>
          <button
            type="button"
            disabled={!serviceType}
            onClick={() => setStep(2)}
            className="mt-7 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[var(--color-accent)] transition-opacity duration-150 ease-out hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Seuraava
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-1 flex-col">
          <h3 className="font-heading text-xl font-bold text-white md:text-2xl">Millainen kohde?</h3>
          <p className="mt-1.5 text-[14px] text-white/80">Kerro, mihin kohteeseen tarvitset palvelua.</p>
          <div className="mt-6">
            <ToggleGrid
              options={PROPERTY_OPTIONS}
              value={propertyType}
              onSelect={setPropertyType}
              columns="grid-cols-2"
            />
          </div>
          <div className="mt-7 flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white/10"
            >
              Takaisin
            </button>
            <button
              type="button"
              disabled={!propertyType}
              onClick={() => setStep(3)}
              className="flex-1 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[var(--color-accent)] transition-opacity duration-150 ease-out hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Seuraava
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-1 flex-col">
          <h3 className="font-heading text-xl font-bold text-white md:text-2xl">Yhteystiedot</h3>
          <p className="mt-1.5 text-[14px] text-white/80">Kerro lyhyesti mistä on kyse, ei sitoumuksia.</p>

          <div className="mt-6 flex flex-col gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-white/85">Nimi *</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Etunimi Sukunimi"
                className={inputClass}
                required
              />
            </label>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-semibold text-white/85">Puhelin</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="040 123 4567"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-semibold text-white/85">Sähköposti</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nimi@esimerkki.fi"
                  className={inputClass}
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-white/85">Osoite</span>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Katuosoite, kaupunki"
                className={inputClass}
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-white/85">Toivottu yhteydenottoaika</span>
              <select
                value={contactTime}
                onChange={(e) => setContactTime(e.target.value)}
                className={selectClass}
              >
                <option value="" className="text-[var(--color-ink)]">
                  Valitse ajankohta
                </option>
                {CONTACT_TIMES.map((time) => (
                  <option key={time} value={time} className="text-[var(--color-ink)]">
                    {time}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-white/85">Kuvaus (valinnainen)</span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Kerro lyhyesti, mistä on kyse"
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </label>

            <p className="text-[12.5px] text-white/65">
              Anna joko puhelinnumero tai sähköposti, jotta voimme olla sinuun yhteydessä.
            </p>
          </div>

          <div className="mt-7 flex gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white/10"
            >
              Takaisin
            </button>
            <button
              type="submit"
              disabled={!canSubmit}
              className="flex-1 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[var(--color-accent)] transition-opacity duration-150 ease-out hover:opacity-90 focus-visible:outline-[var(--color-dark)] focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Lähetä pyyntö
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
