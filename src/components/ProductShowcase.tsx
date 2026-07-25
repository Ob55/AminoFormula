import { motion } from "framer-motion";
import { Leaf, Sprout, Wheat, Milk, Flag, Ban, Check } from "lucide-react";
import Reveal from "./Reveal";

const leftBadges = [
  { label: "Soy Free", icon: Sprout },
  { label: "Vegan", icon: Leaf },
  { label: "Non GMO", icon: Ban },
];

const rightBadges = [
  { label: "Dairy Free", icon: Milk },
  { label: "Gluten Free", icon: Wheat },
  { label: "Made in USA", icon: Flag },
];

const benefits = [
  "Maintain a balanced weight",
  "Get younger-looking skin and hair",
  "Improve your endurance",
  "Prevent injuries",
  "Support better mental concentration and mood",
  "Help alleviate food sensitivity symptoms",
];

type Badge = { label: string; icon: typeof Leaf };

function BadgeItem({
  badge,
  align,
  index,
}: {
  badge: Badge;
  align: "left" | "right";
  index: number;
}) {
  const Icon = badge.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.12, ease: "easeOut" }}
      className={`flex items-center gap-4 ${
        align === "left" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <span className="grid place-items-center h-20 w-20 shrink-0 rounded-full border-2 border-dashed border-brand/40 text-brand bg-white shadow-sm">
        <Icon size={32} strokeWidth={1.75} />
      </span>
      <span className="font-bold uppercase leading-tight text-navy tracking-tight text-xl">
        {badge.label}
      </span>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-transparent to-sky-100/40">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand font-bold tracking-[0.2em] uppercase text-sm">
            Advanced Amino Formula Benefits
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] text-navy">
            Pure, clean &amp; made for your{" "}
            <span className="italic text-gradient">whole body</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] items-center gap-14 lg:gap-16 max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 order-2 lg:order-1 items-center lg:items-end">
            {leftBadges.map((b, i) => (
              <BadgeItem key={b.label} badge={b} align="left" index={i} />
            ))}
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center py-6 lg:py-0">
            <div className="absolute inset-0 m-auto h-96 w-96 md:h-[32rem] md:w-[32rem] rounded-full bg-gradient-to-br from-cyanx/20 to-brand/15 blur-3xl" />
            {/* white spotlight disc so the product blends cleanly */}
            <div className="relative grid place-items-center h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full bg-white shadow-[0_40px_90px_-30px_rgba(13,47,82,0.3)] ring-1 ring-navy/[0.05]">
              <div className="pointer-events-none absolute inset-4 rounded-full border border-brand/10 animate-spinslow" />
              <motion.img
                src="/assets/image-4.webp"
                alt="Advanced Amino Formula bottle"
                className="relative w-52 md:w-80 animate-floaty"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 order-3 items-center lg:items-start">
            {rightBadges.map((b, i) => (
              <BadgeItem key={b.label} badge={b} align="right" index={i} />
            ))}
          </div>
        </div>

        <Reveal
          className="mt-20 max-w-3xl mx-auto glass rounded-3xl p-8 md:p-10"
          delay={0.1}
        >
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 grid place-items-center h-6 w-6 shrink-0 rounded-full bg-cta/15 text-cta">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-lg text-navy/80 font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
