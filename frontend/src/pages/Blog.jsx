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

          <motion.h1 initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} className="text-4xl md:text-5xl font-serif mb-10">
            Our{" "}
            <span className="text-secondary italic">
              Blogs
            </span>
          </motion.h1>

          <div className="space-y-5">

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

          </div>

        </section>

        {/* Blog Grid */}

        <section className="flex-1">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {currentBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                {...blog}
              />
            ))}

          </div>

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />

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
    <details>

      <summary className="flex justify-between items-center cursor-pointer border-b pb-4">

        <span>{title}</span>

        <span className="text-3xl">
          +
        </span>

      </summary>

      <div className="mt-4 space-y-3">

        {options.map((option) => (

          <label
            key={option}
            className="flex gap-2"
          >

            <input
              type="checkbox"
              checked={filters[category].includes(option)}
              onChange={() =>
                handleFilterChange(category, option)
              }
            />

            {option}

          </label>

        ))}

      </div>

    </details>
  );
};

export default Blog;