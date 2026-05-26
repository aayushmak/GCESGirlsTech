import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import BlogSection from '../components/home/BlogSection';
import BoardMembers from '../components/home/BoardMembers';
import ActivitiesSection from '../components/home/ActivitiesSection';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-off-white selection:bg-secondary/30 selection:text-secondary">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <BlogSection />
        <BoardMembers />
        <ActivitiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
