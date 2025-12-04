import Header from "@/components/template/Header";
import HeroSection from "@/components/template/HeroSection";
import AboutSection from "@/components/template/AboutSection";
import ServicesSection from "@/components/template/ServicesSection";
import CredentialsSection from "@/components/template/CredentialsSection";
import ContactSection from "@/components/template/ContactSection";
import Footer from "@/components/template/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
