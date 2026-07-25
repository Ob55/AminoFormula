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
    <section id="benefits" className="py-24 md:py-28 scroll-mt-24">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-cyanx font-medium tracking-[0.2em] uppercase text-xs">
            Why Advanced Amino
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-white">
            One simple formula.{" "}
            <span className="italic text-gradient">Three powerful results.</span>
          </h2>
          <p className="mt-5 text-white/60">
            After age 40, your body loses muscle faster than it can rebuild it.
            Advanced Amino Formula gives it exactly what it needs to fight back.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <Reveal
              key={b.title}
              delay={i * 0.12}
              className="group glass rounded-3xl p-8 hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl glass-pill text-cyanx group-hover:text-white group-hover:bg-cyanx/20 transition-colors">
                <b.icon size={28} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{b.title}</h3>
              <p className="mt-3 text-white/60 leading-relaxed">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
