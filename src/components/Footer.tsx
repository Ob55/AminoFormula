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
    <footer className="relative border-t border-white/10 mt-10">
      <div className="container-wide py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/assets/Logo-White.png"
              alt="Advanced Bionutritionals"
              className="h-9 w-auto mb-5"
            />
            <p className="text-sm leading-relaxed text-white/55 max-w-xs">
              A perfect blend of the 8 essential amino acids to help you rebuild
              muscle, recover faster, and reclaim your strength.
            </p>
          </div>

          {linkGroups.map((g) => (
            <div key={g.title}>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">
                {g.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-white/55 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-xs leading-relaxed space-y-3 text-white/45">
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
          <p className="text-white/35">
            © {new Date().getFullYear()} Advanced Amino Formula. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
