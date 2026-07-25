import type { ReactNode } from "react";

type Variant = "cta" | "glass" | "light";

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
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium px-7 py-3.5 text-base transition-all duration-300 active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyanx/30";

const variants: Record<Variant, string> = {
  cta: "bg-cta hover:bg-cta-dark text-white shadow-[0_10px_40px_-8px_rgba(245,131,31,0.6)] hover:-translate-y-0.5",
  glass:
    "glass-pill text-white hover:bg-white/10 hover:-translate-y-0.5",
  light:
    "bg-white text-ink hover:bg-white/90 hover:-translate-y-0.5 shadow-lg",
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
