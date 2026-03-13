import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, Target, Truck, Hammer, Cpu } from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const services = [
    {
      title: 'Industrial Fabrication',
      description: 'Comprehensive industrial fabrication services including structural components, machine parts, and custom industrial assemblies based on client blueprints.',
      icon: <Settings size={48} />,
      image: 'https://images.unsplash.com/photo-1537462332002-41fe0f2621ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Radiator Fabrication',
      description: 'Specialized manufacturing of radiator fan guards and related components. We have produced over 25,000+ units with precision and durability.',
      icon: <Zap size={48} />,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Generator Towers',
      description: 'Designing and manufacturing robust generator towers for industrial and commercial power systems. 50+ towers manufactured to date.',
      icon: <Target size={48} />,
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Tanker Fabrication',
      description: 'Custom fabrication of industrial tankers, including water tanks, fuel tankers, and chemical storage solutions built to handle extreme conditions.',
      icon: <Truck size={48} />,
      image: 'https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Custom Metal Manufacturing',
      description: 'End-to-end custom metal manufacturing services. If you have a design, our expert team can build it using high-grade materials.',
      icon: <Hammer size={48} />,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Technical Consultation',
      description: 'Professional engineering consultation for fabrication projects, helping clients optimize their designs for better durability and cost-efficiency.',
      icon: <Cpu size={48} />,
      image: 'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-white pb-24">
      {/* Page Header */}
      <section className="bg-gray-100 py-20 mb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Fabrication Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            We provide high-precision metal fabrication services for various industrial sectors, specializing in heavy-duty products and custom client designs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 text-pragna-maroon flex bg-white p-3 rounded-lg shadow-lg">
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-pragna-maroon transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed min-h-[80px]">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center text-pragna-maroon font-bold group-hover:cursor-pointer">
                  <span className="mr-2">Explore Details</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Slide Up / Text Reveal Section (Instructional requirement) */}
      <section className="mt-32 bg-gray-900 py-24 text-white overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -100 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
          >
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-8"
              >
                Custom Design & Engineering
              </motion.h2>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              We don't just manufacture; we bring your engineering visions to life. Share your blueprints, and our team will ensure every weld and cut is executed to perfection.
            </p>
            <ul className="space-y-4">
              {[
                "Precision CNC Cutting",
                "Advanced ARC & MIG Welding",
                "High-Grade Material Sourcing",
                "Post-Fabrication Finishing"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-pragna-maroon rounded-full"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 border-2 border-pragna-maroon translate-x-4 translate-y-4 rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Engineering" 
              className="rounded-xl relative z-10" 
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
