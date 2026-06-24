import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Button from "../ui/Button";
import { activities } from "../../assets/data/activity";
import usePagination from "../../hooks/usePagination";
import { useNavigate } from "react-router-dom";

const ActivitiesSection = () => {
  const navigate = useNavigate();

  // show only recent activities on homepage
  const {
    currentItems: recentActivities,
    currentPage,
    setCurrentPage,
  } = usePagination(activities, 2);

  return (
    <section id="activities" className="py-20 bg-off-white">
      <div className="container mx-auto px-6 lg:px-10 max-w-6xl">
        <div className="bg-primary rounded-[3rem] p-8 md:p-14 shadow-xl">

          {/* Heading */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-white/50" />
            <span className="text-white/70 text-xs tracking-widest font-bold">
              ACTIVITIES
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-white italic font-light mb-10"
          >
            Recent Activities
          </motion.h2>

          {/* Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

            {recentActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() =>
                  navigate(`/activities/${activity.id}`)
                }
                className="relative overflow-hidden rounded-[2rem] cursor-pointer group h-[280px]"
              >
                {/* Image */}
                <img
                  src={activity.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

                {/* Title in center on hover */}
                <div
                  className="
                    absolute inset-0
                    flex items-center justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition-all duration-500
                  "
                >
                  <h3 className="text-white font-serif text-2xl md:text-3xl text-center px-6">
                    {activity.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom controls */}
          <div className="flex justify-between items-center flex-wrap gap-4">

            <Button
              variant="accent"
              size="md"
              className="rounded-full"
              onClick={() => navigate("/activities")}
            >
              View All Activities
            </Button>

            {/* Pagination arrows */}
            <div className="flex gap-3">

              <Button
                variant="ghost"
                className="rounded-full w-10 h-10 p-0 bg-white"
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev > 1 ? prev - 1 : prev
                  )
                }
              >
                <ArrowLeft size={16} />
              </Button>

              <Button
                variant="accent"
                className="rounded-full w-10 h-10 p-0"
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < Math.ceil(activities.length / 2)
                      ? prev + 1
                      : prev
                  )
                }
              >
                <ArrowRight size={16} />
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;