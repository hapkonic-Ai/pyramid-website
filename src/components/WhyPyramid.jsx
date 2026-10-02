import { motion } from 'framer-motion';
import { PILLARS } from '../data';
import { SectionHeading } from './Reveal';
import ArtImg from './ArtImg';
import IconArt from './IconArt';
import PyramidWatermark from './PyramidWatermark';

function ProgressRing() {
  const r = 30;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-5">
      <div className="relative h-20 w-20">
        <svg viewBox="0 0 72 72" className="h-20 w-20 -rotate-90">
          <circle cx="36" cy="36" r={r} fill="none" stroke="rgba(27,21,14,0.08)" strokeWidth="8" />
          <motion.circle
            cx="36"
            cy="36"
            r={r}
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: c * (1 - 0.98) }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />
          <defs>
            <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#e87e0a" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-base font-bold text-ink">
          98%
        </span>
      </div>
      <div>
        <div className="font-display text-lg font-bold leading-tight text-ink">fluent in 90 days</div>
        <div className="mt-1 text-sm text-ink-soft">Self-reported by 12,400+ graduates</div>
      </div>
    </div>
  );
}

export default function WhyPyramid() {
  return (
    <section id="why" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <PyramidWatermark className="-right-20 -bottom-24 hidden md:block" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-amber-300/20 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="I"
          eyebrow="Why Pyramid?"
          title="Four pillars. One"
          highlight="transformation."
          subtext="Everything we do at Pyramid is built on four promises we make to every single learner who walks through our doors."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* large photo card */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[2rem] sm:col-span-2 lg:row-span-2 min-h-[380px] lg:min-h-0 photo-shadow"
          >
            <ArtImg
              art="/art/why.jpg"
              src="/images/whiteboard-training.jpg"
              alt="Trainer coaching learners at a whiteboard session"
              className="paint-warm-deep absolute inset-0 h-full w-full art-frame rounded-[2rem] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              {['1-on-1 Coaching', 'Certified Trainers', 'Small Batches'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink photo-shadow"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight max-w-sm">
                Learning that feels human
              </h3>
              <p className="mt-3 max-w-md text-sm md:text-base text-white/80">
                No rote grammar. Real conversations, real feedback, real confidence. In
                batches small enough to know your name.
              </p>
            </div>
          </motion.div>

          {/* pillar cards */}
          {PILLARS.map((pillar, i) => {
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.08 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col gap-4 rounded-[2rem] border border-ink/8 bg-white p-8 transition-all duration-500 hover:shadow-[0_30px_60px_-25px_rgba(27,21,14,0.3)]"
              >
                <span className="absolute right-5 top-5 font-display text-4xl font-bold text-ink/5 group-hover:text-orange-500/20 transition-colors duration-500">
                  0{i + 1}
                </span>
                <div className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl border border-ink/15 bg-ivory text-ink shadow-[inset_0_2px_10px_rgba(27,21,14,0.08)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:rotate-3 group-hover:border-orange-500/50">
                  <IconArt
                    name={pillar.icon.art}
                    fallback={pillar.icon.fallback}
                    className="h-6 w-6 lg:h-7 lg:w-7 text-ink"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{pillar.description}</p>
                <div className="mt-auto pt-3 border-t border-ink/8 text-xs font-semibold uppercase tracking-wider text-orange-600">
                  {pillar.stat}
                </div>
              </motion.div>
            );
          })}

          {/* progress ring card */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="flex flex-col justify-center gap-3 rounded-[2rem] border border-ink/8 bg-white p-8 transition-all duration-500 hover:shadow-[0_30px_60px_-25px_rgba(27,21,14,0.3)]"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              The 90-day promise
            </span>
            <ProgressRing />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
