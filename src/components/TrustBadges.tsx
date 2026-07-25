export default function TrustBadges() {
  return (
    <section className="py-14 bg-white border-y border-navy/[0.06]">
      <div className="container-wide">
        <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-navy/40 mb-7">
          Safe, secure &amp; trusted checkout
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {["Norton-logo.png", "BBB-logo.png", "cc-logos.gif"].map((img) => (
            <div
              key={img}
              className="flex items-center justify-center rounded-2xl bg-white border border-navy/[0.07] px-6 py-3 shadow-[0_10px_30px_-18px_rgba(13,47,82,0.4)]"
            >
              <img
                src={`/assets/${img}`}
                alt="Trust badge"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
