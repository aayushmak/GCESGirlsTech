import TeamMemberCard from "./TeamMemberCard";
import {motion} from 'framer-motion'

 const TeamSection = ({ title, members }) => (
  <>
    <motion.h3
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-[48px] lg:text-[64px] font-serif text-[#0B1F1E] text-center p-10"
    >
      The <span className="text-secondary italic">{title}</span>
    </motion.h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-[1400px] mb-16">
      {members.map((member, index) => (
        <TeamMemberCard
          key={member.name}
          name={member.name}
          role={member.role}
          image={member.image}
          bgColor={member.bgColor}
          delay={0.1 * index}
        />
      ))}
    </div>
  </>
);

export default TeamSection;