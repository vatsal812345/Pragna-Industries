import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ExternalLink, Hammer, Ruler, Package } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Radiator', 'Generator', 'Industrial', 'Custom'];

  const projects = [
    { title: 'Industrial Fan Guard', category: 'Radiator', image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=400' },
    { title: 'Heavy Duty Generator Tower', category: 'Generator', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=400' },
    { title: 'Custom Fuel Tanker', category: 'Industrial', image: 'https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=400' },
    { title: 'Structural Steel Assembly', category: 'Industrial', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=400' },
    { title: 'Stainless Steel Grilles', category: 'Custom', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=400' },
    { title: 'Power Plant Component', category: 'Generator', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=400' },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 bg-gray-50 overflow-hidden px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(153,27,27,0.05),transparent)]"></div>

        <div className="container mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-pragna-maroon font-bold tracking-[0.2em] uppercase mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mt-4"
          >
            Showcasing our commitment to quality and precision across various fabrication domains through our diverse project portfolio.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter size={20} className="text-gray-400 mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === cat
                    ? 'bg-pragna-maroon text-white shadow-lg'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-xl overflow-hidden shadow-xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-pragna-maroon font-bold text-sm tracking-widest uppercase mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="flex gap-4">
                      <button className="bg-white p-2 rounded-full text-gray-900 hover:bg-pragna-maroon hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto text-center inline-block">Our Workflow</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Requirement Analysis', icon: <Filter />, desc: 'Understanding your specific fabrication needs and design constraints.' },
              { title: 'Precision Engineering', icon: <Ruler />, desc: 'Detailed CAD modeling and engineering validation for superior structural integrity.' },
              { title: 'Quality Manufacturing', icon: <Hammer />, desc: 'Executing the build with expert craftsmanship and rigorous quality checks.' }
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border-b-4 border-pragna-maroon hover:shadow-xl transition-all">
                <div className="text-pragna-maroon mb-6">{React.cloneElement(step.icon, { size: 40 })}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
