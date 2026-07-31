import Image from "next/image";
import { CONTACT, SERVICE_AREA } from "../lib/contact";

const LINKS = [
  { href: "#palvelut", label: "Palvelut" },
  { href: "#saneeraus", label: "Saneeraus" },
  { href: "#paivystys", label: "Päivystys" },
  { href: "#yritys", label: "Yritys" },
  { href: "#yhteystiedot", label: "Yhteystiedot" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] pb-28 pt-16 lg:pb-16">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/assets/images/brand/logo.svg"
              alt="Pääkaupungin Putkihuolto"
              width={520}
              height={140}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-[32ch] text-[14px] leading-relaxed text-white/75">
              Vuosien kokemuksella LVI-työt, korjaukset ja saneeraukset kotitalouksille,
              taloyhtiöille ja yrityksille pääkaupunkiseudulla.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-white/70">
              Valikko
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[15px] text-white/75 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-white/70">
              Yhteystiedot
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-[15px] text-white/75">
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-white">
                  {CONTACT.phoneLabel}
                </a>
              </li>
              <li className="pt-1">
                <a href={CONTACT.emailHref} className="hover:text-white">
                  {CONTACT.emailLabel}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-white/70">
              Toiminta-alue
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-[15px] text-white/75">
              {SERVICE_AREA.map((town) => (
                <li key={town}>{town}</li>
              ))}
            </ul>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-[13px] font-semibold text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-light)]" aria-hidden="true" />
              24/7 päivystys
            </p>
          </div>
        </div>

        <div className="pt-8 text-[13px] text-white/70">
          <p>© {new Date().getFullYear()} Pääkaupungin Putkihuolto. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  );
}
