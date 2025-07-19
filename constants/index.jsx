import {
  RiJavascriptFill,
  RiPhpFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiBootstrapFill,
} from "react-icons/ri";
import { SiLaravel, SiExpress, SiMongodb } from "react-icons/si";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

export const techStacks = [
  { label: "JavaScript", icon: <RiJavascriptFill color="yellow" /> },
  { label: "React JS", icon: <RiReactjsFill color="skyblue" /> },
  { label: "Node JS", icon: <RiNodejsFill color="green" /> },
  { label: "Express", icon: <SiExpress /> },
  { label: "PHP", icon: <RiPhpFill color="blue" /> },
  { label: "Laravel", icon: <SiLaravel color="red" /> },
  { label: "Tailwind CSS", icon: <RiTailwindCssFill color="dodgerblue" /> },
  { label: "Bootstrap", icon: <RiBootstrapFill color="#00ff" /> },
];

export const item = {
  frameworks: [{}],
};
