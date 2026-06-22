import president from '../images/board/President.png';
import vpresident from '../images/board/VicePresident.jpg';
import secratary from '../images/board/Secratary.jpg';
import socialmediahandler from '../images/board/SocialMediaHandler.jpg';
import graphicdesigner from '../images/board/GraphicDesigner.jpg';
import mentor1 from '../images/board/mentor1.png';

export const team = [
  // Board Members
  {
    id: 1,
    name: "Aayushma Kafle",
    role: "President",
    image: president,
    bgColor: "bg-yellow-300",
    bio: "Passionate about tech and community building",
    category: "board"
  },
  {
    id: 2,
    name: "Archana Bhattarai",
    role: "Vice-President",
    image: vpresident,
    bgColor: "bg-blue-300",
    bio: "Tech enthusiast and event organizer",
    category: "board"
  },
  {
    id: 3,
    name: "Samrachana Baral",
    role: "Secretary",
    image: secratary,
    bgColor: "bg-gray-700",
    bio: "Detail-oriented and organized",
    category: "board"
  },
  {
    id: 4,
    name: "Jasmine Timilsina",
    role: "Graphic Designer",
    image: graphicdesigner,
    bgColor: "bg-orange-200",
    bio: "Creative designer bringing ideas to life",
    category: "board"
  },
  {
    id: 5,
    name: "Samika Khadka",
    role: "Social Media Manager",
    image: socialmediahandler,
    bgColor: "bg-purple-200",
    bio: "Social media expert and content creator",
    category: "board"
  },

  // Mentors
  {
    id: 6,
    name: "Mentor Name",
    role: "Club Mentor",
    image: mentor1,
    bgColor: "bg-green-200",
    bio: "Guiding and supporting GirlsTech initiatives",
    category: "mentor"
  },

  // Executive Members (add as many as needed)
  {
    id: 7,
    name: "Executive Member 1",
    role: "Event Coordinator",
    image: mentor1,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  }
];

// Utility Functions
export const getTeamMemberById = (id) =>
  team.find(member => member.id === id);

export const getTeamMembersByRole = (role) =>
  team.filter(member => member.role === role);

export const getTeamMembersByCategory = (category) =>
  team.filter(member => member.category === category);