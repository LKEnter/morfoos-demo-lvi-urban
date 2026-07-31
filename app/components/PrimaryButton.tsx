type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  /** Set when the button can render full-width (e.g. stacked mobile CTAs) so the
   * label stays visually centered instead of hugging the left edge next to the arrow. */
  center?: boolean;
  /** Pair with `center` when the caller also switches to w-auto at sm+ (e.g. "w-full sm:w-auto"),
   * so the centering spacer drops away and the button hugs its content again on larger screens. */
  centerResetAtSm?: boolean;
};

export default function PrimaryButton({
  href,
  children,
  className = "",
  onClick,
  center = false,
  centerResetAtSm = false,
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center justify-between gap-3 rounded-full bg-[var(--color-accent)] py-2 ${
        center ? (centerResetAtSm ? "pl-1.5 sm:pl-6" : "pl-1.5") : "pl-6"
      } pr-1.5 text-[16px] font-semibold text-white transition-colors duration-200 ease-out hover:bg-[var(--color-accent-hover)] ${className}`}
    >
      {center && (
        <span aria-hidden="true" className={`h-9 w-9 shrink-0 ${centerResetAtSm ? "sm:hidden" : ""}`} />
      )}
      <span className={center ? "flex-1 whitespace-nowrap px-1 text-center" : "whitespace-nowrap"}>
        {children}
      </span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-accent)] transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-120">
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3 8h9M8 3l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
