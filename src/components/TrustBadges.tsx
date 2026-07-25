export default function TrustBadges() {
  return (
    <section className="py-14">
      <div className="container-wide">
        <p className="text-center text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white/40 mb-7">
          Safe, secure &amp; trusted checkout
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {["Norton-logo.png", "BBB-logo.png", "cc-logos.gif"].map((img) => (
            <div
              key={img}
              className="flex items-center justify-center rounded-2xl bg-white px-5 py-3 shadow-lg"
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
