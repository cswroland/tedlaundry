import React from 'react';

const SloganMarquee: React.FC = () => {
  return (
    <div className="py-3 bg-ted-blue overflow-hidden relative border-y border-gray-800">
      <div className="absolute inset-0 bg-blue-900/20 pointer-events-none"></div>
      <div className="flex w-[200%] animate-marquee">
        <div className="flex-1 whitespace-nowrap text-center flex items-center justify-around">
          <span className="text-xl md:text-2xl font-serif text-white/90 font-medium mx-4 tracking-wider">
            Your Time Matters. Let Us Handle the Laundry.
          </span>
           <span className="text-lg md:text-xl font-serif text-ted-gold font-bold mx-4">
            ✦
          </span>
           <span className="text-xl md:text-2xl font-serif text-white/90 font-medium mx-4 tracking-wider">
            Your Time Matters. Let Us Handle the Laundry.
          </span>
           <span className="text-lg md:text-xl font-serif text-ted-gold font-bold mx-4">
            ✦
          </span>
        </div>
        <div className="flex-1 whitespace-nowrap text-center flex items-center justify-around">
          <span className="text-xl md:text-2xl font-serif text-white/90 font-medium mx-4 tracking-wider">
            Your Time Matters. Let Us Handle the Laundry.
          </span>
          <span className="text-lg md:text-xl font-serif text-ted-gold font-bold mx-4">
            ✦
          </span>
           <span className="text-xl md:text-2xl font-serif text-white/90 font-medium mx-4 tracking-wider">
            Your Time Matters. Let Us Handle the Laundry.
          </span>
          <span className="text-lg md:text-xl font-serif text-ted-gold font-bold mx-4">
            ✦
          </span>
        </div>
      </div>
    </div>
  );
};

export default SloganMarquee;