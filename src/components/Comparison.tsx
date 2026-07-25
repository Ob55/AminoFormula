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
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-success/20 text-success">
          <Check size={18} strokeWidth={3} />
        </span>
      ) : (
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/30">
          <X size={18} strokeWidth={3} />
        </span>
      )}
    </div>
  );
}

export default function Comparison() {
  return (
    <section className="py-24 md:py-28">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-white">
            Why it beats{" "}
            <span className="italic text-gradient">whey &amp; BCAAs</span>
          </h2>
          <p className="mt-5 text-white/60">
            Most protein powders are only partially used by your body. Advanced
            Amino Formula is built for maximum absorption.
          </p>
        </Reveal>

        <Reveal className="max-w-4xl mx-auto glass rounded-3xl overflow-hidden">
          <div className="grid grid-cols-4 text-sm md:text-base font-semibold border-b border-white/10">
            <div className="p-4 md:p-5" />
            <div className="p-4 md:p-5 text-center text-white bg-cyanx/10">
              Advanced Amino
            </div>
            <div className="p-4 md:p-5 text-center text-white/70">Whey</div>
            <div className="p-4 md:p-5 text-center text-white/70">BCAAs</div>
          </div>
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-4 items-center border-b border-white/5 last:border-0"
            >
              <div className="p-4 md:p-5 text-sm md:text-base font-medium text-white/85">
                {r.label}
              </div>
              <div className="p-4 md:p-5 bg-cyanx/[0.06]">
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
