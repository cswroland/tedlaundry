import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full z-40 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group gap-3"
            onClick={() => scrollToSection("hero")}
          >
            {/* Logo Image - Icon Style */}
            <img
              src="../logo.png"
              alt="Ted Laundry Services Logo"
              className="h-12 w-12 md:h-14 md:w-14 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105 shadow-sm"
            />
            {/* Business Name - Visible on Large Screens */}
            <span className="hidden lg:block text-xl xl:text-2xl font-serif font-bold text-ted-blue tracking-wide">
              TED LAUNDRY SERVICES
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-600 hover:text-ted-blue font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-slate-600 hover:text-ted-blue font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 bg-ted-blue text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg text-sm uppercase tracking-wide"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-center px-3 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-center px-3 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-center px-3 py-3 text-lg font-medium text-ted-blue bg-blue-50 rounded-md"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
