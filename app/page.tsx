import Navbar from "../src/components/layout/Navbar";
import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Education from "../src/components/sections/Education";
import Experience from "../src/components/sections/Experience";
import Skills from "../src/components/sections/Skills";
import Projects from "../src/components/sections/Projects";
import Certificates from "../src/components/sections/Certificates";
import Contact from "../src/components/sections/Contact";
import Footer from "../src/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col bg-zinc-50 pt-20 font-sans dark:bg-black">
        <main className="flex w-full flex-col bg-white dark:bg-black">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
