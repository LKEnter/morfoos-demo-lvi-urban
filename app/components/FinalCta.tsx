import { CONTACT } from "../lib/contact";
import PrimaryButton from "./PrimaryButton";

export default function FinalCta() {
  return (
    <section className="bg-[var(--color-dark)] py-20 md:py-28">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-5 text-center md:px-8">
        <h2 className="balance max-w-[24ch] font-heading text-3xl font-bold tracking-[-0.02em] text-white md:text-[2.75rem]">
          Tarvitsetko luotettavan putkimiehen?
        </h2>
        <p className="pretty mt-4 max-w-[46ch] text-lg leading-relaxed text-white/80">
          Ota yhteyttä jo tänään — vastaamme nopeasti ja kerromme suoraan, miten voimme auttaa.
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <PrimaryButton href="#yhteystiedot" center centerResetAtSm className="w-full sm:w-auto">
            Pyydä tarjous
          </PrimaryButton>
          <a
            href={CONTACT.phoneHref}
            className="w-full rounded-full border border-white/40 px-8 py-3.5 text-center text-[16px] font-semibold text-white transition-colors duration-150 ease-out hover:bg-white/10 sm:w-auto"
          >
            Soita päivystykseen
          </a>
        </div>
      </div>
    </section>
  );
}
