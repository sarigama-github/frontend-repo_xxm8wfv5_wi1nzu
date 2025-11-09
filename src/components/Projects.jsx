import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nebula UI',
    tools: ['React', 'Three.js', 'GSAP'],
    link: '#',
  },
  {
    title: 'Lumen Lab',
    tools: ['WebGL', 'Shaders', 'Vite'],
    link: '#',
  },
  {
    title: 'Glassflow',
    tools: ['Framer Motion', 'Radix UI'],
    link: '#',
  },
  {
    title: 'Iridescent',
    tools: ['Spline', 'TypeScript'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold text-white">Featured Projects</h2>
          <p className="text-sm text-slate-400">Hover a card to reveal details</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-fuchsia-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-12 text-xl font-medium">{p.title}</div>
              <div className="flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-10 text-sm text-slate-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Explore project →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
