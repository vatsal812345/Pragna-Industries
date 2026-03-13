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
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Pragna Industries</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">A legacy of over 50 years in precision fabrication and industrial excellence.</p>
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
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Industrial Fabrication" className="rounded-lg shadow-lg w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Metal Work" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto text-center inline-block">Our Leadership Team</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Expert guidance and visionary leadership driving our company forward.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            {leadership.map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="max-w-xs text-center"
              >
                <div className="mb-6 relative group inline-block">
                  <div className="absolute inset-0 bg-pragna-maroon rounded-xl translate-x-3 translate-y-3 -z-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-300"></div>
                  <img src={leader.image} alt={leader.name} className="w-64 h-80 object-cover rounded-xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                <p className="text-pragna-maroon font-semibold mt-1 tracking-widest uppercase text-sm">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-red-50 text-pragna-maroon flex items-center justify-center rounded-full mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Driven</h3>
              <p className="text-gray-600">We adhere to the highest standards of manufacturing precision and material quality.</p>
            </div>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-red-50 text-pragna-maroon flex items-center justify-center rounded-full mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Client Focused</h3>
              <p className="text-gray-600">Every project starts with understanding your specific needs and design requirements.</p>
            </div>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-red-50 text-pragna-maroon flex items-center justify-center rounded-full mx-auto mb-6">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Constant Growth</h3>
              <p className="text-gray-600">Implementing new technologies and methods to stay ahead in the fabrication industry.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
