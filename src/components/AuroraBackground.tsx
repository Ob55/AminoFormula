/** Fixed, very soft light aurora so white sections never look flat. */
export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,201,240,0.12),transparent_55%)]" />
      <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-cyanx/10 blur-[120px] animate-aurora" />
      <div
        className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-brand/10 blur-[130px] animate-aurora"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-10 left-1/4 h-[30rem] w-[30rem] rounded-full bg-sky-200/20 blur-[120px] animate-aurora"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
