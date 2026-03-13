import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg pt-2 border-t-2 border-pragna-maroon inline-block">
            Let's discuss your next industrial project. We're here to help.
          </p>
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

      {/* Map Section Placeholder */}
      <section className="h-[500px] w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
                <MapPin size={48} className="text-pragna-maroon mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Gorwa Industrial Estate, Vadodara</h3>
                <p className="text-gray-600 mt-2">Find us at our main fabrication facility.</p>
                <a 
                    href="https://maps.google.com/?q=Gorwa+Industrial+Estate+Vadodara" 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-6 inline-block btn-primary"
                >
                    Open in Google Maps
                </a>
            </div>
        </div>
        {/* In a real scenario, you'd embed an actual Google Maps iframe here */}
      </section>
    </div>
  );
};

export default Contact;
