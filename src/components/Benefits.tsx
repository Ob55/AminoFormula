import { Dumbbell, HeartPulse, Zap } from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Build New & Stronger Muscle",
    text: "Supplies the essential amino acid building blocks your body needs to repair and grow lean muscle tissue — even as you age.",
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
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-cta font-semibold tracking-wider uppercase text-sm">
            Why Advanced Amino
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
            One simple formula. Three powerful results.
          </h2>
          <p className="mt-4 text-slate-600">
            After age 40, your body loses muscle faster than it can rebuild it.
            Advanced Amino Formula gives it exactly what it needs to fight back.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-7">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-3xl bg-slate-50 border border-slate-100 p-8 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                <b.icon size={28} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{b.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
