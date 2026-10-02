import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COURSES } from '../data';
import Reveal from './Reveal';
import ArtImg from './ArtImg';
import IconArt from './IconArt';
import { Icon } from './icons';

function CourseRow({ course, open, onToggle }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[1.75rem] border bg-white transition-all duration-500 cursor-pointer ${
        open
          ? 'border-orange-500/50 shadow-[0_30px_60px_-25px_rgba(232,126,10,0.4)]'
          : 'border-ink/8 hover:border-orange-500/30 hover:shadow-[0_20px_45px_-20px_rgba(27,21,14,0.25)]'
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center gap-4 md:gap-6 p-6 md:p-7">
        <div className="flex h-14 w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-2xl border border-ink/15 bg-ivory text-ink shadow-[inset_0_2px_10px_rgba(27,21,14,0.08)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:rotate-3 group-hover:border-orange-500/50">
          <IconArt
            name={course.icon.art}
            fallback={course.icon.fallback}
            className="h-6 w-6 lg:h-7 lg:w-7 text-ink"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <h3 className="font-display text-lg md:text-xl font-bold text-ink truncate">
              {course.name}
            </h3>
            <span className="hidden sm:inline-flex rounded-full border border-ink/15 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              {course.level}
            </span>
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-soft">
            <span className="inline-flex items-center gap-1">
              <IconArt name="pocket-watch" fallback="clock" className="h-3 w-3 text-orange-500" />
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon name="starFill" className="h-3 w-3 text-amber-400" /> {course.rating}
            </span>
            <span className="inline-flex items-center gap-1">
              <IconArt name="handshake" fallback="users" className="h-3 w-3 text-orange-500" />
              {course.learners} enrolled
            </span>
          </div>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 ${open ? 'text-orange-500' : 'text-ink/40'}`}
        >
          <Icon name="chevronDown" className="h-5 w-5" />
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-6 px-6 md:px-7 pb-7 md:pl-[100px]">
              <div className="flex flex-col gap-5">
                <p className="max-w-xl text-sm md:text-base leading-relaxed text-ink-soft">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-cream px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink"
                    >
                      <IconArt name="wax-seal" fallback="badgeCheck" className="h-3.5 w-3.5 text-orange-500" />
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={(e) => e.stopPropagation()}
                  className="group/l inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-600"
                >
                  Enquire about this course
                  <Icon
                    name="arrowUpRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover/l:translate-x-1 group-hover/l:-translate-y-1"
                  />
                </a>
              </div>
              <ArtImg
                art={course.art}
                src={course.image}
                alt={`${course.name} class at Pyramid Academy`}
                className="hidden md:block h-full min-h-[170px] w-full rounded-2xl object-cover photo-shadow"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Courses() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="courses" className="relative py-24 md:py-32 bg-ivory overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 -right-48 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
          <div className="lg:sticky lg:top-28 self-start">
            <Reveal>
              <span className="font-display text-5xl font-medium text-orange-500/25 leading-none">
                II.
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse-glow" />
                Our Courses
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-ink">
                A program for <span className="text-gradient-gold italic font-semibold">every speaker</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-ink-soft leading-relaxed">
                Seven carefully crafted programs, one goal: to make you a confident,
                fluent English speaker. Every batch is capped at 12 learners with a
                dedicated certified trainer.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 overflow-hidden rounded-[2rem] photo-shadow">
                <ArtImg
                  art="/art/courses.jpg"
                  src="/images/writing-practice.jpg"
                  alt="Learner practising written English in class"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-6 flex flex-wrap gap-6">
                <div>
                  <div className="font-display text-3xl font-bold text-gradient-gold">7</div>
                  <div className="text-xs uppercase tracking-wider text-ink-soft mt-1">Programs</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-gradient-gold">50K+</div>
                  <div className="text-xs uppercase tracking-wider text-ink-soft mt-1">Alumni</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-gradient-gold">4.9</div>
                  <div className="text-xs uppercase tracking-wider text-ink-soft mt-1">Avg. rating</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink hover:text-orange-600 transition-colors"
              >
                View all courses
                <Icon name="arrowRight" className="h-4 w-4 text-orange-500 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5">
            {COURSES.map((course, i) => (
              <CourseRow
                key={course.name}
                course={course}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
