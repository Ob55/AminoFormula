import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "cta";

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
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold px-7 py-3.5 text-base transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-cta/30";

const variants: Record<Variant, string> = {
  cta: "bg-cta hover:bg-cta-dark text-white shadow-lg shadow-cta/30 hover:shadow-xl hover:-translate-y-0.5",
  solid: "bg-brand hover:bg-brand-dark text-white shadow-md hover:-translate-y-0.5",
  outline:
    "border-2 border-white/70 text-white hover:bg-white hover:text-navy",
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
