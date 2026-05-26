import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import gcesBg from '../../assets/images/gces_1.png'; 

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-primary pt-32 pb-6 text-white overflow-hidden text-center mt-auto">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 border-t border-white/10">
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
        <img
          src={gcesBg}
          alt="GCES background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-serif mb-8"
        >
          <span className="italic">Contact</span> Us.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '200px' }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="h-[1px] bg-white/30 mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 mb-24 cursor-pointer text-white/80 hover:text-white"
        >
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/gces-girls-tech/" },
            { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576765126870" },
            { Icon: Instagram, href: "https://www.instagram.com/gcesgirlstech/" },
            { Icon: Mail, href: "mailto:gcesgirlstech@gces.edu.np" }
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md flex items-center justify-center hover:scale-110 transition-transform">
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-white/40 text-[10px] uppercase tracking-widest mt-auto w-full text-center"
        >
          © {new Date().getFullYear()} GCES Girls Tech. All rights reserved. Designed by Girls Tech Students.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
