"use client";

import { MapPin, Clock, Phone, Instagram, Star } from "lucide-react";

export default function Location() {
  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-brand-secondary/10 to-transparent" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-12 h-[1px] bg-brand-primary" />
            <span className="text-brand-primary uppercase tracking-[0.2em] font-semibold text-sm">Find Us</span>
            <span className="w-12 h-[1px] bg-brand-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-accent mt-3">
            Visit <span className="italic text-brand-primary">Nanté</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Info Column */}
          <div className="premium-card bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-rose/10 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-rose/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

            <h3 className="text-3xl font-serif font-bold text-brand-accent mb-2 relative z-10">
              Get in Touch
            </h3>

            {/* Rating Badge */}
            <div className="flex items-center gap-2 mb-10 relative z-10">
              <div className="flex items-center gap-1 text-brand-highlight">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-sm text-stone-500 font-medium">5.0 · 120 Reviews</span>
            </div>

            <div className="space-y-8 relative z-10">
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-accent">Address</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    A55, Block A, Dayanand Colony,<br />
                    Lajpat Nagar, New Delhi,<br />
                    Delhi 110024
                  </p>
                  <a
                    href="https://maps.google.com/?q=A55,+Block+A,+Dayanand+Colony,+Lajpat+Nagar,+New+Delhi,+Delhi+110024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-brand-primary font-semibold text-sm hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-accent">Phone</h4>
                  <a href="tel:6381151942" className="text-stone-600 hover:text-brand-primary transition-colors text-lg mt-1 block">
                    6381151942
                  </a>
                  <p className="text-stone-400 text-sm mt-1">For orders & enquiries</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-accent">Working Hours</h4>
                  <ul className="text-stone-600 mt-2 space-y-1.5">
                    <li className="flex justify-between gap-6">
                      <span>Daily</span>
                      <span className="font-medium">Opens till 8:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-accent">Follow Us</h4>
                  <a
                    href="https://instagram.com/nantepatisserie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:text-brand-accent transition-colors font-medium mt-1 inline-block"
                  >
                    @nantepatisserie
                  </a>
                  <p className="text-stone-400 text-sm mt-1">See our latest creations on Instagram</p>
                </div>
              </div>
            </div>

            {/* Order Notice */}
            <div className="mt-10 p-5 rounded-2xl bg-brand-secondary/50 border border-brand-rose/10">
              <p className="text-sm text-stone-500 leading-relaxed">
                <strong className="text-brand-primary">Order ahead:</strong> For custom designer cakes, place your order at least 24-48 hours in advance. Minimum weight for customization is 1.5 kg.
              </p>
            </div>
          </div>

          {/* Map Column */}
          <div className="h-full min-h-[500px] w-full bg-white rounded-3xl overflow-hidden shadow-xl border border-brand-rose/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0354395492396!2d77.23700897549486!3d28.56918107571057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3990e60dcd3%3A0x5a1c0dee94e5e90b!2sA55%2C%20Block%20A%2C%20Dayanand%20Colony%2C%20Lajpat%20Nagar%20IV%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1709428514806!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
