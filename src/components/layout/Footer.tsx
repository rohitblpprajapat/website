import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4 transition-colors">AAAStonex</h2>
            <p className="text-foreground/70 text-sm leading-relaxed max-w-md transition-colors">
              Premium marble and granite manufacturer based in Kishangarh, Rajasthan. 5 years of craftsmanship and excellence in every slab.
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-4 transition-colors">Products</h3>
            <ul className="space-y-2 text-sm text-foreground/70 transition-colors">
              <li><Link href="#black" className="hover:text-white">Rajasthan Black</Link></li>
              <li><Link href="#red" className="hover:text-white">Kharda Red</Link></li>
              <li><Link href="#custom" className="hover:text-black dark:hover:text-white transition-colors">Custom Cuts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-4 transition-colors">Contact</h3>
            <ul className="space-y-2 text-sm text-foreground/70 transition-colors">
              <li>Kishangarh, Rajasthan</li>
              <li>info@aaastonex.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-foreground/50 transition-colors">
          <p>&copy; {new Date().getFullYear()} AAAStonex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
