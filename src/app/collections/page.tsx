import StoneGallery from "@/components/sections/StoneGallery";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import CollectionsHeader from "@/components/sections/CollectionsHeader";

export const metadata = {
  title: "Stone Collection | AAAStonex",
  description: "Explore our curated gallery of 54+ premium stone varieties including Marble, Onyx, and Granite.",
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      <CollectionsHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full zoomable, filterable gallery */}
        <StoneGallery />
      </div>
      
      <FloatingWhatsApp />
    </main>
  );
}
