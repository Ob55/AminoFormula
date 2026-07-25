import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "../data/content";

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white border border-navy/[0.07] shadow-[0_14px_40px_-28px_rgba(13,47,82,0.4)] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left px-6 md:px-8 py-5"
      >
        <span className="text-lg font-semibold text-navy">{q}</span>
        <ChevronDown
          size={22}
          className={`text-brand shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 md:px-8 pb-6 text-lg text-navy/65 leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 md:py-28 scroll-mt-24 bg-gradient-to-b from-transparent to-sky-100/40"
    >
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-brand font-bold tracking-[0.2em] uppercase text-sm">
            Questions
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] text-navy">
            Frequently asked{" "}
            <span className="italic text-gradient">questions</span>
          </h2>
        </Reveal>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <Item {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
