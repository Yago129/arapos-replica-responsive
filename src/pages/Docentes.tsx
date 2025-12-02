import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Professors from "@/components/Professors";

const Docentes = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="pt-8">
        <Professors />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Docentes;