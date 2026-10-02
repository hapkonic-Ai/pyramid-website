import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COURSES, NEXT_BATCH_DATE, UPCOMING_BATCHES } from '../data';
import Reveal from './Reveal';
import ArtImg from './ArtImg';
import IconArt from './IconArt';
import PyramidWatermark from './PyramidWatermark';

function useCountdown(target) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

const pad = (n) => String(n).padStart(2, '0');

export default function AdmissionsCTA() {
  const { d, h, m, s } = useCountdown(NEXT_BATCH_DATE);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const units = [
    { value: pad(d), label: 'Days' },
    { value: pad(h), label: 'Hours' },
    { value: pad(m), label: 'Mins' },
    { value: pad(s), label: 'Secs' },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <PyramidWatermark className="-left-24 -bottom-24 hidden md:block" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative rounded-[2.5rem] p-[2px] overflow-hidden">
            <div className="absolute inset-0 ring-conic animate-angle" />
            <div className="relative rounded-[calc(2.5rem-2px)] bg-cream/95 px-6 py-12 md:p-16 overflow-hidden">
              {/* photo backdrop */}
              <ArtImg
                art="/art/cta.jpg"
                src="/images/students-collab.jpg"
                alt=""
                aria-hidden="true"
                className="paint-warm-deep pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.14]"
              />
              <div className="pointer-events-none absolute -top-24 right-0 h-[300px] w-[300px] rounded-full bg-orange-400/20 blur-[100px]" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
                <div>
                  <Reveal>
                    <span className="font-display text-5xl font-medium text-orange-500/25 leading-none">
                      VII.
                    </span>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <span className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-orange-500/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse-glow" />
                      Limited Seats
                    </span>
                  </Reveal>
                  <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold leading-[1.05] text-ink">
                    Admissions Open. <span className="text-gradient-gold">Join Today!</span>
                  </h2>
                  <p className="mt-5 max-w-md text-ink-soft leading-relaxed">
                    The next batch starts soon and seats fill fast. Reserve your spot now and
                    get a free placement assessment plus a one-on-one counseling session.
                  </p>

                  <div className="mt-8">
                    <div className="text-xs uppercase tracking-[0.25em] text-ink-soft mb-3">
                      Next batch starts in
                    </div>
                    <div className="flex gap-3">
                      {units.map((u) => (
                        <div
                          key={u.label}
                          className="flex w-[70px] flex-col items-center rounded-xl bg-gradient-to-b from-amber-400 to-orange-500 py-3 photo-shadow"
                        >
                          <span className="font-display text-2xl md:text-3xl font-bold text-white tabular-nums">
                            {u.value}
                          </span>
                          <span className="mt-1 text-[10px] uppercase tracking-widest text-white/80">
                            {u.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-2.5">
                    {UPCOMING_BATCHES.map((b) => (
                      <span
                        key={b.date}
                        className="inline-flex w-fit items-center gap-3 rounded-full border border-ink/10 bg-white px-4 py-2 text-xs md:text-sm font-semibold text-ink"
                      >
                        <IconArt name="calendar-scroll" fallback="calendar" className="h-3.5 w-3.5 shrink-0 text-orange-500" />
                        {b.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[420px]">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="flex h-full min-h-[420px] flex-col items-center justify-center gap-5 rounded-2xl card-glass p-10 text-center"
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 14 }}
                          className="flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/40 bg-ivory glow-gold"
                        >
                          <IconArt name="laurel-check" fallback="circleCheckBig" className="h-9 w-9 text-ink" />
                        </motion.span>
                        <h3 className="font-display text-2xl font-bold text-ink">
                          Enquiry received!
                        </h3>
                        <p className="max-w-xs text-sm text-ink-soft">
                          Our counselor will call you within 24 hours to schedule your free
                          placement assessment.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="mt-2 text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-500"
                        >
                          Submit another enquiry
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl card-glass p-7 md:p-9"
                      >
                        <h3 className="font-display text-xl font-bold text-ink">
                          Book your free counselling session
                        </h3>
                        <p className="mt-2 text-xs text-ink-soft">
                          Takes 30 seconds · No spam, ever
                        </p>

                        <label className="mt-7 block">
                          <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                            Full Name
                          </span>
                          <input
                            required
                            type="text"
                            placeholder="Asha Patel"
                            className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/25"
                          />
                        </label>

                        <label className="mt-5 block">
                          <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                            Phone Number
                          </span>
                          <input
                            required
                            type="tel"
                            pattern="[0-9+\-\s]{8,15}"
                            placeholder="+91 98765 43210"
                            className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/25"
                          />
                        </label>

                        <label className="mt-5 block">
                          <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                            Course of Interest
                          </span>
                          <select
                            required
                            defaultValue=""
                            className="mt-2 w-full appearance-none rounded-xl border border-ink/10 bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/25"
                          >
                            <option value="" disabled>
                              Select a course
                            </option>
                            {COURSES.map((c) => (
                              <option key={c.name} value={c.name}>
                                {c.name} · {c.duration}
                              </option>
                            ))}
                          </select>
                        </label>

                        <button
                          type="submit"
                          className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white glow-gold transition-all duration-300 hover:scale-[1.02]"
                        >
                          Request a Callback
                          <IconArt name="paper-quill" fallback="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </button>

                        <p className="mt-4 flex items-center justify-center gap-2 text-[11px] text-ink-soft">
                          <IconArt name="pocket-watch" fallback="clock" className="h-3 w-3 text-orange-500" />
                          Average callback time: under 4 working hours
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
