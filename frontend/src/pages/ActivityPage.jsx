import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { activities } from "../assets/data/activity";
import { Calendar, X } from "lucide-react";
import { motion } from "framer-motion";

const ActivityPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const activity = activities.find((item) => item.id === Number(id));

  if (!activity) {
    return (
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-20 text-2xl"
      >
        Activity not found
      </motion.h1>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-10">
      <motion.div 
        className="max-w-7xl mx-auto bg-[#F8F8F8] rounded-[40px] p-6 lg:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="flex justify-end me-8"
          whileHover={{ scale: 1.05 }}
        >
          <motion.button 
            onClick={() => navigate(-1)} 
            className="text-primary hover:text-secondary transition-colors cursor-pointer"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <X size={35} />
          </motion.button>
        </motion.div>

        <motion.h1 
          className="font-serif text-4xl lg:text-7xl leading-tight text-primary max-w-3xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {activity.title}
        </motion.h1>

        <motion.div 
          className="flex items-center gap-2 mt-6 text-gray-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Calendar size={18} />
          {activity.date}
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-10 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.img
            src={activity.image}
            className="rounded-[30px] w-full h-[350px] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div 
            className="text-lg leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {activity.description}
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.h2 
            className="text-center font-serif text-5xl text-secondary mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Gallery
          </motion.h2>

          <motion.div
            className="flex gap-8 overflow-x-auto p-4 scroll-smooth"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {activity.gallery.map((img, index) => (
              <motion.div
                key={index}
                className="min-w-[280px] h-[280px] shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.0001 }}
              >
                <motion.img
                  src={img}
                  className="w-full h-full object-cover rounded-[20px]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
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

export default ActivityPage;