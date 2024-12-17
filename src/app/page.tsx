import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ParticlesBackground />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
    </main>
  );
}