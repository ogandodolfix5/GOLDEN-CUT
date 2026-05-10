import { motion } from 'motion/react';
import { Scissors, Star, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070"
          alt="Luxury Barbershop"
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 mb-6 border border-gold-500/50 rounded-full text-gold-400 text-xs font-bold tracking-[0.2em] uppercase bg-gold-500/10">
            Premium Dominican Grooming
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-6 leading-none">
            PRECISION MEETS <br />
            <span className="text-gradient-gold">LUXURY STYLE</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience the art of Barbering at Golden Cuts. Where every detail is crafted 
            to define your unique legacy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gold-600 hover:bg-gold-500 text-black px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(212,139,17,0.4)]">
              RESERVE YOUR CHAIR
            </button>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg backdrop-blur-sm transition-all">
              OUR SERVICES
            </button>
          </div>
        </motion.div>

        {/* Feature badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { icon: Scissors, label: "Expert Cutters" },
            { icon: Star, label: "Premium Service" },
            { icon: ShieldCheck, label: "Clean & Safe" },
            { icon: Clock, label: "Open Late" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <item.icon className="w-6 h-6 text-gold-500" />
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-500/50 to-transparent"></div>
    </section>
  );
}
