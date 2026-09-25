import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "RAMC — Sergio M.",
  description:
    "Case study: RAMC, an early Laravel practice project by Sergio Michelotti for a small web, app and design outfit.",
};

export default function RamcPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail projectId="ramc" />
      </main>
      <Footer />
    </>
  );
}
