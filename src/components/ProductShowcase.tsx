import { motion } from "framer-motion";
import { Leaf, Sprout, Wheat, Milk, Flag, Ban, CheckCircle2 } from "lucide-react";
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
  "Support better mental concentration and better mood",
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
      <span className="grid place-items-center h-16 w-16 shrink-0 rounded-full border-2 border-dashed border-brand/50 text-brand bg-white">
        <Icon size={26} strokeWidth={1.75} />
      </span>
      <span className="font-extrabold uppercase leading-tight text-navy tracking-tight text-lg">
        {badge.label}
      </span>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-cta font-semibold tracking-wider uppercase text-sm">
            One Formula, Total Support
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
            Pure, clean &amp; made for your whole body
          </h2>
        </Reveal>

        {/* Orbit layout: badges — bottle — badges */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] items-center gap-10 lg:gap-8 max-w-6xl mx-auto">
          {/* Left badges */}
          <div className="flex flex-col gap-8 order-2 lg:order-1 items-center lg:items-end">
            {leftBadges.map((b, i) => (
              <BadgeItem key={b.label} badge={b} align="left" index={i} />
            ))}
          </div>

          {/* Bottle */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="pointer-events-none absolute inset-0 m-auto h-72 w-72 md:h-96 md:w-96 rounded-full border border-slate-200" />
            <div className="pointer-events-none absolute inset-0 m-auto h-56 w-56 md:h-72 md:w-72 rounded-full border border-slate-100" />
            <motion.img
              src="/assets/image-4.webp"
              alt="Advanced Amino Formula bottle"
              className="relative w-52 md:w-72"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Right badges */}
          <div className="flex flex-col gap-8 order-3 items-center lg:items-start">
            {rightBadges.map((b, i) => (
              <BadgeItem key={b.label} badge={b} align="right" index={i} />
            ))}
          </div>
        </div>

        {/* Benefits list */}
        <Reveal className="mt-16 max-w-3xl mx-auto" delay={0.1}>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-cta shrink-0 mt-0.5"
                  size={22}
                  strokeWidth={2.25}
                />
                <span className="text-navy font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
