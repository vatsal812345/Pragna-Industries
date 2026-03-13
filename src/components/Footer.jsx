import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6 text-white">
              <div className="w-8 h-8 bg-pragna-maroon flex items-center justify-center text-white font-bold text-lg rounded">
                PI
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">PRAGNA</span>
                <span className="text-[10px] tracking-widest text-red-500">INDUSTRIES</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              50+ years of excellence in Industrial and Radiator Fabrication. Manufacturing custom products based on client designs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-pragna-maroon transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-[var(--primary)] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-[var(--primary)] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-pragna-maroon">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Company</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Latest Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-pragna-maroon">
              Our Services
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>Industrial Fabrication</li>
              <li>Radiator Fabrication</li>
              <li>Generator Towers</li>
              <li>Tanker Fabrication</li>
              <li>Custom Metal Manufacturing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-pragna-maroon">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-pragna-maroon mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400">
                  F-24/B, Gorwa Industrial Estate, Vadodara - 390016, Gujarat, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-pragna-maroon flex-shrink-0" size={20} />
                <a href="tel:9824659668" className="text-gray-400 hover:text-white">+91 9824659668</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-pragna-maroon flex-shrink-0" size={20} />
                <a href="mailto:pragnaind@yahoo.in" className="text-gray-400 hover:text-white">pragnaind@yahoo.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Pragna Industries. All rights reserved. Designed for industrial excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
