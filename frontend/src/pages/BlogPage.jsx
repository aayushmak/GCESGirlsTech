import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BlogCard from "../components/ui/BlogCard";
import { useParams } from "react-router-dom";
import { blogs } from "../assets/data/blog";

const BlogPage = () => {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));

  const relatedBlogs = blogs.filter((item) => item.id !== blog.id).slice(0, 2);

  return (
    <div className="bg-white min-h-screen pt-24">
      <div className="absolute top-0 w-full h-24">
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

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h1 className="font-serif text-5xl md:text-7xl leading-none text-[#0B1F1E]">
            {blog.title}
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto mt-6">
            {blog.description}
          </p>

          <div className="flex justify-center gap-6 mt-8 text-sm flex-wrap">
            <div>
              <p>{blog.date}</p>
              <p>{blog.readTime}</p>
            </div>

            <div className="border-l pl-6">
              <p>{blog.author}</p>
              <p>{blog.semester} Semester</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          <img src={blog.image} className="rounded-3xl w-full" />

          <div>
            <h2 className="font-serif text-4xl text-primary leading-snug">
              "{blog.quote}"
            </h2>

            <div className="space-y-6 mt-8 text-gray-700">
              {blog.content.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        <h3 className="font-serif text-5xl mt-28 mb-10">Others Like this</h3>

        <div className="grid md:grid-cols-2 gap-10">
          {relatedBlogs.map((blog) => (
            <BlogCard key={blog.id} id={blog.id} {...blog} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
