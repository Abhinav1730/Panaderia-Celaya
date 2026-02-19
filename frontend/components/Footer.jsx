import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-accent text-white py-16">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="font-serif text-3xl font-bold tracking-wide">
            Panaderia Celaya
          </Link>
          <p className="text-white/70 max-w-sm mx-auto md:mx-0">
            Bringing authentic Mexican flavors to your table since 2005. Baked fresh daily with love and tradition.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-semibold text-lg text-brand-highlight mb-2">Explore</h4>
          <Link href="#home" className="hover:text-brand-secondary transition-colors">Home</Link>
          <Link href="#menu" className="hover:text-brand-secondary transition-colors">Our Menu</Link>
          <Link href="#gallery" className="hover:text-brand-secondary transition-colors">Gallery</Link>
          <Link href="#visit" className="hover:text-brand-secondary transition-colors">Visit Us</Link>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col space-y-4 items-center md:items-start">
          <h4 className="font-semibold text-lg text-brand-highlight mb-2">Connect</h4>
          <div className="flex items-center gap-4">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          <p className="flex items-center gap-2 text-white/70 mt-2">
            <Phone size={16} /> (972) 522-7939
          </p>
           <p className="flex items-center gap-2 text-white/70">
            <Mail size={16} /> hola@panaderiacelaya.com
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-8 text-center text-white/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Panaderia Celaya. All rights reserved.</p>
      </div>
    </footer>
  );
}
