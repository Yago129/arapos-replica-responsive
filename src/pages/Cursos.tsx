import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Courses from "@/components/Courses";

const Cursos = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="pt-8">
        <Courses />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Cursos;