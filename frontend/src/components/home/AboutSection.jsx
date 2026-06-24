import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/images/home/img1.webp";
import img2 from "../../assets/images/home/img2.webp";
import img3 from "../../assets/images/home/img3.webp";
import img4 from "../../assets/images/home/img4.webp";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-4">

        {/* Left Image */}
        <div className="w-full lg:w-[26%] flex justify-start items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden w-10/12 lg:w-full h-64 lg:h-80 ml-6 lg:ml-0 rounded-r-[2rem] md:rounded-[2.5rem] lg:rounded-l-none lg:rounded-r-[3rem] shadow-md group"
          >
            <img
              src={img1}
              alt="Vision and Mission"
              className="w-full h-full object-cover rounded-[inherit] transition-all duration-700 ease-out group-hover:scale-110"
            />
          </motion.div>
        </div>

        {/* Text + Center Image */}
        <div className="w-full lg:w-[28%] flex flex-col justify-center px-10 lg:px-4 shrink-0">

          <div className="mb-10 lg:mb-16">

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl lg:text-5xl font-serif text-dark-text mb-4 leading-tight font-light"
            >
              We are <br />
              <span className="text-secondary italic font-semibold">
                GCES
              </span>
              <br />
              <span className="text-secondary italic font-semibold">
                Girl Tech
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium max-w-[280px]"
            >
              We are the Girls Tech Club of Gandaki College of
              Engineering and Science, inspiring girls to explore and
              grow in technology.
            </motion.p>

          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden w-[90%] sm:w-64 h-48 lg:h-56 rounded-[2.5rem] shadow-md group"
          >
            <img
              src={img2}
              alt="Vision and Mission"
              className="w-full h-full object-cover rounded-[inherit] transition-all duration-700 ease-out group-hover:scale-110"
            />
          </motion.div>

        </div>

        {/* Right Images */}
        <div className="w-full lg:w-[42%] flex gap-4 lg:gap-8 pr-6 lg:pr-0">

          {/* Middle Right */}
          <div className="w-1/2 flex items-start justify-end pt-12 lg:pt-28">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative overflow-hidden w-full max-w-[240px] h-48 lg:h-64 rounded-[2rem] lg:rounded-[2.5rem] shadow-md group"
            >
              <img
                src={img3}
                alt="Vision and Mission"
                className="w-full h-full object-cover rounded-[inherit] transition-all duration-700 ease-out group-hover:scale-110"
              />
            </motion.div>
          </div>

          {/* Right Tall */}
          <div className="w-1/2 flex items-start justify-end">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative overflow-hidden w-full max-w-[260px] h-80 lg:h-[30rem] rounded-l-[2rem] md:rounded-[2.5rem] lg:rounded-r-none lg:rounded-l-[3rem] shadow-md group"
            >
              <img
                src={img4}
                alt="Vision and Mission"
                className="w-full h-full object-cover rounded-[inherit] transition-all duration-700 ease-out group-hover:scale-110"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;