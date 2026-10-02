import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { STATS } from '../data';
import Reveal, { SectionHeading } from './Reveal';

function Counter({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 55, damping: 18 });
  const display = useTransform(spring, (v) =>
    stat.decimals ? v.toFixed(stat.decimals) : Math.round(v).toLocaleString('en-IN')
  );

  useEffect(() => {
    if (inView) mv.set(stat.value);
  }, [inView, mv, stat.value]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-[56px] font-semibold text-gradient-gold tabular-nums leading-none">
      <motion.span>{display}</motion.span>
      <span className="font-display italic">{stat.suffix}</span>
    </span>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 120 44" className="h-11 w-28" aria-hidden="true">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7931e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f7931e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M2 38 18 30 34 33 50 22 66 25 82 13 98 16 118 4V44H2Z" fill="url(#spark-fill)" />
      <path
        d="M2 38 18 30 34 33 50 22 66 25 82 13 98 16 118 4"
        fill="none"
        stroke="#f7931e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="118" cy="4" r="3.5" fill="#f7931e" />
    </svg>
  );
}

const AVATARS = ['/images/avatar-1.jpg', '/images/avatar-2.jpg', '/images/avatar-3.jpg', '/images/avatar-4.jpg'];

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Track Record"
          title="Numbers that"
          highlight="speak"
          subtext="Fifteen years of turning hesitant speakers into confident communicators. The results speak for themselves."
        />

        <Reveal className="mb-12 flex justify-center">
          <div className="flex items-center gap-4 rounded-full border border-ink/10 bg-white py-2.5 pl-3 pr-5 photo-shadow">
            <div className="flex -space-x-2.5">
              {AVATARS.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Pyramid Academy graduate ${i + 1}`}
                  loading="lazy"
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
                />
              ))}
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-sand text-[10px] font-bold text-ink">
                +12k
              </span>
            </div>
            <span className="text-sm font-semibold text-ink">
              Loved by <span className="text-orange-600">12,400+ reviewers</span> across India
            </span>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group relative flex flex-col gap-2 rounded-[2rem] border border-ink/8 bg-white p-8 md:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(27,21,14,0.3)]"
            >
              <div className="flex items-start justify-between gap-3">
                <Counter stat={stat} />
                {(i === 3 || i === 4) && <Sparkline />}
              </div>
              <div className="font-display text-base font-semibold text-ink mt-1">{stat.label}</div>
              <div className="text-sm text-ink-soft">{stat.note}</div>
              <span className="absolute left-0 top-6 h-0 w-1 rounded-full bg-orange-500 transition-all duration-500 group-hover:h-[calc(100%-3rem)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
