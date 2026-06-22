import React from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const BlogCard = ({
  id,
  image,
  category,
  title,
  delay
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

      <div className="cursor-pointer group">

        <div className="overflow-hidden rounded-3xl">
          <img
            src={image}
            alt={title}
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <p className="text-secondary text-sm mt-4">
          {category}
        </p>

        <h2 className="font-serif text-[28px] leading-tight mt-2 text-[#0B1F1E] group-hover:text-secondary transition-colors">
          {title}
        </h2>

      </div>

    </Link>
    </motion.div>
    
  );
};

export default BlogCard;