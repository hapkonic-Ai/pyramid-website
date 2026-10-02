import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const start = performance.now();
    const duration = 1400;
    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setExit(true);
        setTimeout(() => {
          document.body.style.overflow = '';
          onDone();
        }, 500);
      }
    };
    raf = requestAnimationFrame(tick);
    // Fallback: rAF is throttled in hidden/low-power contexts, ensure completion.
    const failsafe = setTimeout(() => {
      cancelAnimationFrame(raf);
      setProgress(100);
      setExit(true);
      setTimeout(() => {
        document.body.style.overflow = '';
        onDone();
      }, 500);
    }, duration + 150);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(failsafe);
      document.body.style.overflow = '';
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
          exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <img
              src="/logo.png"
              alt="Pyramid Academy"
              style={{ mixBlendMode: 'multiply' }}
              className="h-28 w-auto"
            />
            <div className="h-1 w-56 md:w-72 bg-ink/10 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="font-display text-sm tracking-[0.3em] text-orange-600 tabular-nums">
              {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
