import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TicketsSection from "@/components/TicketsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <div id="sobre">
          <AboutSection />
        </div>
        <TicketsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
