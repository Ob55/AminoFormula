const linkGroups = [
  {
    title: "Product",
    links: [
      { label: "Benefits", href: "#benefits" },
      { label: "Ingredients", href: "#ingredients" },
      { label: "Reviews", href: "#reviews" },
      { label: "Order Now", href: "#order" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Guarantee", href: "#guarantee" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Shipping & Returns", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="container-wide py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assets/Logo-White.png"
                alt="Advanced Bionutritionals"
                className="h-9 w-auto"
              />
              <span className="text-white font-semibold text-lg">
                Advanced <span className="text-cyanx">Amino</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              A perfect blend of the 8 essential amino acids to help you rebuild
              muscle, recover faster, and reclaim your strength.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src="/assets/Norton-logo.png"
                alt="Norton Secured"
                className="h-9 w-auto bg-white/95 rounded px-2 py-1"
              />
              <img
                src="/assets/BBB-logo.png"
                alt="BBB Accredited"
                className="h-9 w-auto bg-white/95 rounded px-2 py-1"
              />
            </div>
          </div>

          {linkGroups.map((g) => (
            <div key={g.title}>
              <h4 className="text-white font-semibold mb-4">{g.title}</h4>
              <ul className="space-y-2.5 text-sm">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-xs leading-relaxed space-y-3">
          <p>
            *These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat, cure,
            or prevent any disease. Results may vary from person to person.
          </p>
          <p>
            This page is an independent promotional page. Advanced Amino Formula
            is sold and fulfilled through Digistore24. Prices and offers are
            subject to change.
          </p>
          <p className="text-white/50">
            © {new Date().getFullYear()} Advanced Amino Formula. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
