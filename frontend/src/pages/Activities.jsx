import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ActivityCard from "../components/ui/ActivityCard";
import Pagination from "../components/ui/Pagination";
import usePagination from "../hooks/usePagination";
import { activities } from "../assets/data/activity";
import { motion } from "framer-motion";

const Activities = () => {
  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination(activities, 3);

  return (
    <div className="bg-white min-h-screen pt-24 ">
      {/* Fixed Navbar Spacer */}
      <div className="absolute top-0 left-0 w-full bg-white h-24 z-40 flex items-center shadow-sm">
        <Navbar />
      </div>

      <motion.div 
        className="text-center mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.h1 
          className="font-serif text-5xl lg:text-7xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our
          <span className="italic text-secondary"> Activities</span>
        </motion.h1>

        <motion.p 
          className="text-gray-500 mt-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          From workshops to events...
        </motion.p>
      </motion.div>

      <motion.div 
        className="mx-6 lg:mx-16 mt-16 space-y-10 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {currentItems.map((activity, index) => (
          <ActivityCard 
            key={activity.id} 
            {...activity}
            delay={0.1 * index}
          />
        ))}

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
      </motion.div>

      <Footer />
    </div>
  );
};

export default Activities;