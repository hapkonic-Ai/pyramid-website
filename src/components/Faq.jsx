import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data';
import { SectionHeading } from './Reveal';
import { Icon } from './icons';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-ivory">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          index="VI"
          eyebrow="FAQ"
          title="Questions,"
          highlight="answered"
          subtext="Everything you need to know before joining. Still unsure? Our counselors are one call away."
        />

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`overflow-hidden rounded-[1.6rem] border bg-white transition-all duration-500 ${
                  isOpen
                    ? 'border-orange-500/50 shadow-[0_20px_45px_-20px_rgba(232,126,10,0.35)]'
                    : 'border-ink/8 hover:border-orange-500/25'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 md:p-7 text-left"
                >
                  <span className={`font-display text-base md:text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-orange-600' : 'text-ink'}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen ? 'bg-orange-500 text-white' : 'bg-orange-500/10 text-orange-600'
                    }`}
                  >
                    <Icon name="plus" className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 md:px-6 pb-6 text-sm md:text-base leading-relaxed text-ink-soft">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
