import { ArrowUpRight } from "lucide-react";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-24 md:py-28 scroll-mt-24 bg-white">
      <div className="container-wide">
        <Reveal className="relative max-w-5xl mx-auto rounded-[2rem] border border-navy/[0.07] bg-gradient-to-br from-sky-50 to-white p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-14 overflow-hidden shadow-[0_30px_70px_-40px_rgba(13,47,82,0.4)]">
          <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-cta/10 blur-3xl" />
          <div className="relative shrink-0">
            <div className="absolute inset-0 m-auto h-48 w-48 rounded-full bg-cta/15 blur-2xl" />
            <img
              src="/assets/Guarantee.png"
              alt="60-Day Money-Back Guarantee"
              className="relative w-40 md:w-52 animate-floaty drop-shadow-[0_20px_35px_rgba(13,47,82,0.2)]"
            />
          </div>
          <div className="relative text-center md:text-left">
            <h2 className="font-display text-4xl md:text-5xl text-navy">
              Try it 100% risk-free for{" "}
              <span className="italic text-gradient">60 days</span>
            </h2>
            <p className="mt-5 text-navy/65 leading-relaxed">
              We're confident Advanced Amino Formula will help you rebuild
              strength and feel younger. If you're not completely satisfied for
              any reason, just contact us within 60 days for a full refund of
              your purchase price — no questions asked.
            </p>
            <div className="mt-8">
              <CtaButton href="#order" className="text-lg px-9 py-4">
                Order Now — Risk Free <ArrowUpRight size={18} />
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
