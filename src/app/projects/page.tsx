import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OlderProjects from "@/components/OlderProjects";

export const metadata: Metadata = {
  title: "Older Projects — Sergio M.",
  description:
    "Archive of earlier projects by Sergio Michelotti, Backend Engineer specializing in Java, Spring Boot, and cloud technologies.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <OlderProjects />
      </main>
      <Footer />
    </>
  );
}
