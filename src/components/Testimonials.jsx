import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data';
import { SectionHeading } from './Reveal';
import IconArt from './IconArt';
import { Icon } from './icons';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const go = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (paused) return undefined;
    timer.current = setInterval(() => go(1), 5000);
    return () => clearInterval(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-amber-300/25 blur-[140px]" />
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          index="V"
          eyebrow="Success Stories"
          title="Loved by"
          highlight="50,000+ learners"
        />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[340px] sm:min-h-[300px] md:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 90, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: direction * -90, filter: 'blur(6px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="card-glass rounded-[2rem] border-ink/10 p-8 md:p-12 text-center shadow-[0_35px_70px_-30px_rgba(27,21,14,0.35)]"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-ink/10 bg-ivory photo-shadow">
                  <IconArt name="ornamental-quote" fallback="quote" className="h-6 w-6 text-ink" />
                </span>
                <div className="mt-6 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="starFill" className="h-4.5 w-4.5 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-lg md:text-2xl font-medium leading-relaxed text-ink">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-center gap-4">
                  <img
                    src={t.avatar}
                    alt={`${t.name}, ${t.role}`}
                    loading="lazy"
                    className="paint-warm-soft h-14 w-14 rounded-full object-cover ring-2 ring-orange-400/50 photo-shadow"
                  />
                  <span className="text-left">
                    <span className="block font-display font-bold text-ink">{t.name}</span>
                    <span className="block text-xs text-ink-soft">
                      {t.role} · {t.course}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink/70 bg-white transition-all hover:border-orange-500 hover:text-orange-600 hover:scale-110"
            >
              <Icon name="chevronLeft" className="h-4.5 w-4.5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i === index ? 'w-8 bg-orange-500' : 'w-2 bg-ink/20 hover:bg-ink/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink/70 bg-white transition-all hover:border-orange-500 hover:text-orange-600 hover:scale-110"
            >
              <Icon name="chevronRight" className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
