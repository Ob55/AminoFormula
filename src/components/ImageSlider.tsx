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
  /** show a clickable thumbnail rail beside the main image */
  thumbnails?: boolean;
}

/** Auto-advancing crossfade gallery with an optional clickable thumbnail rail. */
export default function ImageSlider({
  images,
  interval = 4000,
  className = "",
  contain = false,
  bgClass = "",
  thumbnails = false,
}: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  // auto-advance; the timer resets whenever `index` changes (incl. manual clicks)
  useEffect(() => {
    if (images.length < 2) return;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    );
    return () => clearTimeout(id);
  }, [index, images.length, interval]);

  const fit = contain ? "object-contain p-6" : "object-cover";

  const mainFrame = (
    <div
      className={`relative aspect-square overflow-hidden rounded-[2rem] border border-navy/[0.07] shadow-[0_24px_60px_-30px_rgba(13,47,82,0.4)] flex-1 ${bgClass} ${className}`}
    >
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`absolute inset-0 h-full w-full ${fit}`}
        />
      </AnimatePresence>

      {!thumbnails && images.length > 1 && (
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

  if (!thumbnails) return mainFrame;

  return (
    <div className="flex gap-3 md:gap-4 items-start">
      {/* thumbnail rail */}
      <div className="flex flex-col gap-3 w-16 md:w-20 shrink-0">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`View image ${i + 1}`}
            className={`relative aspect-square overflow-hidden rounded-xl bg-white transition-all duration-200 ${
              i === index
                ? "ring-2 ring-brand shadow-md"
                : "ring-1 ring-navy/10 opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 h-full w-full object-contain p-1.5"
            />
          </button>
        ))}
      </div>

      {mainFrame}
    </div>
  );
}
