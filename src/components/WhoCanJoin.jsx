import { motion } from 'framer-motion';
import { AUDIENCES } from '../data';
import { SectionHeading } from './Reveal';
import ArtImg from './ArtImg';
import IconArt from './IconArt';

const PHOTOS = [
  { art: '/art/audience-students.jpg', src: '/images/happy-students.jpg' },
  { art: '/art/audience-professionals.jpg', src: '/images/corporate-woman.jpg' },
  { art: '/art/audience-jobseekers.jpg', src: '/images/interview-pro.jpg' },
  { art: '/art/audience-homemakers.jpg', src: '/images/conversation-group.jpg' },
  { art: '/art/audience-entrepreneurs.jpg', src: '/images/training-room.jpg' },
];

export default function WhoCanJoin() {
  return (
    <section id="who" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-400/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="III"
          eyebrow="Who Can Join?"
          title="Improving your spoken English is for"
          highlight="everyone"
          subtext="Whether you are 15 or 50, a student or a CEO. If you want to grow personally or professionally, there is a seat waiting for you."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {AUDIENCES.map((audience, i) => {
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 48, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[2rem] border border-ink/8 bg-white transition-all duration-500 hover:shadow-[0_30px_60px_-25px_rgba(27,21,14,0.3)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <ArtImg
                    art={PHOTOS[i].art}
                    src={PHOTOS[i].src}
                    alt={`${audience.title} learning spoken English at Pyramid Academy`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                  <div className="absolute left-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-xl border border-ink/15 bg-ivory/95 text-ink photo-shadow transition-all duration-500 group-hover:rotate-6">
                    <IconArt
                      name={audience.icon.art}
                      fallback={audience.icon.fallback}
                      className="h-5 w-5"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-7">
                  <h3 className="font-display text-lg font-bold text-ink">{audience.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft flex-1">{audience.description}</p>
                  <div className="rounded-xl bg-orange-500/8 border border-orange-500/20 px-3 py-2 text-center text-xs font-bold text-orange-600">
                    {audience.count}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
