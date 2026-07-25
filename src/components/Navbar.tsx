import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
    <header className="fixed top-4 inset-x-0 z-50">
      <nav className="container-wide flex items-center justify-between gap-4">
        {/* Logo in a navy chip (logo art is white) */}
        <a
          href="#top"
          className="flex items-center shrink-0 rounded-full bg-navy px-4 py-2.5 shadow-lg"
        >
          <img
            src="/assets/Logo-White.png"
            alt="Advanced Bionutritionals"
            className="h-6 md:h-7 w-auto"
          />
        </a>

        {/* Center pill with links */}
        <div className="hidden lg:flex items-center gap-1 glass-pill rounded-full px-2 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-navy/70 hover:text-navy hover:bg-navy/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:block">
          <CtaButton href="#order" variant="cta" className="px-5 py-2.5 text-sm">
            Order Now <ArrowUpRight size={16} />
          </CtaButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden glass-pill rounded-full p-2.5 text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden container-wide mt-3">
          <div className="glass rounded-3xl p-4">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-medium text-navy/80 hover:text-navy hover:bg-navy/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <CtaButton href="#order" fullWidth onClick={() => setOpen(false)}>
                  Order Now
                </CtaButton>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
