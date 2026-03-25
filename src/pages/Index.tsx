import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import TimelineSection from "@/components/TimelineSection";
import StatsSection from "@/components/StatsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection from "@/components/FAQSection";
import IMCCalculator from "@/components/IMCCalculator";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <main className="pt-14">
        <HeroSection />
        <PricingSection />
        <AboutSection />
        <TestimonialsSection />
        <LocationSection />
        <GallerySection />
        <ServicesSection />
        <TimelineSection />
        <StatsSection />
        <DifferentialsSection />
        <FAQSection />
        <IMCCalculator />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
