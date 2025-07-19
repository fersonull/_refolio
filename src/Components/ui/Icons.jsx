import React from "react";

const Icons = ({ icon, label }) => {
  return (
    <div className="font-outfit text-sm px-3 py-1 rounded-full border-2 border-white/30 flex items-center justify-center gap-2 hover:text-glow">
      {icon} <span>{label}</span>
    </div>
  );
};

export default Icons;
