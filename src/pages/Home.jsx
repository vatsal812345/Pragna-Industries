import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Shield, Zap, Users, Award, Hammer, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Years Experience', value: '50+' },
    { label: 'Professional Employees', value: '10+' },
    { label: 'Radiator Fan Guards', value: '25,000+' },
    { label: 'Generator Towers', value: '50+' },
  ];

  const services = [
    { title: 'Industrial Fabrication', icon: <Settings size={40} /> },
    { title: 'Radiator Fabrication', icon: <Zap size={40} /> },
    { title: 'Generator Towers', icon: <Target size={40} /> },
    { title: 'Custom Manufacturing', icon: <Hammer size={40} /> },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Excellence in <span className="text-pragna-maroon">Industrial</span> Fabrication
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Pragna Industries delivers high-quality custom metal products and radiator fabrication solutions with over 50 years of industry expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary flex items-center space-x-2 text-lg px-8 py-3">
                <span>Our Services</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-lg shadow-sm border-t-4 border-pragna-maroon"
              >
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-pragna-maroon font-bold tracking-widest uppercase mb-4 block"
          >
            What We Do
          </motion.span>
          <h2 className="section-title mx-auto text-center inline-block mb-16">Custom Fabrication Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 border border-gray-100 bg-gray-50 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-pragna-maroon mb-6 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <Link to="/services" className="text-pragna-maroon font-semibold inline-flex items-center space-x-1 hover:underline">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pragna-maroon text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to start your next project?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Get in touch with our expert team today for a free evaluation and professional consultation.
          </p>
          <Link to="/contact" className="bg-white text-pragna-maroon px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl">
            Get a Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
