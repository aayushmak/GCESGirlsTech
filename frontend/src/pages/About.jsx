import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import img1 from '../assets/images/about/img1.webp';
import img2 from '../assets/images/about/img2.webp';
import img3 from '../assets/images/about/img3.webp';
import img4 from '../assets/images/about/img4.webp';
import img5 from '../assets/images/about/img5.webp';
import img6 from '../assets/images/about/img6.webp';


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-secondary/30 selection:text-secondary font-sans text-dark-text pt-24">
      {/* Fixed Navbar Spacer */}
      <div className="absolute top-0 left-0 w-full bg-white h-24 z-40 flex items-center shadow-sm">
        <Navbar />
      </div>

      <main>
        {/* Section 1: Intro */}
        <section className="py-20 lg:py-28 bg-white relative">
          {/* Decorative Pink Line Curves */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <svg 
              className="absolute w-full h-full text-[#FFCAD4]" 
              viewBox="0 0 1440 800" 
              preserveAspectRatio="xMidYMid slice"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4">
              {/* Top curve passing behind ''Hello! We Are'' */}
              <path d="M-100,50 Q 400,250 900,100 T 1500,200" />
              {/* Bottom curve going down from left and touching pink boundary in center */}
              <path d="M-100,450 Q 200,400 450,800" />
            </svg>
          </div>
          <div className="container mx-auto px-6 md:px-10 max-w-[1200px] relative z-10 pt-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
              {/* Text */}
              <div className="lg:w-1/2 pr-0 lg:pr-10">
                <motion.h1 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-[64px] lg:text-[72px] font-serif text-[#0B1F1E] mb-6 leading-[1.1] font-medium"
                >
                  Hello! We Are <br />
                  <span className="text-secondary italic tracking-tight">GCES GirlsTech</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-gray-700 leading-relaxed font-light max-w-[420px]"
                >
                  GCES Girls Tech is a student-led girls' club at Gandaki College of Engineering and Science (GCES). 
                  Founded in 2018 by the 2018 batch girls, the club was created to encourage, support, and inspire 
                  girls to explore the world of technology with confidence.
                </motion.p>
              </div>

              {/* Images Grid */}
              <div className="lg:w-1/2 w-full max-w-[500px] mx-auto lg:mx-0">
                <div className="flex flex-col items-end gap-3 lg:gap-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-[90%]"
                  >
                  <div className="w-full h-48 lg:h-56 border-2 border-[#0B1F1E] rounded-[2rem] shadow-[8px_8px_0_#0B1F1E] hover:-translate-y-1 hover:shadow-[10px_10px_0_#0B1F1E] transition-all duration-300 overflow-hidden relative">
                    <img src={img1} alt="GCES Girls Tech" className="absolute inset-0 w-full h-full object-cover rounded-[inherit]" />
                  </div>
                  </motion.div>
                  <div className="flex gap-3 lg:gap-4 w-full lg:w-[90%]">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="w-1/2"
                    >
                      <div className="w-full h-36 lg:h-48 border-2 border-[#0B1F1E] rounded-[2rem] shadow-[8px_8px_0_#0B1F1E] hover:-translate-y-1 hover:shadow-[10px_10px_0_#0B1F1E] transition-all duration-300 overflow-hidden relative">
                        <img src={img2} alt="GCES Girls Tech" className="absolute inset-0 w-full h-full object-cover rounded-[inherit]" />
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="w-1/2"
                    >
                      <div className="w-full h-36 lg:h-48 border-2 border-[#0B1F1E] rounded-[2rem] shadow-[8px_8px_0_#0B1F1E] hover:-translate-y-1 hover:shadow-[10px_10px_0_#0B1F1E] transition-all duration-300 overflow-hidden relative">
                        <img src={img3} alt="GCES Girls Tech" className="absolute inset-0 w-full h-full object-cover rounded-[inherit]" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Story */}
        <section className="bg-[#FFCAD4]">
          <div className="container mx-auto px-6 md:px-10 py-16 lg:py-24 max-w-[1200px] relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <div className="lg:w-1/2 w-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full h-56 md:h-72 lg:h-[320px] border-2 border-[#0B1F1E] rounded-[2rem] lg:rounded-[40px] shadow-[8px_8px_0_#0B1F1E] hover:-translate-y-1 hover:shadow-[10px_10px_0_#0B1F1E] transition-all duration-300 overflow-hidden relative">
                    <img src={img6} alt="Our Story" className="absolute inset-0 w-full h-full object-cover rounded-[inherit]" />
                  </div>
                </motion.div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center text-right">
                <motion.h2 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-[64px] lg:text-[72px] font-serif text-[#0B1F1E] mb-8 font-medium"
                >
                  <span className="border-b-[2px] border-secondary inline-block leading-tight">Our <span className="italic">Story</span></span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-gray-800 leading-relaxed font-light ml-auto max-w-[420px]"
                >
                  What started as an initiative by a group of passionate students has grown into a supportive 
                  community for girls in tech at GCES. From the very beginning, GCES Girls Tech has focused 
                  on creating a space where learning feels accessible, collaboration feels natural, and curiosity 
                  is always encouraged.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What We Do */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          {/* Thin Pink Decorative Curves */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
             <svg 
              className="absolute w-full h-full text-[#FFCAD4]" 
              viewBox="0 0 1440 800" 
              preserveAspectRatio="xMidYMid slice"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4"
            >
              {/* Diagonal swoop down across text */}
              <path d="M-100,50 Q 400,200 600,800" />
              {/* Top right arc dip */}
              <path d="M1100,0 Q 1300,200 1500,-50" />
            </svg>
          </div>

          <div className="container mx-auto px-6 md:px-10 max-w-[1200px] relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <div className="lg:w-[45%] text-left">
                <motion.h2 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-[64px] lg:text-[72px] font-serif text-[#0B1F1E] mb-8 font-medium"
                >
                  <span className="border-b-[2px] border-secondary inline-block leading-tight">What <span className="italic">We Do</span></span>
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-gray-700 leading-relaxed font-light space-y-4 max-w-[420px]"
                >
                  <p>We organize a variety of programs aimed at both learning and personal growth, including:</p>
                  <ul className="space-y-3 list-none">
                    <li className="flex items-start gap-3 text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-[8px]"></span>
                      <span className="text-gray-700">Technical workshops and hands-on sessions</span>
                    </li>
                    <li className="flex items-start gap-3 text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-[8px]"></span>
                      <span className="text-gray-700">Talks and interactions with industry professionals</span>
                    </li>
                    <li className="flex items-start gap-3 text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-[8px]"></span>
                      <span className="text-gray-700">Skill-building and career-focused programs</span>
                    </li>
                    <li className="flex items-start gap-3 text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-[8px]"></span>
                      <span className="text-gray-700">Fun, interactive, and confidence-boosting activities</span>
                    </li>
                  </ul>
                  <p className="pt-4">
                    Along with internal events, we also collaborate with companies, organizations, and professionals 
                    to bring meaningful and relevant opportunities to our students.
                  </p>
                </motion.div>
              </div>
              <div className="lg:w-[50%] flex justify-end w-full">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full max-w-[500px]"
                >
                  <div className="w-full h-80 lg:h-[420px] border-2 border-[#0B1F1E] rounded-[2rem] lg:rounded-[40px] shadow-[8px_8px_0_#0B1F1E] hover:-translate-y-1 hover:shadow-[10px_10px_0_#0B1F1E] transition-all duration-300 overflow-hidden relative">
                    <img src={img4} alt="What We Do" className="absolute inset-0 w-full h-full object-cover rounded-[inherit]" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Vision and Mission */}
        <section className="bg-[#FFCAD4] py-20 lg:py-28">
          <div className="container mx-auto px-6 md:px-10 max-w-[1200px] relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <div className="lg:w-1/2 w-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full max-w-[500px]"
                >
                  <div className="w-full h-64 md:h-72 lg:h-[350px] border-2 border-[#0B1F1E] rounded-[2rem] lg:rounded-[40px] shadow-[8px_8px_0_#0B1F1E] hover:-translate-y-1 hover:shadow-[10px_10px_0_#0B1F1E] transition-all duration-300 overflow-hidden relative">
                    <img src={img5} alt="Vision and Mission" className="absolute inset-0 w-full h-full object-cover rounded-[inherit]" />
                  </div>
                </motion.div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center text-right space-y-16 lg:space-y-24 w-full">
                <div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-[64px] lg:text-[72px] font-serif text-[#0B1F1E] mb-6 md:mb-8 font-medium"
                  >
                    <span className="border-b-[2px] border-secondary inline-block leading-tight">Our <span className="italic">Vision</span></span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-base md:text-lg text-gray-800 leading-relaxed font-light ml-auto max-w-[420px]"
                  >
                    We envision a future where more girls feel confident pursuing careers in technology, 
                    innovation, and leadership — breaking barriers and shaping the tech world together.
                  </motion.p>
                </div>

                <div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-[64px] lg:text-[72px] font-serif text-[#0B1F1E] mb-6 md:mb-8 font-medium"
                  >
                    <span className="border-b-[2px] border-secondary inline-block leading-tight">Our <span className="italic">Mission</span></span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-base md:text-lg text-gray-800 leading-relaxed font-light ml-auto max-w-[420px]"
                  >
                    To empower girls at GCES to explore technology, build skills, and grow as confident 
                    leaders, while fostering an inclusive and supportive community.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Why GCES Girls Tech? */}
        <section className="py-32 bg-white text-center">
          <div className="container mx-auto px-6 md:px-10 max-w-[1200px]">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-[64px] lg:text-[80px] font-serif text-[#0B1F1E] mb-6 md:mb-10 font-medium"
            >
              Why <span className="text-secondary italic">GCESGirls</span> Tech?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto mb-16 md:mb-24"
            >
              We believe that representation matters, encouragement matters, and access matters. 
              GCES Girls Tech exists to make sure girls feel supported, inspired, and capable of 
              thriving in tech — academically, professionally, and personally.
            </motion.p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-[1000px] mx-auto">
              {[
                { number: "20+", label: "workshop" },
                { number: "200+", label: "student" },
                { number: "8+", label: "collaboration" },
                { number: "20+", label: "members" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex flex-col items-center justify-center p-2 gap-3"
                >
                  <h3 className="text-6xl md:text-7xl lg:text-[80px] font-serif font-medium text-[#0B1F1E] tracking-tight">{stat.number}</h3>
                  <p className="text-base md:text-lg text-gray-500 font-normal lowercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
