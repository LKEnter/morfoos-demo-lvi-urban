import Image from "next/image";
import { CONTACT } from "../lib/contact";
import { IMAGES } from "../lib/images";
import PrimaryButton from "./PrimaryButton";

export default function EmergencyService() {
  const cardBody = (
    <>
      <h2 className="balance max-w-[20ch] font-heading text-2xl font-bold tracking-[-0.02em] text-[var(--color-ink)] md:text-[2.25rem]">
        Putkirikko tai vesivahinko? Saat apua nopeasti.
      </h2>

      <p className="pretty mt-4 text-[15px] leading-relaxed text-[var(--color-ink-muted)] md:text-base">
        Vesivahinko tai lämmityksen pettäminen ei katso kellonaikaa. Päivystyksemme on
        käytettävissä ympäri vuorokauden — soita, niin autamme.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <PrimaryButton href={CONTACT.phoneHref}>Soita päivystykseen</PrimaryButton>
      </div>
    </>
  );

  return (
    <section id="paivystys" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="relative h-[520px] overflow-hidden rounded-[2rem] sm:h-[480px] md:h-auto md:min-h-[460px]">
          <Image
            src={IMAGES.heatingSystem}
            alt="LVI-asentaja korjaamassa lämmitysjärjestelmää"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
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
