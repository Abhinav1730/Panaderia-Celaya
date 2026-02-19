export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1509440159596-0249088772ff", // Bread close up
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a", // Bakery interior / display
    "https://images.unsplash.com/photo-1517433670267-08bbd4be890f", // Sweet bread
    "https://images.unsplash.com/photo-1623334044303-241021148842", // Concha
    "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56", // Empanadas (Verified)
    "https://images.unsplash.com/photo-1603569283847-aa295f0d016a", // Tamales (Verified)
    "https://images.unsplash.com/photo-1608198093002-ad4e005484ec", // Mexican Bread Basket
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587"  // Cake (Verified)
  ];

  return (
    <section id="gallery" className="py-20 bg-brand-secondary/30 relative">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-brand-primary uppercase tracking-widest font-bold text-sm">Visual Feast</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-accent mt-3">From Our Oven to You</h2>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-auto">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-medium text-lg drop-shadow-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Grand Prairie
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
