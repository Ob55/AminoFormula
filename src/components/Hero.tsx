import { motion } from "framer-motion";
import { Star, ShieldCheck, ArrowUpRight } from "lucide-react";
import CtaButton from "./CtaButton";
import { reviewStats } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-sky-100/50 via-transparent to-transparent"
    >
      <div className="container-wide grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-pill rounded-full pl-2 pr-4 py-1.5 mb-7"
          >
            <span className="flex items-center gap-1 rounded-full bg-cta text-white text-xs font-bold px-2.5 py-1">
              <Star size={12} fill="currentColor" strokeWidth={0} />{" "}
              {reviewStats.average}
            </span>
            <span className="text-sm font-semibold text-navy/75">
              {reviewStats.count.toLocaleString()} reviews • Loved by active
              adults
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
            className="font-display text-[2.9rem] md:text-6xl lg:text-[4.7rem] leading-[1.02] tracking-tight text-navy"
          >
            “It feels like my muscles are{" "}
            <span className="italic text-gradient">waking up and working.</span>”
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-3 text-navy/50 font-semibold"
          >
            — Jacqui, verified customer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 text-xl text-navy/70 max-w-xl leading-relaxed"
          >
            This combination of 8 essential amino acids gives your body the
            building blocks to make all the protein it needs — so you can feel
            fitter, stronger, and younger.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <CtaButton href="#order" className="text-lg px-9 py-4">
              Order Now <ArrowUpRight size={18} />
            </CtaButton>
            <div className="flex items-center gap-3">
              <span className="text-navy/45">from</span>
              <span className="font-display text-3xl text-navy">
                $33.25
                <span className="text-base text-navy/45 font-sans"> / bottle</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-navy/60"
          >
            <span className="flex items-center gap-2 font-medium">
              <ShieldCheck size={18} className="text-success" /> 90-Day
              money-back guarantee
            </span>
            <span className="flex items-center gap-2 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-cyanx" /> Free
              shipping included
            </span>
          </motion.div>
        </div>

        {/* Right — bottle spotlight card with guarantee badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-6 m-auto h-[22rem] w-[22rem] md:h-[30rem] md:w-[30rem] rounded-full bg-gradient-to-br from-cyanx/25 to-brand/20 blur-3xl" />
          <div className="relative rounded-[2.5rem] bg-white p-8 md:p-10 shadow-[0_40px_90px_-30px_rgba(13,47,82,0.35)] ring-1 ring-navy/[0.06]">
            <div className="pointer-events-none absolute inset-6 rounded-full border border-brand/10 animate-spinslow" />
            <motion.img
              src="/assets/image-4.webp"
              alt="Advanced Amino Formula bottle"
              className="relative w-52 md:w-72 animate-floaty"
            />
            <img
              src="/assets/Guarantee.png"
              alt="90-Day Money-Back Guarantee"
              className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-24 md:w-32 drop-shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
