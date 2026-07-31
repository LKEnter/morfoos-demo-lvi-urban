import { CONTACT, MAP_EMBED_SRC, OPENING_HOURS, SERVICE_AREA } from "../lib/contact";
import QuoteForm from "./QuoteForm";

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-tint)] text-[var(--color-accent)]"
      aria-hidden="true"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        {children}
      </svg>
    </span>
  );
}

export default function Contact() {
  return (
    <section id="yhteystiedot" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.015em] text-[var(--color-ink)] md:text-4xl">
              Ota yhteyttä
            </h2>
            <p className="pretty mt-4 max-w-[46ch] text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
              Kerro lyhyesti mistä on kyse, niin palaamme asiaan pian. Kiireellisessä asiassa
              soita suoraan päivystykseen.
            </p>

            <dl className="mt-9 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <dt className="sr-only">Puhelin</dt>
                <dd className="m-0 flex items-center gap-3">
                  <ContactIcon>
                    <path
                      d="M4.5 4h3.2l1.3 4-1.9 1.4a11 11 0 005.5 5.5l1.4-1.9 4 1.3v3.2a1.5 1.5 0 01-1.6 1.5A15.5 15.5 0 013 5.6 1.5 1.5 0 014.5 4z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </ContactIcon>
                  <a
                    href={CONTACT.phoneHref}
                    className="text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)]"
                  >
                    {CONTACT.phoneLabel}
                  </a>
                </dd>
              </div>

              <div className="flex items-center gap-3">
                <dt className="sr-only">Sähköposti</dt>
                <dd className="m-0 flex items-center gap-3">
                  <ContactIcon>
                    <path
                      d="M4 6.5h16a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-9a1 1 0 011-1zM3.5 7l8.5 6 8.5-6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </ContactIcon>
                  <a
                    href={CONTACT.emailHref}
                    className="text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)]"
                  >
                    {CONTACT.emailLabel}
                  </a>
                </dd>
              </div>

              <div className="flex items-center gap-3">
                <dt className="sr-only">Päivystys</dt>
                <dd className="m-0 flex items-center gap-3 text-lg font-semibold text-[var(--color-ink)]">
                  <ContactIcon>
                    <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                  </ContactIcon>
                  24/7 päivystys
                </dd>
              </div>

              <div className="flex items-center gap-3">
                <dt className="sr-only">Osoite</dt>
                <dd className="m-0 flex items-center gap-3">
                  <ContactIcon>
                    <path
                      d="M12 21s7-6.1 7-11.5A7 7 0 005 9.5C5 14.9 12 21 12 21z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                  </ContactIcon>
                  <a
                    href={CONTACT.mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)]"
                  >
                    {CONTACT.addressLabel}
                  </a>
                </dd>
              </div>

              <div className="my-8">
                <dt className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[var(--color-ink-muted)]">
                  Aukioloajat
                </dt>
                <dd className="mt-2 flex flex-col gap-1">
                  {OPENING_HOURS.map((row) => (
                    <div key={row.day} className="flex justify-between gap-6 text-[15px]">
                      <span className="text-[var(--color-ink-muted)]">{row.day}</span>
                      <span className="font-medium text-[var(--color-ink)]">{row.hours}</span>
                    </div>
                  ))}
                </dd>
              </div>

              <div>
                <dt className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[var(--color-ink-muted)]">
                  Toiminta-alue
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {SERVICE_AREA.map((town) => (
                    <span
                      key={town}
                      className="rounded-full bg-[var(--color-accent)] px-3.5 py-1.5 text-[14px] font-medium text-white"
                    >
                      {town}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="reveal mt-9 min-h-[280px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <iframe
                src={MAP_EMBED_SRC}
                title="Pääkaupungin Putkihuolto sijainti kartalla"
                className="h-full min-h-[280px] w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="reveal h-fit overflow-hidden rounded-2xl bg-[var(--color-accent)]">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
