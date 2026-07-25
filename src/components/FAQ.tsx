import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What exactly is Advanced Amino Formula?",
    a: "It's a dietary supplement providing a precise blend of the 8 essential amino acids your body cannot make on its own. These are the raw building blocks your body uses to build and repair muscle, delivered in a ratio designed for maximum absorption.",
  },
  {
    q: "How do I take it?",
    a: "Take 5 tablets per serving with water. Each bottle contains a 30-day supply. For best results, use it consistently as part of your daily routine — many people take it before or after activity.",
  },
  {
    q: "How soon will I see results?",
    a: "Everyone is different, but many customers report feeling stronger and recovering faster within a few weeks of consistent use. For the best results we recommend the 3 or 6 bottle package.",
  },
  {
    q: "Is it safe? Are there side effects?",
    a: "Advanced Amino Formula is free of dairy, gluten, soy, sugar, and GMOs, and contains no fat, sodium, or preservatives. As with any supplement, if you have a medical condition or take medication, check with your doctor first.",
  },
  {
    q: "What's your guarantee and shipping policy?",
    a: "Every order ships free and is backed by our 60-day money-back guarantee. If you're not satisfied for any reason, contact us within 60 days for a full refund of your purchase price.",
  },
];

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
          <p className="px-6 md:px-8 pb-6 text-navy/60 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-28 scroll-mt-24 bg-gradient-to-b from-white to-sky-50/60">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs">
            Questions
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy">
            Frequently asked{" "}
            <span className="italic text-gradient">questions</span>
          </h2>
        </Reveal>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <Item {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
