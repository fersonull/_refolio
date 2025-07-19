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
  { id: "", label: "Home" },
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

export const item = {
  frameworks: [{}],
};
