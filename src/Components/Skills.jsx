import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { techStacks } from "../../constants";
import Badge from "./ui/Badge";
import Blob from "./ui/Blob";

const Skills = ({ setActive }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActive("skills");
  }, [inView]);

  return (
    <section
      id="skills"
      ref={ref}
      className="h-full flex flex-col items-center justify-center relative font-outfit"
    >
      {/* <Blob top={200} start={500} size={500} opacity={0.3} /> */}

      <div className="flex text-center flex-col lg:mb-8 mb-4">
        <p className="uppercase text-white/70 md:text-[16px] text-xs">
          My Skills
        </p>
        <h3 className="title text-glow">
          The Secret{" "}
          <span className="gradient-violet nyght-serif-italic bg-clip-text text-transparent">
            Sauce
          </span>
        </h3>
      </div>

      <div className="flex items-center justify-center md:gap-2 gap-1 flex-wrap max-w-[90%] md:max-w-[50%]">
        {techStacks.map(({ icon, label }) => (
          <Badge key={label} icon={icon} label={label} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
