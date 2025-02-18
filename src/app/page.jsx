'use client';

import { motion } from 'framer-motion';
import InteractiveScene from '../components/ui/InteractiveScene';
import Marquee from '../components/ui/Marquee';
import ParallaxSection from '../components/ui/ParallaxSection';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold gradient-text">Neal.dev</span>
            <div className="flex gap-8">
              <a 
                href="#home" 
                className="nav-link active"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
              <a 
                href="#portfolio" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8 pt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-bold space-y-2">
              <motion.span 
                className="text-purple-600 block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                ServiceNow
              </motion.span>
              <motion.span 
                className="text-blue-600 block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Architect
              </motion.span>
              <motion.span 
                className="text-gray-900 block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                & Developer
              </motion.span>
            </h1>
            <p className="text-xl text-gray-600 max-w-md">
              Creating efficient, scalable solutions with ServiceNow and modern web technologies.
            </p>
            <div className="flex gap-4">
              <a href="#work" className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
                Contact Me
              </a>
            </div>
          </motion.div>

          <div className="relative">
            <InteractiveScene />
          </div>
        </div>
      </section>

      <Marquee />

      <ParallaxSection className="py-20 px-6 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-16">Skills & Expertise</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="card group hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-600">ServiceNow</h3>
              <p className="text-gray-600">Development & Architecture</p>
            </div>
            <div className="card group hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Development</h3>
              <p className="text-gray-600">JavaScript, GlideScript, HTML, CSS, AngularJS</p>
            </div>
            <div className="card group hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Microsoft Power Platform</h3>
              <p className="text-gray-600">PowerAutomate, PowerBI, PowerApps, Dynamics</p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-16">Projects</h2>
          <div className="text-center text-xl text-gray-600 p-12 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm">
            Coming Soon
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-16">About Me</h2>
          {/* ... about content ... */}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-16">Portfolio</h2>
          {/* ... portfolio content ... */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-16">Contact</h2>
          {/* ... contact content ... */}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
