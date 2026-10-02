import { motion } from 'framer-motion';

/** Faint classical pyramid glyph watermark echoing the logo */
export default function PyramidWatermark({ className = '' }) {
  return (
    <motion.svg
      viewBox="0 0 200 180"
      fill="none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
      className={`pointer-events-none absolute h-[420px] w-auto stroke-ink/[0.05] ${className}`}
      aria-hidden="true"
    >
      <path d="M100 8 150 88H50L100 8Z" strokeWidth="1.5" />
      <path d="M35 102 72 166H-2L35 102Z" strokeWidth="1.5" />
      <path d="M165 102 202 166H128L165 102Z" strokeWidth="1.5" />
      <path d="M100 30 132 84H68L100 30Z" strokeWidth="1" opacity="0.6" />
    </motion.svg>
  );
}
