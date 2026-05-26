import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 bg-off-white">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="bg-primary rounded-[3rem] p-10 md:p-14 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-white/50" />
            <span className="text-white/70 text-xs tracking-widest font-bold">ACTIVITIES</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-white italic font-light mb-10"
          >
            Recent Activities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Image Placeholder 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full h-64 md:h-80 bg-gray-200 rounded-[2rem] shadow-lg"
            />
            {/* Image Placeholder 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full h-64 md:h-80 bg-gray-200 rounded-[2rem] shadow-lg"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-end gap-3"
          >
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all text-secondary shadow-md">
              <ArrowLeft size={16} />
            </button>
            <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:brightness-110 transition-all text-white shadow-md cursor-pointer">
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
