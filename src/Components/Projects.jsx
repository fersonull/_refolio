import React, { useEffect } from "react";
import { projects } from "../../constants";
import { useInView } from "react-intersection-observer";
import GradientText from "./ui/GradientText";
import ColoredText from "./ui/ColoredText";
import ProjectCard from "./ui/ProjectCard";

const Projects = ({ setActive }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActive("projects");
  }, [inView]);

  return (
    <section
      id="projects"
      ref={ref}
      className="h-full flex flex-col items-center justify-center"
    >
      <div className="mb-14 text-center">
        <p className="font-outfit uppercase text-md font-medium text-white/70 mb-4">
          Projects
        </p>
        <span className="font-outfit title text-glow">
          Featured{" "}
          <GradientText className="inline gradient-violet">
            Projects
          </GradientText>
        </span>
      </div>

      <div className="grid lg:grid-cols-3 lg:gap-10 w-full px-10">
        {projects.map(({ title, desc }, idx) => (
          <ProjectCard key={idx} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
