import HeroSection from '@/components/sections/HeroSection';
import TrustSection from '@/components/sections/TrustSection';
import ApplicationsGallery from '@/components/sections/ApplicationsGallery';
import ProductShowcase from '@/components/sections/ProductShowcase';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import LeadCapture from '@/components/sections/LeadCapture';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background pb-0 overflow-x-hidden transition-colors">
      <HeroSection />
      <ProductShowcase />
      <TrustSection />
      <ApplicationsGallery />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <LeadCapture />
      <FloatingWhatsApp />
    </main>
  );
}

