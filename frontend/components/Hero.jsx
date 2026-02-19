"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
          alt="Freshly baked Mexican bread"
          fill
          className="object-cover object-center w-full h-full brightness-[0.85]"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="block text-brand-highlight font-sans text-lg md:text-xl font-medium tracking-wide mb-4 animate-fade-in-up">
          EST. 2005 • GRAND PRAIRIE, TX
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg animate-fade-in-up delay-100">
          Freshly Baked Tradition <br className="hidden md:block" /> Every Morning
        </h1>
        <p className="text-white/90 text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up delay-200">
          Experience the warmth of authentic Mexican pan dulce, handcrafted daily with family recipes passed down for generations.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-300">
          <Link 
            href="#menu" 
            className="px-8 py-4 bg-brand-primary text-white text-lg font-semibold rounded-full shadow-xl hover:bg-brand-accent transition-all hover:scale-105 flex items-center gap-2"
          >
            Explore Menu <ArrowRight size={20} />
          </Link>
          <Link 
            href="#visit" 
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-medium rounded-full hover:bg-white/20 transition-all hover:shadow-lg"
          >
            Visit Us Today
          </Link>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </section>
  );
}
