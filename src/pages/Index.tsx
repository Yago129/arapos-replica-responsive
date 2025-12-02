import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClinicBanner from "@/components/ClinicBanner";
import WhyDifferent from "@/components/WhyDifferent";
import News from "@/components/News";
import Professors from "@/components/Professors";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <ClinicBanner />
        <WhyDifferent />
        <News />
        <Professors />
        <Stats />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
