import { CourseExplorer } from "@/components/CursorExplore";
import { Footer } from "@/components/footer";
import Hero from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoStrip/>
      <CourseExplorer/>
      <Footer/>
    </main>
  );
}
