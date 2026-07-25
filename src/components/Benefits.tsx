import { Dumbbell, HeartPulse, Zap } from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  {
    icon: Dumbbell,
    title: "Build New & Stronger Muscle",
    text: "Supplies the essential amino-acid building blocks your body needs to repair and grow lean muscle — even as you age.",
  },
  {
    icon: HeartPulse,
    title: "Faster Post-Workout Recovery",
    text: "Bounce back quicker after exercise with less soreness, so you can stay active and keep training without long downtime.",
  },
  {
    icon: Zap,
    title: "Amino Energy & Performance",
    text: "Support natural energy, stamina, and everyday performance so you feel capable and strong from morning to night.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-28 scroll-mt-24 bg-white">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs">
            Why Advanced Amino
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy">
            One simple formula.{" "}
            <span className="italic text-gradient">Three powerful results.</span>
          </h2>
          <p className="mt-5 text-navy/60">
            After age 40, your body loses muscle faster than it can rebuild it.
            Advanced Amino Formula gives it exactly what it needs to fight back.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <Reveal
              key={b.title}
              delay={i * 0.12}
              className="group rounded-3xl bg-white border border-navy/[0.07] p-8 shadow-[0_18px_50px_-30px_rgba(13,47,82,0.4)] hover:-translate-y-1.5 hover:shadow-[0_26px_60px_-28px_rgba(13,47,82,0.45)] transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-brand to-cyanx text-white shadow-lg shadow-brand/25">
                <b.icon size={28} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">{b.title}</h3>
              <p className="mt-3 text-navy/60 leading-relaxed">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
