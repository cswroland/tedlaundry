import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ted-blue text-slate-300 py-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="text-sm md:text-base font-medium text-slate-400 text-center">
          &copy; {new Date().getFullYear()} Ted Laundry Services. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;