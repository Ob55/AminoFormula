import { Check, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { packages, currency, type Package } from "../data/packages";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={`relative flex flex-col h-full rounded-3xl bg-white text-navy transition-all duration-300 ${
        pkg.featured
          ? "ring-2 ring-cta shadow-[0_30px_80px_-24px_rgba(0,0,0,0.5)] lg:scale-[1.05] z-10"
          : "ring-1 ring-black/5 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.55)] hover:-translate-y-1.5"
      }`}
    >
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide text-white whitespace-nowrap ${
          pkg.featured ? "bg-cta" : "bg-brand"
        }`}
      >
        {pkg.badge}
      </div>

      <div className="p-7 pt-9 flex flex-col h-full">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-navy/60">{pkg.title}</h3>
          <div className="mt-4 h-40 flex items-center justify-center">
            <img
              src={pkg.image}
              alt={`${pkg.title} of Advanced Amino Formula`}
              className="max-h-40 w-auto object-contain"
            />
          </div>
        </div>

        <div className="mt-5 text-center">
          <div className="flex items-end justify-center gap-1">
            <span className="font-display text-5xl text-navy leading-none">
              {currency(pkg.pricePerBottle)}
            </span>
            <span className="text-navy/45 font-medium mb-1">/ bottle</span>
          </div>
        </div>

        <ul className="mt-6 space-y-2.5 text-sm">
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
          <li className="flex items-center gap-2.5">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success shrink-0">
              <Truck size={12} strokeWidth={2.5} />
            </span>
            <span className="text-navy/55">Free Shipping Included</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success shrink-0">
              <Check size={13} strokeWidth={3} />
            </span>
            <span className="text-navy/55">60-Day Money-Back Guarantee</span>
          </li>
        </ul>

        <div className="mt-6 pt-5 border-t border-navy/10 mt-auto">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-navy/45 font-medium">Total</span>
            <span className="font-display text-3xl text-navy">
              {currency(pkg.total)}
            </span>
          </div>
          <CtaButton
            href={pkg.checkoutUrl}
            external
            fullWidth
            variant="cta"
            className="text-base"
          >
            Checkout
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
      className="py-24 md:py-32 scroll-mt-24 text-white"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #0d2f52 0%, #123c66 50%, #155f9a 100%)",
      }}
    >
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-cyanx font-semibold tracking-[0.2em] uppercase text-xs">
            Choose Your Package
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-white">
            Start rebuilding your{" "}
            <span className="italic bg-gradient-to-r from-white to-cyanx bg-clip-text text-transparent">
              strength today
            </span>
          </h2>
          <p className="mt-5 text-white/70">
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/70 text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyanx" /> Secure SSL
            Checkout
          </span>
          <span className="flex items-center gap-2">
            <Truck size={16} className="text-success" /> Free Shipping
          </span>
          <span className="flex items-center gap-2">
            <Check size={16} className="text-success" /> 60-Day Guarantee
          </span>
        </motion.div>
      </div>
    </section>
  );
}
