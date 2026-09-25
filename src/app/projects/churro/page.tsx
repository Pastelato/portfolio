import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "Holy Churro — Sergio M.",
  description:
    "Case study: Holy Churro, a churrería landing page by Sergio Michelotti built with React and a Firebase-backed product catalog.",
};

export default function ChurroPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail projectId="churro" />
      </main>
      <Footer />
    </>
  );
}
