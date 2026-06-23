import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ActivityCard = ({
  id,
  image,
  title,
  shortDescription,
  date,
  location,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Link to={`/activities/${id}`}>
        <motion.div 
          className="border border-primary rounded-[30px] p-5 m-8 hover:shadow-lg transition-all cursor-pointer"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.img
              src={image}
              className="w-full lg:w-[350px] h-[250px] rounded-3xl object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <motion.h2 
                className="font-serif text-3xl lg:text-5xl text-primary"
                whileHover={{ color: "#E83F6F" }}
              >
                {title}
              </motion.h2>

              <motion.p 
                className="mt-5 text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                {shortDescription}
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-8 mt-6 text-secondary"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="flex gap-2 items-center"
                  whileHover={{ x: 5 }}
                >
                  <Calendar size={18} />
                  {date}
                </motion.div>

                <motion.div 
                  className="flex gap-2 items-center"
                  whileHover={{ x: 5 }}
                >
                  <MapPin size={18} />
                  {location}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ActivityCard;