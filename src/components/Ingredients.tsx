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
          <p className="text-cyanx font-medium tracking-[0.2em] uppercase text-xs">
            The Science
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-white">
            The perfect blend of{" "}
            <span className="italic text-gradient">8 essential amino acids</span>
          </h2>
          <p className="mt-5 text-white/60">
            Formulated in the exact ratio your body can efficiently use —
            producing very little waste, unlike ordinary protein supplements.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <Reveal className="glass rounded-3xl p-2">
            <img
              src="/assets/image-5.webp"
              alt="The 8 essential amino acids in Advanced Amino Formula"
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
                  className="relative w-40 md:w-48"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-white">
                  Clean, pure &amp; body-ready
                </h3>
                <p className="mt-3 text-white/60 leading-relaxed">
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
                  className="flex items-center gap-3 glass-pill rounded-2xl px-4 py-3"
                >
                  <f.icon className="text-cyanx" size={20} />
                  <span className="font-medium text-white/85 text-sm">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
