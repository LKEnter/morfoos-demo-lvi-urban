import Image from "next/image";
import { CONTACT } from "../lib/contact";
import { IMAGES } from "../lib/images";
import PrimaryButton from "./PrimaryButton";

const STATS = [
  { value: "Kok.", label: "Vuosien kokemus" },
  { value: "24/7", label: "Päivystys" },
  { value: "+400", label: "LVI-toteutusta" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative w-full bg-white lg:h-screen lg:min-h-screen">
      <div className="relative mx-auto flex w-full max-w-[1920px] flex-col gap-8 px-5 py-14 md:px-8 lg:h-full lg:flex-row lg:items-center lg:justify-center lg:gap-0 lg:px-12 lg:py-0 xl:px-16">
        <div className="relative z-40 order-1 w-full text-left lg:absolute lg:left-0 lg:top-14 lg:order-none lg:max-w-[600px] lg:rounded-[2.5rem] lg:bg-white lg:px-16 lg:py-8 lg:pt-14 2xl:max-w-[1024px] 2xl:pt-16">
          <h1 className="balance font-heading text-[clamp(2.25rem,3.2vw+1rem,2.5rem)] w-full font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--color-ink)]">
            Luotettavat <span className="text-[var(--color-accent)]">LVI-</span> ja
            saneerauspalvelut pääkaupunkiseudulla
          </h1>

          <p className="pretty mt-5 max-w-[52ch] text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
            Vuosien kokemuksella hoidamme putkityöt, korjaukset ja saneeraukset
            kotitalouksille, taloyhtiöille ja yrityksille.
          </p>

          <div className="mt-7 flex flex-col items-center justify-left gap-3 sm:flex-row">
            <PrimaryButton
              href="#yhteystiedot"
              center
              centerResetAtSm
              className="w-full shadow-[var(--shadow-soft)] sm:w-auto"
            >
              Pyydä tarjous
            </PrimaryButton>
            <a
              href={CONTACT.phoneHref}
              className="w-full rounded-full border border-[var(--color-border)] px-7 py-3.5 text-center text-[16px] font-semibold text-[var(--color-ink)] transition-colors duration-150 ease-out hover:bg-[var(--color-bg-light)] sm:w-auto"
            >
              Soita päivystykseen
            </a>
          </div>
        </div>

        <div className="relative order-2 h-[320px] w-full overflow-hidden rounded-[2.5rem] sm:h-[400px] lg:order-none lg:mx-auto lg:h-[70%]">
          <Image
            src={IMAGES.heroTechnician}
            alt="LVI-asentaja asentamassa vesikalustetta modernissa kylpyhuoneessa"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1920px"
            className="object-cover object-[center_18%]"
          />

          {/* Top-left notch: purely decorative at every breakpoint, never holds content */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 z-10 h-10 w-14 rounded-br-[1.25rem] bg-white sm:h-12 sm:w-16 lg:h-14 lg:w-20 lg:rounded-br-[1.5rem]"
          />

          {/* Bottom-right: small decorative notch on mobile, grows into the stat-grid holder at lg+ */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 z-10 h-10 w-14 rounded-tl-[1.25rem] bg-white sm:h-12 sm:w-16 lg:h-28 lg:w-[52%] lg:rounded-tl-[2rem] 2xl:w-[36%]"
          />
          <div className="absolute bottom-8 right-10 z-20 hidden grid-cols-3 gap-4 lg:grid 2xl:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <span className="font-heading text-2xl font-extrabold text-[var(--color-ink)] md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet stats row — a plain block below the image, not overlaid */}
        <div className="order-3 grid grid-cols-3 gap-4 lg:hidden">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="font-heading text-2xl font-extrabold text-[var(--color-ink)]">
                {stat.value}
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
