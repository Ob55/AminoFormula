/** Fixed, animated aurora glow that sits behind the whole page. */
export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* deep radial base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(27,143,214,0.22),transparent_55%)]" />
      {/* drifting color blobs */}
      <div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-cyanx/20 blur-[120px] animate-aurora" />
      <div
        className="absolute top-1/3 -right-40 h-[42rem] w-[42rem] rounded-full bg-brand/25 blur-[130px] animate-aurora"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[32rem] w-[32rem] rounded-full bg-indigo-500/15 blur-[120px] animate-aurora"
        style={{ animationDelay: "-11s" }}
      />
      {/* subtle grid + noise-ish vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(7,9,18,0.6)_75%,#070912)]" />
    </div>
  );
}
