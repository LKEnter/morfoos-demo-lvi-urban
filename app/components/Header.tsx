"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACT } from "../lib/contact";
import PrimaryButton from "./PrimaryButton";

const NAV_LINKS = [
  { href: "#palvelut", label: "Palvelut" },
  { href: "#saneeraus", label: "Saneeraus" },
  { href: "#paivystys", label: "Päivystys" },
  { href: "#yritys", label: "Yritys" },
  { href: "#yhteystiedot", label: "Yhteystiedot" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-dark)]">
      <div className="relative mx-auto flex h-16 max-w-[1920px] items-center justify-between px-5 md:h-[76px] md:px-8 lg:px-12 xl:px-16">
        <Link href="#sisalto" className="flex shrink-0 items-center" aria-label="Pääkaupungin Putkihuolto, etusivulle">
          <Image
            src="/assets/images/brand/logo.svg"
            alt="Pääkaupungin Putkihuolto"
            width={520}
            height={140}
            priority
            className="h-9 w-auto md:h-14"
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 lg:flex"
          aria-label="Päävalikko"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-[15px] font-medium text-white/85 transition-colors duration-150 hover:bg-[var(--color-accent-light)]/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <PrimaryButton href="#yhteystiedot" className="whitespace-nowrap shadow-[var(--shadow-soft)]">
            Pyydä tarjous
          </PrimaryButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white lg:hidden"
          aria-label="Avaa valikko"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-[var(--color-dark)] lg:hidden">
          <div className="mx-auto flex h-16 max-w-[1920px] items-center justify-between px-5">
            <Image
              src="/assets/images/brand/logo.svg"
              alt="Pääkaupungin Putkihuolto"
              width={520}
              height={140}
              className="h-9 w-auto"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white"
              aria-label="Sulje valikko"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-5 pt-6" aria-label="Mobiilivalikko">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-semibold text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 px-5 pt-8">
            <PrimaryButton href="#yhteystiedot" center onClick={() => setOpen(false)} className="w-full">
              Pyydä tarjous
            </PrimaryButton>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-center text-[16px] font-semibold text-white"
            >
              Soita päivystykseen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
