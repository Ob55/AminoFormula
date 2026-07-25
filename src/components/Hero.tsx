import { Dumbbell, DollarSign, Truck, Star, ShieldCheck } from "lucide-react";
import CtaButton from "./CtaButton";

const features = [
  {
    icon: Dumbbell,
    title: "Rebuild lean muscle",
    text: "8 essential amino acids in the exact ratio your body can actually use.",
  },
  {
    icon: DollarSign,
    title: "99% absorbed",
    text: "Almost zero waste — far more usable than whey protein or BCAAs.",
  },
  {
    icon: Truck,
    title: "Free fast shipping",
    text: "Free shipping on every order, delivered right to your door.",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-light text-white"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cyanx/20 blur-3xl" />
      <div className="container-wide relative grid lg:grid-cols-2 gap-10 lg:gap-8 items-center py-14 md:py-20">
        {/* Left */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 mb-6">
            <span className="flex text-cta">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-sm text-white/90 font-medium">
              4.8 Average Rating • 2,300+ Reviews
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] font-extrabold tracking-tight">
            Rebuild Muscle &amp; <br className="hidden md:block" />
            <span className="text-cyanx">Reclaim Your Strength</span>
          </h1>

          <p className="mt-5 text-lg text-white/80 max-w-xl">
            Advanced Amino Formula delivers a perfect blend of the 8 essential
            amino acids — designed to be efficiently used by your body, producing
            very little waste. Fight age-related muscle loss and feel strong
            again.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col gap-2">
                <f.icon className="text-cyanx" size={26} />
                <p className="font-semibold text-white">{f.title}</p>
                <p className="text-sm text-white/70">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div>
              <p className="text-sm text-white/60">Starts at just</p>
              <p className="text-3xl font-extrabold">
                $33.25
                <span className="text-base font-medium text-white/70">
                  {" "}
                  / bottle
                </span>
              </p>
            </div>
            <CtaButton href="#order" className="text-lg px-9 py-4">
              Order Now
            </CtaButton>
          </div>

          <div className="mt-6 flex items-center gap-2 text-white/70 text-sm">
            <ShieldCheck size={18} className="text-success" />
            60-Day Money-Back Guarantee — zero risk
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center lg:justify-end animate-fade-up">
          <div className="absolute inset-0 m-auto h-72 w-72 md:h-96 md:w-96 rounded-full bg-white/10 blur-2xl" />
          <img
            src="/assets/image-4.webp"
            alt="Advanced Amino Formula bottle"
            className="relative w-64 md:w-80 lg:w-[26rem] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
