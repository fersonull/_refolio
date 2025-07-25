import {
  RiJavascriptFill,
  RiPhpFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiBootstrapFill,
  RiNextjsFill,
  RiFirebaseFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiGithubFill,
} from "react-icons/ri";
import {
  SiLaravel,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiLivewire,
} from "react-icons/si";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export const aboutMe = {
  firstName: "Jasfer",
  lastName: "Monton",
  inf: "Monton",
};

export const socials = [
  {
    url: "https://www.facebook.com/profile.php?id=61578113625007",
    label: "Facebook",
  },
  { url: "ig", label: "Instagram" },
  { url: "github", label: "GitHub" },
];

export const techStacks = [
  { label: "HTML", icon: <RiHtml5Fill color="#E44D26" /> },
  { label: "CSS", icon: <RiCss3Fill color="#264DE4" /> },
  { label: "JavaScript", icon: <RiJavascriptFill color="yellow" /> },
  { label: "React JS", icon: <RiReactjsFill color="skyblue" /> },
  { label: "Next JS", icon: <RiNextjsFill /> },
  { label: "Node JS", icon: <RiNodejsFill color="green" /> },
  { label: "Express", icon: <SiExpress /> },
  { label: "MongoDB", icon: <SiMongodb color="green" /> },
  { label: "Firebase", icon: <RiFirebaseFill color="orange" /> },
  { label: "MySQL", icon: <SiMysql color="#00758F" /> },
  { label: "PHP", icon: <RiPhpFill color="#8892BF" /> },
  { label: "Laravel", icon: <SiLaravel color="red" /> },
  { label: "Tailwind CSS", icon: <RiTailwindCssFill color="dodgerblue" /> },
  { label: "Bootstrap", icon: <RiBootstrapFill color="#7952B3" /> },
  { label: "Git", icon: <SiGit color="#F05033" /> },
  { label: "GitHub", icon: <RiGithubFill /> },
  { label: "Livewire", icon: <SiLivewire color="pink" /> },
];

export const projects = [
  {
    image: "/smart-attend.png",
    title: "SmartAttend",
    desc: "A web-based QR code attendance scanner designed to streamline and automate the process of tracking attendance. Users scan unique QR codes to mark their presence, which is then securely recorded in a database. Built with modern web technologies, the system ensures accuracy, reduces manual errors, and saves time for both administrators and attendees. Features may include real-time scanning, secure validation, timestamp logging, and an admin dashboard for monitoring and exporting attendance records.",
    stacks: [
      techStacks[11],
      techStacks[3],
      techStacks[10],
      techStacks[9],
      techStacks[13],
    ],
  },
  {
    image: "/cashya.png",
    title: "CashYa",
    desc: "A secure and user-friendly banking web application that allows users to manage their accounts, perform transactions, and access a variety of financial services online. Built with modern web technologies, it features account balance management, fund transfers, transaction history, and bill payments. Strong encryption protocols and multi-factor authentication ensure top-tier security, providing a seamless and safe banking experience directly in the browser.",
    stacks: [techStacks[3], techStacks[2], techStacks[8]],
  },
  {
    image: "/not-gpt.png",
    title: "NotGPT",
    desc: "A web-based AI application that integrates AI APIs to deliver intelligent and dynamic functionalities. Developed with modern web technologies, it communicates with AI-powered services to process data, generate insights, and elevate the overall user experience.",
    stacks: [techStacks[2], techStacks[3], techStacks[5], techStacks[6]],
  },
  {
    image: "/soulat.png",
    title: "Soulat",
    desc: "This project is a full-featured blog web application designed for writers, content creators, and developers who want a clean and modern platform to publish and manage articles. Built with a focus on simplicity, readability, and user experience, the app allows users to create, edit, and delete blog posts with ease.",
    stacks: [
      techStacks[11],
      techStacks[16],
      techStacks[10],
      techStacks[9],
      techStacks[12],
    ],
  },
  {
    image: "/chatmo.png",
    title: "chatMo",
    desc: "chatMo is a real-time messaging web application that connects users from around the world in public and private chat rooms. Designed with speed, security, and scalability in mind, the app allows users to communicate instantly—whether for socializing, collaboration, or community-building.",
    stacks: [
      techStacks[7],
      techStacks[6],
      techStacks[5],
      techStacks[3],
      techStacks[12],
    ],
  },
  {
    image: "/mesids.png",
    title: "Mesids",
    desc: "A privacy-first anonymous messaging web application that allows users to send and receive messages without revealing their identity. The platform is designed to encourage open, honest, and unfiltered communication in a secure and judgment-free environment.",
    stacks: [techStacks[11], techStacks[10], techStacks[9], techStacks[12]],
  },
];
