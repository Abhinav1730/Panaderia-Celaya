"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
          alt="Stunning custom designer cake by Nanté Patisserie"
          fill
          className="object-cover object-center w-full h-full brightness-[0.7] scale-105"
          priority
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#B76E79]/10 via-transparent to-[#C8A2C8]/10" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-brand-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-brand-mauve/10 blur-3xl animate-float delay-200" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Tagline */}
        <div className="animate-fade-in-up mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium tracking-wider uppercase">
            <Sparkles size={14} className="text-brand-rose" />
            Crafting Sweet Memories
            <Sparkles size={14} className="text-brand-rose" />
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.1] drop-shadow-2xl animate-fade-in-up delay-100">
          <span className="italic text-brand-rose">Nanté</span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] uppercase">
            Patisserie & Confectionery
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/85 text-lg md:text-xl font-light mb-4 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up delay-200 leading-relaxed">
          Exquisite custom designer cakes, handcrafted with passion for your most precious celebrations.
        </p>

        {/* Elegant Divider */}
        <div className="flex items-center justify-center gap-4 mb-10 animate-fade-in-up delay-200">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-brand-rose" />
          <span className="text-brand-rose text-xl">✦</span>
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-brand-rose" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-300">
          <Link
            href="#menu"
            className="group px-8 py-4 bg-brand-primary text-white text-lg font-semibold rounded-full shadow-xl hover:bg-brand-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
          >
            Explore Our Menu
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#gallery"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-medium rounded-full hover:bg-white/20 transition-all duration-300 hover:shadow-lg"
          >
            View Our Cakes
          </Link>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
