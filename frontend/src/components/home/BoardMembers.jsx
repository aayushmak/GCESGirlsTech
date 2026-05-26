import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const members = [
  { name: "Aliza Gurung" },
  { name: "Smarika Sharma" },
  { name: "Bhumika Bastola" }
];

const BoardMembers = () => {
  return (
    <section id="members" className="py-24 bg-white">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-serif text-dark-text mb-6 font-bold"
          >
            Our <span className="text-secondary italic">Board</span> Members
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 pb-12">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-full h-[400px] lg:h-[450px] bg-gray-200 rounded-[2rem] shadow-md transform hover:-translate-y-2 transition-transform cursor-pointer" />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="accent" size="sm" className="rounded-full px-8 py-2 font-semibold shadow-md text-xs">
              See All Members
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
