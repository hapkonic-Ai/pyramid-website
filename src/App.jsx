import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyPyramid from './components/WhyPyramid';
import Courses from './components/Courses';
import WhoCanJoin from './components/WhoCanJoin';
import LearningMethod from './components/LearningMethod';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import AdmissionsCTA from './components/AdmissionsCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href');
      if (id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="relative min-h-screen bg-cream text-ink antialiased">
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyPyramid />
        <Courses />
        <WhoCanJoin />
        <LearningMethod />
        <Testimonials />
        <Faq />
        <AdmissionsCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
