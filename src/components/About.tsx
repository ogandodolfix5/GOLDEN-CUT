import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-4/5 border border-gold-500/20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1000" 
              alt="Barber Shop Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-600/20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -top-10 -left-10 text-gold-500/10 font-display font-black text-9xl select-none">
            EST. 2018
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            THE DOMINICAN <br />
            <span className="text-gradient-gold">LEGACY OF GROOMING</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Founded by masters of the craft, Golden Cuts brings the vibrant energy and precision of Dominican barbering to the modern luxury stage. We don't just cut hair; we sculpt identities.
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Our shop is a sanctuary of style where traditional techniques meet contemporary aesthetics. Every client who sits in our chairs receives more than a service—they receive an experience tailored to their ambition.
          </p>
          
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-display font-bold text-white mb-2">15+</div>
              <div className="text-xs text-gold-500 font-bold uppercase tracking-widest">Master Barbers</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white mb-2">12k</div>
              <div className="text-xs text-gold-500 font-bold uppercase tracking-widest">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
