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
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-400">
          <X size={18} strokeWidth={3} />
        </span>
      )}
    </div>
  );
}

export default function Comparison() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Why it beats whey protein &amp; BCAAs
          </h2>
          <p className="mt-4 text-slate-600">
            Most protein powders are only partially used by your body. Advanced
            Amino Formula is built for maximum absorption.
          </p>
        </Reveal>

        <Reveal className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
          <div className="grid grid-cols-4 bg-navy text-white text-sm md:text-base font-semibold">
            <div className="p-4 md:p-5" />
            <div className="p-4 md:p-5 text-center bg-brand">Advanced Amino</div>
            <div className="p-4 md:p-5 text-center">Whey Protein</div>
            <div className="p-4 md:p-5 text-center">BCAAs</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-4 items-center ${
                i % 2 ? "bg-white" : "bg-slate-50/60"
              }`}
            >
              <div className="p-4 md:p-5 text-sm md:text-base font-medium text-navy">
                {r.label}
              </div>
              <div className="p-4 md:p-5 bg-brand/5">
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
