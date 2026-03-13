import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [showMap, setShowMap] = useState(false);
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 bg-gray-50 overflow-hidden mb-16 px-4">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pragna-maroon/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-pragna-maroon font-bold tracking-[0.2em] uppercase mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mt-4"
          >
            Have a project in mind? Let's discuss your industrial requirements and how we can bring your designs to life.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Have a specific design in mind? Or need a quote for bulk manufacturing? Our team is available to provide you with the information you need.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-50 text-pragna-maroon flex items-center justify-center rounded-lg flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                      <a href="tel:9824659668" className="text-gray-600 hover:text-pragna-maroon transition-colors text-lg">+91 9824659668</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-50 text-pragna-maroon flex items-center justify-center rounded-lg flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                      <a href="mailto:pragnaind@yahoo.in" className="text-gray-600 hover:text-pragna-maroon transition-colors text-lg">pragnaind@yahoo.in</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-50 text-pragna-maroon flex items-center justify-center rounded-lg flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                      <p className="text-gray-600 leading-relaxed">
                        F-24/B, Gorwa Industrial Estate,<br />
                        Vadodara - 390016, Gujarat, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <div className="flex items-center space-x-6">
                    <Clock className="text-pragna-maroon" />
                    <div>
                      <h4 className="font-bold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100"
              >
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Deepak"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Prajapati"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" 
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" 
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" 
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
                    <textarea 
                      rows="6" 
                      placeholder="Tell us about your project requirements..."
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button 
                      type="submit" 
                      className="w-full btn-primary py-5 rounded-lg flex items-center justify-center space-x-3 text-lg"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Click-to-Show */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Facility</h2>
          <p className="text-gray-600">F-24/B, Gorwa Industrial Estate, Vadodara</p>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group"
          >
            {!showMap ? (
              <div 
                className="absolute inset-0 cursor-pointer"
                onClick={() => setShowMap(true)}
              >
                {/* Simulated Map Preview Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                </div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <div className="w-20 h-20 bg-pragna-maroon text-white rounded-full flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                    <MapPin size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Interactive Floor Map</h3>
                  <p className="text-lg opacity-90 mb-8 max-w-md text-center">
                    Click anywhere to load the interactive Google Maps view of our facility.
                  </p>
                  <button className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg shadow-xl hover:bg-gray-100 transition-all">
                    Load Interactive Map
                  </button>
                </div>
              </div>
            ) : (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14763.454273874315!2d73.1517036!3d22.3210086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8849646c19f%3A0xc6cb5572522ae163!2sGorwa%20Industrial%20Estate%2C%20Gorwa%2C%20Vadodara%2C%20Gujarat%20390016!5e0!3m2!1sen!2sin!4v1710330000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pragna Industries Location"
              ></iframe>
            )}
            
            {/* Direct Redirect Button (Always visible) */}
            <div className="absolute bottom-6 left-6">
              <a 
                href="https://maps.google.com/?q=Gorwa+Industrial+Estate+Vadodara" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-[#4285F4] font-bold rounded-lg shadow-2xl hover:bg-gray-50 transition-all border border-gray-200"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
