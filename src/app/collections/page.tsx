import StoneGallery from "@/components/sections/StoneGallery";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export const metadata = {
  title: "Stone Collection | AAAStonex",
  description: "Explore our curated gallery of 54+ premium stone varieties including Marble, Onyx, and Granite.",
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24 pb-0 overflow-x-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <span className="font-display italic text-accent text-lg tracking-wide mb-3 block">
            Curated Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground tracking-tight">Our Collection</h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
            From the calming depths of White Onyx to the energising pulse of Azul Destello. 
            A comprehensive library of the world&apos;s finest stone.
          </p>
        </div>

        {/* Full zoomable, filterable gallery */}
        <StoneGallery />
      </div>
      
      <FloatingWhatsApp />
    </main>
  );
}
