import { Stethoscope, Award, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

const facts = [
  { icon: GraduationCap, label: "MD, University of Maryland School of Medicine" },
  { icon: Award, label: "Board certified in Anti-Aging Medicine" },
  { icon: Stethoscope, label: "44+ years practicing medicine" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-28 scroll-mt-24">
      <div className="container-wide">
        <Reveal className="max-w-5xl mx-auto rounded-[2rem] bg-white border border-navy/[0.07] shadow-[0_28px_70px_-36px_rgba(13,47,82,0.4)] p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
          {/* Doctor monogram */}
          <div className="mx-auto md:mx-0">
            <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-navy to-brand flex items-center justify-center shadow-xl">
              <span className="font-display text-6xl text-white">FS</span>
              <span className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full bg-cta flex items-center justify-center text-white shadow-lg">
                <Stethoscope size={22} />
              </span>
            </div>
          </div>

          <div>
            <p className="text-brand font-bold tracking-[0.2em] uppercase text-sm">
              The Formulator
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy">
              About Dr. Frank Shallenberger
            </h2>
            <p className="mt-5 text-lg text-navy/65 leading-relaxed">
              Dr. Frank Shallenberger is the Editor-in-Chief of Second Opinion
              Newsletter and Second Opinion Health Alert. He earned his medical
              degree from the University of Maryland School of Medicine and
              received his postgraduate training at Mt. Zion Hospital in San
              Francisco. Dr. Shallenberger is board certified by the American
              Board of Anti-Aging Medicine and has been practicing medicine for
              over 44 years.
            </p>

            <div className="mt-7 grid sm:grid-cols-3 gap-3">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-3 rounded-2xl bg-sky-50/70 border border-navy/[0.06] px-4 py-3"
                >
                  <f.icon className="text-brand shrink-0 mt-0.5" size={20} />
                  <span className="text-sm font-semibold text-navy/80 leading-snug">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
