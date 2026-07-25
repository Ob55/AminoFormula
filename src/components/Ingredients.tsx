import { Leaf, FlaskConical, Wheat, Milk, Sprout, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const freeFrom = [
  { icon: Milk, label: "Dairy Free" },
  { icon: Wheat, label: "Gluten Free" },
  { icon: Sprout, label: "Non-GMO" },
  { icon: Leaf, label: "Soy Free" },
  { icon: FlaskConical, label: "Vegan" },
  { icon: ShieldCheck, label: "Lab Tested" },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-24 md:py-28 scroll-mt-24">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand font-bold tracking-[0.2em] uppercase text-sm">
            Key Ingredients
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] text-navy">
            The 8 essential{" "}
            <span className="italic text-gradient">amino acids</span>
          </h2>
          <p className="mt-5 text-lg text-navy/65">
            A unique blend of the 8 essential amino acids designed to be
            efficiently used by the body, producing very little waste.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <Reveal className="rounded-3xl overflow-hidden border border-navy/[0.07] bg-white p-2 shadow-[0_24px_60px_-30px_rgba(13,47,82,0.35)]">
            <img
              src="/assets/image-5.webp"
              alt="Essential amino acids in Advanced Amino Formula"
              className="w-full h-auto rounded-[1.25rem]"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="relative shrink-0">
                <div className="absolute inset-0 m-auto h-40 w-40 rounded-full pedestal blur-md" />
                <img
                  src="/assets/image-1.webp"
                  alt="Advanced Amino Formula supplement facts"
                  className="relative w-40 md:w-48 drop-shadow-[0_18px_30px_rgba(13,47,82,0.15)]"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-navy">
                  Supplement Facts
                </h3>
                <p className="mt-3 text-lg text-navy/65 leading-relaxed">
                  Just 25 calories and 5,000 mg of the Advanced Amino Formula per
                  serving. No fat, sodium, sugar, yeast, preservatives, or animal
                  products — nothing your body doesn't need.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {freeFrom.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-2xl bg-white border border-navy/[0.07] px-4 py-3 shadow-sm"
                >
                  <f.icon className="text-brand" size={20} />
                  <span className="font-semibold text-navy/85">{f.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
