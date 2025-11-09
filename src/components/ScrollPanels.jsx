import { useRef, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

export default function ScrollPanels() {
  const ref = useRef(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [10, -5, 12]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (v > 0.15 && v < 0.55) controls.start('showInfo');
      else if (v >= 0.55) controls.start('showContact');
    });
    return () => unsubscribe();
  }, [controls, scrollYProgress]);

  return (
    <section ref={ref} className="relative bg-slate-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div style={{ rotateY }} className="relative h-80 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="text-lg font-medium text-slate-200">Astraea Avatar</div>
          <p className="mt-2 text-sm text-slate-400">Scroll to reveal panels. The avatar subtly turns with your journey.</p>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
        </motion.div>

        <div className="space-y-6">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, showInfo: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate={controls}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold">Personal Info</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-300">
              <li>Skills: WebGL, React, Motion</li>
              <li>Design: Figma, Blender, Spline</li>
              <li>Education: BFA + CS</li>
              <li>Interests: Generative Art</li>
            </ul>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, showContact: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate={controls}
            id="contact"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-slate-300">Let’s collaborate. Send a message and I’ll get back soon.</p>
            <form className="mt-4 grid gap-3">
              <input className="w-full rounded-lg border border-white/10 bg-white/10 p-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40" placeholder="Your email" type="email" required />
              <textarea className="w-full rounded-lg border border-white/10 bg-white/10 p-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40" placeholder="Your message" rows={4} required />
              <button type="submit" className="self-start rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90">Send</button>
            </form>
            <div className="mt-3 text-sm text-slate-400">or reach me at <a href="mailto:hello@astraea.dev" className="underline decoration-fuchsia-400/60 underline-offset-4">hello@astraea.dev</a></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
