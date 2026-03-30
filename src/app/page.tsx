import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyRainCloud from "@/components/WhyRainCloud";
import Process from "@/components/Process";
import SelectedWork from "@/components/SelectedWork";
import Trust from "@/components/Trust";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/animations/CursorGlow";

export default function Home() {
  return (
    <main className="flex-1">
      <CursorGlow />
      <Navigation />
      <Hero />
      <Services />
      <WhyRainCloud />
      <Process />
      <SelectedWork />
      <Trust />
      <FinalCTA />
      <Footer />
    </main>
  );
}
