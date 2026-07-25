import { Check, X } from "lucide-react";
import Reveal from "./Reveal";

const rows = [
  { label: "All 8 essential amino acids", amino: true, whey: false, bcaa: false },
  { label: "Up to 99% absorbed by the body", amino: true, whey: false, bcaa: false },
  { label: "Almost zero waste / bloat", amino: true, whey: false, bcaa: true },
  { label: "No sugar, dairy, gluten or soy", amino: true, whey: false, bcaa: true },
  { label: "Only 25 calories per serving", amino: true, whey: false, bcaa: true },
];

function Cell({ ok }: { ok: boolean }) {
  return (
    <div className="flex justify-center">
      {ok ? (
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-success/15 text-success">
          <Check size={18} strokeWidth={3} />
        </span>
      ) : (
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy/[0.06] text-navy/25">
          <X size={18} strokeWidth={3} />
        </span>
      )}
    </div>
  );
}

export default function Comparison() {
  return (
    <section className="py-24 md:py-28 bg-gradient-to-b from-sky-50/70 to-white">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-navy">
            Why it beats{" "}
            <span className="italic text-gradient">whey &amp; BCAAs</span>
          </h2>
          <p className="mt-5 text-navy/60">
            Most protein powders are only partially used by your body. Advanced
            Amino Formula is built for maximum absorption.
          </p>
        </Reveal>

        <Reveal className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-navy/[0.07] bg-white shadow-[0_24px_60px_-30px_rgba(13,47,82,0.35)]">
          <div className="grid grid-cols-4 text-sm md:text-base font-semibold border-b border-navy/[0.06]">
            <div className="p-4 md:p-5" />
            <div className="p-4 md:p-5 text-center text-white bg-gradient-to-br from-brand to-cyanx">
              Advanced Amino
            </div>
            <div className="p-4 md:p-5 text-center text-navy/60">Whey</div>
            <div className="p-4 md:p-5 text-center text-navy/60">BCAAs</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-4 items-center border-b border-navy/[0.05] last:border-0 ${
                i % 2 ? "bg-white" : "bg-sky-50/40"
              }`}
            >
              <div className="p-4 md:p-5 text-sm md:text-base font-medium text-navy">
                {r.label}
              </div>
              <div className="p-4 md:p-5 bg-brand/[0.05]">
                <Cell ok={r.amino} />
              </div>
              <div className="p-4 md:p-5">
                <Cell ok={r.whey} />
              </div>
              <div className="p-4 md:p-5">
                <Cell ok={r.bcaa} />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
