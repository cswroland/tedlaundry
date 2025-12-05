import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Ted%20Laundry%20Services,%20I%20would%20like%20to%20make%20a%20booking.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ 
          rotate: [0, -10, 10, -10, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          repeatDelay: 3 
        }}
      >
        <MessageCircle color="white" size={32} />
      </motion.div>
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;