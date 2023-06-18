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
      title: "FullStack Web Dev",
      icon: web,
    },
    {
      title: "Mobile Application Dev",
      icon: mobile,
    },
    {
      title: "C++ Programming",
      icon: backend,
    },
    {
      title: "AI/ML & Neural Nets",
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
      title: "Mobile application developer intern",
      company_name: "Unified Consultancy Services",
      icon: ufs,
      iconBg: "#383E56",
      date: "May 2023 - June 2023",
      points: [
        "Learn about react native and its technologies.",
        "Create the software requirements specification document. ",
        "Research and choose an appropriate AI breed detection API, then integrate it into the app.",
        "Test and refine the feature to ensure accurate and reliable results.",
      ],
    },
    {
      title: "Front-end Development",
      company_name: "Raystatic",
      icon: raystatic,
      iconBg: "#383E56",
      date: "May 2022 - December 2022",
      points: [
        "Collaborated with designers to translate their ideas into user-friendly, responsive interfaces.",
        "Utilized Git and GitHub for version control, ensuring seamless collaboration and code management",
        "Implemented design features using CSS frameworks such as TailwindCSS and Bootstrap",
        "Developed a React-based interactive gallery carousel, resulting in a 75% increase in product engagement time.",
        "Worked with team members to ensure efficient cross-functional collaboration and project delivery."
      ],
    },
    {
      title: "Web Scraper and Tester",
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
        "Salient Object Detection (SOD) separates the dominant/prominent item (first item visible to the human eye) from the background. This property automatically recognises and segregates major visual regions.",
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
      source_code_link: "https://github.com/vixxhesh/Identifying-Saliency-in-Image-using-Edge-Detection",
    },
    {
      name: "Tax Personnel",
      description:
        "The application aims to connect users with chartered accountants for financial, accounting, GST, consultation. Users can submit their queries through the app, and the admin can review, confirm appointments, and schedule meetings with the CAs.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: ca,
      source_code_link: "https://github.com/vixxhesh/binodverma-co",
    },
    {
      name: "4-Paws Pet",
      description:
        "4-Paws near me is a mobile application developed using React Native for pet adoption, specifically designed for cats and dogs. The app provides an AI breed detector feature and locates pets in the nearby area.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: colorflip,
      source_code_link: "https://github.com/vixxhesh/ColorFlipper",
    },
  ];
  
  export { services, technologies, experiences, projects };