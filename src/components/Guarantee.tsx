import { ArrowUpRight, Check } from "lucide-react";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-24 md:py-28 scroll-mt-24">
      <div className="container-wide">
        <Reveal className="relative max-w-5xl mx-auto rounded-[2rem] border border-navy/[0.07] bg-gradient-to-br from-sky-50 to-white p-8 md:p-14 overflow-hidden shadow-[0_30px_70px_-40px_rgba(13,47,82,0.4)]">
          <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-cta/10 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-14">
            <div className="relative shrink-0">
              <div className="absolute inset-0 m-auto h-48 w-48 rounded-full bg-cta/15 blur-2xl" />
              <img
                src="/assets/Guarantee.png"
                alt="100% Satisfaction Money-Back Guarantee"
                className="relative w-40 md:w-52 animate-floaty drop-shadow-[0_20px_35px_rgba(13,47,82,0.2)]"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-cta font-bold tracking-[0.2em] uppercase text-sm">
                100% Satisfaction
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy">
                “Down-to-the-Last-Pill”{" "}
                <span className="italic text-gradient">money-back guarantee</span>
              </h2>
              <p className="mt-5 text-lg text-navy/65 leading-relaxed">
                I know how effective Advanced Amino Formula is, and I stand by
                this amazing formula. If you don't see an improvement in your
                strength and overall well-being — or you're not satisfied for any
                reason whatsoever — simply return the empty bottles within 90 days
                for a full refund of every penny you paid, including shipping and
                handling. No questions asked, no fine print.
              </p>
              <p className="mt-3 font-semibold text-navy">
                — Dr. Frank Shallenberger, MD
              </p>
            </div>
          </div>

          <div className="relative mt-8 grid sm:grid-cols-2 gap-3 max-w-3xl">
            {[
              "See improvement in your strength in the first few months — guaranteed.",
              "Return empty bottles within 90 days for a full refund. You only pay return shipping.",
            ].map((t) => (
              <div
                key={t}
                className="flex items-start gap-3 rounded-2xl bg-white/70 border border-navy/[0.06] px-4 py-3"
              >
                <span className="mt-0.5 grid place-items-center h-6 w-6 shrink-0 rounded-full bg-success/15 text-success">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-navy/75 font-medium">{t}</span>
              </div>
            ))}
          </div>

          <div className="relative mt-8 text-center md:text-left">
            <CtaButton href="#order" className="text-lg px-9 py-4">
              Order Now — Risk Free <ArrowUpRight size={18} />
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
