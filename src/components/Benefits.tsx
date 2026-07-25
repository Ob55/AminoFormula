import { Dumbbell, HeartPulse, Zap } from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  {
    icon: Dumbbell,
    title: "Build New & Stronger Muscle",
    text: "The average person loses 30% of their muscle mass by the time they're 70. But it doesn't have to happen to you. Research has shown that you can reverse muscle loss and strengthen your muscle by taking Advanced Amino Formula.",
  },
  {
    icon: HeartPulse,
    title: "Post-Workout Recovery",
    text: "With Advanced Amino Formula, you can recover from workouts faster and build new and stronger muscle. It also provides the critical amino acids that help your body generate and repair damaged ligaments.",
  },
  {
    icon: Zap,
    title: "Amino Energy & Performance",
    text: "Your cells need the right balance of all eight essential amino acids to maintain strength and stamina. That's why Advanced Amino Formula is so effective at improving your energy and performance — even for people who suffer from severe fatigue and exhaustion.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-28 scroll-mt-24">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-brand font-bold tracking-[0.2em] uppercase text-sm">
            Why Advanced Amino
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] text-navy">
            One simple formula.{" "}
            <span className="italic text-gradient">Three powerful results.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <Reveal
              key={b.title}
              delay={i * 0.12}
              className="group rounded-3xl bg-white border border-navy/[0.07] p-8 shadow-[0_18px_50px_-30px_rgba(13,47,82,0.4)] hover:-translate-y-1.5 hover:shadow-[0_26px_60px_-28px_rgba(13,47,82,0.45)] transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-brand to-cyanx text-white shadow-lg shadow-brand/25">
                <b.icon size={30} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-navy">{b.title}</h3>
              <p className="mt-3 text-lg text-navy/65 leading-relaxed">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
