"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const MENU_ITEMS = [
  {
    title: "Conchas",
    desc: "Soft, sweet bread with a creative crunchy topping in vanilla, chocolate, or strawberry.",
    img: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f", // Conchas / Sweet bread
    category: "Pan Dulce"
  },
  {
    title: "Bolillos",
    desc: "The staple of every Mexican meal. Crusty on the outside, soft on the inside.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a", // Bolillos / Crusty bread
    category: "Savory"
  },
  {
    title: "Empanadas",
    desc: "Flaky pastry pockets filled with sweet pumpkin, pineapple, or cajeta.",
    img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56", // Empanadas / Pastry
    category: "Pastries"
  },
  {
    title: "Tres Leches Cake",
    desc: "Moist sponge cake soaked in three milks, topped with fresh whipped cream and fruit.",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587", // Tres Leches Cake
    category: "Cakes"
  },
  {
    title: "Tamales",
    desc: "Authentic corn masa steamed in husks with pork, chicken, or rajas con queso.",
    img: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a", // Tamales
    category: "Savory"
  },
  {
    title: "Custom Cakes",
    desc: "Celebrate your special moments with our beautifully decorated custom cakes.",
    img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636", // Custom Cakes
    category: "Celebration"
  },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-primary uppercase tracking-widest font-bold text-sm">Taste the Tradition</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-accent mt-3 mb-6">Signature Favorites</h2>
          <p className="text-stone-600 text-lg">
            From our early morning ovens to your table, enjoy the most beloved treats of Panaderia Celaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">View Details <ArrowUpRight size={18} /></span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-accent shadow-sm">
                    {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-brand-accent mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="w-full h-[1px] bg-stone-100 group-hover:bg-brand-highlight transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <Link 
                href="/menu" // Assuming creates a dedicated page later or just placeholder
                className="inline-block px-8 py-3 border-2 border-brand-accent text-brand-accent font-semibold rounded-full hover:bg-brand-accent hover:text-white transition-colors duration-300"
            >
                View Full Menu
            </Link>
        </div>
      </div>
    </section>
  );
}
