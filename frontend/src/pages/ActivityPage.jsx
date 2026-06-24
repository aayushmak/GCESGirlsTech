import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { activities } from "../assets/data/activity";
import { Calendar, X } from "lucide-react";
import { motion } from "framer-motion";
import useGallery from "../hooks/useGallery";

const ActivityPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const activity = activities.find((item) => item.id === Number(id));

  // Prevent crash if activity not found
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

  const galleryImages = useGallery(activity.galleryFolder);

  return (
    <div className="bg-white min-h-screen pt-10">
      <motion.div
        className="
        max-w-7xl
        mx-auto
        bg-[#F8F8F8]
        rounded-[40px]
        p-6
        lg:p-10
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Close Button */}

        <div className="flex justify-end me-4">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{
              rotate: 90,
              scale: 1.1,
            }}
            className="
            text-primary
            hover:text-secondary
            cursor-pointer
            "
          >
            <X size={35} />
          </motion.button>
        </div>

        {/* Title */}

        <motion.h1
          className="
          font-serif
          text-4xl
          lg:text-7xl
          leading-tight
          text-primary
          max-w-4xl
          "
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
        >
          {activity.title}
        </motion.h1>

        {/* Date */}

        <motion.div
          className="
          flex
          items-center
          gap-2
          mt-6
          text-gray-500
          "
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <Calendar size={18} />
          {activity.date}
        </motion.div>

        {/* Description Section */}

        <motion.div
          className="
          grid
          lg:grid-cols-2
          gap-10
          mt-12
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          <motion.img
            src={activity.image}
            alt={activity.title}
            className="
            rounded-[30px]
            w-full
            h-[350px]
            object-cover
            "
            whileHover={{
              scale: 1.02,
            }}
          />

          <div
            className="
            text-lg
            leading-relaxed
            whitespace-pre-line
            text-gray-700
            "
          >
            {activity.description}
          </div>
        </motion.div>

        {/* Gallery */}

        <motion.div
          className="mt-28"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2
            className="
            text-center
            font-serif
            text-5xl
            text-secondary
            mb-12
            "
          >
            Gallery
          </h2>

          <div
            className="
            flex
            gap-6
            overflow-x-auto
            pb-6
            scroll-smooth
            scrollbar-hide
            "
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="
                min-w-[280px]
                md:min-w-[320px]
                h-[280px]
                shrink-0
                rounded-[20px]
                overflow-hidden
                "
                whileHover={{
                  scale: 1.03,
                }}
              >
                <img
                  src={image}
                  alt={`gallery-${index}`}
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default ActivityPage;
