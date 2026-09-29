import { CourseExplorer } from "@/components/CursorExplore";
import { CreatorCTA } from "@/components/CreatorCTA";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import Navbar from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoStrip />
      <CourseExplorer />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
