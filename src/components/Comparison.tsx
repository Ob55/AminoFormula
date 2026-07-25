import { motion } from "framer-motion";
import { Milk, Dumbbell } from "lucide-react";
import Reveal from "./Reveal";

/** Illustrative net protein utilization — how much actually becomes protein. */
const utilization = [
  { label: "Advanced Amino Formula", value: 99, highlight: true },
  { label: "Whole Eggs", value: 48, highlight: false },
  { label: "Meat", value: 32, highlight: false },
  { label: "Whey Protein", value: 17, highlight: false },
];

export default function Comparison() {
  return (
    <section className="py-24 md:py-28 bg-gradient-to-b from-transparent to-sky-100/40">
      <div className="container-wide">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] text-navy">
            How Advanced Amino Formula stacks up to{" "}
            <span className="italic text-gradient">other protein sources</span>
          </h2>
          <p className="mt-5 text-lg text-navy/65">
            What % of these foods' amino acids does your body actually convert
            into protein?
          </p>
        </Reveal>

        {/* Utilization chart */}
        <Reveal className="max-w-3xl mx-auto rounded-3xl bg-white border border-navy/[0.07] p-8 md:p-10 shadow-[0_24px_60px_-30px_rgba(13,47,82,0.35)]">
          <div className="space-y-5">
            {utilization.map((u, i) => (
              <div key={u.label}>
                <div className="flex justify-between mb-1.5">
                  <span
                    className={`font-semibold ${
                      u.highlight ? "text-navy" : "text-navy/60"
                    }`}
                  >
                    {u.label}
                  </span>
                  <span
                    className={`font-bold ${
                      u.highlight ? "text-brand" : "text-navy/50"
                    }`}
                  >
                    {u.value}%
                  </span>
                </div>
                <div className="h-3.5 rounded-full bg-navy/[0.06] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${u.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      u.highlight
                        ? "bg-gradient-to-r from-brand to-cyanx"
                        : "bg-navy/25"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy/40">
            Illustrative comparison of net protein utilization.
          </p>
        </Reveal>

        {/* Whey + BCAA cards */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Milk,
              title: "vs. Whey Protein Drinks",
              text: "Research shows that most of the protein in whey powder does not build muscle. Scientists have found that whey is one of the worst sources of protein — 83% of the protein in whey protein powder is turned into sugar in the body.",
            },
            {
              icon: Dumbbell,
              title: "vs. BCAAs",
              text: "BCAA (branched-chain amino acid) powders only contain 3 essential amino acids. This means the body is missing 5 of the building blocks it needs to build muscle. Advanced Amino Formula contains the exact right balance of all 8 essential amino acids.",
            },
          ].map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.12}
              className="rounded-3xl bg-white border border-navy/[0.07] p-8 shadow-[0_18px_50px_-30px_rgba(13,47,82,0.4)]"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-brand/10 text-brand">
                <c.icon size={26} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{c.title}</h3>
              <p className="mt-3 text-lg text-navy/65 leading-relaxed">
                {c.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
