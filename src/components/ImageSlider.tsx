import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ImageSliderProps {
  images: { src: string; alt: string }[];
  interval?: number;
  className?: string;
  /** object-contain (keeps whole image, good for labels/product shots) vs cover */
  contain?: boolean;
  /** background class behind the image (e.g. bg-white) */
  bgClass?: string;
}

/** Auto-advancing crossfade slideshow. Add more frames by extending `images`. */
export default function ImageSlider({
  images,
  interval = 4000,
  className = "",
  contain = false,
  bgClass = "",
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
      className={`relative aspect-square overflow-hidden rounded-[2rem] border border-navy/[0.07] shadow-[0_24px_60px_-30px_rgba(13,47,82,0.4)] ${bgClass} ${className}`}
    >
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`absolute inset-0 h-full w-full ${
            contain ? "object-contain p-6" : "object-cover"
          }`}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-7 bg-brand"
                  : "w-2.5 bg-navy/25 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
