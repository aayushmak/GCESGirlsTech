import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BlogCard from "../components/ui/BlogCard";
import Pagination from "../components/ui/Pagination";
import usePagination from "../hooks/usePagination";
import { motion } from "framer-motion";
import { blogs } from "../assets/data/blog";

const Blog = () => {
  const [filters, setFilters] = useState({
    time: [],
    genre: [],
    semester: [],
  });

  

  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const filteredBlogs = blogs.filter((blog) => {
    const timeMatch =
      filters.time.length === 0 ||
      filters.time.includes(blog.time);

    const genreMatch =
      filters.genre.length === 0 ||
      filters.genre.includes(blog.category);

    const semesterMatch =
      filters.semester.length === 0 ||
      filters.semester.includes(blog.semester);

    return (
      timeMatch &&
      genreMatch &&
      semesterMatch
    );
  });

  const {
    currentItems: currentBlogs,
    currentPage,
    setCurrentPage,
    totalPages,
  } = usePagination(filteredBlogs, 4);

  return (
    <div className="min-h-screen bg-white pt-24 ">
      {/* Fixed Navbar Spacer */}
      <div className="absolute top-0 left-0 w-full bg-white h-24 z-40 flex items-center shadow-sm">
        <Navbar />
      </div>

      <main className="mx-6 lg:mx-24 mt-32 flex flex-col lg:flex-row gap-10">

        {/* Sidebar */}

        <section className="w-full lg:w-[250px]">

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-10">
            Our{" "}
            <span className="text-secondary italic">
              Blogs
            </span>
          </motion.h1>

          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >

            <FilterSection
              title="Time"
              options={["Morning", "Evening"]}
              category="time"
              filters={filters}
              handleFilterChange={handleFilterChange}
            />

            <FilterSection
              title="Genre"
              options={["UI/UX","AI","Programming"]}
              category="genre"
              filters={filters}
              handleFilterChange={handleFilterChange}
            />

            <FilterSection
              title="Semester"
              options={["1st","2nd","3rd"]}
              category="semester"
              filters={filters}
              handleFilterChange={handleFilterChange}
            />

          </motion.div>

        </section>

        {/* Blog Grid */}

        <section className="flex-1">

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >

            {currentBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
              >
                <BlogCard
                  {...blog}
                  delay={0.05 * index}
                />
              </motion.div>
            ))}

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </motion.div>

        </section>

      </main>

      <Footer />
    </div>
  );
};

const FilterSection = ({
  title,
  options,
  category,
  filters,
  handleFilterChange,
}) => {
  return (
    <motion.details
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >

      <summary className="flex justify-between items-center cursor-pointer border-b pb-4 hover:text-secondary transition-colors">

        <span>{title}</span>

        <span className="text-3xl">
          +
        </span>

      </summary>

      <motion.div 
        className="mt-4 space-y-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >

        {options.map((option) => (

          <motion.label
            key={option}
            className="flex gap-2 cursor-pointer hover:text-secondary transition-colors"
            whileHover={{ x: 5 }}
          >

            <input
              type="checkbox"
              checked={filters[category].includes(option)}
              onChange={() =>
                handleFilterChange(category, option)
              }
              className="cursor-pointer"
            />

            {option}

          </motion.label>

        ))}

      </motion.div>

    </motion.details>
  );
};

export default Blog;