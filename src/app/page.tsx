import HeroSection from '@/components/sections/HeroSection';
import TrustSection from '@/components/sections/TrustSection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Testimonials from '@/components/sections/Testimonials';
import MasonryShowcase from '@/components/sections/MasonryShowcase';
import LeadCapture from '@/components/sections/LeadCapture';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-background pb-0 overflow-x-hidden transition-colors">
      <HeroSection />
      <TrustSection />
      <MasonryShowcase />
      <ProductShowcase />
      <Testimonials />
      <LeadCapture />
      <FloatingWhatsApp />
    </main>
  );
}
