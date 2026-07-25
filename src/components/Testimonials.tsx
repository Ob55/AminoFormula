import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Robert M.",
    location: "Verified Buyer",
    text: "At 62 I thought losing strength was just part of getting older. After three months on Advanced Amino I'm back in the gym and lifting more than I have in years.",
  },
  {
    name: "Linda K.",
    location: "Verified Buyer",
    text: "I recover so much faster now. No more days of being sore after yard work. I feel steady and strong on my feet again.",
  },
  {
    name: "James P.",
    location: "Verified Buyer",
    text: "I've tried protein powders for decades and they left me bloated. This mixes easily, no stomach issues, and I can actually feel the difference.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-cta font-semibold tracking-wider uppercase text-sm">
            Real Results
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
            Trusted by thousands of active adults
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative rounded-3xl bg-slate-50 border border-slate-100 p-8 shadow-card"
            >
              <Quote className="text-brand/20 absolute top-6 right-6" size={40} />
              <div className="flex text-cta mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed relative z-10">
                “{r.text}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-brand text-white flex items-center justify-center font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy">{r.name}</p>
                  <p className="text-sm text-success font-medium">
                    {r.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
