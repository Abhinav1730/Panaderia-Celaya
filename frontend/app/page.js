import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Policies from "@/components/Policies";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFCF9]">
      <Navbar />
      <Hero />
      <About />
      <MenuHighlights />
      <Gallery />
      <Testimonials />
      <Policies />
      <Location />
      <Footer />
    </main>
  );
}
