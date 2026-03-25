import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              {/* Mobile Logo */}
              <div className="md:hidden">
                <Image
                  src="/assets/logo-black.png"
                  alt="AAA STONEX Logo"
                  width={100}
                  height={35}
                  className="object-contain opacity-90"
                />
              </div>
              {/* Desktop Logo */}
              <div className="hidden md:block">
                <Image
                  src="/assets/logo-black.svg"
                  alt="AAA STONEX Full Logo"
                  width={180}
                  height={50}
                  className="object-contain opacity-90"
                />
              </div>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed max-w-md transition-colors">
              Premium marble and granite manufacturer based in Kishangarh, Rajasthan. Direct-from-source excellence in every slab.
            </p>
            <p className="text-foreground/50 text-[10px] mt-2 uppercase tracking-widest font-bold">
              GSTIN: 08ENPPR7157P1ZP
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-4 transition-colors">Products</h3>
            <ul className="space-y-2 text-sm text-foreground/70 transition-colors">
              <li><Link href="#black" className="hover:text-accent transition-colors">Rajasthan Black</Link></li>
              <li><Link href="#red" className="hover:text-accent transition-colors">Kharda Red</Link></li>
              <li><Link href="#custom" className="hover:text-accent transition-colors">Custom Cuts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-4 transition-colors">Contact</h3>
            <ul className="space-y-4 text-sm text-foreground/70 transition-colors">
              <li className="flex gap-3 leading-relaxed text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-foreground/50 text-[10px] uppercase font-bold block mb-1">Building No./Flat No.</span>
                  KH.978/970 & 1053/980 (Old KH.No.)<br />
                  <span className="text-foreground/50 text-[10px] uppercase font-bold block mt-2 mb-1">Road/Street</span>
                  Village-Khatoli<br />
                  <span className="text-foreground/50 text-[10px] uppercase font-bold block mt-2 mb-1">City/Town/Village</span>
                  Kishangarh, Rajasthan - 305801
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:aaastonex07@gmail.com" className="hover:text-accent transition-colors">aaastonex07@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-foreground/50 transition-colors">
          <p>&copy; {new Date().getFullYear()} AAA STONEX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
