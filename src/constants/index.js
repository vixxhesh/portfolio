import {
  mobile,
  saliency,
  backend,
  ca,
  gcse,
  creator,
  web,
  ufs,
  javascript,
  mysql,
  tensorflow,
  flutter,
  colorflip,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  cpp,
  figma,
  docker,
  raystatic,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
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
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Development",
    icon: web,
  },
  {
    title: "CRM tools",
    icon: mobile,
  },
  {
    title: "API integration",
    icon: backend,
  },
  {
    title: "Problem solving & Automation",
    icon: creator,
  },
];

const technologies = [
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
    name: "C++",
    icon: cpp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "Mysql",
    icon: mysql,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Unified Consultancy Services",
    icon: ufs,
    iconBg: "#383E56",
    date: "September 2024 - Current",
    points: [
      "Collaborating with the team on developing an internal CRM tool using Typescript/Node.js for the server side, MongoDB for the backend to implement RBAC, project management dashboard, payroll management system, team and admin assignments, and panel to track session and audit logs, and EJS for the front end.",
      "Integrated customer relation chatbot, JD generator, and vision systems based on business and organizational requirements using OpenAI GPT-3.5 model API to the CRM application, which increased customer management efficiency by 70% in customer and hr management. ",
    ],
  },
  {
    title: "Web Scraper and Tester intern",
    company_name: "Global Council of Science & Environment",
    icon: gcse,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Nov 2022",
    points: [
      "Developed and implemented automated test case software for extracting and analyzing university course data to check the readiness of curriculum in a 3-person team.",
      "Analyzed over 500 test cases for debugging Python scripts & utilized Beautiful Soup library for web crawling.",
      "Learned about HTML content of a webpage and reduced the number of requests sent each time to collect data, hence, improved the model by 20%.",
      "Successfully exported data from a JSON file to an Excel spreadsheet, by defining JSON as an object and making a GET request JSON API to automate the process.",
    ],
  },
];

const projects = [
  {
    name: "Saliency Object Detection",
    description:
      "Developed a Python-based deep learning model for detecting salient objects in foggy images using localization, mapping, and edge detection techniques like Canny. Explored edge detection architectures and implemented solutions applicable to self-driving cars, manually curating unstructured datasets from various sources.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "cv2",
        color: "pink-text-gradient",
      },
    ],
    image: saliency,
    source_code_link:
      "https://github.com/vixxhesh/Identifying-Saliency-in-Image-using-Edge-Detection",
  },
  {
    name: "Tax Personnel",
    description:
      "Developed a Django-based landing website with admin authentication, allowing efficient blog management. Integrated with SQLite to improve content management efficiency by 80%. Deployed on AWS Lightsail using Nginx and Gunicorn, ensuring a fast 1.1s page load time.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: ca,
    source_code_link: "https://github.com/vixxhesh/binodverma-co",
  },
  {
    name: "Tech Harvest",
    description:
      "Revolutionizing food storage with IoT-enabled smart containers. Using C++, PHP, MySQL, and ESP8266, I led a team to design a system that reduced spoilage by 35% and ensured 95% uptime for real-time monitoring. Streamlined project delivery by 25% while boosting team productivity by 40%.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "c++",
        color: "pink-text-gradient",
      },
      {
        name: "ESP8266",
        color: "blue-text-gradient",
      },
    ],
    image: colorflip,
    source_code_link: "https://github.com/vixxhesh/ColorFlipper",
  },
];

export { services, technologies, experiences, projects };
