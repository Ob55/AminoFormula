import { useState } from "react";
import { Menu, X } from "lucide-react";
import CtaButton from "./CtaButton";

const links = [
  { label: "Benefits", href: "#benefits" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Reviews", href: "#reviews" },
  { label: "Guarantee", href: "#guarantee" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/85 shadow-lg">
      <nav className="container-wide flex items-center justify-between h-16 md:h-[74px]">
        {/* Logo only */}
        <a href="#top" className="flex items-center shrink-0">
          <img
            src="/assets/Logo-White.png"
            alt="Advanced Bionutritionals"
            className="h-9 md:h-11 w-auto"
          />
        </a>

        {/* Nav details grouped on the right */}
        <div className="hidden md:flex items-center gap-9">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <CtaButton href="#order" className="px-6 py-2.5 text-sm">
            Order Now
          </CtaButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-dark border-t border-white/10">
          <ul className="container-wide py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-white/85 hover:text-white font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <CtaButton
                href="#order"
                fullWidth
                onClick={() => setOpen(false)}
              >
                Order Now
              </CtaButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
