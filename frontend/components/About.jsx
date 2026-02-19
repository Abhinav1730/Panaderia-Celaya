export default function About() {
  return (
    <section id="about" className="py-20 bg-brand-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="order-2 md:order-1 space-y-6">
          <span className="text-brand-highlight text-lg uppercase tracking-widest font-semibold flex items-center gap-2">
            <span className="w-12 h-[2px] bg-brand-highlight"></span> Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-accent mb-6 leading-snug">
            Honoring Traditional Methods Since 2005
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Founded in the heart of Grand Prairie, <strong className="text-brand-primary">Panaderia Celaya</strong> began with a simple mission: to bring the authentic flavors of Mexico to our community. 
            Every morning before dawn, our ovens are fired up to bake fresh bolillos, sweet conchas, and savory empanadas just like abuela used to make.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed">
            We believe in using only the finest ingredients—real butter, fresh eggs, and quality flour—because that's what family deserves. Whether you're stopping by for a morning coffee and pan dulce or picking up a custom cake for a celebration, we welcome you as part of our family.
          </p>
          
          <div className="pt-6">
             <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" alt="Baker" />
                  <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Baker" />
                  <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6" alt="Baker" />
                </div>
                <span className="text-sm text-stone-500 font-medium">Met our Master Bakers</span>
             </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2 relative group">
          <div className="absolute inset-0 bg-brand-primary rounded-2xl transform rotate-3 scale-95 opacity-20 transition-transform group-hover:rotate-6 duration-500"></div>
          <img 
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a" 
            alt="Inside Panaderia Celaya" 
            className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px] transform transition-transform duration-500 group-hover:-translate-y-2"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 border-l-4 border-brand-highlight hidden md:block">
            <p className="font-serif text-2xl font-bold text-brand-accent">18+ Years</p>
            <p className="text-sm text-stone-500 uppercase tracking-wider">Of Tradition</p>
          </div>
        </div>
      </div>
    </section>
  );
}
