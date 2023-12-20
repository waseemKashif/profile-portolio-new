import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import Projects from "./projects/page";
export default function Home() {
  return (
    <main className=" min-h-screen">
      <Header />
      <HeroSection />
      <TechStack />
      <Projects />
    </main>
  );
}
