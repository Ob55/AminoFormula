import type { ReactNode } from "react";

type Variant = "cta" | "glass" | "navy";

interface CtaButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  external?: boolean;
  fullWidth?: boolean;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold px-7 py-3.5 text-base transition-all duration-300 active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-cta/25";

const variants: Record<Variant, string> = {
  cta: "bg-cta hover:bg-cta-dark text-white shadow-[0_12px_30px_-8px_rgba(245,131,31,0.55)] hover:-translate-y-0.5",
  navy: "bg-navy hover:bg-navy-light text-white shadow-lg hover:-translate-y-0.5",
  glass:
    "glass-pill text-navy hover:bg-white hover:-translate-y-0.5",
};

export default function CtaButton({
  children,
  href,
  onClick,
  variant = "cta",
  className = "",
  external = false,
  fullWidth = false,
}: CtaButtonProps) {
  const classes = `${base} ${variants[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
