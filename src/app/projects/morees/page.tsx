import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "Ferretería Morees — Sergio M.",
  description:
    "Case study: Ferretería Morees, a 2012 hardware and tools e-commerce catalog built on Joomla! and VirtueMart by Sergio Michelotti.",
};

export default function MoreesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail projectId="morees" />
      </main>
      <Footer />
    </>
  );
}
