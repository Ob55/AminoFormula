import { Star, BadgeCheck, ThumbsUp } from "lucide-react";
import { reviews, reviewStats } from "../data/content";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-28 scroll-mt-24">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-brand font-bold tracking-[0.2em] uppercase text-sm">
            Real Results
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] text-navy">
            Advanced Amino Formula{" "}
            <span className="italic text-gradient">reviews</span>
          </h2>
        </Reveal>

        {/* Featured testimonial image + stats */}
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto mb-14">
          <Reveal className="rounded-3xl overflow-hidden border border-navy/[0.07] shadow-[0_24px_60px_-30px_rgba(13,47,82,0.4)]">
            <img
              src="/assets/2.jpg"
              alt="“I have not stopped taking them and feel 20 years younger” — Judy P., Advanced Amino Formula customer"
              className="w-full h-auto"
            />
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-3 divide-x divide-navy/10 rounded-3xl bg-white border border-navy/[0.07] shadow-[0_18px_50px_-30px_rgba(13,47,82,0.4)] py-8">
            <div className="text-center px-2">
              <p className="font-display text-4xl md:text-5xl text-navy">
                {reviewStats.count.toLocaleString()}
              </p>
              <p className="text-sm text-navy/55 font-medium">Reviews</p>
            </div>
            <div className="text-center px-2">
              <p className="font-display text-4xl md:text-5xl text-navy flex items-center justify-center gap-1">
                {reviewStats.average}
                <Star size={22} className="text-cta" fill="currentColor" strokeWidth={0} />
              </p>
              <p className="text-sm text-navy/55 font-medium">Avg Rating</p>
            </div>
            <div className="text-center px-2">
              <p className="font-display text-4xl md:text-5xl text-navy">
                {reviewStats.recommend}%
              </p>
              <p className="text-sm text-navy/55 font-medium">Recommend</p>
            </div>
          </Reveal>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={(i % 3) * 0.1}
              className="rounded-3xl bg-white border border-navy/[0.07] p-7 shadow-[0_18px_50px_-30px_rgba(13,47,82,0.4)] flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="flex text-cta">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-xs text-navy/40 font-medium">{r.date}</span>
              </div>
              <h3 className="mt-3 font-bold text-navy">{r.title}</h3>
              <p className="mt-2 text-navy/65 leading-relaxed flex-1">{r.text}</p>
              <div className="mt-5 pt-4 border-t border-navy/[0.06]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy">{r.name}</p>
                    <p className="text-sm text-navy/45">{r.location}</p>
                  </div>
                  <span className="flex items-center gap-1 text-success text-xs font-semibold">
                    <BadgeCheck size={15} /> Verified
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-brand font-medium">
                  <ThumbsUp size={13} /> I Recommend This Supplement
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-4xl mx-auto text-center text-xs text-navy/40 leading-relaxed">
          Above are actual reviews from our customers. These customers'
          statements may not reflect the typical purchaser's experience and are
          not intended to represent or guarantee that anyone will achieve the
          same or similar results. Your results may vary.
        </p>
      </div>
    </section>
  );
}
