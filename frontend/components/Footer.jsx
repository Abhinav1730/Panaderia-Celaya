"use client";

import { Instagram, Phone, MapPin, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-accent text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="w-full h-1 bg-gradient-to-r from-brand-primary via-brand-rose to-brand-mauve" />

      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-brand-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-brand-mauve/5 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-wide italic">Nanté</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-brand-rose font-medium mt-0.5">
                Patisserie & Confectionery
              </span>
              <span className="block text-[9px] tracking-[0.1em] text-white/40 mt-0.5">
                by <span className="font-medium text-white/55">Nandita Saxena</span> · Cake Artist | Patissier
              </span>
            </Link>
            <p className="text-white/50 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Crafting exquisite custom designer cakes for your most precious celebrations. Every cake tells a story.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://instagram.com/nantepatisserie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="tel:6381151942"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-serif font-bold text-lg text-brand-rose mb-3">Quick Links</h4>
            {[
              { name: "Home", href: "#home" },
              { name: "About Us", href: "#about" },
              { name: "Cake Menu", href: "#menu" },
              { name: "Gallery", href: "#gallery" },
              { name: "Order Info", href: "#policies" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/50 hover:text-brand-rose transition-colors duration-300 text-sm tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif font-bold text-lg text-brand-rose mb-3">Contact</h4>

            <div className="flex items-start gap-3 text-white/50 justify-center md:justify-start">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">A55, Block A, Dayanand Colony,<br />Lajpat Nagar, New Delhi 110024</span>
            </div>

            <a href="tel:6381151942" className="flex items-center gap-3 text-white/50 hover:text-brand-rose transition-colors justify-center md:justify-start">
              <Phone size={16} className="flex-shrink-0" />
              <span>6381151942</span>
            </a>

            <a href="https://instagram.com/nantepatisserie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-brand-rose transition-colors justify-center md:justify-start">
              <Instagram size={16} className="flex-shrink-0" />
              <span>@nantepatisserie</span>
            </a>

            {/* Order CTA */}
            <div className="pt-4">
              <a
                href="tel:6381151942"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white text-sm font-semibold rounded-full hover:bg-brand-rose transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20"
              >
                <Phone size={16} />
                Order Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Nanté Patisserie & Confectionery. All rights reserved.
          </p>
          <p className="text-white/30 text-sm flex items-center gap-1">
            Made with <Heart size={12} className="text-brand-rose fill-brand-rose" /> for sweet celebrations
          </p>
        </div>
      </div>
    </footer>
  );
}
