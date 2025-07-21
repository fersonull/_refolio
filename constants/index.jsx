import {
  RiJavascriptFill,
  RiPhpFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiBootstrapFill,
  RiNextjsFill,
} from "react-icons/ri";
import {
  SiLaravel,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
} from "react-icons/si";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

export const aboutMe = {
  firstName: "Jasfer",
  lastName: "Monton",
  inf: "Monton",
};

export const techStacks = [
  { label: "JavaScript", icon: <RiJavascriptFill color="yellow" /> },
  { label: "React JS", icon: <RiReactjsFill color="skyblue" /> },
  { label: "Next JS", icon: <RiNextjsFill /> },
  { label: "Node JS", icon: <RiNodejsFill color="green" /> },
  { label: "Express", icon: <SiExpress /> },
  { label: "MongoDB", icon: <SiMongodb color="green" /> },
  { label: "MySQL", icon: <SiMysql color="#00758F" /> },
  { label: "PHP", icon: <RiPhpFill color="blue" /> },
  { label: "Laravel", icon: <SiLaravel color="red" /> },
  { label: "Tailwind CSS", icon: <RiTailwindCssFill color="dodgerblue" /> },
  { label: "Bootstrap", icon: <RiBootstrapFill color="#00ff" /> },
  { label: "Git", icon: <SiGit color="#F05033" /> },
];

export const projects = [
  {
    title: "CashYa",
    desc: "This project is a secure and user-friendly banking web application that allows users to manage their accounts, perform transactions, and access various financial services online. Built with modern web technologies, it integrates features such as account balance management, fund transfers, transaction history, and bill payments. The application ensures top-notch security using encryption protocols and multi-factor authentication, providing users with a seamless and safe banking experience from the comfort of their browser.",
  },
  {
    title: "NotGPT",
    desc: "This project is a web-based AI application that integrates AI APIs to deliver smart and dynamic functionalities. Built using modern web technologies, it interacts with AI-powered services via APIs to process data, generate insights, and enhance user experience.",
  },
  {
    title: "Mesids",
    desc: "This project is an anonymous messaging web application that allows users to send and receive messages without revealing their identity. Designed with privacy in mind, it utilizes end-to-end encryption to ensure all conversations remain secure and confidential. Users can communicate freely without any personal information being linked to their activity. Features may include real-time messaging and optional message expiration or self-destruct functionality. This project prioritizes both privacy and a seamless user experience, creating a safe space for open communication",
  },
];

export const item = {
  frameworks: [{}],
};
