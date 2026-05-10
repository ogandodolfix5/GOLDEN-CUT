import { motion } from 'motion/react';
import { Menu, X, Scissors } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Scissors className="w-8 h-8 text-gold-500" />
            <span className="text-2xl font-display font-bold tracking-tighter text-white">
              GOLDEN<span className="text-gold-500">CUTS</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                className="bg-gold-600 hover:bg-gold-500 text-black px-6 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(212,139,17,0.3)] hover:shadow-[0_0_25px_rgba(212,139,17,0.5)]"
              >
                BOOK NOW
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-gold-400 block px-3 py-4 text-base font-medium border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              className="block w-full text-center bg-gold-600 text-black py-4 font-bold"
            >
              BOOK NOW
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
