import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Registration from "@/components/Registration";
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
        <Courses />
        <Registration />
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