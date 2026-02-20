"use client";

import { useState } from "react";

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    title: "Chocolate Dream",
    category: "Signature",
  },
  {
    src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636",
    title: "Wedding Elegance",
    category: "Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec",
    title: "Berry Bliss",
    category: "Classic",
  },
  {
    src: "https://images.unsplash.com/photo-1557979619-445218f326b9",
    title: "Birthday Magic",
    category: "Custom",
  },
  {
    src: "https://images.unsplash.com/photo-1608830597604-619220679440",
    title: "Rose Garden",
    category: "Signature",
  },
  {
    src: "https://images.unsplash.com/photo-1562440499-64c9a111f713",
    title: "Pastel Perfection",
    category: "Custom",
  },
  {
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    title: "Golden Celebration",
    category: "Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62",
    title: "Red Velvet Luxe",
    category: "Signature",
  },
];

const CATEGORIES = ["All", "Signature", "Classic", "Wedding", "Custom"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-28 bg-brand-secondary/20 relative overflow-hidden pattern-overlay">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-rose/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-brand-mauve/5 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-12 h-[1px] bg-brand-primary" />
            <span className="text-brand-primary uppercase tracking-[0.2em] font-semibold text-sm">Our Creations</span>
            <span className="w-12 h-[1px] bg-brand-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-accent mt-3">
            Cake <span className="italic text-brand-primary">Gallery</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                  : "bg-white text-stone-500 hover:text-brand-primary hover:shadow-sm border border-stone-200 hover:border-brand-rose/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5 mx-auto">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/80 via-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                <span className="text-xs text-brand-rose uppercase tracking-widest font-semibold mb-1">
                  {item.category}
                </span>
                <span className="text-white font-serif text-xl font-bold drop-shadow-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {item.title}
                </span>
              </div>
              {/* Category Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-bold text-brand-accent shadow-sm">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
