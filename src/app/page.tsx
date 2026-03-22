import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

// Dynamically import below-the-fold sections for performance
const TrustSection = dynamic(() => import('@/components/sections/TrustSection'));
const ApplicationsGallery = dynamic(() => import('@/components/sections/ApplicationsGallery'));
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const FAQ = dynamic(() => import('@/components/sections/FAQ'));
const LeadCapture = dynamic(() => import('@/components/sections/LeadCapture'));

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background pb-0 overflow-x-hidden transition-colors">
      <HeroSection />
      <ProductShowcase />
      <TrustSection />
      <ApplicationsGallery />
      <AboutSection />
      <Testimonials />
      <FAQ />
      <LeadCapture />
      <FloatingWhatsApp />
    </main>
  );
}

