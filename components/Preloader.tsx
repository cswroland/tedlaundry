import React from 'react';
import { motion } from 'framer-motion';
import WashingMachine3D from './WashingMachine3D';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ted-blue text-white"
    >
      <div className="relative transform scale-150 mb-12">
         {/* The 3D Machine Animation */}
        <WashingMachine3D isAnimating={true} />
        
        {/* Sparkles Overlay */}
        <div className="absolute -top-10 -right-10 sparkle" style={{ animationDelay: '0.2s' }} />
        <div className="absolute -bottom-5 -left-10 sparkle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 -right-16 sparkle" style={{ animationDelay: '1.2s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8"
      >
        <h1 className="text-3xl font-serif font-bold text-ted-gold tracking-widest">TED LAUNDRY</h1>
        <p className="text-sm font-light tracking-[0.3em] mt-2 text-gray-300">SERVICES</p>
      </motion.div>

      <div className="mt-8 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-ted-gold"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5.5, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;