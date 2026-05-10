import { motion } from 'motion/react';
import { Instagram, MapPin, Phone, Mail, Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 pt-24 pb-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <Scissors className="w-8 h-8 text-gold-500" />
              <span className="text-2xl font-display font-bold tracking-tighter text-white">
                GOLDEN<span className="text-gold-500">CUTS</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Elevating the craft of grooming through precision, luxury, and Dominican heritage. Join the legacy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              {/* Add more social icons here if needed */}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-sm italic">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Pricing', 'Gallery'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-gold-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-sm italic">Location & Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin size={18} className="text-gold-500 shrink-0" />
                <span>123 Luxury Ave, <br />Santo Domingo, DR</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone size={18} className="text-gold-500" />
                <span>+1 809-555-0123</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                 <span className="w-[18px] text-center font-bold text-gold-500 italic">H</span>
                 <span>Mon-Sat: 9am - 9pm</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                 <span className="w-[18px] text-center font-bold text-gold-500 italic">H</span>
                 <span>Sun: 10am - 4pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-sm italic">Join the Circle</h4>
            <p className="text-gray-500 text-sm mb-4">Stay updated with our latest styles and exclusive offers.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-gold-500 transition-colors pr-12"
              />
              <button className="absolute right-2 top-1.5 bg-gold-600 w-8 h-8 rounded-full flex items-center justify-center text-black hover:bg-gold-500 transition-all">
                <Scissors size={14} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
            © 2024 Golden Cuts Barbershop. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
            <a href="#" className="text-gray-600 hover:text-gold-500">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gold-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
