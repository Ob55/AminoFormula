import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const reviews = [
  {
    name: "Robert M.",
    location: "Verified Buyer",
    text: "At 62 I thought losing strength was just part of getting older. After three months on Advanced Amino I'm back in the gym and lifting more than I have in years.",
  },
  {
    name: "Linda K.",
    location: "Verified Buyer",
    text: "I recover so much faster now. No more days of being sore after yard work. I feel steady and strong on my feet again.",
  },
  {
    name: "James P.",
    location: "Verified Buyer",
    text: "I've tried protein powders for decades and they left me bloated. This mixes easily, no stomach issues, and I can actually feel the difference.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 md:py-28 scroll-mt-24">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-cyanx font-medium tracking-[0.2em] uppercase text-xs">
            Real Results
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-white">
            Trusted by thousands of{" "}
            <span className="italic text-gradient">active adults</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 0.12}
              className="relative glass rounded-3xl p-8"
            >
              <Quote className="text-cyanx/25 absolute top-6 right-6" size={40} />
              <div className="flex text-cta mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-white/75 leading-relaxed relative z-10">
                “{r.text}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-cyanx to-brand text-white flex items-center justify-center font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{r.name}</p>
                  <p className="text-sm text-success">{r.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
