import React from "react";
import TruncatedText from "./TruncatedText";

const ProjectCard = ({ title, desc }) => {
  return (
    <div className="bg-transparent backdrop-blur-md rounded-xl p-4 font-outfit flex lg:flex-col gap-5 min-h-[14rem]">
      <div className="w-48 bg-yellow-200 lg:w-full h-full overflow-hidden rounded-lg">
        <img src="/ako3.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col">
        <span className="text-xl font-bold mb-2">{title}</span>
        <TruncatedText className="text-white/70">{desc}</TruncatedText>
      </div>
    </div>
  );
};

export default ProjectCard;
