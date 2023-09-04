
import {
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
  SNOW,
  ReflectionBuddy,
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
    title: "Front-end Developer",
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


const projects = [
  {
    name: "ServiceNow AI Assistant",
    description:
      "Secured first place in the 2023 ServiceNow Hackathon by developing an AI-driven chatbot using Langchain and Pinecone. The chatbot excels at semantic searches within a company's incident management database, efficiently identifying past resolved issues and providing users with relevant incident details and solutions. Presented this solution to executive and AI senior management, and actively collaborated with the AI team to facilitate the implementation and scalability of the solution.",
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
    image: SNOW,
    source_code_link: "https://github.com/Yuqi2002/ServiceNow_Incident_Assistant",
  },
  {
    name: "Reflection Buddy",
    description:
      "Participated in the 2023 Pinecone Hackathon and collaborated in an enthusiastic and driven team to develop an AI chatbot utilizing Whisper AI, LangChain, and Pinecone. This chatbot serves as a personalized therapist, guiding users towards solutions through thoughtful follow-up questions rather than providing direct answers.",
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
    image: ReflectionBuddy,
    source_code_link: "https://github.com/DamDam98/ReflectionBuddy",
  },
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
];

export {technologies, experiences, projects};
