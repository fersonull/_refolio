import React from "react";

const Icons = ({ icon, label }) => {
  return (
    <div className="font-outfit bg-white/10 backdrop-blur-sm md:text-sm text-xs px-3 py-1 rounded-full border-2 border-white/20 flex items-center justify-center gap-2 hover:text-glow">
      {icon} <span>{label}</span>
    </div>
  );
};

export default Icons;
