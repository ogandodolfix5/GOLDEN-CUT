import { motion } from 'motion/react';
import { Scissors, Sparkles, User, Eraser } from 'lucide-react';

const services = [
  {
    title: "Signature Fade",
    price: "$35",
    description: "Precision razor fade with a sharp lineup and premium product finishing.",
    icon: Scissors
  },
  {
    title: "Beard Sculpting",
    price: "$25",
    description: "Expert shaping, trimming, and hot towel treatment for the perfect beard.",
    icon: Eraser
  },
  {
    title: "The Golden Ritual",
    price: "$75",
    description: "Signature cut + beard sculpt + face mask + hot towel massage.",
    icon: Sparkles
  },
  {
    title: "Junior Stylist",
    price: "$25",
    description: "Sharp cuts for young legends under 12. Style starts early.",
    icon: User
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Artisan Services</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">MASTER YOUR <span className="text-gradient-gold">LOOK</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto">Select from our range of premium grooming services designed for the modern gentleman.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:border-gold-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-gold-500" />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold font-display">{service.title}</h3>
                <span className="text-gold-400 font-bold font-display">{service.price}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
