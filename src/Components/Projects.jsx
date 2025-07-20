import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Projects = ({ setActive }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActive("projects");
  }, [inView]);

  return (
    <section
      id="projects"
      ref={ref}
      className="h-full flex items-center justify-center"
    >
        
    </section>
  );
};

export default Projects;
