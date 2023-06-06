
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Universal,
  Wevise,
  UCF,
  Valet,
  UPTAI,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "docker",//java
    icon: docker,
  },
  {
    name: "git", // C# 
    icon: git,
  },
  {
    name: "MongoDB",// C
    icon: mongodb,
  },
  {
    name: "TypeScript",//python
    icon: typescript,
  },
  {
    name: "Redux Toolkit",//langchain
    icon: redux,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "figma",// angular
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Universal Studios",
    icon: Universal,
    iconBg: "#383E56",
    date: "May 2023 - Aug 2023",
    points: [
      "Collaborated in a cohesive Kanban team to develop, maintain, and support various B2B applications that collectively facilitate over a million ticket sales annually.",
      "Contributed to the successful migration of Universal Orlando's payment system accross all applications to a new platform.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Wevise",
    icon: Wevise,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Sep 2022",
    points: [
      "Played an active role in developing the front-end application for Wevise.org, a pioneering company focused on fostering widespread access to on-demand mentorship in the tech industry.",
      "Worked alongside a highly motivated group of individuals to develop key parts of the front-end using React and Tailwind.",
    ],
  },
  {
    title: "BS in Computer Science",
    company_name: "University of Central Florida",
    icon: UCF,
    iconBg: "#383E56",
    date: "Aug 2021 - Present",
    points: [
      "BS in Computer Science with a 4.0 Major GPA.",
      "Dedicated Member of the Phi Eta Sigma National Honor Society, the nation's oldest and largest honor society dedicated to encouraging academic excellence.",
      "Avid member of KnightHacks programming club at UCF since 2021. Attended weekly meetings and collaborated with a diverse group of members on semester long projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Valet Database",
    description:
      "Developed a simple CRUD application designed to enhance valet systems by securely storing and managing car data entries. Enabled users to effortlessly create, search, edit, and delete essential information such as Car Make, Model, License Plate Number, and parking spot details.",
    tags: [
      {
        name: "ASP.Net",
        color: "blue-text-gradient",
      },
      {
        name: " C#",
        color: "pink-text-gradient",
      },
    ],
    image: Valet,
    source_code_link: "https://github.com/Yuqi2002/Valet_CRUD_app",
  },
  {
    name: "UPT AI",
    description:
      "Created an AI chatbot trained on extensive Universal Studios Orlando documentation for onboarding inquiries. It efficiently provides answers and assists experienced team members in quickly finding specific information from lengthy documents spanning over 1000 pages.",
    tags: [
      {
        name: "Pinecone",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: UPTAI,
    source_code_link: "https://github.com/Yuqi2002/UPT_AI",
  },
  {
    name: "AI Email Assistant",
    description:
      "Utilizing LangChain and OpenAI API, this Streamlit application assists users in composing professional and well-structured emails. This innovative assistant generates email content tailored to the user's preferred tone and dialect, ensuring clarity and conciseness.",
    tags: [
      {
        name: "LangChain",
        color: "blue-text-gradient",
      },
      {
        name: "ChatGPT",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Yuqi2002/Email_Assistant",
  },
];

export { services, technologies, experiences, testimonials, projects };
