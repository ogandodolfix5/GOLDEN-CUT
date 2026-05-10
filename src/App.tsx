/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      
      {/* Visual Break / Quote */}
      <section className="py-24 bg-linear-to-b from-black to-zinc-900 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <blockquote className="text-3xl md:text-5xl font-display font-light italic text-gray-400 leading-tight">
            "Barbering is not just a job, it's a form of <span className="text-white font-bold">hospitality</span> and an <span className="text-white font-bold">artistic expression</span> that defines a man's character."
          </blockquote>
          <div className="mt-8 h-px w-24 bg-gold-500 mx-auto"></div>
        </div>
      </section>

      <Gallery />
      <Testimonials />
      
      {/* CTA Section */}
      <section id="booking" className="py-24 bg-black px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1593702295094-ada74cf42990?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Barber Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/90"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">READY TO <span className="text-gradient-gold">TRANSCEND?</span></h2>
          <p className="text-gray-400 text-xl mb-12">Book your premium grooming experience today and experience the Golden Standard.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="bg-gold-600 hover:bg-gold-500 text-black px-12 py-6 rounded-full font-black text-xl transition-all shadow-[0_0_40px_rgba(212,139,17,0.5)]">
               BOOK APPOINTMENT
             </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
