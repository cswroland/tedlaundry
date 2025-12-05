import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "../constants";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="../wash.jpg"
          alt="White linen texture"
          className="w-full h-full object-cover opacity-75"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-ted-gold uppercase tracking-[0.2em] mb-3"
          >
            What We Do
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-ted-blue"
          >
            Comprehensive Laundry Solutions
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 border border-slate-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-ted-blue transition-colors duration-500 shadow-sm">
                <service.icon className="w-8 h-8 text-ted-blue group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-xl font-bold text-ted-dark mb-4 font-serif">
                {service.title}
              </h4>
              <p className="text-ted-text leading-relaxed font-medium">
                {service.description}
              </p>

              <div className="mt-6 w-12 h-0.5 bg-ted-gold/40 group-hover:w-full group-hover:bg-ted-gold transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
