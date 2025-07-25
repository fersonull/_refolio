import React, { useEffect } from "react";
import { projects } from "../../constants";
import { useInView } from "react-intersection-observer";
import GradientText from "./ui/GradientText";
import { RiArrowRightBoxFill } from "react-icons/ri";
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
      className="h-full flex flex-col items-center justify-center relative"
    >
      {/* <Blob top={-300} start={500} size={500} opacity={0.3} /> */}
      <div className="lg:mb-14 mb-7 text-center">
        <p className="font-outfit uppercase text-md font-medium text-white/70 md:mb-4">
          Projects
        </p>
        <span className="font-outfit title text-glow text-3xl">
          Featured{" "}
          <GradientText className="inline gradient-violet">
            Projects
          </GradientText>
        </span>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-10 w-full px-10">
        {projects.map(({ image, title, desc, stacks }, idx) => (
          <ProjectCard
            img={image}
            key={idx}
            title={title}
            desc={desc}
            stacks={stacks}
          />
        ))}
      </div>

      <button className="font-outfit hover:text-glow mt-10 flex items-center justify-center gap-2">
        <span>See all projects</span>
        <RiArrowRightBoxFill size={20} />
      </button>
    </section>
  );
};

export default Projects;
