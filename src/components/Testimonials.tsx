import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Rodriguez",
    text: "Best fade I've ever had. These guys are true artists. The atmosphere is top-notch and the attention to detail is insane.",
    rating: 5,
    subtitle: "Verified Client"
  },
  {
    name: "Marcus Thompson",
    text: "Golden Cuts isn't just a barbershop, it's an experience. The hot towel service is legendary. Worth every penny.",
    rating: 5,
    subtitle: "Verified Client"
  },
  {
    name: "David Smith",
    text: "I travel 30 miles specifically for this shop. Precision, style, and great conversation. The Dominican vibes are real.",
    rating: 5,
    subtitle: "Loyal Customer"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black px-4 overflow-hidden relative">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <MessageSquare className="w-8 h-8 text-gold-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">WORD ON THE <span className="text-gradient-gold">STREET</span></h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-zinc-900/30 backdrop-blur-sm border border-white/10 p-10 rounded-3xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-gray-300 text-lg italic leading-relaxed mb-8">
                "{item.text}"
              </p>
              <div>
                <h4 className="text-white font-bold">{item.name}</h4>
                <p className="text-xs text-gold-500 font-bold uppercase tracking-widest">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
