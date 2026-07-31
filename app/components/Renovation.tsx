import Image from "next/image";
import { IMAGES } from "../lib/images";
import PrimaryButton from "./PrimaryButton";

const BENEFITS = [
  "Vähemmän koordinointia — yksi tilaus, yksi yhteyshenkilö",
  "Sujuvat aikataulut LVI- ja rakennustöiden välillä",
  "Ammattitaitoinen toteutus alusta loppuun",
];

export default function Renovation() {
  const cardBody = (
    <>
      <h2 className="balance max-w-[22ch] font-heading text-2xl font-bold tracking-[-0.02em] text-[var(--color-ink)] md:text-[2.25rem]">
        Kodin remontit ilman turhaa koordinointia
      </h2>

      <p className="pretty mt-4 text-[15px] leading-relaxed text-[var(--color-ink-muted)] md:text-base">
        LVI ja saneeraus samalta toimijalta — hoidamme kylpyhuoneremontit ja muut kodin
        uudistukset yhdellä sopimuksella, ilman erillisten urakoitsijoiden yhteensovittamista.
      </p>

      <ul className="mt-5 flex flex-col gap-2.5">
        {BENEFITS.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-tint)] text-[var(--color-accent)]">
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8.5l3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-[14px] leading-relaxed text-[var(--color-ink-muted)]">{benefit}</p>
          </li>
        ))}
      </ul>

      <PrimaryButton href="#yhteystiedot" className="mt-7">
        Kysy saneerauksesta
      </PrimaryButton>
    </>
  );

  return (
    <section id="saneeraus" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="relative h-[600px] overflow-hidden rounded-[2rem] sm:h-[560px] md:h-auto md:min-h-[520px]">
          <Image
            src={IMAGES.bathroomRenovation}
            alt="Saneerattu moderni kylpyhuone"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-[70%_center]"
          />

          {/* Mobile/tablet: panel inset within the image, always shorter than it */}
          <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6 md:hidden">
            <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-7">{cardBody}</div>
          </div>

          {/* Desktop: right-side vertically centered panel */}
          <div className="absolute inset-y-10 right-10 hidden w-[52%] items-center md:flex">
            <div className="w-full rounded-2xl bg-white p-10 shadow-xl">{cardBody}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
