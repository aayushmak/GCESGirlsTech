import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, pinkWord, light = false }) => {
  return (
    <div className="mb-12 md:mb-16">
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`uppercase tracking-widest text-sm font-semibold mb-4 ${light ? 'text-white/80' : 'text-secondary'}`}>
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-serif ${light ? 'text-white' : 'text-primary'}`}
      >
        {title.split(' ').map((word, i) => (
          <span key={i}>
            {word === pinkWord ? (
              <span className="text-secondary italic font-light">{word} </span>
            ) : (
              <span>{word} </span>
            )}
          </span>
        ))}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
