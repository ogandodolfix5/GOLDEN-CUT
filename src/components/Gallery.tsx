import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1599351431247-f136fa00ba4a?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1512690118299-a9771a73ad31?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1532710093739-9470acff00b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?auto=format&fit=crop&q=80&w=600",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-950 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Wall of Fame</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold">VIBE <span className="text-gradient-gold">GALLERY</span></h2>
          </motion.div>
          <a href="#" className="flex items-center gap-2 text-gold-500 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors pb-2">
            <Camera size={16} /> Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-xl border border-white/5 group"
            >
              <img 
                src={img} 
                alt={`Barbershop work ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-gold-500 border border-gold-500 p-2 rounded-full">
                   <Camera size={20} />
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
