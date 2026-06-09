import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NavPill from "@/components/NavPill";
import InfoBar from "@/components/InfoBar";
import Offering from "@/components/Offering";
import Experience from "@/components/Experience";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Section order follows design.json -> sections */}
      <Navbar />
      <main>
        <Hero />
        <NavPill />
        <InfoBar />
        <Offering />
        <Experience />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
