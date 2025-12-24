import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CantonNetwork from "@/components/CantonNetwork";
import Architecture from "@/components/Architecture";
import UseCases from "@/components/UseCases";
import Testimonial from "@/components/Testimonial";
import SecuritySection from "@/components/SecuritySection";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <CantonNetwork />
        <Architecture />
        <UseCases />
        <Testimonial />
        <SecuritySection />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
