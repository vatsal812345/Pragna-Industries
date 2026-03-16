import React from 'react';
import { motion } from 'framer-motion';
import { History, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const leadership = [
    { name: 'Deepak Prajapati', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Vatsal Prajapati', role: 'Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pragna-maroon/5 blur-3xl rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pragna-maroon/5 blur-3xl rounded-full -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-pragna-maroon font-bold tracking-[0.2em] uppercase mb-4 block"
          >
            Since 1974
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            About Pragna Industries
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A legacy of over 50 years in precision fabrication and industrial excellence, driven by innovation and craftsmanship.
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-2 text-pragna-maroon font-bold uppercase tracking-wider mb-4">
                  <History size={20} />
                  <span>Our History</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Five Decades of Manufacturing Innovation</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Founded over 50 years ago, Pragna Industries started as a small fabrication unit with a vision to provide specialized metal products to local industries. Today, we have grown into a leading name in Industrial and Radiator Fabrication.
                  </p>
                  <p>
                    Our journey has been defined by a commitment to quality, precision, and customer satisfaction. We specialize in manufacturing custom products based on client designs, ensuring every piece meets rigorous industrial standards.
                  </p>
                  <p>
                    From generator towers to fuel tankers, we have manufactured thousands of products that power and support industries across the region.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img src="/1.jpg" alt="Industrial Fabrication" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
                <div className="bg-pragna-maroon p-8 rounded-2xl text-white shadow-xl">
                  <h4 className="text-3xl font-black mb-2">50+</h4>
                  <p className="opacity-80 font-medium">Years of Experience</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-gray-100 p-8 rounded-2xl shadow-inner border border-gray-200">
                  <h4 className="text-3xl font-black text-gray-900 mb-2">25k+</h4>
                  <p className="text-gray-600 font-medium">Products Delivered</p>
                </div>
                <img src="/2.jpg" alt="Metal Work" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">Expert guidance and visionary leadership driving our company forward.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-16">
            {leadership.map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="max-w-sm group"
              >
                <div className="mb-8 relative inline-block">
                  <div className="absolute inset-0 bg-pragna-maroon/20 rounded-[2rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-500 blur-sm"></div>
                  <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                    <img src={leader.image} alt={leader.name} className="w-72 h-96 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-black text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-pragna-maroon font-bold tracking-[0.2em] uppercase text-sm">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 text-center bg-gray-50/50 rounded-3xl border border-gray-100 hover:shadow-2xl hover:border-pragna-maroon/20 transition-all duration-500 group">
              <div className="w-20 h-20 bg-white text-pragna-maroon flex items-center justify-center rounded-2xl shadow-lg mx-auto mb-8 group-hover:scale-110 group-hover:bg-pragna-maroon group-hover:text-white transition-all duration-500">
                <Award size={40} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 uppercase tracking-tighter">Quality Driven</h3>
              <p className="text-gray-600 leading-relaxed text-lg">We adhere to the highest standards of manufacturing precision and material quality.</p>
            </div>
            <div className="p-10 text-center bg-gray-50/50 rounded-3xl border border-gray-100 hover:shadow-2xl hover:border-pragna-maroon/20 transition-all duration-500 group">
              <div className="w-20 h-20 bg-white text-pragna-maroon flex items-center justify-center rounded-2xl shadow-lg mx-auto mb-8 group-hover:scale-110 group-hover:bg-pragna-maroon group-hover:text-white transition-all duration-500">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 uppercase tracking-tighter">Client Focused</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Every project starts with understanding your specific needs and design requirements.</p>
            </div>
            <div className="p-10 text-center bg-gray-50/50 rounded-3xl border border-gray-100 hover:shadow-2xl hover:border-pragna-maroon/20 transition-all duration-500 group">
              <div className="w-20 h-20 bg-white text-pragna-maroon flex items-center justify-center rounded-2xl shadow-lg mx-auto mb-8 group-hover:scale-110 group-hover:bg-pragna-maroon group-hover:text-white transition-all duration-500">
                <TrendingUp size={40} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 uppercase tracking-tighter">Constant Growth</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Implementing new technologies and methods to stay ahead in the fabrication industry.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
