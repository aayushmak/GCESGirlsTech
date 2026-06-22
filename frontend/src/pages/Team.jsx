import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TeamMemberCard from "../components/ui/TeamMemberCard";
import { motion } from "framer-motion";
import { team } from "../assets/data/team";
import TeamSection from "../components/ui/TeamSection";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const boardMembers = team.filter((member) => member.category === "board");

  const mentors = team.filter((member) => member.category === "mentor");

  const executiveMembers = team.filter(
    (member) => member.category === "executive",
  );

  return (
    <div className="min-h-screen bg-white selection:bg-secondary/30 selection:text-secondary font-sans text-dark-text pt-24">
      {/* Fixed Navbar Spacer */}
      <div className="absolute top-0 left-0 w-full bg-white h-24 z-40 flex items-center shadow-sm">
        <Navbar />
      </div>

      <main>
        {/* Team Section */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          {/* Decorative Pink Curves */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <svg
              className="absolute w-full h-full text-[#FFCAD4]"
              viewBox="0 0 1440 800"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              {/* Top left curve */}
              <path d="M-200,100 Q 300,300 600,150" />
              {/* Bottom right curve */}
              <path d="M1000,700 Q 1200,500 1600,600" />
            </svg>
          </div>

          <div className="container mx-auto px-6 md:px-10 max-w-[1200px] relative z-10">
            {/* Header */}
            <div className="text-center mb-16 md:mb-20">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-[64px] lg:text-[72px] font-serif text-[#0B1F1E] mb-6 font-medium"
              >
                Our <span className="text-secondary italic">GirlsTech</span>{" "}
                Members
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm md:text-base text-gray-600 leading-relaxed font-light max-w-2xl mx-auto"
              >
                Our community is led by dedicated board and executive members
                from every faculty and semester — but remember, every girl in
                our college is a valued part of this club!
              </motion.p>
            </div>

            <TeamSection title="Board" members={boardMembers} />

            <TeamSection title="Mentors" members={mentors} />

            <TeamSection title="Executive Members" members={executiveMembers} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
