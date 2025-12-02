import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import News from "@/components/News";

const Novidades = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="pt-8">
        <News />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Novidades;