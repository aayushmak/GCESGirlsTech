import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';

const BlogSection = () => {
  return (
    <section id="blogs" className="py-20 bg-off-white">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="bg-primary rounded-[3rem] p-10 md:p-14 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-white/50" />
            <span className="text-white/70 text-xs tracking-widest font-bold">BLOG</span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-white mb-10"
          >
            See What <span className="italic font-light">Our Members</span> Wrote
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Placeholder Side */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full h-[400px] bg-gray-200 rounded-[2rem] shadow-lg"
              />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 text-white">
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-4xl font-serif font-bold leading-snug mb-6"
              >
                AI in Everyday Life: <br /> More Than You Think
              </motion.h3>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm md:text-base text-white/80 leading-relaxed font-light mb-8 max-w-md"
              >
                From voice assistants to recommendation systems, this blog explores 
                how artificial intelligence quietly shapes our daily experiences.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 mb-10"
              >
                <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AK</span>
                </div>
                <div>
                  <p className="font-bold text-sm">Aayushma Kafle</p>
                  <p className="text-[10px] text-white/60 tracking-wider">8th Semester</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-between"
              >
                <Button variant="accent" size="md" className="rounded-full px-8 text-sm shadow-md">
                  Read Now
                </Button>
                
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all text-secondary shadow-md">
                    <ArrowLeft size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:brightness-110 transition-all text-white shadow-md cursor-pointer">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
