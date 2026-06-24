import president from '../images/members/President.png';
import vpresident from '../images/members/VicePresident.jpg';
import secratary from '../images/members/Secratary.jpg';
import socialmediahandler from '../images/members/SocialMediaHandler.jpg';
import graphicdesigner from '../images/members/GraphicDesigner.jpg';
import clubcoordinatior from '../images/members/ClubCoordinator.png'
import mentor1 from '../images/members/mentor1.png';
const CE4 = new URL(
  "../images/members/CE4.png",
  import.meta.url
).href;

const CE3 = new URL(
  "../images/members/CE3.jpg",
  import.meta.url
).href;

const CE2 = new URL(
  "../images/members/CE2.jpg",
  import.meta.url
).href;

const CE1 = new URL(
  "../images/members/CE1.png",
  import.meta.url
).href;

const CE11 = new URL(
  "../images/members/CE11.png",
  import.meta.url
).href;

const SE1 = new URL(
  "../images/members/SE1.png",
  import.meta.url
).href;

const SE2 = new URL(
  "../images/members/SE2.png",
  import.meta.url
).href;

const SE3 = new URL(
  "../images/members/SE3.png",
  import.meta.url
).href;



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
  {
    id:6,
    name: "Sharon Gurung",
    role: "Club Coordinator",
    image: clubcoordinatior,
    bgColor: "bg-purple-200",
    bio: "Club mediator and manager",
    category: "board"
  },

  // Mentors
  {
    id: 7,
    name: "Ankita Gurung",
    role: "Club Mentor",
    image: mentor1,
    bgColor: "bg-green-200",
    bio: "Guiding and supporting GirlsTech initiatives",
    category: "mentor"
  },

  // Executive Members (add as many as needed)
  {
    id: 8,
    name: "Kanchan Ghatraj",
    role: "Executive Member",
    image: CE4,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
    {
    id: 9,
    name: "Janvi Pratihast",
    role: "Executive Member",
    image: CE3,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
    {
    id: 10,
    name: "Aishwarya Dahal",
    role: "Executive Member",
    image: SE3,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
    {
    id: 11,
    name: "Sudina Bhandari",
    role: "Executive Member",
    image: SE2,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
    {
    id: 12,
    name: "Kritika Chapagain",
    role: "Executive Member",
    image: CE2,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
  {
    id: 13,
    name: "Santoshi Dhakal",
    role: "Executive Member",
    image: CE1,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
  {
    id: 14,
    name: "Samikshya Subedi",
    role: "Executive Member",
    image: CE11,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
  {
    id: 15,
    name: "Sitishma KC",
    role: "Executive Member",
    image: SE1,
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