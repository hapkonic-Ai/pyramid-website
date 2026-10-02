import { motion } from 'framer-motion';

export default function Reveal({
  children,
  delay = 0,
  y = 36,
  blur = true,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(10px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Decorative pyramid mark, three triangles echoing the logo */
export function PyramidMark({ className = 'h-5 w-5 text-orange-500' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2 17 11H7L12 2Z" opacity="1" />
      <path d="M5.5 13.5 9.5 20.5H1.5L5.5 13.5Z" opacity="0.55" />
      <path d="M18.5 13.5 22.5 20.5H14.5L18.5 13.5Z" opacity="0.75" />
    </svg>
  );
}

export function SectionHeading({ eyebrow, title, highlight, subtext, align = 'center', index }) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex flex-col gap-4 ${alignCls} mb-14 md:mb-20`}>
      {index && (
        <Reveal>
          <span className="font-display text-5xl font-medium text-orange-500/25 leading-none">
            {index}.
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <span className="inline-flex items-center gap-2.5 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
          <PyramidMark className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl md:text-6xl lg:text-[64px] font-medium leading-[1.04] max-w-3xl text-ink">
          {title}{' '}
          {highlight && <span className="text-gradient-gold italic font-semibold">{highlight}</span>}
        </h2>
      </Reveal>
      {subtext && (
        <Reveal delay={0.2}>
          <p className="max-w-xl text-base md:text-lg text-ink-soft">{subtext}</p>
        </Reveal>
      )}
      <Reveal delay={0.25}>
        <span
          className={`block h-px w-[72px] bg-gradient-to-r from-orange-500 to-transparent ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        />
      </Reveal>
    </div>
  );
}
