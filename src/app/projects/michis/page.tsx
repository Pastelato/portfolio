import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "Michi's — Sergio M.",
  description:
    "Case study: Michi's, a one-page site built by Sergio Michelotti for a home-based healthy snacks and desserts business in Caracas, Venezuela.",
};

export default function MichisPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail projectId="michis" />
      </main>
      <Footer />
    </>
  );
}
