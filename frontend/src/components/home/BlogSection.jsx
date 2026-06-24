import React from "react";
import { blogs } from "../../assets/data/blog";
import usePagination from "../../hooks/usePagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const BlogSection = () => {
  const {
    currentItems,
    currentPage,
    setCurrentPage,
    totalPages,
  } = usePagination(blogs,1);

  const blog=currentItems[0];

  return (
    <section className="py-20">
      <div className="container mx-auto px-10 max-w-6xl">

        <div className="bg-primary rounded-[3rem] p-10">

          {/* top left */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-white/50"/>
            <span className="text-white/70 text-xs tracking-widest font-bold">
              BLOG
            </span>
          </div>

          <h2 className="text-white text-5xl font-serif mb-10">
            See What <span className="italic font-light">Our Members</span> Wrote
          </h2>

          <div className="flex flex-col lg:flex-row gap-12">

            <img
              src={blog.image}
              className="w-full lg:w-1/2 h-[400px] rounded-[2rem] object-cover"
            />

            <div className="text-white">

              <h3 className="text-4xl font-serif">
                {blog.title}
              </h3>

              <p className="mt-5 opacity-80">
                {blog.description}
              </p>

              <div className="mt-8">
                <p>{blog.author}</p>

                <p className="text-sm opacity-60">
                  {blog.semester} Semester
                </p>
              </div>

              <div className="flex justify-between mt-10">

                <Link to={`/blog/${blog.id}`}>
                  <Button
                    variant="accent"
                    className="rounded-full"
                  >
                    Read Now
                  </Button>
                </Link>

                <div className="flex gap-3">

                  <Button
                    variant="ghost"
                    className="rounded-full w-10 h-10 p-0 bg-white"
                    disabled={currentPage===1}
                    onClick={()=>
                      setCurrentPage(prev=>prev-1)
                    }
                  >
                    <ArrowLeft size={16}/>
                  </Button>

                  <Button
                    variant="accent"
                    className="rounded-full w-10 h-10 p-0"
                    disabled={currentPage===totalPages}
                    onClick={()=>
                      setCurrentPage(prev=>prev+1)
                    }
                  >
                    <ArrowRight size={16}/>
                  </Button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogSection;