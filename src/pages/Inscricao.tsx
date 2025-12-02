import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Registration from "@/components/Registration";

const Inscricao = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="pt-8">
        <Registration />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Inscricao;