import React from 'react';

interface WashingMachine3DProps {
  isAnimating?: boolean;
  className?: string;
}

const WashingMachine3D: React.FC<WashingMachine3DProps> = ({ isAnimating = true, className = "" }) => {
  return (
    <div className={`machine-container group ${className}`}>
      <div className="machine-body flex flex-col items-center">
        {/* Top Control Panel */}
        <div className="w-full h-20 bg-gray-50 border-b border-gray-200 rounded-t-[24px] flex items-center justify-between px-6 relative z-20">
            <div className="flex gap-2">
                <div className="w-12 h-6 bg-gray-200 rounded-md inner-shadow"></div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-gray-300 relative bg-white shadow-sm flex items-center justify-center">
                     <div className={`w-1 h-4 bg-gray-400 origin-bottom transform -translate-y-1 ${isAnimating ? 'animate-spin-slow' : ''}`}></div>
                </div>
            </div>
        </div>

        {/* Main Door Section */}
        <div className="machine-door">
           <div className="machine-glass">
             {isAnimating && <div className="water"></div>}
           </div>
           
           {/* Animated Clothes Popping Out */}
           {isAnimating && (
             <>
               {/* Internal tumbling clothes */}
               <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                  <div className="w-10 h-10 bg-red-400 rounded-md absolute animate-spin" style={{ animationDuration: '3s' }}></div>
                  <div className="w-8 h-8 bg-blue-400 rounded-md absolute animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
               </div>

               {/* Flying Clean Clothes */}
               <div className="absolute top-1/2 left-1/2 w-0 h-0">
                  <div className="cloth-item bg-white" 
                       style={{ 
                         animation: 'pop-out 2.5s infinite linear',
                         '--endX': '60px', '--endY': '-80px', '--rot': '45deg' 
                       } as any} />
                  <div className="cloth-item bg-blue-200" 
                       style={{ 
                         animation: 'pop-out 2.5s infinite linear', 
                         animationDelay: '0.8s',
                         '--endX': '-60px', '--endY': '-60px', '--rot': '-90deg' 
                       } as any} />
                  <div className="cloth-item bg-pink-200" 
                       style={{ 
                         animation: 'pop-out 2.5s infinite linear',
                         animationDelay: '1.6s',
                         '--endX': '40px', '--endY': '-100px', '--rot': '180deg' 
                       } as any} />
               </div>

               {/* Sparks around the clean clothes */}
               <div className="absolute top-0 right-0 sparkle" style={{ '--tx': '30px', '--ty': '-30px' } as any}></div>
               <div className="absolute bottom-10 left-0 sparkle" style={{ '--tx': '-30px', '--ty': '-20px', animationDelay: '0.5s' } as any}></div>
               <div className="absolute top-1/2 -right-4 sparkle" style={{ '--tx': '40px', '--ty': '10px', animationDelay: '1s' } as any}></div>
             </>
           )}
        </div>
        
        {/* Bottom Details */}
        <div className="absolute bottom-6 w-3/4 h-1 bg-gray-200 rounded-full"></div>
        
        {/* Gloss/Reflection */}
        <div className="absolute top-24 right-4 w-6 h-32 bg-gradient-to-b from-white via-white to-transparent opacity-40 transform -skew-x-6 rounded-full pointer-events-none"></div>
      </div>
      
      {/* Shadow */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[80%] h-6 bg-black opacity-10 blur-lg rounded-[100%]"></div>
    </div>
  );
};

export default WashingMachine3D;