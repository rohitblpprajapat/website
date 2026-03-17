import ProductShowcase from "@/components/sections/ProductShowcase";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export const metadata = {
  title: "Premium Collections | AAAStonex",
  description: "Explore our premium collection of Rajasthan Black, Crystal Blue, Tiger Skin, and Kharda Red Granite.",
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24 pb-0 overflow-x-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground transition-colors">Our Collections</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors">
            Discover the finest quality granites sourced directly from Kishangarh, Rajasthan. 
            Perfect for luxury commercial and residential applications.
          </p>
        </div>
      </div>
      
      {/* Reusing existing product showcase component but it works perfectly as the main content here too */}
      <ProductShowcase />
      <FloatingWhatsApp />
    </main>
  );
}
