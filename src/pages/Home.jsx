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

  const processSteps = [
    {
      number: '01',
      title: 'Give Us A Call',
      description: 'Connect with our experts to discuss your requirements and project goals.'
    },
    {
      number: '02',
      title: 'Evaluate the Cost',
      description: 'Receive a detailed cost analysis and timeline for your custom fabrication project.'
    },
    {
      number: '03',
      title: 'Get the Job Done',
      description: 'Our team executes the production with precision and delivers high-quality results.'
    },
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

      {/* Services Overview / Process */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-10 border border-gray-100 bg-gray-50/50 rounded-2xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <h3 className="text-5xl font-black text-gray-900 mb-8 relative z-10 group-hover:text-pragna-maroon group-hover:scale-110 transition-all duration-300 origin-left">
                  {step.number}
                </h3>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Modern Background with Gradients and Shapes */}
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pragna-maroon/20 blur-[120px] rounded-full -mr-64 -mt-64 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pragna-maroon/10 blur-[100px] rounded-full -ml-64 -mb-64"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-pragna-maroon/20 text-pragna-maroon border border-pragna-maroon/30 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
              Get Started Today
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
              Ready to elevate your <span className="text-pragna-maroon">industrial project?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Work with a team that has 50 years of excellence. We bring precision, quality, and expertise to every fabrication challenge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="group relative px-10 py-4 bg-pragna-maroon text-white font-bold text-lg rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(153,27,27,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Quote Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link
                to="/services"
                className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-lg rounded-lg border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
