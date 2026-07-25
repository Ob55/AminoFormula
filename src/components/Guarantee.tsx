import CtaButton from "./CtaButton";

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-16 md:py-24 bg-white scroll-mt-16">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-50 border border-slate-100 shadow-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <img
            src="/assets/Guarantee.png"
            alt="60-Day Money-Back Guarantee"
            className="w-40 md:w-48 shrink-0 drop-shadow-xl"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
              Try it 100% risk-free for 60 days
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We're confident Advanced Amino Formula will help you rebuild
              strength and feel younger. If you're not completely satisfied for
              any reason, just contact us within 60 days for a full refund of
              your purchase price — no questions asked. That's how sure we are.
            </p>
            <div className="mt-7">
              <CtaButton href="#order" className="text-lg px-9 py-4">
                Order Now — Risk Free
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
