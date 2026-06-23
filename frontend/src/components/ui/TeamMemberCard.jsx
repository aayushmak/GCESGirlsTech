import React from 'react';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ 
  name, 
  role, 
  image, 
  bgColor = "bg-yellow-300",
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col items-center"
    >
      <div className={`w-full max-w-[280px] h-72 md:h-80 rounded-3xl border-2 border-[#0B1F1E] ${bgColor} shadow-[8px_8px_0_#0B1F1E] hover:-translate-y-1 hover:shadow-[10px_10px_0_#0B1F1E] transition-all duration-300 overflow-hidden relative mb-4 md:mb-6`}>
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="absolute inset-0 w-full h-full object-cover rounded-[inherit]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
            Photo
          </div>
        )}
      </div>
      <h3 className="text-xl md:text-2xl font-serif font-medium text-[#0B1F1E] text-center">
        {name}
      </h3>
      <p className="text-sm md:text-base text-secondary font-light mt-1 text-center">
        {role}
      </p>
    </motion.div>
  );
};

export default TeamMemberCard;