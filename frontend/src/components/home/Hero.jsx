import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import gcesBg from '../../assets/images/gces_1.png';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-10 overflow-hidden bg-primary text-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10" />
        <img 
          src={gcesBg}
          alt="GCES Girls Tech background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center">
        <div className="max-w-4xl flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-secondary text-sm md:text-base font-medium tracking-wide mb-6"
          >
            Empowering Girls In Technology!
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[5rem] text-white font-serif leading-[1.1] mb-8"
          >
            Welcome to <span className="italic">GCES Girls Tech</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base lg:text-lg text-white/90 max-w-3xl leading-relaxed mb-10 font-light"
          >
            Creating opportunities for girls to explore technology, innovate boldly, and
            support one another as they grow into confident leaders in tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button variant="accent" size="lg" className="rounded-full px-12 py-3 text-sm font-semibold shadow-xl">
              Explore Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
