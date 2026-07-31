import PrimaryButton from "./PrimaryButton";

const PATHS = [
  {
    title: "Kodin omistajille",
    text: "Tarvitsetko putkimiestä kotiisi? Autamme nopeasti vuodoissa, tukoksissa ja pienissä remonteissa.",
    cta: "Pyydä tarjous",
    href: "#yhteystiedot",
    icon: (
      <path d="M4 11.5 12 4l8 7.5M6.5 10v9.5a1 1 0 001 1h9a1 1 0 001-1V10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Taloyhtiöille",
    text: "Luotettava kumppani kiinteistöjen LVI-töihin — huollosta suurempiin saneerausprojekteihin.",
    cta: "Ota yhteyttä",
    href: "#yhteystiedot",
    icon: (
      <path d="M4 20.5V5a1 1 0 011-1h6a1 1 0 011 1v15.5M12 20.5v-8a1 1 0 011-1h6a1 1 0 011 1v8M7.5 8h1M7.5 12h1M7.5 16h1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function AudienceSplit() {
  return (
    <section className="bg-[var(--color-accent-tint)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PATHS.map((path, i) => (
            <div
              key={path.title}
              className="reveal flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-soft)] md:p-10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {path.icon}
                </svg>
              </span>
              <h3 className="font-heading text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)]">
                {path.title}
              </h3>
              <p className="max-w-[42ch] text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
                {path.text}
              </p>
              <PrimaryButton href={path.href} className="mt-2 w-fit">
                {path.cta}
              </PrimaryButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
