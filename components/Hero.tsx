import React from 'react';
import { motion } from 'framer-motion';
import WashingMachine3D from './WashingMachine3D';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-ted-light">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517677208171-0bc5e25bb3ca?q=80&w=2071&auto=format&fit=crop" 
          alt="Clean Laundry Texture" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-50/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-200/50 text-ted-blue text-sm font-bold tracking-widest uppercase border border-slate-300">
              Premium Laundry Service
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-ted-blue leading-[1.1] mb-6 drop-shadow-sm">
              Spotless Clean, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ted-gold to-yellow-600 relative pb-2">
                Every Time.
                <svg className="absolute w-full h-3 bottom-0 left-0 text-ted-gold opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-ted-text mb-10 leading-relaxed font-medium max-w-lg mx-auto md:mx-0">
              Your time is a luxury. We provide expert wash, dry, and iron services with convenient pick-up & drop-off for busy lifestyles.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <button 
                onClick={scrollToContact}
                className="px-10 py-4 bg-ted-blue text-white rounded-full font-bold tracking-wide shadow-[0_10px_20px_rgba(15,23,42,0.3)] hover:bg-slate-800 hover:scale-105 transition-all duration-300"
              >
                Book Now
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth'})}
                className="px-10 py-4 bg-white text-ted-blue border-2 border-slate-200 rounded-full font-bold tracking-wide shadow-sm hover:shadow-md hover:border-ted-blue hover:text-ted-blue hover:-translate-y-1 transition-all duration-300"
              >
                Our Services
              </button>
            </div>
          </motion.div>

          {/* 3D Illustration Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            className="md:w-1/2 flex justify-center items-center relative perspective-1000"
          >
            <div className="relative p-10">
              {/* Decorative background circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              
              <WashingMachine3D className="transform scale-110 md:scale-125 z-10" isAnimating={true} />
              
              {/* Floating Badge 1 */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-0 -right-4 md:right-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 z-20 max-w-[140px]"
              >
                <div className="text-2xl mb-1">✨</div>
                <p className="font-bold text-sm text-ted-blue">Sparkling Clean</p>
                <p className="text-xs text-ted-text">Premium Detergents</p>
              </motion.div>

               {/* Floating Badge 2 */}
               <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-4 md:left-0 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 z-20 max-w-[150px]"
              >
                <div className="flex -space-x-2 mb-2">
                   <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                   <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                   <div className="w-8 h-8 rounded-full bg-ted-gold text-white flex items-center justify-center text-xs font-bold border-2 border-white">5★</div>
                </div>
                <p className="font-bold text-sm text-ted-blue">Top Rated Service</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;