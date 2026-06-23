import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RelatedBlogCard from "../components/ui/RelatedBlogCard";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../assets/data/blog";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((item) => item.id === Number(id));

  const relatedBlogs = blogs.filter((item) => item.id !== blog.id).slice(0, 2);

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Fixed Navbar Spacer */}
      <div className="absolute top-0 left-0 w-full bg-white h-24 z-40 flex items-center shadow-sm">
        <Navbar />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute w-full h-full text-[#FFCAD4]"
          viewBox="0 0 1440 1800"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        >
          <path d="M-100,150 Q400,50 600,600 T1500,800" />
          <path d="M300,1200 Q700,1400 1500,1000" />
        </svg>
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-6 mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back Button */}
        <motion.button
          onClick={() => navigate("/blog")}
          className="flex items-center gap-2 text-[#0B1F1E] hover:text-secondary transition-colors mb-8 group"
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            whileHover={{ rotate: -90 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft size={20} />
          </motion.div>
          <span className="text-sm font-medium">Back to Blogs</span>
        </motion.button>

        {/* Blog Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <motion.h1 
            className="font-serif text-5xl md:text-7xl leading-none text-[#0B1F1E]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {blog.title}
          </motion.h1>

          <motion.p 
            className="text-gray-500 max-w-xl mx-auto mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {blog.description}
          </motion.p>

          <motion.div 
            className="flex justify-center gap-6 mt-8 text-sm flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <p className="font-semibold text-primary">{blog.date}</p>
              <p className="text-gray-600">{blog.readTime}</p>
            </motion.div>

            <motion.div 
              className="border-l pl-6"
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-semibold text-primary">{blog.author}</p>
              <p className="text-gray-600">{blog.semester} Semester</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Blog Content */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Large Blog Image */}
          <motion.div
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.img 
              src={blog.image} 
              className="rounded-3xl w-full h-[600px] object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Quote and Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-start"
          >
            <motion.h2 
              className="font-serif text-4xl text-primary leading-snug"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              "{blog.quote}"
            </motion.h2>

            <motion.div 
              className="space-y-6 mt-12 text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {blog.content.map((para, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Others Like This Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.h3 
            className="font-serif text-5xl mb-12 text-[#0B1F1E]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Others Like this
          </motion.h3>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {relatedBlogs.map((relatedBlog, index) => (
              <motion.div
                key={relatedBlog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <RelatedBlogCard 
                  id={relatedBlog.id}
                  image={relatedBlog.image}
                  title={relatedBlog.title}
                  date={relatedBlog.date}
                  readTime={relatedBlog.readTime}
                  author={relatedBlog.author}
                  semester={relatedBlog.semester}
                  delay={0.1 * index}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default BlogPage;