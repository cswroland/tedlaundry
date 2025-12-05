import React from "react";
import { MapPin, Phone, Globe, ExternalLink } from "lucide-react";
import { CONTACT_INFO } from "../constants";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-8 bg-white relative border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] z-30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          {/* Contact Details Group */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 flex-grow w-full md:w-auto text-center md:text-left">
            {/* Address */}
            <div className="flex items-center gap-2 group cursor-default p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <MapPin size={18} className="text-ted-gold flex-shrink-0" />
              <span className="text-slate-700 text-sm md:text-base font-medium leading-tight">
                {CONTACT_INFO.address}
              </span>
            </div>

            <div className="hidden md:block w-px h-6 bg-slate-200"></div>

            {/* Phone */}
            <div className="flex items-center gap-2 group p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <Phone size={18} className="text-ted-gold flex-shrink-0" />
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="text-slate-700 text-sm md:text-base font-medium hover:text-ted-blue transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="hidden md:block w-px h-6 bg-slate-200"></div>

            {/* Web */}
            <div className="flex items-center gap-2 group p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <Globe size={18} className="text-ted-gold flex-shrink-0" />
              <a
                href={`https://${CONTACT_INFO.website}`}
                className="text-slate-700 text-sm md:text-base font-medium hover:text-ted-blue transition-colors"
              >
                {CONTACT_INFO.website}
              </a>
            </div>
          </div>

          {/* Compact Map Tile */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=1289+Justice+Mahomed+St,+Menlo+Park,+Pretoria"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full md:w-[240px] h-[120px] flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-slate-200 relative group transition-all hover:-translate-y-1 hover:shadow-md"
            title="Open in Google Maps"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.226767253573!2d28.24641131502126!3d-25.76562098363385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560f7e1b5b5b5%3A0x0!2s1289%20Justice%20Mahomed%20St%2C%20Menlo%20Park%2C%20Pretoria%2C%200081!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza"
              width="75%"
              height="75%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ted Laundry Services Location"
              className="grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 pointer-events-none"
            ></iframe>

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/20 transition-colors">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-ted-blue shadow-sm flex items-center gap-1">
                <MapPin size={10} /> View Map
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
