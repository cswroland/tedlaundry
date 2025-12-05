import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants";

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-ted-light relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="../clean.jpg"
          alt="White linen texture"
          className="w-full h-full object-cover opacity-75"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-ted-blue rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-ted-gold rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-ted-gold uppercase tracking-[0.2em] mb-3">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-ted-blue">
            Happy Clients
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -150 : 150,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.2,
              }}
              className="bg-white/95 p-10 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote
                  size={60}
                  className="text-ted-blue transform rotate-180"
                />
              </div>

              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hover: {
                        scale: [1, 1.4, 1],
                        rotate: [0, 15, 0],
                        transition: {
                          duration: 0.4,
                          delay: i * 0.08, // Stagger effect
                          ease: "easeInOut",
                        },
                      },
                    }}
                  >
                    <Star className="w-4 h-4 text-ted-gold fill-current" />
                  </motion.div>
                ))}
              </div>

              <p className="text-slate-700 italic text-xl mb-8 leading-relaxed relative z-10 font-serif">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-ted-blue font-bold text-lg border border-slate-200">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-ted-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-ted-blue/70 uppercase tracking-widest font-bold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
