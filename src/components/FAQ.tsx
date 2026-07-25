import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    a: "Everyone is different, but many customers report feeling stronger and recovering faster within a few weeks of consistent use. For the best results we recommend the 3 or 6 bottle package so you have enough time to feel the full benefits.",
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
    <div className="rounded-3xl bg-white border border-slate-100 shadow-card overflow-hidden">
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
          <p className="px-6 md:px-8 pb-6 text-slate-600 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-cta font-semibold tracking-wider uppercase text-sm">
            Questions
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
            Frequently asked questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f) => (
            <Item key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
