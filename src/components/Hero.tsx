import { motion } from "framer-motion";
import { Star, ShieldCheck, ArrowUpRight } from "lucide-react";
import CtaButton from "./CtaButton";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-36"
    >
      <div className="container-wide grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-pill rounded-full pl-2 pr-4 py-1.5 mb-7"
          >
            <span className="flex items-center gap-1 rounded-full bg-cta/90 text-white text-xs font-semibold px-2.5 py-1">
              <Star size={12} fill="currentColor" strokeWidth={0} /> 4.8
            </span>
            <span className="text-sm text-white/75">
              Loved by 2,300+ active adults
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-[5.2rem] leading-[0.95] tracking-tight text-white">
            <BlurText text="Rebuild muscle." />
            <br />
            <span className="italic text-gradient">
              <BlurText text="Reclaim your strength." delay={0.35} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-7 text-lg text-white/65 max-w-xl leading-relaxed"
          >
            A perfect blend of the 8 essential amino acids — engineered to be
            almost fully absorbed by your body, with very little waste. Fight
            age-related muscle loss and feel strong again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <CtaButton href="#order" className="text-lg px-9 py-4">
              Order Now <ArrowUpRight size={18} />
            </CtaButton>
            <div className="flex items-center gap-3">
              <span className="text-white/50 text-sm">from</span>
              <span className="font-display text-3xl text-white">
                $33.25
                <span className="text-base text-white/50 font-sans"> / bottle</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/55 text-sm"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-success" /> 60-Day
              money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyanx" /> Free
              shipping included
            </span>
          </motion.div>
        </div>

        {/* Right — floating bottle on glowing pedestal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          {/* rotating conic halo */}
          <div className="absolute inset-0 m-auto h-80 w-80 md:h-[26rem] md:w-[26rem] rounded-full bg-[conic-gradient(from_0deg,rgba(34,201,240,0.35),transparent,rgba(27,143,214,0.35),transparent,rgba(34,201,240,0.35))] blur-2xl animate-spinslow" />
          <div className="absolute inset-0 m-auto h-64 w-64 md:h-80 md:w-80 rounded-full pedestal blur-xl" />
          <motion.img
            src="/assets/image-4.webp"
            alt="Advanced Amino Formula bottle"
            className="relative w-60 md:w-80 drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] animate-floaty"
          />
        </motion.div>
      </div>
    </section>
  );
}
