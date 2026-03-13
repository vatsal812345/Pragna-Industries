import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] text-white pt-24 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Company Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-pragna-maroon flex items-center justify-center text-white font-bold text-xl rounded-xl shadow-lg shadow-pragna-maroon/20 group-hover:scale-105 transition-transform">
                PI
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-white">PRAGNA</span>
                <span className="text-[11px] font-black tracking-[0.2em] text-red-500 uppercase mt-1">Industries</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              With over 5 decades of industrial legacy, we specialize in high-precision Radiator and Metal Fabrication, setting benchmarks in quality and reliability.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-11 h-11 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl hover:bg-pragna-maroon hover:border-pragna-maroon hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-pragna-maroon"></span>
              Quick Navigation
            </h3>
            <ul className="space-y-4">
              {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center gap-2 transition-all duration-300 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pragna-maroon/50 group-hover:bg-pragna-maroon transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-pragna-maroon"></span>
              Our Expertise
            </h3>
            <ul className="space-y-4 text-gray-400 text-[15px]">
              {[
                'Industrial Fabrication',
                'Radiator Fabrication',
                'Generator Towers',
                'Tanker Fabrication',
                'Custom Metal Works'
              ].map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-pragna-maroon"></span>
              Contact Info
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-pragna-maroon flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="text-gray-400 text-[14px] leading-relaxed">
                  F-24/B, Gorwa Industrial Estate, Vadodara - 390016, Gujarat, India
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-pragna-maroon flex-shrink-0">
                  <Phone size={20} />
                </div>
                <a href="tel:9824659668" className="text-gray-400 hover:text-white transition-colors">+91 9824659668</a>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-pragna-maroon flex-shrink-0">
                  <Mail size={20} />
                </div>
                <a href="mailto:pragnaind@yahoo.in" className="text-gray-400 hover:text-white transition-colors">pragnaind@yahoo.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Pragna Industries. Precision in every detail.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
