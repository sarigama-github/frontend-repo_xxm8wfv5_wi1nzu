import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.85, 0.7]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Soft gradient halos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl" />
      </div>

      {/* Floating particles */}
      <Particles />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16">
        <div className="space-y-6">
          <motion.h1
            className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Crafting beauty through code and imagination.
          </motion.h1>
          <motion.p
            className="max-w-md text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            I’m Astraea — a creative developer and designer blending interactive 3D, soft light, and elegant motion to build immersive digital experiences.
          </motion.p>
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <a href="#projects" className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90">
              View Projects
            </a>
            <a href="#contact" className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10">
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* 3D scene with slight scroll tilt */}
        <motion.div
          style={{ rotateY, opacity }}
          className="relative h-[50vh] w-full rounded-xl bg-white/5 shadow-2xl ring-1 ring-white/10 backdrop-blur-md md:h-[70vh]"
        >
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <Spline
              scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/* top gradient gloss */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

function Particles() {
  const particles = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: 3 + (i % 5), repeat: Infinity, delay: i * 0.1 }}
          style={{
            top: `${(i * 137) % 100}%`,
            left: `${(i * 83) % 100}%`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
    </div>
  );
}
