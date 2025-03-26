import project1 from "../assets/projects/forkifyproject.png";
import project2 from "../assets/projects/fablabproject.png";
import project3 from "../assets/projects/filmoraproject.png";
import project4 from "../assets/projects/speedtestproject.png";

export const HERO_CONTENT = `
I'm Saif Abdelrazek, a Highschooler, a frontend developer, instructor, and problem-solver passionate about web development, STEM education, and tackling real-world challenges. From leading teams to innovating for a better world, I turn ideas into impactful digital experiences.`;

export const ABOUT_TEXT = `I’m a frontend developer, STEM educator, and active volunteer dedicated to making a difference through technology, education, and community service. As the Software Instructor at Gharbiya Fablab, I lead a team in designing intuitive web interfaces while also contributing to hands-on engineering projects.

Beyond coding, I’m a Physics, Math, and Geology instructor, helping students grasp complex scientific concepts. My passion for giving back led me to become a dedicated volunteer at Resala STEM, where I was recognized as the top contributor in Gharbiya Governorate and awarded a silver medal for being among the top 2% of volunteers in Season 2024. Through Resala STEM and the "Keep It Green" initiative, I’ve worked on environmental awareness campaigns, tree-planting efforts, and educating the public on pollution and sustainability.

From competing in Intel ISEF and NASA Space Apps to working on real-world solutions for air filtration, plastic waste, and energy generation, my mission is to build, teach, and give back. I believe that technology and education go hand in hand in shaping a better future—and I’m always excited to take on new challenges that make an impact.`;
export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Software Instructor & Web Developer",
    company: "Gharbiya FabLab Team",
    description: `As a Software Instructor and Web Developer in the Gharbiya Fablab Team, I develop and maintain the team’s website while providing software training for operating fabrication machines like laser cutters, 3D printers, and vinyl cutters. I assist team members with software-related challenges, ensuring efficient use of digital fabrication tools. Additionally, I create technical documentation to streamline learning and improve workflow, bridging the gap between software development and hardware prototyping in an innovative makerspace environment.`,
    technologies: [
      "Javascript",
      "HTML5",
      "CSS3",
      "Coral Draw",
      "Cut Studio",
      "Ultmaker Cura",
    ],
  },
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "HackClub",
    description: `As a frontend developer at Hack Club, I contribute to building engaging and user-friendly web experiences for the Hack Club community. I collaborate with developers and designers to create interactive projects, optimize UI/UX, and bring ideas to life using JavaScript, React.js, and Tailwind CSS. Through Hack Club, I engage with a global network of makers and innovators, continuously learning and pushing the boundaries of open-source development and creative coding.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Git",
    ],
  },
  {
    year: "2024 - Present",
    role: "Academic Instructor",
    company: "Gharbiya Physics Club",
    description: `As a Physics Instructor at STEM Gharbia Physics Club, I teach and mentor students in fundamental and advanced physics concepts, helping them develop a deeper understanding of the subject. I design engaging lessons, problem-solving sessions, and hands-on experiments to make learning interactive and practical. My role involves breaking down complex physics theories, guiding students in applying concepts to real-world problems, and preparing them for competitions and academic excellence.`,
    technologies: [],
  },
  {
    year: "2024 - Present",
    role: "Academic Instructor",
    company: "Gharbiya Mathmatics Club",
    description: `As a Mathematics Instructor at STEM Gharbia Mathematics Club, I help students develop a strong foundation in mathematical concepts, problem-solving techniques, and logical reasoning. I design and lead sessions that cover both fundamental and advanced topics, focusing on critical thinking, competition preparation, and real-world applications of mathematics. My goal is to make math engaging, intuitive, and applicable beyond textbooks.`,
    technologies: [],
  },
  {
    year: "2024 - Present",
    role: "Academic Instructor",
    company: "Ghabiya Geology Club",
    description: `As a Geology Instructor at Gharbia Geology Club, I introduce students to the fascinating world of earth sciences, rocks, minerals, and geological processes. I design interactive lessons and discussions on topics like plate tectonics, natural disasters, and environmental geology, emphasizing their real-world significance. Through my teaching, I aim to inspire curiosity about earth’s history, sustainability, and the role of geology in solving global challenges.`,
    technologies: [],
  },
  {
    year: "2023 - Present",
    role: "Volunteer",
    company: "Resala STEM",
    description: `As a Resala STEM volunteer, I contribute to educational, environmental, and social initiatives, including donation campaigns, STEM outreach, and community support. Recognized as the top contributor in Gharbiya (Season 2024) and awarded a silver medal (top 2% of volunteers), I actively work to empower others through knowledge and service.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Forkify",
    image: project1,
    description:
      "A modern web app for searching, viewing, and saving recipes. Features API-powered search, detailed recipe views, bookmarks, and custom recipe uploads with a responsive and interactive UI. Built with JavaScript, HTML5, CSS3. ",
    technologies: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/SaifAbdelrazek011/forkify",
    demo: "https://forkify.saifabdelrazek.com",
  },
  {
    title: "Gharbiya FabLab Team",
    image: project2,
    description:
      "A modern and interactive website showcasing the Gharbiya Fablab Team, their projects, and the machines they operate. Features a dynamic UI, responsive design, project highlights, and comprehensive documentation for easy reference and future expansion. Built with HTML, CSS, JavaScript, and Markdown for documentation. ",
    technologies: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/SaifAbdelrazek011/fablab",
    demo: "https://fablabgharbia.netlify.app",
  },
  {
    title: "Filmora App",
    image: project3,
    description:
      "A web-based platform for browsing and discovering movies. Features trending movie suggestions, a modern UI, full responsiveness, and seamless browsing. Built with React.js, Appwrite, and Tailwind CSS. ",
    technologies: ["HTML", "CSS", "React", "AppWrite"],
    repo: "https://github.com/SaifAbdelrazek011/filmora-app",
    demo: "https://filmora-app.saifabdelrazek.com",
  },
  {
    title: "SpeedTest",
    image: project4,
    description:
      "A unique speed test game that evaluates typing ability based on adaptive difficulty rather than WPM. Features real-time word matching, multiple difficulty levels, theme switching, and anti-cheat mechanisms. Built with TypeScript, LocalStorage, and CSS Variables.",
    technologies: ["HTML", "CSS", "TypeScript"],
    repo: "https://github.com/SaifAbdelrazek011/SpeedTest",
    demo: "https://saifabdelrazek011.github.io/SpeedTest/",
  },
];

export const CONTACT = {
  address: "Stadium, Second Tanta, Gharbia Governorate",
  phoneNo: "+201507977286",
  email: "saif@saifabdelrazek.com",
};
