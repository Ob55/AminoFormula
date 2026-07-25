import { Leaf, FlaskConical, Wheat, Milk, Sprout, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const freeFrom = [
  { icon: Milk, label: "Dairy Free" },
  { icon: Wheat, label: "Gluten Free" },
  { icon: Sprout, label: "Non-GMO" },
  { icon: Leaf, label: "Soy Free" },
  { icon: FlaskConical, label: "Vegan" },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-16 md:py-24 bg-slate-50">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-cta font-semibold tracking-wider uppercase text-sm">
            The Science
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
            The perfect blend of 8 essential amino acids
          </h2>
          <p className="mt-4 text-slate-600">
            Formulated in the exact ratio your body can efficiently use —
            producing very little waste, unlike ordinary protein supplements.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Amino acids diagram */}
          <Reveal className="rounded-3xl overflow-hidden shadow-card bg-white border border-slate-100">
            <img
              src="/assets/image-5.webp"
              alt="The 8 essential amino acids in Advanced Amino Formula"
              className="w-full h-auto"
            />
          </Reveal>

          {/* Supplement facts + free-from */}
          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <img
                src="/assets/image-1.webp"
                alt="Advanced Amino Formula supplement facts"
                className="w-44 md:w-52 shrink-0 drop-shadow-xl"
              />
              <div>
                <h3 className="text-2xl font-bold text-navy">
                  Clean, pure &amp; body-ready
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Just 25 calories and 5,000 mg of the Advanced Amino Formula per
                  serving. No fat, sodium, sugar, yeast, preservatives, or animal
                  products — nothing your body doesn't need.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {freeFrom.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-2xl bg-white border border-slate-100 px-4 py-3 shadow-sm"
                >
                  <f.icon className="text-success" size={22} />
                  <span className="font-semibold text-navy text-sm">
                    {f.label}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-100 px-4 py-3 shadow-sm">
                <ShieldCheck className="text-brand" size={22} />
                <span className="font-semibold text-navy text-sm">
                  Lab Tested
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
