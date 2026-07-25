import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ImageSliderProps {
  images: { src: string; alt: string }[];
  interval?: number;
  className?: string;
}

/** Auto-advancing crossfade slideshow. Add more frames by extending `images`. */
export default function ImageSlider({
  images,
  interval = 4000,
  className = "",
}: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-3xl border border-navy/[0.07] shadow-[0_24px_60px_-30px_rgba(13,47,82,0.4)] ${className}`}
    >
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
