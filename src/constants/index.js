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
  sn,
  Wevise,
  UCF,
  Valet,
  SNOW,
  ReflectionBuddy,
  UCF_Attendance,
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
    name: "docker", //java
    icon: docker,
  },
  {
    name: "git", // C#
    icon: git,
  },
  {
    name: "MongoDB", // C
    icon: mongodb,
  },
  {
    name: "TypeScript", //python
    icon: typescript,
  },
  {
    name: "Redux Toolkit", //langchain
    icon: redux,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "figma", // angular
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
    title: "Associate Software Engineering Intern",
    company_name: "ServiceNow - Santa Clara, CA",
    icon: sn,
    iconBg: "#042d43",
    date: "May 2024 - Aug 2024",
    points: [
      "Developed a full-stack onboarding application using JavaScript, React, and ServiceNow tools, successfully deployed to production across multiple organizations; saving each organization an average of 25,000 hours and $2 million annually.",
      "Collaborated across multiple teams to engineer REST APIs integrating NowLearning’s data with the onboarding application, enhancing data utility and accessibility; this teamwork and technical achievement supported ServiceNow’s 23% YOY growth in subscription revenues, contributing to $2,542 million earned in Q2 2024.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Universal Studios - Orlando, FL",
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
    company_name: "Wevise - Remote",
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
    company_name: "University of Central Florida - Orlando, FL",
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
    name: "UCF Attendance",
    description:
      "Developed and maintained a streamlined attendance tracking application that improved accuracy and efficiency through QR code scanning, facial recognition, and location tracking. Collaborated within an AGILE team and worked with UCF professors to address key pain points in the current system, delivering user-centered solutions for over 68,000 students.",
    tags: [
      {
        name: "DJango",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
    ],
    image: UCF_Attendance,
    image_link: "https://devpost.com/software/ucf-attendence",
    source_code_link: "https://github.com/xhoantran/ucf-attendance",
  },
  {
    name: "ServiceNow AI Assistant",
    description:
      "Awarded first place in the 2023 ServiceNow Hackathon by developing an AI-driven chatbot using Langchain and Pinecone. The chatbot excels at semantic searches within a company's incident management database, efficiently identifying past resolved issues and providing users with relevant incident details and solutions. Presented this solution to executive and AI senior management, and actively collaborated with the AI team to facilitate the implementation and scalability of the solution.",
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
    image_link: "",
    source_code_link:
      "https://github.com/Yuqi2002/ServiceNow_Incident_Assistant",
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
    image_link: "",
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
    image_link: "",
    source_code_link: "https://github.com/Yuqi2002/Valet_CRUD_app",
  },
];

export { technologies, experiences, projects };
