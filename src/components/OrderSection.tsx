import { Check, Truck, Lock } from "lucide-react";
import { packages, currency, type Package } from "../data/packages";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={`relative flex flex-col h-full rounded-3xl bg-white transition-all duration-300 ${
        pkg.featured
          ? "border-2 border-cta shadow-cardHover lg:scale-[1.04] z-10"
          : "border border-slate-200 shadow-card hover:-translate-y-1 hover:shadow-cardHover"
      }`}
    >
      {/* Badge ribbon */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide text-white whitespace-nowrap ${
          pkg.featured ? "bg-cta" : "bg-brand"
        }`}
      >
        {pkg.badge}
      </div>

      <div className="p-7 pt-9 flex flex-col h-full">
        <div className="text-center">
          <h3 className="text-xl font-bold text-navy">{pkg.title}</h3>
          <div className="mt-4 h-40 flex items-center justify-center">
            <img
              src={pkg.image}
              alt={`${pkg.title} of Advanced Amino Formula`}
              className="max-h-40 w-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>

        <div className="mt-5 text-center">
          <div className="flex items-end justify-center gap-1">
            <span className="text-4xl font-extrabold text-navy">
              {currency(pkg.pricePerBottle)}
            </span>
            <span className="text-slate-500 font-medium mb-1">/ bottle</span>
          </div>
        </div>

        {/* Perks */}
        <ul className="mt-5 space-y-2.5 text-sm">
          {pkg.instantSavings !== null && (
            <li className="flex items-center gap-2.5">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cta/15 text-cta shrink-0">
                <Check size={13} strokeWidth={3} />
              </span>
              <span className="text-navy font-semibold">
                Instant Savings: {currency(pkg.instantSavings)}
              </span>
            </li>
          )}
          {pkg.freeShipping && (
            <li className="flex items-center gap-2.5">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success shrink-0">
                <Truck size={12} strokeWidth={2.5} />
              </span>
              <span className="text-slate-600">Free Shipping Included</span>
            </li>
          )}
          <li className="flex items-center gap-2.5">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success shrink-0">
              <Check size={13} strokeWidth={3} />
            </span>
            <span className="text-slate-600">60-Day Money-Back Guarantee</span>
          </li>
        </ul>

        {/* Total + CTA pinned to bottom */}
        <div className="mt-6 pt-5 border-t border-slate-100 mt-auto">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-slate-500 font-medium">Total</span>
            <span className="text-2xl font-extrabold text-navy">
              {currency(pkg.total)}
            </span>
          </div>
          <CtaButton
            href={pkg.checkoutUrl}
            external
            fullWidth
            variant={pkg.featured ? "cta" : "solid"}
            className="text-base"
          >
            <Lock size={17} /> Checkout
          </CtaButton>
        </div>
      </div>
    </div>
  );
}

export default function OrderSection() {
  return (
    <section
      id="order"
      className="py-16 md:py-24 bg-gradient-to-b from-navy to-navy-light text-white scroll-mt-16"
    >
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-cta font-semibold tracking-wider uppercase text-sm">
            Choose Your Package
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
            Start rebuilding your strength today
          </h2>
          <p className="mt-4 text-white/75">
            The more you stock up, the more you save. Every order ships free and
            is backed by our 60-day money-back guarantee.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch pt-4">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.12} className="h-full">
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>

        {/* reassurance row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/75 text-sm">
          <span className="flex items-center gap-2">
            <Lock size={16} className="text-cyanx" /> Secure SSL Checkout
          </span>
          <span className="flex items-center gap-2">
            <Truck size={16} className="text-success" /> Free Shipping
          </span>
          <span className="flex items-center gap-2">
            <Check size={16} className="text-success" /> 60-Day Guarantee
          </span>
        </div>
      </div>
    </section>
  );
}
