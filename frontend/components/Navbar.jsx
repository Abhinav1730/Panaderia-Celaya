"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Order Info", href: "#policies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(183,110,121,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative group">
          <span className={`text-2xl md:text-3xl font-serif font-bold tracking-wide transition-colors duration-300 ${
            scrolled ? "text-brand-accent" : "text-white"
          }`}>
            <span className="italic">Nanté</span>
          </span>
          <span className={`block text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-300 ${
            scrolled ? "text-brand-primary" : "text-white/80"
          }`}>
            Patisserie & Confectionery
          </span>
          <span className={`block text-[8px] md:text-[9px] tracking-[0.15em] mt-0.5 transition-colors duration-300 ${
            scrolled ? "text-stone-400" : "text-white/50"
          }`}>
            by <span className="font-medium">Nandita Saxena</span> · Cake Artist | Patissier
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 relative group ${
                scrolled
                  ? "text-brand-accent hover:text-brand-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="tel:6381151942"
            className="ml-4 px-6 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-full hover:bg-brand-accent transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={26} className="text-brand-accent" />
          ) : (
            <Menu size={26} className={scrolled ? "text-brand-accent" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 border-t border-brand-rose/20" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-6 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-brand-accent hover:text-brand-primary uppercase tracking-wider transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="tel:6381151942"
            className="mt-2 px-8 py-3 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-accent transition-all"
            onClick={() => setIsOpen(false)}
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
