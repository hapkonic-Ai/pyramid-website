import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, CONTACT } from '../data';
import IconArt from './IconArt';
import { Icon } from './icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4"
      >
        <nav
          className={`mx-auto mt-4 flex h-14 max-w-6xl items-center justify-between rounded-full border border-ink/10 px-5 shadow-[0_12px_40px_-16px_rgba(27,21,14,0.25)] transition-colors duration-500 ${
            scrolled ? 'bg-ivory/95 backdrop-blur-xl' : 'bg-ivory/85 backdrop-blur-md'
          }`}
        >
          <a href="#hero" className="flex shrink-0 items-center">
            <img
              src="/logo.png"
              alt="Pyramid Academy, Learn to Lead"
              style={{ mixBlendMode: 'multiply' }}
              className="h-9 w-auto"
            />
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.slice(0, 6).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative py-1 text-sm font-semibold text-ink/60 transition-colors hover:text-ink"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-ivory transition-colors duration-300 hover:bg-orange-600 md:inline-flex"
            >
              Enquire Now
              <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {open ? <Icon name="x" className="h-5 w-5" /> : <Icon name="menu" className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-cream/95 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-ink/10 py-4"
                  >
                    <span className="font-display text-3xl font-medium text-ink group-hover:text-orange-600 transition-colors">
                      {link.label}
                    </span>
                    <span className="text-sm text-orange-500/70 font-mono">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="mx-8 mt-10 flex items-center gap-3 text-ink/70"
            >
              <IconArt name="candlestick-phone" fallback="phone" className="h-4.5 w-4.5 text-orange-500" />
              {CONTACT.phone}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
