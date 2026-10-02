import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { METHOD_STEPS } from '../data';
import Reveal from './Reveal';
import ArtImg from './ArtImg';
import IconArt from './IconArt';
import PyramidWatermark from './PyramidWatermark';

function Step({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex gap-6 md:gap-8 rounded-[1.6rem] border bg-white p-7 md:p-9 transition-all duration-500 ${
        inView
          ? 'border-orange-500/50 shadow-[0_25px_50px_-20px_rgba(232,126,10,0.4)]'
          : 'border-ink/8'
      }`}
    >
      <div className="flex flex-col items-center">
        <span
          className={`font-display text-sm font-bold transition-colors duration-500 ${
            inView ? 'text-orange-600' : 'text-ink/30'
          }`}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className={`mt-2 h-full w-0.5 rounded transition-colors duration-500 ${
            inView ? 'bg-orange-500/40' : 'bg-ink/10'
          }`}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500 ${
              inView
                ? 'bg-ivory border-orange-500 text-ink scale-110 shadow-[0_10px_25px_-8px_rgba(232,126,10,0.5)]'
                : 'border-ink/15 bg-ivory text-ink shadow-[inset_0_2px_8px_rgba(27,21,14,0.08)]'
            }`}
          >
            <IconArt
              name={step.icon.art}
              fallback={step.icon.fallback}
              className="h-5 w-5 text-ink"
            />
          </div>
          <h3
            className={`font-display text-lg md:text-xl font-bold transition-colors duration-500 ${
              inView ? 'text-ink' : 'text-ink/70'
            }`}
          >
            {step.title}
          </h3>
        </div>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-ink-soft">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function LearningMethod() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start center', 'end center'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="method" className="relative py-24 md:py-32 bg-ivory overflow-hidden">
      <PyramidWatermark className="-right-20 -bottom-24 hidden md:block" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Reveal>
              <span className="font-display text-5xl font-medium text-orange-500/25 leading-none">
                IV.
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse-glow" />
                Our Learning Method
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-ink">
                You don’t study English. <span className="text-gradient-gold italic font-semibold">You live it.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-ink-soft leading-relaxed">
                We use activity-based learning, role plays, group discussions, presentations,
                one-to-one speaking practice, vocabulary building, and real-world conversations
                to ensure every learner gains confidence.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="relative mt-8 rounded-[2rem] photo-shadow">
                <ArtImg
                  art="/art/method.jpg"
                  src="/images/classroom-seminar.jpg"
                  alt="Interactive classroom seminar at Pyramid Academy"
                  className="aspect-[4/3] w-full art-frame rounded-[2rem] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-white/95 px-5 py-3 photo-shadow">
                  <span className="font-display text-2xl font-bold text-gradient-gold">80%</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink">
                    active speaking
                    <br />
                    in every class
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            {/* scroll progress line */}
            <motion.div
              style={{ scaleY: lineScale }}
              className="absolute -left-4 top-0 hidden h-full w-1 origin-top rounded-full bg-gradient-to-b from-amber-400 to-orange-600 md:block"
            />
            <div ref={listRef} className="flex flex-col gap-5">
              {METHOD_STEPS.map((step, i) => (
                <Step key={step.title} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
