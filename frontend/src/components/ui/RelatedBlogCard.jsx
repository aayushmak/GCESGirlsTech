import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

const RelatedBlogCard = ({
  id,
  image,
  title,
  date,
  readTime,
  author,
  semester,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Link to={`/blog/${id}`}>
        <motion.div
          className="border-2 border-[#0B1F1E] rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer group"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-6 items-start">
            {/* Icon/Image Section */}
            <motion.div
              className="flex-shrink-0 w-24 h-24 bg-yellow-300 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Title */}
              <motion.h3
                className="font-serif text-xl lg:text-2xl text-[#0B1F1E] group-hover:text-secondary transition-colors leading-tight"
                whileHover={{ color: "#E83F6F" }}
              >
                {title}
              </motion.h3>

              {/* Date and Read Time */}
              <motion.div
                className="flex gap-4 text-xs text-gray-600 mt-3"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{date || "N/A"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{readTime || "N/A"}</span>
                </div>
              </motion.div>

              {/* Author Info */}
              {author && (
                <motion.div
                  className="flex items-center gap-3 mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-xs font-bold">
                    {author.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-[#0B1F1E]">{author}</p>
                    <p className="text-gray-500">{semester || "N/A"}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default RelatedBlogCard;