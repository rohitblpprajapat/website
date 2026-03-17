import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Image from "next/image";

export const metadata = {
  title: "About Us | AAAStonex",
  description: "Learn about AAAStonex, our 5 years of craftsmanship, and our commitment to providing the highest quality natural stone.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24 pb-0 overflow-x-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gray-900 dark:text-white transition-colors">Our Legacy in Stone</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed transition-colors">
              Based in the heart of Kishangarh, Rajasthan — the marble city of India — AAAStonex has established itself as a premier manufacturer and exporter of high-quality granite and marble.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed transition-colors">
              With over 5 years of deep industry expertise under our parent company and operating successfully under the AAAStonex brand, we are committed to delivering natural masterpieces. From the deep consistency of Rajasthan Black to the striking hues of Kharda Red, our stones form the foundation of architectural marvels globally.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12 bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-black/10 dark:border-white/10 transition-colors">
              <div>
                <h3 className="text-4xl font-bold text-gold mb-2">5+</h3>
                <p className="text-gray-600 dark:text-gray-400 font-semibold tracking-wider uppercase text-sm transition-colors">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gold mb-2">100%</h3>
                <p className="text-gray-600 dark:text-gray-400 font-semibold tracking-wider uppercase text-sm transition-colors">Quality Guaranteed</p>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10">
            <Image 
              src="/assets/crystal-blue.png" 
              alt="AAAStonex Facility" 
              fill 
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-xl font-heading font-bold italic text-white/90 drop-shadow-lg">
                "Crafting nature's art into enduring testaments of luxury."
              </p>
            </div>
          </div>

        </div>
      </div>
      <FloatingWhatsApp />
    </main>
  );
}
