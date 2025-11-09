import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 40%'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -10]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative min-h-[70vh] bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-6 py-24">
        <motion.div
          style={{ y, opacity }}
          className="mx-auto rounded-2xl border border-white/10 bg-white/5 p-8 text-slate-200 backdrop-blur-xl shadow-2xl"
        >
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white">About Astraea</h2>
          <p className="leading-relaxed text-slate-300">
            I build serene, futuristic interfaces that feel alive. My work blends WebGL, creative coding,
            and thoughtful UI to craft experiences that move with the user. When I’m not designing pixels,
            I explore shaders, generative art, and the subtle poetry of motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
