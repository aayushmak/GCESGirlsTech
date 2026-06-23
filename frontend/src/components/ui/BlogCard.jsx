import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCard = ({
  id,
  image,
  category,
  title,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col items-center"
    >
      <Link to={`/blog/${id}`}>
        <motion.div 
          className="cursor-pointer group w-full "
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={image}
              alt={title}
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <motion.p 
            className="text-secondary text-sm mt-4 font-semibold"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ x: 5 }}
          >
            {category}
          </motion.p>

          <motion.h2 
            className="font-serif text-[28px] leading-tight mt-2 text-[#0B1F1E] group-hover:text-secondary transition-colors"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ color: "#E83F6F" }}
          >
            {title}
          </motion.h2>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;