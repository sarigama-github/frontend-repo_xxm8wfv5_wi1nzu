import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ScrollPanels from './components/ScrollPanels';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased">
      <Header />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <Projects />
        <ScrollPanels />
        <footer className="bg-slate-950 py-10 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Astraea — Crafted with love, light, and motion.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
