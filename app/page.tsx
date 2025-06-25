'use client';

import Link from "next/link";
import NavBar from "./components/NavBar";
import BioCard from "./components/BioCard";
import SocialLinks from "./components/SocialLinks";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import ContactCard from "./components/ContactCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] relative overflow-hidden">
      {/* Background particles */}
      <ParticlesBackground />

      {/* Fixed Logo (top-left) */}
      <div className="fixed top-8 left-4 z-40">
        <Link href="/">
          <img
            src="/r-removebg-preview.png"
            alt="Logo"
            className="w-20 h-20 cursor-pointer"
          />
        </Link>
      </div>

      {/* Fixed NavBar (top-center) */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40">
        <NavBar />
      </div>

      {/* Main content sections */}
      <div className="flex flex-col items-center justify-center pt-20 space-y-32 relative z-10">
        <section id="Home" className="scroll-mt-28 w-full flex flex-col items-center">
          <BioCard />
          <SocialLinks />
        </section>

        <section id="Education" className="scroll-mt-28 w-full max-w-4xl mx-auto text-white text-2xl">
          <Education />
        </section>

        <section id="Experience" className="scroll-mt-28 w-full max-w-4xl mx-auto text-white text-2xl">
          <Experience />
        </section>

        <section id="Skills" className="scroll-mt-28 w-full max-w-4xl mx-auto text-white text-2xl">
          <Skills />
        </section>

        <section id="Projects" className="scroll-mt-28 w-full max-w-4xl mx-auto text-white text-2xl">
          <Projects />
        </section>

        <section id="Achievements" className="scroll-mt-28 w-full max-w-4xl mx-auto text-white text-2xl">
          <Achievements />
        </section>

        <section id="Contact" className="scroll-mt-28 w-full max-w-4xl mx-auto text-white text-2xl">
          <ContactCard />
        </section>
      </div>
    </div>
  );
}
