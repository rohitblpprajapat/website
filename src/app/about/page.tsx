import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Image from "next/image";
import AboutHeader from "@/components/sections/AboutHeader";
import { Award, Globe, ShieldCheck, Heart, Zap, History } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | AAA STONEX",
  description: "Learn about AAA STONEX, our legacy of craftsmanship, and our commitment to providing the highest quality natural stone directly from the source.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AboutHeader />

      {/* Heritage Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
                <Image 
                  src="/assets/tiger-skin.png" 
                  alt="Craftsmanship" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <p className="text-2xl font-display italic text-white/90 drop-shadow-md">
                    &quot;Crafting nature&apos;s art into enduring testaments of luxury.&quot;
                  </p>
                </div>
              </div>
              {/* Decorative Floating Element */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/20 blur-[100px] rounded-full -z-10" />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight leading-tight">
                  Our Legacy in the <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60 italic font-display">Marble City</span>
                </h2>
                <div className="w-20 h-1 bg-accent/30 rounded-full" />
              </div>
              
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed font-light">
                <p>
                  Based in the heart of Kishangarh, Rajasthan &mdash; the marble city of India &mdash; AAA STONEX has established itself as a premier manufacturer and supplier of high-quality granite and marble.
                </p>
                <p>
                  With a deep industry expertise and operating successfully under the AAA STONEX brand, we are committed to delivering natural masterpieces. 
                </p>
                <p>
                  From the deep consistency of Rajasthan Black to the striking hues of Kharda Red, our stones form the foundation of architectural marvels across the nation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-foreground/5 border border-border group hover:border-accent/40 transition-all duration-500">
                  <History className="w-8 h-8 text-accent mb-4 opacity-70 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold text-foreground mb-1">5+ Years</h3>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold font-heading">Direct Industry Experience</p>
                </div>
                <div className="p-6 rounded-2xl bg-foreground/5 border border-border group hover:border-accent/40 transition-all duration-500">
                  <Globe className="w-8 h-8 text-accent mb-4 opacity-70 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold text-foreground mb-1">54+ Varieties</h3>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold font-heading">Curated Stone Selection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-foreground/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Built on <span className="italic font-display text-accent">Excellence</span></h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">Our principles define our practice. We don&apos;t just sell stone; we provide the foundation for your most ambitious visions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Rigorous selection process for every slab that leaves our facility." },
               { icon: Award, title: "Premium Curation", desc: "A boutique library of the world's finest natural stone varieties." },
               { icon: Heart, title: "Client Centric", desc: "Personalized consultation and dedicated support through every project." },
               { icon: Zap, title: "Innovation", desc: "State-of-the-art processing and finishing technologies." },
               { icon: Globe, title: "Bespoke Solutions", desc: "Tailored stone selection and finishing services for high-end residential and commercial projects." },
               { icon: History, title: "Deep Expertise", desc: "Years of specialized stone-craft expertise focused on premium quality." }
             ].map((v, i) => (
               <div key={i} className="p-8 rounded-3xl bg-background border border-border hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group">
                 <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                   <v.icon className="w-7 h-7 text-accent" />
                 </div>
                 <h4 className="text-xl font-bold mb-3 font-heading">{v.title}</h4>
                 <p className="text-foreground/60 leading-relaxed font-light text-sm">{v.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] overflow-hidden bg-accent px-8 py-20 text-center text-white shadow-2xl">
            <Image 
              src="/assets/rajasthan-black.png" 
              alt="CTA Background" 
              fill 
              className="object-cover opacity-20 mix-blend-overlay"
            />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 tracking-tighter">Ready to Build Your Legacy?</h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Connect with our consultants today and discover how AAA STONEX can elevate your next project with the world&apos;s most exquisite stone collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-white text-accent font-bold rounded-full hover:scale-105 transition-transform">Inquire Now</Link>
                <Link href="/collections" className="px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all">Explore Collection</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
