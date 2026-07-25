export default function TrustBadges() {
  return (
    <section className="py-10 bg-slate-50 border-y border-slate-200">
      <div className="container-wide">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
          Safe, secure &amp; trusted checkout
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <img
            src="/assets/Norton-logo.png"
            alt="Norton Secured"
            className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/assets/BBB-logo.png"
            alt="BBB Accredited"
            className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/assets/cc-logos.gif"
            alt="Accepted credit cards"
            className="h-8 md:h-9 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
