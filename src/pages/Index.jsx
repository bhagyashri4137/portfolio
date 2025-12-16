import Navbar from '@/components/Navbar.jsx';
import Hero from '@/components/Hero.jsx';
import About from '@/components/About.jsx';
import Skills from '@/components/Skills.jsx';
import Experience from '@/components/Experience.jsx';
import Projects from '@/components/Projects.jsx';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer.jsx';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
