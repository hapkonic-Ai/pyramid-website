import { CONTACT, FOOTER_COURSES, NAV_LINKS } from '../data';
import Reveal from './Reveal';
import IconArt from './IconArt';
import { Icon } from './icons';

const SOCIALS = [
  {
    name: 'Instagram',
    href: '#',
    path: 'M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z',
  },
  {
    name: 'Facebook',
    href: '#',
    path: 'M13.5 21v-7h2.6l.4-3h-3V9.1c0-.9.3-1.6 1.7-1.6h1.4V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.7v7h2.8Z',
  },
  {
    name: 'LinkedIn',
    href: '#',
    path: 'M6.94 8.5V21H3.56V8.5h3.38ZM5.25 3a1.97 1.97 0 1 1 0 3.94 1.97 1.97 0 0 1 0-3.94ZM12 21v-6.57c0-1.76.75-2.93 2.63-2.93 1.53 0 2.13 1.06 2.13 2.93V21h3.38v-7.19c0-3.14-1.68-4.6-3.92-4.6-1.83 0-2.66 1-3.13 1.71V8.5H9.75c.04.96 0 12.5 0 12.5H12Z',
  },
  {
    name: 'YouTube',
    href: '#',
    path: 'M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z',
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#14100B]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12">
          <Reveal>
            <div className="flex flex-col gap-5">
              <div className="w-fit rounded-xl bg-white p-3 shadow-[0_15px_40px_-15px_rgba(247,147,30,0.4)]">
                <img
                  src="/logo.png"
                  alt="Pyramid Academy logo"
                  className="h-16 w-auto"
                />
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-white/55">
                India’s most loved spoken English institute. 15+ years, 40+ centers,
                50,000+ confident speakers and counting. Learn to Lead.
              </p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-orange-400 hover:text-orange-400 hover:scale-110"
                  >
                    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-orange-400"
                    >
                      {link.label}
                      <Icon
                        name="arrowUpRight"
                        className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-5">
                Courses
              </h4>
              <ul className="space-y-3">
                {FOOTER_COURSES.map((name) => (
                  <li key={name}>
                    <a
                      href="#courses"
                      className="text-sm text-white/55 transition-colors hover:text-orange-400"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-5">
                Get in Touch
              </h4>
              <ul className="space-y-4 text-sm text-white/55">
                <li>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                    className="flex items-start gap-3 transition-colors hover:text-orange-400"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-ivory">
                      <IconArt name="candlestick-phone" fallback="phone" className="h-3.5 w-3.5 text-ink" />
                    </span>
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-start gap-3 transition-colors hover:text-orange-400"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-ivory">
                      <IconArt name="sealed-envelope" fallback="mail" className="h-3.5 w-3.5 text-ink" />
                    </span>
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-ivory">
                    <IconArt name="obelisk-pin" fallback="mapPin" className="h-3.5 w-3.5 text-ink" />
                  </span>
                  {CONTACT.address}
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40">
          <p>© 2026 PYRAMID ACADEMY by SPECTRUM Education. Demo redesign concept.</p>
          <p>All statistics and testimonials are fictional demo data.</p>
        </div>
      </div>
    </footer>
  );
}
