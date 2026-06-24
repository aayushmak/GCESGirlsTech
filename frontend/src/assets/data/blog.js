const blog1 = new URL(
  "../images/blog/blog1.webp",
  import.meta.url
).href;

const blog2 = new URL(
  "../images/blog/blog2.webp",
  import.meta.url
).href;

const blog3 = new URL(
  "../images/blog/blog3.webp",
  import.meta.url
).href;

const blog4 = new URL(
  "../images/blog/blog4.webp",
  import.meta.url
).href;

export const blogs = [
  {
    id: 1,
    image: blog1,
    category: "Society",
    title: "Why Labor Is Cheap in Nepal, And What Happens If That Changes",
    semester: "8th",
    time: "Morning",
    author: "Aayushma Kafle",
    date: "25th Mar 2026",
    readTime: "2 min read",

    description:
      "Why labor in Nepal remains affordable, how society values work, and what could happen if that balance changes.",

    quote:
      "The issue isn’t the work itself. It’s how the work is valued.",

    content: [
      "In many Nepali households, hiring people for cleaning, cooking, and daily chores is common even among middle-class families.",
      
      "Unlike developed countries where such services are considered expensive, Nepal relies heavily on affordable labor.",

      "Labor-intensive jobs are often underpaid and socially undervalued, creating a cycle where low wages and low status reinforce each other.",

      "If labor suddenly became expensive, people would become more self-dependent and demand for workers could decrease.",

      "True equality does not mean all jobs pay the same. It means fair wages, respect, better conditions, and opportunities for growth.",
    ],
  },

  {
    id: 2,
    image: blog2,
    category: "Politics",
    title: "The Election Is Not About a New Party, It Is About Rejecting the Old One",
    semester: "8th",
    time: "Afternoon",
    author: "Aayushma Kafle",
    date: "7th Mar 2026",
    readTime: "3 min read",

    description:
      "A reflection on Nepal's changing political landscape and why many voters are rejecting the traditional system.",

    quote:
      "This election was never just about choosing a party. It was about demanding accountability.",

    content: [
      "Many people see support for newer political parties as blind trust, but the movement reflects deeper frustration.",

      "The Bhadra 23–24 Gen-Z protests became a turning point in Nepal’s political discussion.",

      "Citizens questioned why many leaders remained silent during critical moments and only spoke loudly during election campaigns.",

      "The rise of newer parties represents more than support for change; it is also a rejection of long-standing dissatisfaction.",

      "Voters today are evaluating credibility, actions, and accountability rather than simply party names.",
    ],
  },

  {
    id: 3,
    image: blog3,
    category: "Career",
    title: "The Harsh Reality of Unpaid Internships",
    semester: "8th",
    time: "Evening",
    author: "Aayushma Kafle",
    date: "23rd Sep 2025",
    readTime: "2 min read",

    description:
      "Exploring the growing culture of unpaid internships and whether learning opportunities are becoming exploitation.",

    quote:
      "Students deserve opportunities that help them grow, not ones that exploit them.",

    content: [
      "Internships are meant to help students gain practical experience and prepare for careers.",

      "However, many internships now demand full-time work without providing any financial compensation.",

      "Students often balance academics, transportation costs, and office responsibilities with no support.",

      "While some organizations provide mentorship and fair stipends, unpaid labor is becoming increasingly normalized.",

      "The question remains: are internships helping future professionals or simply creating a cycle of exploitation?",
    ],
  },

  {
    id: 4,
    image: blog4,
    category: "Technology",
    title: "Nepal’s Social Media Ban: Questions That Cannot Be Ignored",
    semester: "8th",
    time: "Morning",
    author: "Aayushma Kafle",
    date: "23rd Sep 2025",
    readTime: "2 min read",

    description:
      "Looking at the impact of Nepal’s social media ban on students, businesses, and digital workers.",

    quote:
      "Citizens do not abandon their homeland because of social media; they leave when opportunities disappear.",

    content: [
      "The nationwide social media ban raised concerns beyond regulation itself.",

      "Students rely on platforms like YouTube for educational content and technical learning.",

      "Thousands of small businesses use social media as an affordable marketing platform.",

      "Digital creators, freelancers, and online workers may lose important sources of income.",

      "Questions remain about alternatives, opportunities, and the future of Nepal’s youth.",
    ],
  },
];