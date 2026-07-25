const linkGroups = [
  {
    title: "Product",
    links: [
      { label: "About", href: "#about" },
      { label: "Ingredients", href: "#ingredients" },
      { label: "Reviews", href: "#reviews" },
      { label: "Order Now", href: "#order" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Guarantee", href: "#guarantee" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#" },
      { label: "Return Policy", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Do Not Sell Info", href: "#" },
      { label: "CA Privacy Rights", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative text-white/70 mt-10"
      style={{ backgroundColor: "#0a2340" }}
    >
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
            <p className="mt-5 text-sm text-white/45 leading-relaxed">
              5305 Oakbrook Parkway,
              <br />
              Norcross, Georgia 30093
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

        {/* Trust badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-white/40 mb-6">
            Safe, secure &amp; trusted checkout
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {["Norton-logo.png", "BBB-logo.png", "cc-logos.gif"].map((img) => (
              <div
                key={img}
                className="flex items-center justify-center rounded-2xl bg-white px-6 py-3 shadow-lg"
              >
                <img
                  src={`/assets/${img}`}
                  alt="Trust badge"
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-xs leading-relaxed space-y-3 text-white/45">
          <p>
            Dr. Frank Shallenberger is compensated by Advanced Bionutritionals
            for his work in formulating and endorsing this product.
          </p>
          <p>
            *These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat, cure,
            or prevent any disease. Results may vary from person to person.
          </p>
          <p className="text-white/35">
            Copyright © 2025 Advanced Bionutritionals, LLC. All rights reserved.
          </p>
          <p className="text-white/35">
            Secure Order · 2026 © Digistore24 Inc. (United States) and/or its
            licensors.
          </p>
        </div>
      </div>
    </footer>
  );
}
