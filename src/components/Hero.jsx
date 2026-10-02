import { motion } from 'framer-motion';
import { MARQUEE_ITEMS } from '../data';
import Reveal from './Reveal';
import { Icon } from './icons';

const easeOut = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <>
      <section id="hero" className="relative h-[94vh] min-h-[620px] overflow-hidden">
        {/* full-bleed painting: ken-burns entrance, then subtle continuous drift */}
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <motion.img
            src="/hero-art.png"
            alt="Classical painting of students learning at Pyramid Academy"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }}
            className="h-full w-full object-cover object-[center_20%]"
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream via-cream/40 to-transparent" />

        {/* floating admissions pill */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: easeOut }}
          className="absolute bottom-10 left-5 md:left-10"
        >
          <div className="flex items-center gap-2.5 rounded-full border border-ink/10 bg-ivory/90 px-4 py-2 text-sm font-semibold text-ink backdrop-blur md:px-5 md:py-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            Admissions Open 2026
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.a
          href="#why"
          aria-label="Scroll down"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: easeOut }}
          className="absolute bottom-10 right-8 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-ivory/60 text-ink backdrop-blur transition-colors hover:text-orange-600"
        >
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <Icon name="chevronDown" className="h-5 w-5" />
          </motion.span>
        </motion.a>
      </section>

      {/* cream headline zone */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-5 pt-20 pb-16 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-orange-600">
              <span className="h-px w-8 bg-orange-500/50" />
              Spoken English, Perfected
              <span className="h-px w-8 bg-orange-500/50" />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-[68px] font-medium leading-[1.05] text-ink">
              English for the age of{' '}
              <span className="text-gradient-gold italic font-semibold">confidence</span> and
              character.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg md:text-xl font-semibold text-ink">
              Need assistance with admissions or course details?
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-3 text-ink-soft">
              Explore our courses or contact our academic counselors for personalized guidance.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#courses"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white glow-gold transition-all duration-300 hover:scale-105"
              >
                Explore Courses
                <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-ink transition-all duration-300 hover:border-orange-500 hover:text-orange-600 hover:scale-105"
              >
                Talk to a Counselor
              </a>
            </div>
          </Reveal>
        </div>

        {/* marquee band */}
        <div className="overflow-hidden bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 py-4">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
                {MARQUEE_ITEMS.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-6 pr-6 font-display text-sm font-bold uppercase tracking-[0.25em] text-white"
                  >
                    {item}
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
